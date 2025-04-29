const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//SIGNING UP
exports.signup = async (req, res) => {
  try {
    const { email, username, password, birth, gender, profilePicture } = req.body;

    if (!email || !username || !password || !birth || !gender) {
      return res.status(400).json({ error: "Missing required fields" });
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

    res.status(201).json({ message: "User created", user });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
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

      return res.status(200).json({ message: "Admin login successful", token });
    }

    // If not an Admin, check normal User
    const user = await prisma.user.findUnique({
      where: { email }
    });

    console.log('🔎 User found:', user);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: "user" },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.status(200).json({ message: "User login successful", token });

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
        email: true,
        username: true,
        birth: true,
        gender: true,
        isPremium: true,
        verified: true,
        profilePicture: true  // ✅ add this!
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
  const { bio, location, interests, profilePicture, gender } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id: req.user.id },
      data: {
        bio,
        location,
        interests,
        profilePicture,
        gender
      },
      select: {
        id: true,
        email: true,
        username: true,
        bio: true,
        location: true,
        interests: true,
        profilePicture: true,
        gender: true
      }
    });

    res.status(200).json({ message: 'Profile updated', user: updatedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update profile' });
  }
};

// ✅ New: Get a random user you haven't liked yet
exports.getRandomUser = async (req, res) => {
  const currentUserId = req.user.id;

  try {
    // Find IDs of users you already liked
    const likedUsers = await prisma.matches.findMany({
      where: { user1Id: currentUserId },
      select: { user2Id: true }
    });

    const likedIds = likedUsers.map(like => like.user2Id);

    // Find a random user you haven't liked and not yourself
    const randomUser = await prisma.user.findFirst({
      where: {
        id: {
          notIn: [currentUserId, ...likedIds]
        }
      },
      orderBy: {
        // MySQL doesn't support true random order easily, we can randomize on frontend if needed
        id: 'asc'
      }
    });

    if (!randomUser) {
      return res.status(404).json({ message: 'No more users to swipe!' });
    }

    res.status(200).json({ user: randomUser });
  } catch (err) {
    console.error('❌ Error fetching random user:', err);
    res.status(500).json({ error: 'Failed to fetch random user' });
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
        profilePicture: true, // ✅ ADD THIS LINE
        birth: true,
        bio: true,
        interests: true
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