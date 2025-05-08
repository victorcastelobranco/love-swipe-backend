const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/verify-email', async (req, res) => {
  const { token } = req.query;

  try {
    const record = await prisma.verificationToken.findUnique({ where: { token } });

    if (!record || new Date() > record.expiresAt) {
      return res.status(400).send('Invalid or expired verification token.');
    }

    await prisma.user.update({
      where: { id: record.userId },
      data: { verified: true }
    });

    await prisma.verificationToken.delete({ where: { token } });

    return res.redirect('http://localhost:8080/login?verified=1');
  } catch (err) {
    console.error('❌ Email verification error:', err);
    res.status(500).send('Internal server error.');
  }
});

module.exports = router;