const express = require('express');
const router = express.Router();
const { requestPasswordReset, resetPassword } = require('../controllers/resetPasswordController');

router.post('/request', requestPasswordReset); // /api/password/request
router.post('/reset', resetPassword);          // /api/password/reset


module.exports = router;