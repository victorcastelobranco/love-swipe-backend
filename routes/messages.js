const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); // this is correct
const completeProfile = require('../middleware/completeProfile');
const messagesController = require('../controllers/messagesController');

// 🔥 Send a message (only if profile is complete)
router.post('/:receiverId', auth(), completeProfile, messagesController.sendMessage);

// 🔥 Get chat messages
router.get('/:userId', auth(), completeProfile, messagesController.getMessages);

module.exports = router;