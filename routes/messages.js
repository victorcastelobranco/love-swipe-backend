const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const messagesController = require('../controllers/messagesController');

// 🔥 Send a message
router.post('/', auth, messagesController.sendMessage);

// 🔥 Fetch conversation with a specific user
router.get('/:userId', auth, messagesController.getMessages);

module.exports = router;