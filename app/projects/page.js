import dynamic from "next/dynamic";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import ProjectImpactMetrics from "@/components/ProjectImpactMetrics";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProfessionalDiscretion from "@/components/ProfessionalDiscretion";
import EnhancedProjectCards from "@/components/EnhancedProjectCards";
import ProjectCTA from "@/components/ProjectCTA";

const ProjectHero = dynamic(() => import("@/components/Heros/ProjectHero"), {
  loading: () => (
    <div className="h-[900px] flex justify-center items-center bg-[#121212]">
      <div className="animate-pulse text-[#f5f543] text-xl">Loading...</div>
    </div>
  ),
});

// Enhanced metadata with canonical URL and comprehensive SEO
export const metadata = {
  // Basic metadata
  title: "150+ Projects Portfolio | 34 Public, 116 Under NDA | Mohit Shrivastava",
  description:
    "Explore 150+ projects spanning 18 years: from FMT's 8.5M user platform to Changi Airport systems, enterprise solutions for banking, healthcare, and government. 34 public showcases, 116 under NDA.",

  // Comprehensive keywords
  keywords: [
    "150+ Projects Portfolio",
    "Full Stack Developer Malaysia",
    "News Platform Development",
    "Crisis Management Technology",
    "Cost Optimization Expert",
    "Database Performance Tuning",
    "Next.js Projects",
    "React Applications",
    "Enterprise Solutions",
    "Banking Software",
    "Healthcare Systems",
    "Government Projects",
    "Frontend Development",
    "Backend Development",
    "Web 3.0",
    "Blockchain Development",
    "DevOps",
    "Kubernetes",
    "AWS",
    "GCP",
    "Free Malaysia Today",
    "FMT Platform",
    "8.5M Users",
    "184% Growth",
    "75% Cost Reduction",
    "Aircraft 360°",
    "Changi Airport",
    "Marketing Platform",
    "Accenture Projects",
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
    canonical: "https://iamohit.com/projects",
  },

  // OpenGraph metadata
  openGraph: {
    title: "150+ Projects Portfolio | Mohit Shrivastava",
    description:
      "18 years of work across 7 industries. From FMT's 8.5M user platform to enterprise solutions for banking, healthcare, and government.",
    type: "website",
    url: "https://iamohit.com/projects",
    siteName: "iamohit.com",
    locale: "en_US",
    images: [
      {
        url: "https://iamohit.com/og.png",
        width: 1200,
        height: 630,
        alt: "Mohit Shrivastava - 150+ Projects Portfolio",
        type: "image/png",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "150+ Projects Portfolio | Mohit Shrivastava",
    description:
      "34 public showcases + 116 under NDA. Enterprise solutions across banking, healthcare, government, and news media.",
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
  classification: "Professional Portfolio - Projects",
};

// JSON-LD for CollectionPage
const collectionPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "150+ Projects Portfolio",
  description:
    "A collection of 150+ projects spanning 18 years across 7 industries including news media, banking, healthcare, and government.",
  url: "https://iamohit.com/projects",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: 150,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "SoftwareApplication",
          name: "Free Malaysia Today (FMT) Platform",
          description:
            "News platform scaled to 8.5M monthly users with 184% growth",
          applicationCategory: "News Platform",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "SoftwareApplication",
          name: "Aircraft 360° - Changi Airport",
          description:
            "3D visualization system for aircraft operations at Changi Airport",
          applicationCategory: "Aviation Software",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "SoftwareApplication",
          name: "Marketing eXperiment Platform 2.0",
          description: "A/B testing platform for digital marketing campaigns",
          applicationCategory: "Marketing Technology",
        },
      },
    ],
  },
  author: {
    "@type": "Person",
    name: "Mohit Shrivastava",
    url: "https://iamohit.com",
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
      name: "Projects",
      item: "https://iamohit.com/projects",
    },
  ],
};

const Projects = () => {
  return (
    <main className="bg-[#121212] min-h-screen relative">
      {/* CollectionPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageJsonLd),
        }}
      />

      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Hero Section */}
      <ProjectHero />

      {/* Impact Metrics */}
      <ProjectImpactMetrics />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Professional Discretion Section */}
      <ProfessionalDiscretion />

      {/* All Project Cards */}
      <EnhancedProjectCards />

      {/* CTA Section */}
      <ProjectCTA />

      {/* Back to Top Button */}
      <BackToTop />
    </main>
  );
};

export default Projects;
