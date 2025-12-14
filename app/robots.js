export default function robots() {
  const disallowedPaths = ["/api/", "/_next/", "/admin/", "/private/"];

  return {
    rules: [
      // ===========================================
      // GOOGLE CRAWLERS (Search, News, Discover, Images, Video)
      // ===========================================
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "Googlebot-News",
        allow: ["/", "/blog/", "/blog/*"],
        disallow: ["/api/", "/_next/", "/admin/", "/private/", "/privacy"],
      },
      {
        userAgent: "Googlebot-Video",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        // Google Discover uses main Googlebot, but we can set preferences
        userAgent: "Storebot-Google",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "Google-InspectionTool",
        allow: "/",
        disallow: disallowedPaths,
      },

      // ===========================================
      // GOOGLE AI TRAINING (Allow for visibility)
      // ===========================================
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: disallowedPaths,
      },

      // ===========================================
      // BING CRAWLERS
      // ===========================================
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "BingPreview",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "msnbot",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "msnbot-media",
        allow: "/",
        disallow: disallowedPaths,
      },

      // ===========================================
      // OTHER SEARCH ENGINES
      // ===========================================
      {
        userAgent: "Yandex",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "YandexBot",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "YandexImages",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "Baiduspider",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "Baiduspider-image",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "DuckDuckBot",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "Slurp", // Yahoo
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "Sogou",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "Exabot",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "ia_archiver", // Alexa/Internet Archive
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "archive.org_bot",
        allow: "/",
        disallow: disallowedPaths,
      },

      // ===========================================
      // AI CRAWLERS (Allow for visibility & training)
      // ===========================================
      {
        userAgent: "GPTBot", // OpenAI
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "ChatGPT-User", // OpenAI ChatGPT browsing
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "OAI-SearchBot", // OpenAI Search
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "anthropic-ai", // Anthropic Claude
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "Claude-Web", // Claude browsing
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "ClaudeBot", // Anthropic
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "PerplexityBot", // Perplexity AI
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "Bytespider", // ByteDance/TikTok AI
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "CCBot", // Common Crawl (used for AI training)
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "cohere-ai", // Cohere
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "Diffbot", // Diffbot AI
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "ImagesiftBot",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "Omgilibot",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "YouBot", // You.com
        allow: "/",
        disallow: disallowedPaths,
      },

      // ===========================================
      // SOCIAL MEDIA CRAWLERS
      // ===========================================
      {
        userAgent: "Twitterbot",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "facebookexternalhit", // Facebook/Meta link preview
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "Facebot", // Facebook
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "Meta-ExternalAgent", // Meta AI
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "Meta-ExternalFetcher",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "LinkedInBot",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "Pinterest",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "Pinterestbot",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "Slackbot",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "Slackbot-LinkExpanding",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "WhatsApp",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "TelegramBot",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "Discordbot",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "Embedly",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "Quora-Bot",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "redditbot",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "Applebot", // Apple/Siri
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "Applebot-Extended", // Apple AI training
        allow: "/",
        disallow: disallowedPaths,
      },

      // ===========================================
      // SEO & MONITORING TOOLS
      // ===========================================
      {
        userAgent: "AhrefsBot",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "SemrushBot",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "MJ12bot", // Majestic
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "DotBot",
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "rogerbot", // Moz
        allow: "/",
        disallow: disallowedPaths,
      },
      {
        userAgent: "Screaming Frog SEO Spider",
        allow: "/",
        disallow: disallowedPaths,
      },

      // ===========================================
      // DEFAULT RULE (Allow all others)
      // ===========================================
      {
        userAgent: "*",
        allow: "/",
        disallow: disallowedPaths,
      },
    ],

    // Sitemap location
    sitemap: "https://iamohit.com/sitemap.xml",

    // Canonical host
    host: "https://iamohit.com",
  };
}
