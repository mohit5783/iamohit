import HeroSection from "@/components/homepage/HeroSection";
import MetricsBar from "@/components/homepage/MetricsBar";
import FeaturedWork from "@/components/homepage/FeaturedWork";
import CoreSkills from "@/components/homepage/CoreSkills";
import SocialProof from "@/components/homepage/SocialProof";
import WhyWorkWithMe from "@/components/homepage/WhyWorkWithMe";

// Enhanced metadata with canonical URL and comprehensive SEO
export const metadata = {
  // Basic metadata
  title:
    "Mohit Shrivastava | Senior Full-Stack Engineer | Next.js & Performance Specialist",
  description:
    "Senior Full-Stack Engineer specializing in Next.js and scalable news platforms. Scaled FMT to 8.5M monthly users with 184% growth and 75% faster load times. 18 years experience across 7 industries.",

  // Comprehensive keywords
  keywords: [
    "Next.js Expert",
    "React Developer",
    "Performance Optimization",
    "Full-Stack Engineer",
    "News Platform Development",
    "Scalability",
    "Malaysia Developer",
    "GCP",
    "Kubernetes",
    "Senior Developer Kuala Lumpur",
    "Head of IT",
    "FMT Developer",
    "8.5M Users",
    "WordPress to Next.js Migration",
    "High Traffic Website Optimization",
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

  // Canonical URL - CRITICAL
  alternates: {
    canonical: "https://iamohit.com",
    types: {
      "application/rss+xml": "https://iamohit.com/feed.xml",
    },
  },

  // OpenGraph metadata
  openGraph: {
    title: "Mohit Shrivastava | Senior Full-Stack Engineer",
    description:
      "Scaled FMT to 8.5M monthly users with 184% growth. 18 years experience building systems that serve millions.",
    type: "website",
    url: "https://iamohit.com",
    siteName: "iamohit.com",
    locale: "en_US",
    images: [
      {
        url: "https://iamohit.com/og.png",
        width: 1200,
        height: 630,
        alt: "Mohit Shrivastava - Senior Full-Stack Engineer",
        type: "image/png",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Mohit Shrivastava | Senior Full-Stack Engineer",
    description:
      "Scaled FMT to 8.5M monthly users. 18 years building systems that serve millions.",
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
  classification: "Professional Portfolio",
};

// WebSite JSON-LD for homepage
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mohit Shrivastava - Senior Full-Stack Engineer",
  url: "https://iamohit.com",
  description:
    "Professional portfolio of Mohit Shrivastava, Senior Full-Stack Engineer specializing in Next.js and scalable news platforms.",
  author: {
    "@type": "Person",
    name: "Mohit Shrivastava",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://iamohit.com/blog?search={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// Person JSON-LD for homepage
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohit Shrivastava",
  jobTitle: "Head of IT",
  description:
    "Senior Full-Stack Engineer specializing in Next.js and scalable news platforms. Scaled FMT to 8.5M monthly users with 184% growth.",
  url: "https://iamohit.com",
  image: "https://iamohit.com/og.png",
  telephone: "+60183553290",
  email: "contact@iamohit.com",
  worksFor: {
    "@type": "Organization",
    name: "Free Malaysia Today",
    url: "https://www.freemalaysiatoday.com",
  },
  knowsAbout: [
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Performance Optimization",
    "Kubernetes",
    "GCP",
    "News Platforms",
    "Scalable Architecture",
  ],
  sameAs: [
    "https://stackoverflow.com/users/3796048/mohit-shrivastava",
    "https://www.linkedin.com/in/mohit5783",
    "https://github.com/mohit5783/",
    "https://twitter.com/mohit5783",
    "https://www.facebook.com/iamohits/",
    "https://wa.link/yx7qep",
    "https://www.instagram.com/mohit5783/",
    "https://www.youtube.com/@iAMohitBytes",
    "https://www.pinterest.com/mohit5783",
  ],
};

export default function Home() {
  return (
    <>
      {/* WebSite JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
        }}
      />

      {/* Person JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd),
        }}
      />

      <HeroSection />
      <MetricsBar />
      <FeaturedWork />
      <CoreSkills />
      <SocialProof />
      <WhyWorkWithMe />
    </>
  );
}
