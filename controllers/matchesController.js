const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// POST /api/matches → Like another user
exports.matchUser = async (req, res) => {
  const currentUserId = req.user.id;
  const { likedUserId } = req.body;

  console.log("💡 matchUser triggered by userId:", currentUserId, "liking:", likedUserId);

  if (!likedUserId || likedUserId === currentUserId) {
    return res.status(400).json({ error: "Invalid user" });
  }

  try {
    // Count the number of matches today for the current user based on 'timestamp'
    const today = new Date();
    today.setHours(0, 0, 0, 0);  // Set the time to midnight for accurate comparison

    const swipeCount = await prisma.matches.count({
      where: {
        user1Id: currentUserId,
        timestamp: {
          gte: today  // Ensure we're counting only today's matches
        }
      }
    });

    console.log('Swipe count:', swipeCount);  // Log the swipe count

    if (swipeCount >= 10) {
      return res.status(403).json({ error: 'Swipe limit reached for today.' });
    }

    // Check if the liked user already liked the current user
    const existingLike = await prisma.matches.findFirst({
      where: {
        user1Id: likedUserId,  // The user who liked the current user
        user2Id: currentUserId // The current user who is being liked
      }
    });

    if (existingLike) {
      // It's a match!
      console.log('🎉 Match found!');
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
      console.log('👍 Liked but no match yet');
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
    // Step 1: Fetch all mutual matches
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

    // Step 2: Collect the matched users (exclude self)
    const otherUsers = matches.map(match => {
      const isUser1 = match.user1Id === currentUserId;
      return isUser1 ? match.user_matches_user2IdTouser : match.user_matches_user1IdTouser;
    });

    // Step 3: Remove duplicates by ID
    const seenIds = new Set();
    const uniqueUsers = [];

    for (const user of otherUsers) {
      if (!seenIds.has(user.id)) {
        seenIds.add(user.id);
        uniqueUsers.push(user);
      }
    }

    // Step 4: Get blocked user IDs (blocked by current user or who blocked current user)
    const blockedRelations = await prisma.block.findMany({
      where: {
        OR: [
          { blockerId: currentUserId },
          { blockedId: currentUserId }
        ]
      }
    });

    const blockedIds = new Set();
    blockedRelations.forEach(rel => {
      if (rel.blockerId === currentUserId) {
        blockedIds.add(rel.blockedId); // You blocked them
      } else {
        blockedIds.add(rel.blockerId); // They blocked you
      }
    });

    // Step 5: Filter out blocked users from the matches list
    const filteredUsers = uniqueUsers.filter(user => !blockedIds.has(user.id));

    // ✅ Respond
    res.status(200).json({ matches: filteredUsers });
  } catch (err) {
    console.error("❌ Error fetching matches:", err);
    res.status(500).json({ error: "Failed to fetch matches" });
  }
};