const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

//SIGNING UP
exports.signup = async (req, res) => {
  try {
    const { email, username, password, birth, gender } = req.body;

    if (!email || !username || !password || !birth || !gender) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // 🔐 Make sure you're hashing BEFORE saving
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("🔐 Hashed password:", hashedPassword);

    const user = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword, // 👈 This must be the hashed one
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
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // 🔐 Compare entered password with stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};
  