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

  // Log all incoming requests for debugging production traffic
  app.use((req, res, next) => {
    console.log(`[Server] ${req.method} ${req.url}`);
    next();
  });

  // System Status Check - TOP LEVEL
  app.get("/api/status", (req, res) => {
    res.json({
      status: "online",
      mode: process.env.NODE_ENV || "unknown",
      time: new Date().toISOString()
    });
  });

  // RSS Proxy endpoint
  app.get("/api/blog-feed", async (req, res) => {
    const SUBSTACK_URL = "https://silvercarecompanions.substack.com/feed";
    try {
      const feed = await parser.parseURL(SUBSTACK_URL);
      const posts = feed.items.map(item => {
        const content = item['content:encoded'] || item.content || "";
        let image = "/assets/Hero_Nashville.png";
        if (item.enclosure?.url) image = item.enclosure.url;
        else {
          const match = content.match(/<img[^>]+src="([^">]+)"/);
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
      res.json(posts);
    } catch (error) {
      console.error("[RSS Proxy] Error:", error);
      res.status(500).json({ error: "Feed Fetch Failed", details: String(error) });
    }
  });

  // Contact API
  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ error: "Missing fields" });
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });
    try {
      if (!process.env.EMAIL_USER) {
        console.log("Email info logged (no credentials):", req.body);
        return res.json({ success: true });
      }
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "info@silvercarecompanions.com",
        subject: `New Inquiry: ${name}`,
        text: `From: ${name} (${email})\n\n${message}`,
        replyTo: email
      });
      res.json({ success: true });
    } catch (e) { res.status(500).json({ error: String(e) }); }
  });

  // Production vs Development serving
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
    console.log(`[Server] Live on port ${PORT}`);
  });
}

startServer();
