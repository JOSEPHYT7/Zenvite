require('dotenv').config();
const nodemailer = require('nodemailer');

async function testMail() {
  console.log("Testing email connection...");
  console.log("User:", process.env.EMAIL_USER);
  const pass = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : 'undefined';
  console.log("Pass length:", pass.length);

  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: pass,
      },
    });

    console.log("Verifying transporter...");
    await transporter.verify();
    console.log("Transporter verified successfully!");

    console.log("Sending test email...");
    await transporter.sendMail({
      from: `"Test" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "Test from Backend",
      text: "If you get this, Nodemailer is working.",
    });
    console.log("Test email sent!");
  } catch (error) {
    console.error("EMAIL ERROR DETAILS:", error);
  }
}

testMail();
