const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const auth = require('../middleware/auth'); // ❌ Do not call it here

// Correct usage inside the route:
router.get('/dashboard', auth(), adminController.dashboard);
router.get('/users', auth(), adminController.listUsers);
router.delete('/users/:id', auth(), adminController.deleteUser);

module.exports = router;