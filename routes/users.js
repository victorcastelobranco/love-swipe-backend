const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const auth = require('../middleware/auth');
const completeProfile = require('../middleware/completeProfile');

// Create a new user (signup)
router.post('/signup', userController.signup);

// Logging in
router.post('/login', userController.login);

// Protected session route of the user
router.get('/me', auth(), userController.getMe); // <-- ✅ parentheses!

// Update profile
router.put('/update', auth(), userController.updateProfile);

// ✅ New: Get random user
router.get('/random', auth(), completeProfile, userController.getRandomUser);

// Get another user's public profile
router.get('/:id', auth(), completeProfile, userController.getUserById);

router.put('/preferences', auth(), userController.updatePreferences);

router.put('/change-password', auth(), userController.changePassword);

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

module.exports = router;