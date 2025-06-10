const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


//function to block an user
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

//get all users blocked by current user
exports.getBlockedUsers = async (req, res) => {
  try {
    const blocked = await prisma.block.findMany({
      where: { blockerId: req.user.id },
      include: {
        user_block_blockedIdTouser: true
      }
    });

    const users = blocked.map(b => ({
      id: b.user_block_blockedIdTouser.id,
      username: b.user_block_blockedIdTouser.username,
      profilePicture: b.user_block_blockedIdTouser.profilePicture
    }));

    res.json({ blockedUsers: users });
  } catch (err) {
    console.error("❌ Failed to get blocked users:", err);
    res.status(500).json({ error: 'Failed to fetch blocked users.' });
  }
};


//unblock the user from the the logged in user
exports.unblockUser = async (req, res) => {
  const blockerId = req.user.id;
  const { blockedId } = req.body;

  try {
    await prisma.block.delete({
      where: {
        blockerId_blockedId: {
          blockerId,
          blockedId
        }
      }
    });
    res.json({ message: 'User unblocked successfully.' });
  } catch (err) {
    console.error('❌ Unblock error:', err);
    res.status(500).json({ error: 'Failed to unblock user.' });
  }
};