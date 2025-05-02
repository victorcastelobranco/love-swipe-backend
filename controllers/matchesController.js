const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// POST /api/matches → Like another user
exports.matchUser = async (req, res) => {
  const currentUserId = req.user.id;
  const { likedUserId } = req.body;

  console.log("💡 matchUser triggered by userId:", req.user.id, "liking:", req.body.likedUserId);
  
  if (!likedUserId || likedUserId === currentUserId) {
    return res.status(400).json({ error: "Invalid user" });
  }

  try {
    // Check if the liked user already liked the current user
    const existingLike = await prisma.matches.findFirst({
      where: {
        user1Id: likedUserId,
        user2Id: currentUserId
      }
    });

    if (existingLike) {
      // It's a match!
      await prisma.matches.update({
        where: { id: existingLike.id },
        data: { isMutual: true }
      });

      await prisma.matches.create({
        data: {
          user1Id: currentUserId,
          user2Id: likedUserId,
          isMutual: true
        }
      });

      return res.status(200).json({ message: "🎉 It's a match!" });
    } else {
      // Just store the like (not mutual yet)
      await prisma.matches.create({
        data: {
          user1Id: currentUserId,
          user2Id: likedUserId,
          isMutual: false
        }
      });

      return res.status(200).json({ message: "User liked!" });
    }
  } catch (err) {
    console.error("❌ Error matching user:", err);
    res.status(500).json({ error: "Match failed" });
  }
};


// GET /api/matches → Fetch mutual matches
// GET /api/matches → Fetch mutual matches
exports.getMatches = async (req, res) => {
  const currentUserId = req.user.id;

  try {
    const matches = await prisma.matches.findMany({
      where: {
        isMutual: true,
        OR: [
          { user1Id: currentUserId },
          { user2Id: currentUserId }
        ]
      },
      include: {
        user_matches_user1IdTouser: {
          select: { id: true, username: true, profilePicture: true }
        },
        user_matches_user2IdTouser: {
          select: { id: true, username: true, profilePicture: true }
        }
      }
    });

    // Map to matched users (not current user)
    const otherUsers = matches.map(match => {
      const isUser1 = match.user1Id === currentUserId;
      return isUser1 ? match.user_matches_user2IdTouser : match.user_matches_user1IdTouser;
    });

    // 🧹 Remove duplicates by ID
    const uniqueUsers = [];
    const seenIds = new Set();

    for (const user of otherUsers) {
      if (!seenIds.has(user.id)) {
        seenIds.add(user.id);
        uniqueUsers.push(user);
      }
    }

    res.status(200).json({ matches: uniqueUsers });
  } catch (err) {
    console.error("❌ Error fetching matches:", err);
    res.status(500).json({ error: "Failed to fetch matches" });
  }
};