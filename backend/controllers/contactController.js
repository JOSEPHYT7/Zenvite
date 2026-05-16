const { validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

exports.submitContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullName, email, phoneNumber, eventType, eventDate, selectedServices, message, totalPrice } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS.replace(/\s+/g, ''),
      },
    });

    // Format services list for email
    const servicesHtml = selectedServices.map(s => `
      <tr style="border-bottom: 1px solid #f3f4f6;">
        <td style="padding: 12px 0; color: #4b5563; font-size: 14px;">${s.name}</td>
        <td style="padding: 12px 0; color: #111827; font-size: 14px; font-weight: 700; text-align: right;">${s.price}</td>
      </tr>
    `).join('');

    const adminHtml = `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #eee; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
        <div style="background: linear-gradient(135deg, #b91c1c 0%, #7f1d1d 100%); padding: 40px 30px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px; text-transform: uppercase; letter-spacing: 3px; font-weight: 900;">New Detailed Lead</h1>
        </div>
        
        <div style="padding: 40px; color: #1f2937;">
          <div style="margin-bottom: 30px;">
            <p style="margin: 0; color: #9ca3af; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">Customer Info</p>
            <h2 style="margin: 10px 0 5px 0; font-size: 20px; font-weight: 900; color: #111827;">${fullName}</h2>
            <p style="margin: 0; font-size: 14px; color: #6b7280;">${email} • ${phoneNumber}</p>
          </div>

          <div style="background: #f9fafb; border-radius: 20px; padding: 25px; margin-bottom: 30px;">
            <p style="margin: 0 0 15px 0; color: #9ca3af; font-size: 11px; font-weight: 800; text-transform: uppercase;">Selected Services</p>
            <table style="width: 100%; border-collapse: collapse;">
              ${servicesHtml}
              <tr>
                <td style="padding: 20px 0 0 0; color: #111827; font-size: 16px; font-weight: 900;">Total Investment</td>
                <td style="padding: 20px 0 0 0; color: #b91c1c; font-size: 20px; font-weight: 900; text-align: right;">${totalPrice}</td>
              </tr>
            </table>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
            <div style="border-left: 3px solid #fecaca; padding-left: 15px;">
              <p style="margin: 0; color: #9ca3af; font-size: 10px; font-weight: 800; text-transform: uppercase;">Event Type</p>
              <p style="margin: 5px 0 0 0; font-weight: 700;">${eventType}</p>
            </div>
            <div style="border-left: 3px solid #fecaca; padding-left: 15px;">
              <p style="margin: 0; color: #9ca3af; font-size: 10px; font-weight: 800; text-transform: uppercase;">Event Date</p>
              <p style="margin: 5px 0 0 0; font-weight: 700;">${eventDate}</p>
            </div>
          </div>

          <div style="background: #ffffff; border: 1px solid #f3f4f6; padding: 20px; border-radius: 15px;">
            <p style="margin: 0; color: #9ca3af; font-size: 10px; font-weight: 800; text-transform: uppercase;">Requirements</p>
            <p style="margin: 10px 0 0 0; line-height: 1.6; font-style: italic; color: #4b5563;">"${message}"</p>
          </div>
        </div>
      </div>
    `;

    const customerHtml = `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 24px; overflow: hidden; border: 1px solid #f3f4f6;">
        <div style="text-align: center; padding: 50px 30px; background: #fff;">
          <h1 style="color: #b91c1c; margin: 0; font-size: 38px; font-style: italic; font-weight: 900; letter-spacing: -1px;">Zenvite</h1>
          <h2 style="color: #111827; font-size: 24px; margin-top: 25px;">Magical details received!</h2>
          <p style="color: #6b7280; font-size: 16px; line-height: 1.6;">Hi ${fullName}, we've received your request and our team is already brainstorming ideas for your <strong>${eventType}</strong>.</p>
          
          <div style="margin: 40px 0; padding: 30px; background: #fff1f2; border-radius: 20px; text-align: left; border: 1px solid #ffe4e6;">
            <h3 style="color: #b91c1c; margin: 0 0 20px 0; font-size: 16px; text-transform: uppercase; letter-spacing: 1px;">Selected Services</h3>
            <table style="width: 100%; border-collapse: collapse;">
              ${servicesHtml}
              <tr>
                <td style="padding: 15px 0 0 0; color: #111827; font-size: 16px; font-weight: 900;">Estimated Total</td>
                <td style="padding: 15px 0 0 0; color: #b91c1c; font-size: 18px; font-weight: 900; text-align: right;">${totalPrice}</td>
              </tr>
            </table>
          </div>

          <p style="color: #6b7280; margin-bottom: 30px;">Our lead designer will reach out to you within 24 hours.</p>
          
          <div style="padding-top: 30px; border-top: 1px solid #f3f4f6;">
            <p style="color: #9ca3af; font-size: 13px; margin-bottom: 20px; font-weight: 600;">Stay inspired with our latest designs:</p>
            <div style="display: flex; justify-content: center; gap: 12px;">
              <a href="https://instagram.com/zenvite" style="display: inline-block; padding: 12px 24px; background: #000; color: white; text-decoration: none; border-radius: 12px; font-weight: 800; font-size: 13px; letter-spacing: 0.5px;">INSTAGRAM</a>
              <a href="https://facebook.com/zenvite" style="display: inline-block; padding: 12px 24px; background: #1877F2; color: white; text-decoration: none; border-radius: 12px; font-weight: 800; font-size: 13px; letter-spacing: 0.5px;">FACEBOOK</a>
            </div>
          </div>
        </div>
      </div>
    `;

    // 1. Send to ADMIN
    await transporter.sendMail({
      from: `"Zenvite Leads" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || "zenvite4u@gmail.com",
      subject: `[NEW LEAD] ${fullName} - ${totalPrice}`,
      html: adminHtml,
    });

    // 2. Send to CUSTOMER
    await transporter.sendMail({
      from: `"Zenvite Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Magical details received! ✨ Zenvite",
      html: customerHtml,
    });

    res.status(200).json({ msg: 'Success' });
  } catch (error) {
    console.error('Email Error:', error);
    res.status(500).json({ error: 'Mail delivery failed' });
  }
};
