import ExperienceCard from "@/components/ExperienceCard";
import SkillsCards from "@/components/SkillsCards";
import { ExperienceData } from "@/components/data/experience";
import dynamic from "next/dynamic";

// Dynamically import components for better performance
const ExpHero = dynamic(() => import("@/components/Heros/ExpHero"), {
  loading: () => (
    <p className="h-screen justify-center items-center flex">Loading...</p>
  ),
});

const ImpactMetrics = dynamic(
  () => import("@/components/experience/ImpactMetrics"),
  {
    loading: () => <div className="h-96"></div>,
  }
);

const CompleteFMTStory = dynamic(
  () => import("@/components/experience/CompleteFMTStory"),
  {
    loading: () => <div className="h-96"></div>,
  }
);

const CareerTimeline = dynamic(
  () => import("@/components/experience/CareerTimeline"),
  {
    loading: () => <div className="h-96"></div>,
  }
);

const TechEvolution = dynamic(
  () => import("@/components/experience/TechEvolution"),
  {
    loading: () => <div className="h-96"></div>,
  }
);

const FinalCTA = dynamic(() => import("@/components/experience/FinalCTA"), {
  loading: () => <div className="h-96"></div>,
});

// Enhanced metadata with focused keywords and canonical URL
export const metadata = {
  // Basic metadata
  title:
    "18+ Years Experience | Built Systems Serving 8.5M+ Users | Mohit Shrivastava",
  description:
    "Senior Full-Stack Engineer with 18+ years building scalable platforms. Led FMT to 8.5M users with 184% growth & 75% faster load times. Next.js, React, GCP, Kubernetes expert. Top 3% StackOverflow.",

  // Comprehensive keywords
  keywords: [
    "Senior Full Stack Engineer Malaysia",
    "Next.js Expert Kuala Lumpur",
    "React Performance Specialist",
    "News Platform Developer",
    "18 Years Experience Developer",
    "Scalability Architect",
    "GCP Cloud Run Expert",
    "Kubernetes Developer Malaysia",
    "Enterprise Solutions Architect",
    "Technology Lead Malaysia",
    "Full Stack Team Lead",
    "Performance Optimization Expert",
    "FMT Developer",
    "Head of IT Malaysia",
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
    canonical: "https://iamohit.com/experience",
  },

  // OpenGraph metadata
  openGraph: {
    title:
      "18+ Years Experience | Systems Serving Millions | Mohit Shrivastava",
    description:
      "From Visual Basic (2006) to Next.js (2025). Scaled FMT to 8.5M users. 150+ projects. Top 3% StackOverflow. 18+ years building enterprise solutions.",
    type: "website",
    url: "https://iamohit.com/experience",
    siteName: "iamohit.com",
    locale: "en_US",
    images: [
      {
        url: "https://iamohit.com/og.png",
        width: 1200,
        height: 630,
        alt: "Mohit Shrivastava - 18+ Years Experience in Full-Stack Development",
        type: "image/png",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "18+ Years Experience | Mohit Shrivastava",
    description:
      "Senior Full-Stack Engineer | 8.5M users | 184% growth | Next.js expert | Top 3% StackOverflow",
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
  classification: "Professional Portfolio - Work Experience",
};

// JSON-LD for ProfilePage
const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Mohit Shrivastava",
    jobTitle: "Head of IT",
    description:
      "Senior Full-Stack Engineer with 18+ years of experience building scalable platforms serving millions of users.",
    url: "https://iamohit.com",
    image: "https://iamohit.com/og.png",
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
      "Kubernetes",
      "GCP",
      "Performance Optimization",
      "Scalable Architecture",
      "News Platforms",
    ],
    sameAs: [
      "https://www.linkedin.com/in/mohit5783",
      "https://stackoverflow.com/users/3796048/mohit-shrivastava",
      "https://github.com/mohit5783/",
      "https://twitter.com/mohit5783",
    ],
  },
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
      name: "Experience",
      item: "https://iamohit.com/experience",
    },
  ],
};

const Experience = () => {
  return (
    <section>
      {/* ProfilePage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageJsonLd),
        }}
      />

      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      {/* 1. Enhanced Hero Section */}
      <ExpHero />

      {/* 2. Impact Metrics - Career Breadth (NO FMT-specific stats) */}
      <ImpactMetrics />

      {/* 3. Complete FMT Story (NEW - The Complete Turnaround Story) */}
      <CompleteFMTStory />

      {/* 4. Career Timeline Overview */}
      <CareerTimeline />

      {/* 5. Technology Evolution */}
      <TechEvolution />

      {/* 6. Detailed Experience Cards (Enhanced with animations) */}
      <div className="bg-linear-to-b from-[#121212] to-[#1a1a1a] py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Detailed <span className="text-[#f5f543]">Work Experience</span>
            </h2>
            <p className="text-xl text-gray-400">
              Deep dive into my achievements at each company
            </p>
          </div>

          {ExperienceData.sort(
            (a, b) => new Date(b.startDate) - new Date(a.startDate)
          ).map((exp, index) => (
            <ExperienceCard key={index} ExpData={exp} />
          ))}
        </div>
      </div>

      {/* 7. Skills Showcase (Reorganized) */}
      <div className="bg-[#121212] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical <span className="text-[#f5f543]">Skills</span>
            </h2>
            <p className="text-xl text-gray-400">
              Technologies I've mastered over 18 years
            </p>
          </div>
          <SkillsCards show="all" />
        </div>
      </div>

      {/* 8. Final CTA Section */}
      <FinalCTA />
    </section>
  );
};

export default Experience;
