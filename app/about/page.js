import AboutContent from "@/components/about/AboutContent";

// Enhanced metadata with canonical URL and comprehensive SEO
export const metadata = {
  // Basic metadata
  title:
    "About Mohit Shrivastava | 18+ Years Full-Stack Engineer | From Ujjain to Kuala Lumpur",
  description:
    "The journey of a Full-Stack Engineer: from a small-town student in Ujjain to Head of IT scaling platforms to 8.5M users. 18+ years of experience, 150+ projects, Top 3% on StackOverflow.",

  // Comprehensive keywords
  keywords: [
    "Mohit Shrivastava",
    "Full Stack Engineer Malaysia",
    "Senior Developer Kuala Lumpur",
    "Head of IT",
    "Software Engineer Journey",
    "Tech Career Story",
    "India to Malaysia Developer",
    "18 Years Experience",
    "FMT Developer",
    "News Platform Engineer",
    "Next.js Expert",
    "React Developer",
    "Performance Specialist",
    "StackOverflow Top 3%",
    "Vedic Astrology",
    "Tech Leader",
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
    canonical: "https://iamohit.com/about",
  },

  // OpenGraph metadata
  openGraph: {
    title: "About Mohit Shrivastava | The Journey of a Full-Stack Engineer",
    description:
      "From a small-town student scoring 64% in board exams to Head of IT scaling platforms to 8.5M users. The story of persistence, growth, and technical excellence.",
    type: "profile",
    url: "https://iamohit.com/about",
    siteName: "iamohit.com",
    locale: "en_US",
    images: [
      {
        url: "https://iamohit.com/og.png",
        width: 1200,
        height: 630,
        alt: "Mohit Shrivastava - About Me",
        type: "image/png",
      },
    ],
    profile: {
      firstName: "Mohit",
      lastName: "Shrivastava",
      username: "mohit5783",
      gender: "male",
    },
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "About Mohit Shrivastava | 18+ Years Full-Stack Engineer",
    description:
      "The journey from Ujjain to Kuala Lumpur. 18+ years, 150+ projects, 8.5M users scaled.",
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
  classification: "Professional Portfolio - About",
};

// JSON-LD for Person
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohit Shrivastava",
  givenName: "Mohit",
  familyName: "Shrivastava",
  jobTitle: "Head of IT",
  description:
    "Senior Full-Stack Engineer with 18+ years of experience building scalable platforms. Scaled FMT to 8.5M monthly users with 184% growth.",
  url: "https://iamohit.com",
  image: "https://iamohit.com/og.png",
  email: "contact@iamohit.com",
  telephone: "+60183553290",
  birthPlace: {
    "@type": "Place",
    name: "Ujjain, Madhya Pradesh, India",
  },
  nationality: "Indian",
  worksFor: {
    "@type": "Organization",
    name: "Free Malaysia Today",
    url: "https://www.freemalaysiatoday.com",
  },
  alumniOf: [
    {
      "@type": "Organization",
      name: "Accenture",
    },
    {
      "@type": "EducationalOrganization",
      name: "Manipal University",
    },
    {
      "@type": "EducationalOrganization",
      name: "Aptech Computer Education",
    },
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Kubernetes",
    "GCP",
    "Performance Optimization",
    "Scalable Architecture",
    "News Platforms",
    "Vedic Astrology",
  ],
  sameAs: [
    "https://www.linkedin.com/in/mohit5783",
    "https://stackoverflow.com/users/3796048/mohit-shrivastava",
    "https://github.com/mohit5783/",
    "https://twitter.com/mohit5783",
    "https://www.facebook.com/iamohits/",
    "https://www.instagram.com/mohit5783/",
    "https://www.youtube.com/@iAMohitBytes",
  ],
};

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
      name: "About",
      item: "https://iamohit.com/about",
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      {/* Person JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd),
        }}
      />

      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      {/* Client Component with all animations */}
      <AboutContent />
    </>
  );
}
