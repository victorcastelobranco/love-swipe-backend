const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.blockUser = async (req, res) => {
  const blockerId = req.user.id;
  const { blockedId } = req.body;

  if (blockerId === blockedId) {
    return res.status(400).json({ error: "You can't block yourself." });
  }

  try {
    await prisma.block.create({
      data: { blockerId, blockedId }
    });

    res.status(200).json({ message: 'User blocked successfully.' });
  } catch (err) {
    if (err.code === 'P2002') {
      return res.status(400).json({ error: 'You already blocked this user.' });
    }
    console.error('❌ Block error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};