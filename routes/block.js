const express = require('express');
const router = express.Router();
const { blockUser } = require('../controllers/blockController');
const authenticate = require('../middleware/auth'); // your JWT middleware

router.post('/', authenticate, blockUser);

module.exports = router;