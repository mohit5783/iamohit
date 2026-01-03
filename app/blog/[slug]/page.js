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

  // Handle image URL - ensure absolute
  const imageUrl =
    post.ogImage || post.image
      ? (post.ogImage || post.image).startsWith("http")
        ? post.ogImage || post.image
        : `https://iamohit.com${post.ogImage || post.image}`
      : "https://iamohit.com/og.png";

  // Use modifiedDate if available, otherwise fall back to date
  const publishedTime = post.date;
  const modifiedTime = post.modifiedDate || post.date;

  // Calculate word count if not provided
  const wordCount =
    post.wordCount || (post.content ? post.content.split(/\s+/).length : 0);

  return {
    // Basic metadata
    title: `${post.title}`,
    description: post.description,

    // Use keywords array if available, otherwise fall back to tags
    keywords: post.keywords || post.tags || [],

    // Authors and creators
    authors: [
      {
        name: post.author || "Mohit Shrivastava",
        url: "https://iamohit.com",
      },
    ],
    creator: "Mohit Shrivastava",
    publisher: "Mohit Shrivastava",

    // Canonical URL - use provided or generate
    alternates: {
      canonical: post.canonical || postUrl,
    },

    // OpenGraph metadata for social sharing
    openGraph: {
      title: post.title,
      description: post.excerpt || post.description,
      type: "article",
      url: postUrl,
      siteName: "iamohit.com",
      locale: "en_US",

      // Article-specific OpenGraph tags
      publishedTime: publishedTime,
      modifiedTime: modifiedTime,
      authors: [post.author || "Mohit Shrivastava"],
      section: post.category || post.articleSection || "Technology",
      tags: post.tags || [],

      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
          type: "image/webp",
        },
      ],
    },

    // Twitter Card metadata
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || post.description,
      creator: post.authorTwitter || "@mohit5783",
      site: "@mohit5783",
      images: [imageUrl],
    },

    // Robots directives
    robots: {
      index: post.published !== false,
      follow: true,
      googleBot: {
        index: post.published !== false,
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

// Generate comprehensive BlogPosting JSON-LD
function generateBlogPostJsonLd(post, slug) {
  const postUrl = `https://iamohit.com/blog/${slug}`;
  const imageUrl =
    post.ogImage || post.image
      ? (post.ogImage || post.image).startsWith("http")
        ? post.ogImage || post.image
        : `https://iamohit.com${post.ogImage || post.image}`
      : "https://iamohit.com/og.png";

  const wordCount =
    post.wordCount || (post.content ? post.content.split(/\s+/).length : 0);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: imageUrl,
    datePublished: post.date,
    dateModified: post.modifiedDate || post.date,
    wordCount: wordCount,
    articleSection: post.category || post.articleSection || "Technology",
    keywords: (post.keywords || post.tags || []).join(", "),
    inLanguage: post.lang || "en-US",
    url: post.canonical || postUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.canonical || postUrl,
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
        post.authorLinkedIn
          ? `https://www.linkedin.com/in/${post.authorLinkedIn}`
          : "https://www.linkedin.com/in/mohit5783",
        post.authorTwitter
          ? `https://twitter.com/${post.authorTwitter.replace("@", "")}`
          : "https://twitter.com/mohit5783",
        "https://stackoverflow.com/users/3796048/mohit-shrivastava",
        "https://github.com/mohit5783/",
      ].filter(Boolean),
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
  const breadcrumbs = [
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
  ];

  // Add category if available
  if (post.category) {
    breadcrumbs.push({
      "@type": "ListItem",
      position: 3,
      name: post.category,
      item: `https://iamohit.com/blog?category=${encodeURIComponent(
        post.category.toLowerCase()
      )}`,
    });
    breadcrumbs.push({
      "@type": "ListItem",
      position: 4,
      name: post.title,
      item: `https://iamohit.com/blog/${slug}`,
    });
  } else {
    breadcrumbs.push({
      "@type": "ListItem",
      position: 3,
      name: post.title,
      item: `https://iamohit.com/blog/${slug}`,
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs,
  };
}

// Generate Article JSON-LD (additional schema for news articles)
function generateArticleJsonLd(post, slug) {
  const postUrl = `https://iamohit.com/blog/${slug}`;
  const imageUrl =
    post.ogImage || post.image
      ? (post.ogImage || post.image).startsWith("http")
        ? post.ogImage || post.image
        : `https://iamohit.com${post.ogImage || post.image}`
      : "https://iamohit.com/og.png";

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: [imageUrl],
    datePublished: post.date,
    dateModified: post.modifiedDate || post.date,
    author: {
      "@type": "Person",
      name: post.author || "Mohit Shrivastava",
      url: "https://iamohit.com",
    },
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Get related posts if specified
  let relatedPosts = [];
  if (post.relatedPosts && post.relatedPosts.length > 0) {
    relatedPosts = post.relatedPosts
      .map((slug) => {
        try {
          return getPostBySlug(slug);
        } catch {
          return null;
        }
      })
      .filter(Boolean);
  }

  // Generate JSON-LD data
  const blogPostJsonLd = generateBlogPostJsonLd(post, resolvedParams.slug);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd(post, resolvedParams.slug);
  const articleJsonLd = generateArticleJsonLd(post, resolvedParams.slug);

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

      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />

      {/* Pass the post with all metadata to client component */}
      <BlogPostClient post={post} relatedPosts={relatedPosts} />
    </>
  );
}
