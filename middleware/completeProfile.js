const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async function (req, res, next) {
  try {
    const userId = req.user.id;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        username: true,
        gender: true,
        birth: true
      }
    });

    console.log('🧠 Profile check:', user);

    if (!user || !user.username?.trim() || !user.gender || !user.birth) {
      return res.status(403).json({ error: 'Profile is incomplete. Please update your profile.' });
    }

    next();
  } catch (err) {
    console.error('❌ completeProfile error:', err);
    res.status(500).json({ error: 'Profile check failed.' });
  }
};