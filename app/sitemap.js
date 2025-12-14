import { getAllPosts } from "@/lib/blog";

export default async function sitemap() {
  // Get all blog posts dynamically
  const posts = getAllPosts();

  // Static pages - ONLY pages that actually exist
  const staticPages = [
    {
      url: "https://iamohit.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://iamohit.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://iamohit.com/experience",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://iamohit.com/projects",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://iamohit.com/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://iamohit.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://iamohit.com/privacy",
      lastModified: new Date("2025-10-31"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic blog posts with proper dates
  const blogPosts = posts.map((post) => ({
    url: `https://iamohit.com/blog/${post.slug}`,
    lastModified: post.modifiedDate
      ? new Date(post.modifiedDate)
      : post.date
      ? new Date(post.date)
      : new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Combine static pages and blog posts
  return [...staticPages, ...blogPosts];
}
