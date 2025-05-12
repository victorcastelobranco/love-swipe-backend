const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
const { v4: uuidv4 } = require('uuid');

//SIGNING UP
exports.signup = async (req, res) => {
  try {
    const { email, username, password, birth, gender, profilePicture } = req.body;
    //all fields must be filled
    if (!email || !username || !password || !birth || !gender) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    //check regex for valid email
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }
    //check same email or not
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("🔐 Hashed password:", hashedPassword);

    const user = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword, //storing the hashed password created and not the plain one
        birth: new Date(birth),
        gender,
        verified: false,
        isPremium: false,
        profilePicture  // ✅ add this
      }
    });

      const token = uuidv4(); // ✅ generate the token
      const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
      
      await prisma.verificationtoken.create({
        data: {
          token,
          userId: user.id,
          expiresAt
        }
      });

      // await resend.emails.send({
      //   from: 'onboarding@resend.dev',  // or your verified sender domain
      //   to: email, // ✅ actual user's email
      //   subject: 'Verify Your LoveSwipe Account',
      //   html: `
      //     <p>Hi ${username},</p>
      //     <p>Thanks for signing up! Click the link below to verify your account:</p>
      //     <p><a href="http://localhost:8080/verify-email?token=${token}">Verify Email</a></p>
      //     <p>This link will expire in 1 hour.</p>
      //   `
      // });

    res.status(201).json({ message: 'Account created. Check your email to verify.' });
  } catch (err) {
    console.error('❌ Signup error:', err);
    res.status(500).json({ error: 'Signup failed.' });
  }
};


//LOGIN IN
exports.login = async (req, res) => {
  const { email, password } = req.body;

  console.log('🛠️ Trying login with:', email);

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    // First, check if user is an Admin
    const admin = await prisma.admin.findUnique({
      where: { email }
    });

    console.log('🔎 Admin found:', admin);

    if (admin) {
      const isMatch = await bcrypt.compare(password, admin.password);

      if (!isMatch) {
        return res.status(401).json({ error: "Incorrect password" });
      }

      const token = jwt.sign(
        { id: admin.id, email: admin.email, role: "admin" },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
      );

      return res.status(200).json({
        message: "Admin login successful",
        token,
        user: {
          id: admin.id,
          email: admin.email,
          role: "admin"
        }
      });
    }

    // If not an Admin, check normal User
    const user = await prisma.user.findUnique({
      where: { email }
    });

    console.log('🔎 User found:', user);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // if (!user.verified) {
    //   return res.status(403).json({ error: 'Please verify your email before logging in.' });
    // }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: "user" },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.status(200).json({ message: "User login successful", token, user });

  } catch (err) {
    console.error('❌ Login error:', err);
    res.status(500).json({ error: "Server error during login" });
  }
};

exports.getMe = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        username: true,
        email: true,
        gender: true,
        birth: true,
        profilePicture: true,
        isPremium: true,
        bio: true,
        interests: true,
        location: true
      }
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch user profile' });
  }
};
  
exports.updateProfile = async (req, res) => {
  const userId = req.user.id;
  const updates = req.body;

  try {
    // Fetch current user
    const currentUser = await prisma.user.findUnique({ where: { id: userId } });

    if (!currentUser) {
      return res.status(404).json({ error: "User not found" });
    }

    // Only update fields that are provided (not null/undefined/empty string)
    const dataToUpdate = {
      username: updates.username?.trim() || currentUser.username,
      profilePicture: updates.profilePicture?.trim() || currentUser.profilePicture,
      birth: updates.birth ? new Date(updates.birth) : currentUser.birth,
      gender: updates.gender || currentUser.gender,
      bio: updates.bio?.trim() || currentUser.bio,
      interests: updates.interests?.trim() || currentUser.interests,
      location: updates.location?.trim() || currentUser.location
    };

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: dataToUpdate
    });

    res.status(200).json({ message: 'Profile updated', user: updatedUser });
  } catch (err) {
    console.error("❌ Failed to update profile:", err);
    res.status(500).json({ error: "Update failed" });
  }
};

exports.getRandomUser = async (req, res) => {
  const currentUserId = req.user.id;

  try {
    const [randomUser] = await prisma.$queryRaw`
      SELECT * FROM user
      WHERE id != ${currentUserId}
      AND id NOT IN (
        SELECT user2Id FROM matches WHERE user1Id = ${currentUserId}
        UNION
        SELECT user1Id FROM matches WHERE user2Id = ${currentUserId}
      )
      ORDER BY RAND()
      LIMIT 1
    `;

    if (!randomUser) {
      return res.status(404).json({ error: 'No more users to swipe.' });
    }

    res.json({ user: randomUser });
  } catch (err) {
    console.error('❌ Error fetching random user:', err);
    res.status(500).json({ error: 'Failed to fetch random user.' });
  }
};

// ➡️ Fetch another user's public profile
exports.getUserById = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(req.params.id) },
      select: {
        id: true,
        username: true,
        profilePicture: true,
        birth: true,
        bio: true,
        interests: true,
        location: true // ✅ Add this line
      }
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (err) {
    console.error('❌ Error fetching user by ID:', err);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};

// ➡️ Save or update user preferences
exports.updatePreferences = async (req, res) => {
  const { preferredGender, preferredLocation, minAge, maxAge } = req.body;

  try {
    const preferences = await prisma.userpreferences.upsert({   // <-- lowercase here!
      where: { userId: req.user.id },
      update: {
        preferredGender,
        preferredLocation,
        minAge: minAge ? parseInt(minAge) : null,
        maxAge: maxAge ? parseInt(maxAge) : null
      },
      create: {
        userId: req.user.id,
        preferredGender,
        preferredLocation,
        minAge: minAge ? parseInt(minAge) : null,
        maxAge: maxAge ? parseInt(maxAge) : null
      }
    });

    res.status(200).json({ message: "Preferences saved!", preferences });
  } catch (err) {
    console.error("❌ Error saving preferences:", err);
    res.status(500).json({ error: "Failed to save preferences" });
  }
};