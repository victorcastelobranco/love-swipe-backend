const express = require('express');
const router = express.Router();
const passport = require('passport');

// Step 1: Redirect to Google login
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Step 2: Handle Google callback
router.get('/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login', // front-end route
    session: false
  }),
  (req, res) => {
    const token = req.user ? generateJWT(req.user) : null;
    res.redirect(`http://localhost:8080/oauth-success?token=${token}`);
  }
);

const jwt = require('jsonwebtoken');
function generateJWT(user) {
  return jwt.sign(
    { id: user.id, email: user.email, role: 'user' },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
}

module.exports = router;