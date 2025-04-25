const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


//post matches
exports.matchUser = async (req, res) => {
  const { likedUserId } = req.body;
  const currentUserId = req.user.id;

  console.log("✅ matchUser endpoint hit");
  console.log("➡️  Liking userId:", req.user.id, "→", req.body.likedUserId);


  if (!likedUserId) {
    return res.status(400).json({ error: "Missing likedUserId" });
  }

  if (likedUserId === currentUserId) {
    return res.status(400).json({ error: "You cannot match with yourself" });
  }

  try {
    const existingLike = await prisma.matches.findFirst({
      where: {
        user1Id: likedUserId,
        user2Id: currentUserId
      }
    });

    if (existingLike) {
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
      await prisma.matches.create({
        data: {
          user1Id: currentUserId,
          user2Id: likedUserId
        }
      });

      return res.status(200).json({ message: "User liked!" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Match failed" });
  }
};


//get matches
exports.getMatches = async (req, res) => {
  const currentUserId = req.user.id;

  try {
    console.log("🔍 Fetching matches for user:", currentUserId);

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
          select: {
            id: true,
            username: true,
            email: true,
            profilePicture: true
          }
        },
        user_matches_user2IdTouser: {
          select: {
            id: true,
            username: true,
            email: true,
            profilePicture: true
          }
        }
      }
    });

    const matchedUsers = [];
    const seenUserIds = new Set();
    
    matches.forEach(match => {
      const isUser1 = match.user1Id === currentUserId;
      const matchedUser = isUser1
        ? match.user_matches_user2IdTouser
        : match.user_matches_user1IdTouser;
    
      if (!seenUserIds.has(matchedUser.id)) {
        seenUserIds.add(matchedUser.id);
        matchedUsers.push(matchedUser);
      }
    });

    res.status(200).json({ matches: matchedUsers });
  } catch (err) {
    console.error("❌ Error fetching matches:", err);
    res.status(500).json({ error: 'Failed to fetch matches' });
  }
};