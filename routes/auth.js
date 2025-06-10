const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//jwt auth to login and start session token
router.post('/login', userController.login);

module.exports = router;