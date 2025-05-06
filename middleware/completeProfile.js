const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async function (req, res, next) {
  try {
    const userId = req.user.id;
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { birth: true, gender: true }
    });

    if (!user || !user.birth || !user.gender) {
      return res.status(403).json({ error: 'Profile is incomplete. Please update your profile.' });
    }

    next();
  } catch (err) {
    console.error('❌ Profile check failed:', err);
    res.status(500).json({ error: 'Failed to verify profile completeness.' });
  }
};