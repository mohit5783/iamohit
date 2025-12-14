import { getAllPosts } from "@/lib/blog";

export async function GET(request) {
  const posts = getAllPosts();
  const siteUrl = "https://iamohit.com";

  // Get the actual request URL for proper self-reference
  const feedUrl = `${siteUrl}/feed.xml`;

  // Escape XML special characters
  const escapeXml = (text) => {
    if (!text) return "";
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  };

  // Generate RSS 2.0 feed with proper validation
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>Technical Insights by Mohit Shrivastava</title>
    <link>${siteUrl}/blog</link>
    <description>Deep dives into Next.js, performance optimization, and scaling platforms that serve millions. Real-world case studies and technical insights from 18+ years of experience.</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <pubDate>${
      posts.length > 0
        ? new Date(posts[0].date).toUTCString()
        : new Date().toUTCString()
    }</pubDate>
    <ttl>60</ttl>
    <generator>Next.js</generator>
    <managingEditor>contact@iamohit.com (Mohit Shrivastava)</managingEditor>
    <webMaster>contact@iamohit.com (Mohit Shrivastava)</webMaster>
    <copyright>Copyright ${new Date().getFullYear()} Mohit Shrivastava. All rights reserved.</copyright>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
    <image>
      <url>${siteUrl}/icon.svg</url>
      <title>Technical Insights by Mohit Shrivastava</title>
      <link>${siteUrl}/blog</link>
      <width>144</width>
      <height>144</height>
      <description>Mohit Shrivastava - Senior Full-Stack Engineer</description>
    </image>
    ${posts
      .map((post) => {
        const postUrl = `${siteUrl}/blog/${post.slug}`;
        const imageUrl = post.image
          ? post.image.startsWith("http")
            ? post.image
            : `${siteUrl}${post.image}`
          : null;

        // Determine image type from extension
        const getImageType = (url) => {
          if (!url) return "image/png";
          if (url.endsWith(".webp")) return "image/webp";
          if (url.endsWith(".png")) return "image/png";
          if (url.endsWith(".jpg") || url.endsWith(".jpeg"))
            return "image/jpeg";
          if (url.endsWith(".gif")) return "image/gif";
          return "image/png";
        };

        return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>contact@iamohit.com (${escapeXml(
        post.author || "Mohit Shrivastava"
      )})</author>
      ${
        post.tags
          ?.map((tag) => `<category><![CDATA[${tag}]]></category>`)
          .join("\n      ") || ""
      }${
          imageUrl
            ? `
      <media:content url="${imageUrl}" medium="image" type="${getImageType(
                imageUrl
              )}">
        <media:title type="plain"><![CDATA[${post.title}]]></media:title>
      </media:content>
      <enclosure url="${imageUrl}" type="${getImageType(
                imageUrl
              )}" length="0"/>`
            : ""
        }
    </item>`;
      })
      .join("")}
  </channel>
</rss>`;

  return new Response(feed.trim(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control":
        "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
