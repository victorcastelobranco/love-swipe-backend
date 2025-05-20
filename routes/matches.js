const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const matchController = require('../controllers/matchesController');
const completeProfile = require('../middleware/completeProfile');

// Match & swipe routes
router.post('/', auth(), completeProfile, matchController.matchUser);
router.post('/skip/:skippedUserId', auth(), matchController.skipUser);
router.get('/', auth(), completeProfile, matchController.getMatches);

// Test route
router.get('/test', (req, res) => {
  res.send("✅ Matches router is working");
});

module.exports = router;

