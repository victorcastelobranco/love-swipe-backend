const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Step 1: Redirect to Google login
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Step 2: Handle Google callback
router.get('/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
    session: false
  }),
  async (req, res) => {
    const user = req.user;

    if (!user) {
      return res.redirect('http://localhost:8080/login?error=oauth_failed');
    }

    const token = generateJWT(user);

    // Check if profile is complete (birth and gender exist)
    const dbUser = await prisma.user.findUnique({ where: { id: user.id } });
    const isProfileComplete =
    dbUser.birth &&
    dbUser.gender &&
    dbUser.bio &&
    dbUser.location &&
    dbUser.interests;

    const redirectUrl = isProfileComplete
      ? 'http://localhost:8080/home'
      : 'http://localhost:8080/complete-profile';

      const finalRedirect = `http://localhost:8080/oauth-success?token=${token}&userId=${user.id}&profileComplete=${isProfileComplete}`;
      res.redirect(finalRedirect);
  }
);

// 🔐 Helper to generate JWT
function generateJWT(user) {
  return jwt.sign(
    { id: user.id, email: user.email, role: 'user' },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
}

module.exports = router;