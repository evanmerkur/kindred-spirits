export const dynamic = 'force-dynamic';
import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Contact API endpoint
  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

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
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.log("Email credentials not found. Logging message instead:");
        console.log("To: info@silvercarecompanions.com");
        console.log(`From: ${email}`);
        console.log(`Subject: ${mailOptions.subject}`);
        console.log(`Body: ${mailOptions.text}`);
        
        return res.json({ 
          success: true, 
          message: "Message received (logged to server console as email credentials are not configured)." 
        });
      }

      await transporter.sendMail(mailOptions);
      res.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });

  // RSS Proxy endpoint
  app.get("/api/blog-feed", async (req, res) => {
    const SUBSTACK_URL = "https://silvercarecompanions.substack.com/feed";
    console.log(`[RSS Proxy] Fetching feed from: ${SUBSTACK_URL}`);
    try {
      const response = await fetch(SUBSTACK_URL, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'application/rss+xml, application/xml, text/xml, */*',
          'Accept-Language': 'en-US,en;q=0.9',
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        },
        redirect: 'follow'
      });
      
      if (!response.ok) {
        const errorBody = await response.text();
        console.error(`[RSS Proxy] Error: ${response.status}. Body: ${errorBody.slice(0, 100)}`);
        throw new Error(`Substack returned ${response.status}: ${response.statusText}`);
      }
      
      const xml = await response.text();
      console.log(`[RSS Proxy] Success! Received ${xml.length} bytes.`);
      
      // If we got very little data, log a warning
      if (xml.length < 1000) {
        console.warn("[RSS Proxy] Warning: Received suspiciously small XML payload.");
      }

      res.set("Content-Type", "text/xml; charset=utf-8");
      res.send(xml);
    } catch (error) {
      console.error("[RSS Proxy] Fatal fetch error:", error);
      res.status(500).json({ 
        error: "Failed to fetch blog feed",
        details: error instanceof Error ? error.message : String(error)
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
