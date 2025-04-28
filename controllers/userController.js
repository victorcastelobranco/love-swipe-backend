const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//SIGNING UP
exports.signup = async (req, res) => {
  try {
    const { email, username, password, birth, gender } = req.body;

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
        isPremium: false
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
        verified: true
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