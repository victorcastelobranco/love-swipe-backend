const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// send a message
exports.sendMessage = async (req, res) => {
  const receiverId = parseInt(req.params.receiverId);
  const { content } = req.body;
  const senderId = req.user.id;

  console.log('📨 senderId:', senderId);
  console.log('📨 receiverId:', receiverId);
  console.log('📨 content:', content);

  if (!receiverId || !content) {
    return res.status(400).json({ error: "Missing receiverId or content" });
  }

  //ignore if one of the users is blocked
  try {
    const blocked = await prisma.block.findFirst({
      where: {
        OR: [
          { blockerId: senderId, blockedId: receiverId },
          { blockerId: receiverId, blockedId: senderId }
        ]
      }
    });

    if (blocked) {
      console.log('⛔ Blocked user, cannot send message');
      return res.status(403).json({ error: 'Messaging is blocked between these users.' });
    }

    //check if they are mutual liking each other
    const match = await prisma.matches.findFirst({
      where: {
        isMutual: true,
        OR: [
          { user1Id: senderId, user2Id: receiverId },
          { user1Id: receiverId, user2Id: senderId }
        ]
      }
    });

    if (!match) {
      console.log('❌ Not matched');
      return res.status(403).json({ error: "You are not matched with this user." });
    }

    const message = await prisma.message.create({
      data: {
        senderId,
        receiverId,
        content
      }
    });

    console.log('✅ Message stored:', message);
    res.status(201).json({ message: "Message sent!", data: message });
  } catch (err) {
    console.error("❌ Error sending message:", err);
    res.status(500).json({ error: "Failed to send message" });
  }
};

// get conversation between two users
exports.getMessages = async (req, res) => {
  const { userId } = req.params; // person you're chatting with
  const currentUserId = req.user.id;

  try {
    // block check: current user blocked the other or was blocked by them
    const blocked = await prisma.block.findFirst({
      where: {
        OR: [
          { blockerId: currentUserId, blockedId: parseInt(userId) },
          { blockerId: parseInt(userId), blockedId: currentUserId }
        ]
      }
    });

    if (blocked) {
      return res.status(403).json({ error: 'Chat is blocked.' });
    }

    const messages = await prisma.message.findMany({
      where: {
        OR: [
          { senderId: currentUserId, receiverId: parseInt(userId) },
          { senderId: parseInt(userId), receiverId: currentUserId }
        ]
      },
      orderBy: { createdAt: 'asc' }
    });

    res.status(200).json({ messages });
  } catch (err) {
    console.error("❌ Error fetching messages:", err);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};