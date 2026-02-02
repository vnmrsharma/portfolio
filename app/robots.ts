import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default rule - Allow all bots to crawl everything except internal/API routes
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
        crawlDelay: 0, // No delay for faster crawling
      },
      // Google Search Engine
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
        crawlDelay: 0,
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot-Video",
        allow: "/",
        disallow: ["/api/"],
      },
      // Bing Search Engine
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/"],
        crawlDelay: 0,
      },
      // Yandex Search Engine
      {
        userAgent: "Yandex",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "YandexBot",
        allow: "/",
        disallow: ["/api/"],
      },
      // Baidu Search Engine
      {
        userAgent: "Baiduspider",
        allow: "/",
        disallow: ["/api/"],
      },
      // DuckDuckGo
      {
        userAgent: "DuckDuckBot",
        allow: "/",
        disallow: ["/api/"],
      },
      // AI/LLM Crawlers - Allow full access for better indexing
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Applebot",
        allow: "/",
        disallow: ["/api/"],
      },
      // Social Media Crawlers
      {
        userAgent: "facebookexternalhit",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Twitterbot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "LinkedInBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "WhatsApp",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Slackbot",
        allow: "/",
        disallow: ["/api/"],
      },
      // Academic/Scholarly Crawlers
      {
        userAgent: "SemrushBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "AhrefsBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "MJ12bot",
        allow: "/",
        disallow: ["/api/"],
      },
      // Archive Crawlers
      {
        userAgent: "ia_archiver",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "archive.org_bot",
        allow: "/",
        disallow: ["/api/"],
      },
      // Other Important Crawlers
      {
        userAgent: "Slurp",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "msnbot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "BingPreview",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://vinamrasharma.com/sitemap.xml",
    host: "https://vinamrasharma.com",
  };
}

