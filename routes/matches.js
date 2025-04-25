const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const matchController = require('../controllers/matchesController');

router.post('/', auth, matchController.matchUser);   // 🔁 Like someone
router.get('/', auth, matchController.getMatches);   // 🔍 Get mutual matches


router.get('/test', (req, res) => {
    res.send("✅ Matches router is working");
  });

  
module.exports = router;

