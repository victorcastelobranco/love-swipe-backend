const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
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

module.exports = router;