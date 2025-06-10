const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const auth = require('../middleware/auth'); //
const completeProfile = require('../middleware/completeProfile');


//create a new user (signup)
router.post('/signup', userController.signup);

//logging in
router.post('/login', userController.login);

//current user info
router.get('/me', auth(), userController.getMe);

//update profile
router.put('/update', auth(), userController.updateProfile);

//change password
router.put('/change-password', auth(), userController.changePassword);

//set preferences
router.put('/preferences', auth(), userController.updatePreferences);

//get preferences to filter
router.get('/preferences', auth(), userController.getPreferences);

//get user based on preferences
router.get('/preference', auth(), userController.getUserByPreference);

// get a random user (if no prefs)
router.get('/random', auth(), completeProfile, userController.getRandomUser);

//upgrade to premium
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


//LAST: Get user by ID — must be last or it will catch everything!
router.get('/:id', auth(), completeProfile, userController.getUserById);


module.exports = router;