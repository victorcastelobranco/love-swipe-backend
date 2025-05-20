const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
console.log("🧪 DEBUG: userController.getMe =", userController.getMe);
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const auth = require('../middleware/auth'); //
console.log("🧪 DEBUG: auth =", auth);
const completeProfile = require('../middleware/completeProfile');
console.log("🧪 DEBUG: completeProfile =", completeProfile);

// Create a new user (signup)
router.post('/signup', userController.signup);

// Logging in
router.post('/login', userController.login);

// Current user info
router.get('/me', auth(), userController.getMe);

// Update profile
router.put('/update', auth(), userController.updateProfile);

// Change password
router.put('/change-password', auth(), userController.changePassword);

// Set preferences
router.put('/preferences', auth(), userController.updatePreferences);

// ✅ GET preferences (used to decide filtering)
router.get('/preferences', auth(), userController.getPreferences);

// ✅ Get user based on preferences
router.get('/preference', auth(), userController.getUserByPreference);

// ✅ Get a random user (if no prefs)
router.get('/random', auth(), completeProfile, userController.getRandomUser);

// Upgrade to premium
router.post('/upgrade', auth(), async (req, res) => {
  try {
    await prisma.user.update({
      where: { id: req.user.id },
      data: { isPremium: true }
    });
    res.json({ message: 'You are now premium!' });
  } catch (err) {
    console.error("❌ Upgrade error:", err);
    res.status(500).json({ error: 'Upgrade failed' });
  }
});


// 👇 LAST: Get user by ID — must be last or it will catch everything!
router.get('/:id', auth(), completeProfile, userController.getUserById);


module.exports = router;