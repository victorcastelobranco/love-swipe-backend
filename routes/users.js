const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a new user (signup)
router.post('/signup', userController.signup);

// logging in
router.post('/login', userController.login);


module.exports = router;