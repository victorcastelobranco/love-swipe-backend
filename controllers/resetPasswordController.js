const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const nodemailer = require('nodemailer'); // custom here, not using utils/sendEmail
const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour from now

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

exports.requestPasswordReset = async (req, res) => {
  console.log("🧪 Controller reached");
  console.log("🧪 Request body:", req.body);
  console.log("🧪 process.env.EMAIL_USER:", process.env.EMAIL_USER);
  const { email } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const token = uuidv4();

    await prisma.passwordresettoken.create({
      data: {
        userId: user.id,
        token,
        expiresAt
      }
    });

    const resetLink = `http://localhost:8080/reset-password/${token}`; // or use process.env.FRONTEND_URL

    console.log('📧 EMAIL_USER:', process.env.EMAIL_USER);
    console.log('📧 EMAIL_PASS:', process.env.EMAIL_PASS ? '[HIDDEN]' : 'undefined');
    console.log('🔗 Reset link:', resetLink);

    try {
      await transporter.sendMail({
        from: `"LoveSwipe" <${process.env.EMAIL_USER}>`,
        to: user.email,
        subject: 'Reset your LoveSwipe password',
        html: `
          <p>Hello ${user.username},</p>
          <p>You requested to reset your password. Click the link below to proceed:</p>
          <a href="${resetLink}">${resetLink}</a>
          <p>This link will expire in 1 hour.</p>
          <p>If you didn't request this, you can safely ignore this email.</p>
        `
      });

      console.log("✅ Reset email sent successfully to:", user.email);
      res.json({ message: 'Reset email sent.' });

    } catch (emailErr) {
      console.error("❌ Email send failed:", emailErr);
      console.error("📬 Message:", emailErr.message);
      return res.status(500).json({ error: emailErr.message || 'Failed to send reset email.' });
    }

  } catch (err) {
    console.error('❌ Server error:', err);
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    console.log('🧪 Reset password hit');
    console.log('🧪 Request body:', req.body);

    const { token, newPassword } = req.body;

    // ✅ Basic checks
    if (!token || !newPassword) {
      return res.status(400).json({ error: 'Token and new password are required.' });
    }

    // ✅ Enforce password length
    if (newPassword.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters long.' });
    }

    // ✅ Find the token
    const record = await prisma.passwordresettoken.findUnique({
      where: { token }
    });

    if (!record) {
      return res.status(400).json({ error: 'Invalid or expired reset token.' });
    }

    // ✅ Expiry check
    if (new Date() > record.expiresAt) {
      await prisma.Passwordresettoken.delete({ where: { token } });
      return res.status(400).json({ error: 'Reset token has expired.' });
    }

    // ✅ Hash and save new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { id: record.userId },
      data: { password: hashedPassword }
    });

    // ✅ Delete the token
    await prisma.passwordresettoken.delete({ where: { token } });

    console.log('✅ Password reset for user:', record.userId);
    res.json({ message: 'Password reset successful.' });

  } catch (err) {
    console.error('❌ Fatal reset error:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
};