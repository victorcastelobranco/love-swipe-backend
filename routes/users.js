const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// Create a new user (signup)
router.post('/signup', userController.signup);

// logging in
router.post('/login', userController.login);

//protected session route of the user
router.get('/me', auth, userController.getMe);


router.put('/update', auth, userController.updateProfile);


module.exports = router;