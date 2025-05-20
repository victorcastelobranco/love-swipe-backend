const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// This defines the login route your frontend expects
router.post('/login', userController.login);

module.exports = router;