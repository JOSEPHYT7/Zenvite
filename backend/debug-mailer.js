require('dotenv').config();
const nodemailer = require('nodemailer');

const fullName = 'Test User';
const email = 'test@example.com';
const phoneNumber = '1234567890';
const eventType = 'Wedding';
const message = 'This is a test message.';

async function run() {
  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS.replace(/\s+/g, ''),
      },
    });

    console.log("Sending ADMIN email...");
    await transporter.sendMail({
      from: `"Zenvite Contact Form" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.ADMIN_EMAIL || "admin@zenvite.com",
      subject: `New Zenvite Request: ${eventType}`,
      html: `<p>Test</p>`,
    });

    console.log("Sending USER email...");
    await transporter.sendMail({
      from: `"Zenvite Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting Zenvite",
      html: `<p>Test</p>`,
    });

    console.log("Both emails sent successfully!");
  } catch (err) {
    console.error("ERROR DETAILS:", err);
  }
}

run();
