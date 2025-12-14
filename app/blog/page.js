import { getAllPosts } from "@/lib/blog";
import BlogListingClient from "./BlogListingClient";

export const metadata = {
  // Basic metadata
  title: "Blog | Technical Insights by Mohit Shrivastava",
  description:
    "Deep dives into Next.js, performance optimization, and scaling platforms that serve millions. Real-world case studies and technical insights from 18+ years of experience building systems for 8.5M+ users.",

  // Keywords for blog discovery
  keywords: [
    "Next.js blog",
    "Next.js performance optimization",
    "Next.js scalability",
    "React performance",
    "technical writing",
    "web development blog",
    "case studies",
    "FMT scaling",
    "news platform development",
    "WordPress to Next.js migration",
    "high traffic website optimization",
    "Malaysia tech blog",
    "Kubernetes tutorials",
    "GCP Cloud Run",
    "performance engineering",
  ],

  // Authors
  authors: [
    {
      name: "Mohit Shrivastava",
      url: "https://iamohit.com",
    },
  ],
  creator: "Mohit Shrivastava",
  publisher: "Mohit Shrivastava",

  // Canonical URL and RSS feed
  alternates: {
    canonical: "https://iamohit.com/blog",
    types: {
      "application/rss+xml": "https://iamohit.com/feed.xml",
      "application/atom+xml": "https://iamohit.com/feed.xml",
    },
  },

  // OpenGraph metadata
  openGraph: {
    title: "Blog | Technical Insights by Mohit Shrivastava",
    description:
      "Deep dives into Next.js, performance optimization, and scaling platforms that serve millions. Real-world case studies from 18+ years of experience.",
    type: "website",
    url: "https://iamohit.com/blog",
    siteName: "iamohit.com",
    locale: "en_US",
    images: [
      {
        url: "https://iamohit.com/og.png",
        width: 1200,
        height: 630,
        alt: "Mohit Shrivastava - Technical Blog",
        type: "image/png",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Blog | Technical Insights by Mohit Shrivastava",
    description:
      "Deep dives into Next.js, performance optimization, and scaling platforms that serve millions.",
    creator: "@mohit5783",
    site: "@mohit5783",
    images: ["https://iamohit.com/og.png"],
  },

  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Category
  category: "Technology",
  classification: "Technical Blog",
};

// JSON-LD for Blog listing page
function generateBlogJsonLd(posts) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Technical Insights by Mohit Shrivastava",
    description:
      "Deep dives into Next.js, performance optimization, and scaling platforms that serve millions.",
    url: "https://iamohit.com/blog",
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      name: "Mohit Shrivastava",
      url: "https://iamohit.com",
      jobTitle: "Head of IT",
      sameAs: [
        "https://www.linkedin.com/in/mohit5783",
        "https://stackoverflow.com/users/3796048/mohit-shrivastava",
        "https://github.com/mohit5783/",
      ],
    },
    publisher: {
      "@type": "Person",
      name: "Mohit Shrivastava",
      url: "https://iamohit.com",
    },
    blogPost: posts.slice(0, 10).map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      url: `https://iamohit.com/blog/${post.slug}`,
      author: {
        "@type": "Person",
        name: post.author || "Mohit Shrivastava",
      },
    })),
  };
}

// Breadcrumb JSON-LD
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://iamohit.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://iamohit.com/blog",
    },
  ],
};

export default function BlogPage() {
  const posts = getAllPosts();
  const blogJsonLd = generateBlogJsonLd(posts);

  return (
    <>
      {/* Blog JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogJsonLd),
        }}
      />

      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <BlogListingClient posts={posts} />
    </>
  );
}
