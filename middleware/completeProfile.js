const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async function (req, res, next) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        birth: true,
        gender: true,
        username: true
      }
    });

    if (!user || !user.birth || !user.gender || !user.username?.trim()) {
      return res.status(403).json({ error: 'Profile is incomplete. Please update your profile.' });
    }
    next();
  } catch (err) {
    console.error('❌ Profile check failed:', err);
    res.status(500).json({ error: 'Failed to verify profile completeness.' });
  }
};