export const dynamic = 'force-dynamic';
import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import Parser from "rss-parser";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const parser = new Parser();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  console.log(`[Server] Starting in ${process.env.NODE_ENV === 'production' ? 'PRODUCTION' : 'DEVELOPMENT'} mode`);

  // Contact API endpoint
  app.post("/api/contact", async (req, res) => {
    // ... logic remains same ...
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
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
        console.log("Email credentials not found. Logging message instead.");
        return res.json({ success: true, message: "Logged to console." });
      }
      await transporter.sendMail(mailOptions);
      res.json({ success: true, message: "Sent" });
    } catch (e) { res.status(500).json({ error: "Error" }); }
  });

  // RSS Proxy endpoint using library for better robustness
  app.get("/api/blog-feed", async (req, res) => {
    const SUBSTACK_URL = "https://silvercarecompanions.substack.com/feed";
    console.log(`[RSS Proxy] Fetching feed using RSS-Parser from: ${SUBSTACK_URL}`);
    
    try {
      const feed = await parser.parseURL(SUBSTACK_URL);
      console.log(`[RSS Proxy] Success! Found ${feed.items?.length || 0} items.`);
      
      // Convert back to XML string to preserve full content for the frontend parser
      // or we can structure the response. Since the frontend expects XML, let's 
      // fetch raw text but use a better fetch config.
      const response = await fetch(SUBSTACK_URL, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'application/rss+xml, application/xml, text/xml'
        }
      });
      const xml = await response.text();
      res.set("Content-Type", "text/xml; charset=utf-8");
      res.send(xml);
    } catch (error) {
      console.error("[RSS Proxy] Error:", error);
      res.status(500).json({ error: "Failed to fetch" });
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
