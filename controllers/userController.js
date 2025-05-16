const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
const nodemailer = require('nodemailer');

// SIGNUP
exports.signup = async (req, res) => {
  try {
    const { email, username, password, birth, gender, profilePicture } = req.body;

    console.log("📥 Incoming signup payload:", req.body);

    if (!email || !username || !password || !birth || !gender) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
        birth: birth ? new Date(birth) : null,
        gender,
        verified: false,
        isPremium: false,
        profilePicture: profilePicture || '',
        profilePictures: profilePicture ? JSON.stringify([profilePicture]) : '[]'
      }
    });

    // ✅ Step: Create a verification token
    const { v4: uuidv4 } = require('uuid');
    const nodemailer = require('nodemailer');

    const token = uuidv4();
    const expiresAt = new Date(Date.now() + 1000 * 60 * 60); // 1 hour

    await prisma.verificationtoken.create({
      data: {
        token,
        userId: user.id,
        expiresAt,
      },
    });

    console.log("✅ Verification token created and saved.");

    const verificationLink = `http://localhost:3000/api/verify-email?token=${token}`;

    // ✅ Email config (adjust for production if needed)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"LoveSwipe" <${process.env.EMAIL_USER}>`,
      to: user.email,
      subject: 'Verify your LoveSwipe account',
      html: `
        <p>Welcome to LoveSwipe, ${user.username}!</p>
        <p>Please verify your email by clicking the link below:</p>
        <a href="${verificationLink}">${verificationLink}</a>
        <p>This link will expire in 1 hour.</p>
      `,
    });

    res.status(201).json({ message: 'Account created! Please check your email to verify your account.' });

  } catch (err) {
    console.error('❌ Signup error:', err);
    res.status(500).json({ error: err.message || 'Signup failed.' });
  }
};

// LOGIN
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const admin = await prisma.admin.findUnique({ where: { email } });
    if (admin) {
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) return res.status(401).json({ error: "Incorrect password" });

      const token = jwt.sign(
        { id: admin.id, email: admin.email, role: "admin" },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
      );

      return res.status(200).json({
        message: "Admin login successful",
        token,
        user: { id: admin.id, email: admin.email, role: "admin" }
      });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Incorrect password" });

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

// GET LOGGED-IN USER
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
        profilePictures: true,
        isPremium: true,
        bio: true,
        interests: true,
        location: true
      }
    });

    if (!user) return res.status(404).json({ error: 'User not found' });

    // ✅ Parse profilePictures if needed
    user.profilePictures = user.profilePictures
      ? JSON.parse(user.profilePictures)
      : [];

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch user profile' });
  }
};

// UPDATE PROFILE
exports.updateProfile = async (req, res) => {
  const userId = req.user.id;
  const updates = req.body;

  try {
    const currentUser = await prisma.user.findUnique({ where: { id: userId } });
    if (!currentUser) return res.status(404).json({ error: "User not found" });

    const pictures = Array.isArray(updates.profilePictures)
      ? updates.profilePictures.filter(p => p && typeof p === 'string' && p.trim() !== '')
      : JSON.parse(currentUser.profilePictures || '[]');

    const dataToUpdate = {
      username: updates.username?.trim() || currentUser.username,
      profilePicture: updates.profilePicture?.trim() || currentUser.profilePicture,
      profilePictures: JSON.stringify(pictures),
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

// GET RANDOM USER
exports.getRandomUser = async (req, res) => {
  const currentUserId = req.user.id;

  try {
    console.log("Fetching random user for user ID:", currentUserId);

    const users = await prisma.$queryRaw`
      SELECT * FROM user
      WHERE id != ${currentUserId}
      AND id NOT IN (
        SELECT user2Id FROM matches WHERE user1Id = ${currentUserId}
      )
      ORDER BY RAND()
      LIMIT 1
    `;

    console.log("Fetched users:", users);

    if (users.length === 0) {
      return res.status(404).json({ error: 'No more users to swipe.' });
    }

    const user = users[0];

    // ✅ FIX: Parse profilePictures if it's a JSON string
    if (user.profilePictures) {
      try {
        user.profilePictures = JSON.parse(user.profilePictures);
      } catch (e) {
        console.warn("⚠️ Could not parse profilePictures:", user.profilePictures);
        user.profilePictures = [];
      }
    } else {
      user.profilePictures = [];
    }

    res.json({ user });
  } catch (err) {
    console.error('❌ Error fetching random user:', err);
    res.status(500).json({ error: 'Failed to fetch random user.' });
  }
};

// GET PUBLIC PROFILE BY ID
exports.getUserById = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(req.params.id) },
      select: {
        id: true,
        username: true,
        profilePicture: true,
        profilePictures: true, // ✅ include it
        birth: true,
        gender: true,
        bio: true,
        interests: true,
        location: true
      }
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // ✅ Parse profilePictures if stored as string
    user.profilePictures = user.profilePictures
      ? JSON.parse(user.profilePictures)
      : [];

    res.json(user);
  } catch (err) {
    console.error('❌ Error fetching user by ID:', err);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};

// CHANGE PASSWORD
exports.changePassword = async (req, res) => {
  const userId = req.user.id;
  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword) {
    return res.status(400).json({ error: 'Both old and new passwords are required.' });
  }

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return res.status(404).json({ error: 'User not found.' });

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Old password is incorrect.' });

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword }
    });

    res.status(200).json({ message: 'Password updated successfully.' });
  } catch (err) {
    console.error('❌ Error changing password:', err);
    res.status(500).json({ error: 'Server error.' });
  }
};

exports.updatePreferences = async (req, res) => {
  const userId = req.user.id;
  let { preferredGender, minAge, maxAge, preferredLocation } = req.body;

  // 🧼 Sanitize and convert input
  minAge = isNaN(parseInt(minAge)) ? null : parseInt(minAge);
  maxAge = isNaN(parseInt(maxAge)) ? null : parseInt(maxAge);
  preferredLocation = preferredLocation?.trim() || null;
  preferredGender = preferredGender?.trim() || null;

  try {
    const updated = await prisma.userpreferences.upsert({
      where: { userId },
      update: {
        preferredGender,
        minAge,
        maxAge,
        preferredLocation
      },
      create: {
        userId,
        preferredGender,
        minAge,
        maxAge,
        preferredLocation
      }
    });

    res.json({ message: 'Preferences saved successfully.', preferences: updated });
  } catch (err) {
    console.error('❌ Error saving preferences:', err);
    res.status(500).json({ error: 'Failed to save preferences.' });
  }
};

exports.getUserByPreference = async (req, res) => {
  const currentUserId = req.user.id;

  try {
    console.log("🔥 getUserByPreference was called by:", currentUserId);

    const preferences = await prisma.userpreferences.findUnique({
      where: { userId: currentUserId }
    });

    if (!preferences) {
      console.warn("⚠️ No preferences found for user:", currentUserId);
      return res.status(400).json({ error: "Preferences not found." });
    }

    const today = new Date();
    const minBirth = preferences.maxAge
      ? new Date(today.getFullYear() - preferences.maxAge, today.getMonth(), today.getDate())
      : null;

    const maxBirth = preferences.minAge
      ? new Date(today.getFullYear() - preferences.minAge, today.getMonth(), today.getDate())
      : null;

    const conditions = [`id != ${currentUserId}`];

    conditions.push(`
      id NOT IN (
        SELECT user2Id FROM matches WHERE user1Id = ${currentUserId}
      )
    `);

    if (preferences.preferredGender) {
      const gender = preferences.preferredGender.toLowerCase();
      conditions.push(`LOWER(gender) = '${gender}'`);
    }

    if (minBirth && maxBirth) {
      conditions.push(`birth BETWEEN '${minBirth.toISOString()}' AND '${maxBirth.toISOString()}'`);
    }

    if (preferences.preferredLocation) {
      const location = preferences.preferredLocation.toLowerCase();
      conditions.push(`LOWER(location) = '${location}'`);
    }

    const query = `
      SELECT * FROM user
      WHERE ${conditions.join(' AND ')}
      ORDER BY RAND()
      LIMIT 1
    `;

    console.log("🧪 Executing SQL query:\n", query);

    const users = await prisma.$queryRawUnsafe(query);

    if (!users.length) {
      return res.status(404).json({ error: 'No matching users found for your preferences.' });
    }

    const user = users[0];

    // Parse profilePictures safely
    try {
      user.profilePictures = JSON.parse(user.profilePictures || '[]');
    } catch {
      user.profilePictures = [];
    }

    res.json({ user });
  } catch (err) {
    console.error('❌ Error in getUserByPreference:', err);
    res.status(500).json({ error: 'Failed to fetch user by preference.' });
  }
};

exports.getPreferences = async (req, res) => {
  try {
    const prefs = await prisma.userpreferences.findUnique({
      where: { userId: req.user.id }
    });

    res.json({ preferences: prefs || {} });
  } catch (err) {
    console.error("❌ Failed to fetch preferences:", err);
    res.status(500).json({ error: "Could not load preferences." });
  }
};