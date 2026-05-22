const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_RECEIVER_EMAIL } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_RECEIVER_EMAIL) {
      return res.status(500).json({
        message: "Email service not configured. Set SMTP env vars in docker-compose.",
      });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const adminInfo = await transporter.sendMail({
      from: `MediumLite Contact <${SMTP_USER}>`,
      to: CONTACT_RECEIVER_EMAIL,
      replyTo: email,
      subject: `[Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    const userAckInfo = await transporter.sendMail({
      from: `MediumLite Support <${SMTP_USER}>`,
      to: email,
      subject: "We received your message",
      text: `Hi ${name},\n\nThanks for contacting MediumLite. We have received your message and will get back to you soon.\n\nSubject: ${subject}\n\n- MediumLite Team`,
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for contacting <strong>MediumLite</strong>. We have received your message and will get back to you soon.</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p>- MediumLite Team</p>
      `,
    });

    console.log("Contact mail sent:", {
      adminMessageId: adminInfo.messageId,
      adminAccepted: adminInfo.accepted,
      userAckMessageId: userAckInfo.messageId,
      userAckAccepted: userAckInfo.accepted,
    });

    res.json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact email error:", error);
    res.status(500).json({ message: "Failed to send message" });
  }
});

module.exports = router;
