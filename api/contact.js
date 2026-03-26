import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Security Gate
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Configure your email service here
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "info@silvercarecompanions.com",
    subject: `New Contact Inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    replyTo: email,
  };

  try {
    // If credentials are not provided, we'll just log it for now
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log("Email credentials not found. Logging message instead:");
      console.log("To: info@silvercarecompanions.com");
      console.log(`From: ${email}`);
      console.log(`Subject: ${mailOptions.subject}`);
      console.log(`Body: ${mailOptions.text}`);
      
      return res.status(200).json({ 
        success: true, 
        message: "Message received (logged to server console as email credentials are not configured)." 
      });
    }

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
