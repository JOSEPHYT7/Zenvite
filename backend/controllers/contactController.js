const { validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

exports.submitContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullName, email, phoneNumber, eventType, message } = req.body;

  try {
    // Create reusable transporter object using Gmail
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS.replace(/\s+/g, ''),
      },
      connectionTimeout: 10000, // 10 seconds
    });

    // Send email to ADMIN
    await transporter.sendMail({
      from: `"Zenvite Contact Form" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.ADMIN_EMAIL || "admin@zenvite.com",
      subject: `New Zenvite Request: ${eventType}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-w-lg mx-auto bg-white padding: 0; background-color: #f9fafb;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: 1px solid #e5e7eb; margin-top: 40px; margin-bottom: 40px;">
            <tr>
              <td style="background-color: #b91c1c; padding: 30px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold; letter-spacing: 1px;">New Lead: ${eventType}</h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 40px 30px;">
                <p style="color: #374151; font-size: 16px; margin-bottom: 20px;">You have received a new digital invitation request via Zenvite.</p>
                
                <table width="100%" cellpadding="12" cellspacing="0" border="0" style="background-color: #f3f4f6; border-radius: 6px;">
                  <tr>
                    <td width="30%" style="color: #6b7280; font-size: 14px; border-bottom: 1px solid #e5e7eb;"><strong>Full Name</strong></td>
                    <td width="70%" style="color: #111827; font-size: 14px; border-bottom: 1px solid #e5e7eb; font-weight: 600;">${fullName}</td>
                  </tr>
                  <tr>
                    <td style="color: #6b7280; font-size: 14px; border-bottom: 1px solid #e5e7eb;"><strong>Email</strong></td>
                    <td style="color: #111827; font-size: 14px; border-bottom: 1px solid #e5e7eb; font-weight: 600;"><a href="mailto:${email}" style="color: #b91c1c; text-decoration: none;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="color: #6b7280; font-size: 14px; border-bottom: 1px solid #e5e7eb;"><strong>Phone</strong></td>
                    <td style="color: #111827; font-size: 14px; border-bottom: 1px solid #e5e7eb; font-weight: 600;">${phoneNumber}</td>
                  </tr>
                  <tr>
                    <td style="color: #6b7280; font-size: 14px;"><strong>Event Type</strong></td>
                    <td style="color: #111827; font-size: 14px; font-weight: 600;">${eventType}</td>
                  </tr>
                </table>

                <h3 style="color: #111827; font-size: 16px; margin-top: 30px; margin-bottom: 10px; border-bottom: 2px solid #b91c1c; padding-bottom: 5px; display: inline-block;">Message Details</h3>
                <p style="color: #4b5563; font-size: 15px; line-height: 1.6; background-color: #fef2f2; padding: 20px; border-radius: 6px; border-left: 4px solid #b91c1c; margin-top: 10px;">
                  ${message}
                </p>
                
                <div style="text-align: center; margin-top: 40px;">
                  <a href="mailto:${email}" style="background-color: #111827; color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 30px; font-weight: bold; font-size: 14px; display: inline-block;">Reply to Client</a>
                </div>
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    // Send auto-response email to USER
    await transporter.sendMail({
      from: `"Zenvite Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting Zenvite!",
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #fafaf9; padding: 40px 0;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
            <tr>
              <td style="text-align: center; padding: 40px 20px 20px 20px;">
                <h1 style="color: #b91c1c; margin: 0; font-size: 42px; font-family: 'Georgia', serif; font-style: italic;">Zenvite</h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 0 40px 40px 40px; text-align: center;">
                <h2 style="color: #111827; font-size: 22px; font-weight: bold; margin-bottom: 20px;">We've received your request! 🎉</h2>
                <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
                  Hi <strong>${fullName}</strong>,<br><br>
                  Thank you so much for reaching out! We are thrilled about your upcoming <strong>${eventType}</strong> and can't wait to help you create something magical.
                </p>
                <div style="background-color: #fdf2f8; border-radius: 8px; padding: 25px; margin-bottom: 30px;">
                  <p style="color: #be185d; font-size: 15px; margin: 0; font-weight: 500;">
                    Our design team is currently reviewing your details. We will be in touch with you shortly to discuss the next steps and bring your digital invitation to life!
                  </p>
                </div>
                <p style="color: #9ca3af; font-size: 14px; margin-bottom: 0;">
                  Warm regards,<br>
                  <strong style="color: #111827;">The Zenvite Team</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td style="background-color: #f3f4f6; text-align: center; padding: 20px; border-top: 1px solid #e5e7eb;">
                <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                  © ${new Date().getFullYear()} Zenvite. All rights reserved.<br>
                  Please do not reply to this automated email.
                </p>
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    res.status(200).json({ msg: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: error.message, stack: error.stack });
  }
};
