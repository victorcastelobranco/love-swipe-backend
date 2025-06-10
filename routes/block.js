const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  blockUser,
  getBlockedUsers,
  unblockUser
} = require('../controllers/blockController');

//blocking routes
router.post('/', auth(), blockUser);
router.get('/', auth(), getBlockedUsers);
router.delete('/', auth(), unblockUser);

module.exports = router;