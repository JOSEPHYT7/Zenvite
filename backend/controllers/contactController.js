const { validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

exports.submitContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullName, email, phoneNumber, eventType, message } = req.body;

  try {
    // Create reusable transporter object using Gmail SMTP
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS.replace(/\s+/g, ''),
      },
    });

    // 1. Send email to ADMIN (The Lead)
    await transporter.sendMail({
      from: `"Zenvite Leads" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || "admin@zenvite.com",
      subject: `New Zenvite Request: ${eventType}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #b91c1c; padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px;">New Lead: ${eventType}</h1>
          </div>
          <div style="padding: 30px;">
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phoneNumber}</p>
            <p><strong>Event:</strong> ${eventType}</p>
            <div style="background: #f9fafb; padding: 15px; border-radius: 6px; margin-top: 20px;">
              <p style="margin: 0;"><strong>Message:</strong></p>
              <p style="margin-top: 10px; color: #4b5563;">${message}</p>
            </div>
          </div>
        </div>
      `,
    });

    // 2. Send auto-response to CUSTOMER
    await transporter.sendMail({
      from: `"Zenvite Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting Zenvite!",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          <div style="text-align: center; padding: 30px;">
            <h1 style="color: #b91c1c; margin: 0; font-size: 32px; font-style: italic;">Zenvite</h1>
          </div>
          <div style="padding: 0 40px 40px 40px; text-align: center;">
            <h2 style="color: #111827; font-size: 20px;">We've received your request! 🎉</h2>
            <p style="color: #4b5563; line-height: 1.6;">
              Hi <strong>${fullName}</strong>, we are thrilled about your upcoming <strong>${eventType}</strong>. Our team will contact you shortly to bring your digital invitation to life!
            </p>
            <p style="color: #9ca3af; font-size: 14px; margin-top: 30px;">
              Warm regards,<br>
              <strong>The Zenvite Team</strong>
            </p>
          </div>
        </div>
      `,
    });

    res.status(200).json({ msg: 'Message sent successfully!' });
  } catch (error) {
    console.error('Gmail SMTP error:', error);
    res.status(500).json({ error: error.message });
  }
};
