import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";
import BlogPostClient from "./BlogPostClient";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const postUrl = `https://iamohit.com/blog/${resolvedParams.slug}`;
  const imageUrl = post.image
    ? post.image.startsWith("http")
      ? post.image
      : `https://iamohit.com${post.image}`
    : "https://iamohit.com/og.png";

  // Calculate word count for article metadata
  const wordCount = post.content ? post.content.split(/\s+/).length : 0;

  return {
    // Basic metadata
    title: `${post.title} | Mohit Shrivastava`,
    description: post.description,
    keywords: post.tags || [],

    // Authors and creators
    authors: [
      {
        name: post.author || "Mohit Shrivastava",
        url: "https://iamohit.com",
      },
    ],
    creator: "Mohit Shrivastava",
    publisher: "Mohit Shrivastava",

    // Canonical URL - CRITICAL for SEO
    alternates: {
      canonical: postUrl,
    },

    // OpenGraph metadata for social sharing
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: postUrl,
      siteName: "iamohit.com",
      locale: "en_US",

      // Article-specific OpenGraph tags
      publishedTime: post.date,
      modifiedTime: post.modifiedDate || post.date,
      authors: [post.author || "Mohit Shrivastava"],
      section: post.category || "Technology",
      tags: post.tags || [],

      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
          type: "image/png",
        },
      ],
    },

    // Twitter Card metadata
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      creator: "@mohit5783",
      site: "@mohit5783",
      images: [imageUrl],
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

    // Additional metadata
    category: post.category || "Technology",
    classification: "Blog Article",
  };
}

// Generate JSON-LD structured data for the blog post
function generateBlogPostJsonLd(post, slug) {
  const postUrl = `https://iamohit.com/blog/${slug}`;
  const imageUrl = post.image
    ? post.image.startsWith("http")
      ? post.image
      : `https://iamohit.com${post.image}`
    : "https://iamohit.com/og.png";

  const wordCount = post.content ? post.content.split(/\s+/).length : 0;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: imageUrl,
    datePublished: post.date,
    dateModified: post.modifiedDate || post.date,
    wordCount: wordCount,
    articleSection: post.category || "Technology",
    keywords: post.tags?.join(", ") || "",
    inLanguage: "en-US",
    url: postUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    author: {
      "@type": "Person",
      name: post.author || "Mohit Shrivastava",
      url: "https://iamohit.com",
      jobTitle: "Head of IT",
      worksFor: {
        "@type": "Organization",
        name: "Free Malaysia Today",
        url: "https://www.freemalaysiatoday.com",
      },
      sameAs: [
        "https://www.linkedin.com/in/mohit5783",
        "https://stackoverflow.com/users/3796048/mohit-shrivastava",
        "https://github.com/mohit5783/",
        "https://twitter.com/mohit5783",
      ],
    },
    publisher: {
      "@type": "Person",
      name: "Mohit Shrivastava",
      url: "https://iamohit.com",
      logo: {
        "@type": "ImageObject",
        url: "https://iamohit.com/icon.svg",
        width: 512,
        height: 512,
      },
    },
    isPartOf: {
      "@type": "Blog",
      name: "Technical Insights by Mohit Shrivastava",
      url: "https://iamohit.com/blog",
    },
  };
}

// Generate BreadcrumbList JSON-LD
function generateBreadcrumbJsonLd(post, slug) {
  return {
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
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://iamohit.com/blog/${slug}`,
      },
    ],
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Generate JSON-LD data
  const blogPostJsonLd = generateBlogPostJsonLd(post, resolvedParams.slug);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd(post, resolvedParams.slug);

  return (
    <>
      {/* BlogPosting JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostJsonLd),
        }}
      />

      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      {/* Pass the raw post with content string to client component */}
      <BlogPostClient post={post} />
    </>
  );
}
