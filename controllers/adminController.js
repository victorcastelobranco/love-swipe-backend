const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

//admin registration, not being used
exports.register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await prisma.admin.create({
      data: {
        email,
        password: hashedPassword
      }
    });

    res.status(201).json({ message: "Admin created successfully", admin });
  } catch (err) {
    console.error('❌ Error registering admin:', err);
    res.status(500).json({ error: "Failed to create admin" });
  }
};


//dashboard of admin, here are a list of queries with statistics 
exports.dashboard = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    const totalUsers = users.length;
    const verifiedUsers = users.filter(u => u.verified).length;
    const unverifiedUsers = totalUsers - verifiedUsers;
    const maleUsers = users.filter(u => u.gender === 'male').length;
    const femaleUsers = users.filter(u => u.gender === 'female').length;

    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    const newUsersThisWeek = users.filter(u => new Date(u.createdAt) >= weekAgo).length;

    const totalMatches = await prisma.matches.count();
    const totalMessages = await prisma.message.count();

    res.json({
      totalUsers,
      verifiedUsers,
      unverifiedUsers,
      maleUsers,
      femaleUsers,
      newUsersThisWeek,
      totalMatches,
      totalMessages
    });
  } catch (err) {
    console.error('❌ Dashboard stats error:', err);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
};

//sql query to list all users
exports.listUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        birth: true,
        gender: true,
        isPremium: true,
        verified: true
      }
    });

    res.status(200).json({ users });
  } catch (err) {
    console.error('❌ Error listing users:', err);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

//sql query to delete an user from the database
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    // Check if user exists
    const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Delete user
    await prisma.user.delete({ where: { id: parseInt(id) } });

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error('❌ Error deleting user:', err);
    res.status(500).json({ error: 'Failed to delete user' });
  }
};

