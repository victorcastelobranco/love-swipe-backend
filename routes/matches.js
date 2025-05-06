const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); // 👈 this is a function
const matchController = require('../controllers/matchesController');
const completeProfile = require('../middleware/completeProfile');

router.post('/', auth(), matchController.matchUser);   // ✅ Add ()
router.get('/', auth(), matchController.getMatches);   // ✅ Add ()

router.post('/', auth(), completeProfile, matchController.matchUser);
router.get('/', auth(), completeProfile, matchController.getMatches);

router.get('/test', (req, res) => {
  res.send("✅ Matches router is working");
});

module.exports = router;

