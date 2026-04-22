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

  console.log(`[System] Booting Silver Care Companions Server...`);
  console.log(`[System] Mode: ${process.env.NODE_ENV}`);

  // System Status Check - Used to verify the backend bridge is active
  app.get("/api/status", (req, res) => {
    res.json({
      status: "online",
      environment: process.env.NODE_ENV || "development",
      timestamp: new Date().toISOString(),
      service: "Silver Care Backend Bridge"
    });
  });

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
    console.log(`[RSS Proxy] Fetching feed using RSS-Parser: ${SUBSTACK_URL}`);
    
    try {
      // Use rss-parser to get a clean object
      const feed = await parser.parseURL(SUBSTACK_URL);
      console.log(`[RSS Proxy] Success! Found ${feed.items?.length || 0} items.`);
      
      // Map to our BlogPost interface so the frontend doesn't have to do it
      const posts = feed.items.map(item => {
        // Extract content
        const content = item['content:encoded'] || item.content || "";
        
        // Extract image
        let image = "/assets/Hero_Nashville.png";
        if (item.enclosure && item.enclosure.url) {
          image = item.enclosure.url;
        } else {
          // Look for images in content
          const imgRegex = /<img[^>]+src="([^">]+)"/;
          const match = content.match(imgRegex);
          if (match) image = match[1];
        }

        return {
          title: item.title || "",
          link: item.link || "",
          pubDate: item.pubDate || "",
          content: content,
          contentSnippet: item.contentSnippet || "",
          guid: item.guid || item.link || "",
          isoDate: item.isoDate || new Date().toISOString(),
          slug: item.link ? item.link.split("/").pop()?.split("?")[0] : item.guid,
          image: image
        };
      });

      res.set({
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "public, s-maxage=600, stale-while-revalidate=1200"
      });
      res.json(posts);
    } catch (error) {
      console.error("[RSS Proxy] Fatal Error during fetch/parse:", error);
      res.status(500).json({ 
        error: "Failed to bridge Substack Feed", 
        details: String(error),
        timestamp: new Date().toISOString()
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
