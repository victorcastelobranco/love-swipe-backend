const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

transporter.sendMail({
  from: `"Test" <${process.env.EMAIL_USER}>`,
  to: 'your-email@gmail.com',
  subject: 'Test Email',
  html: '<p>This is a test email.</p>'
}).then(() => {
  console.log('✅ Email sent successfully');
}).catch(err => {
  console.error('❌ Email failed:', err.message);
});