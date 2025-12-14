import dynamic from "next/dynamic";
import QuickContactCards from "@/components/contact/QuickContactCards";
import AvailabilityStatus from "@/components/contact/AvailabilityStatus";
import TrustSignals from "@/components/contact/TrustSignals";
import ContactCTA from "@/components/contact/ContactCTA";

const ContactHero = dynamic(() => import("@/components/Heros/ContactHero"), {
  loading: () => (
    <div className="min-h-screen flex justify-center items-center bg-[#121212]">
      <div className="animate-pulse text-[#f5f543] text-xl">Loading...</div>
    </div>
  ),
});

// Enhanced metadata with canonical URL and comprehensive SEO
export const metadata = {
  // Basic metadata
  title: "Contact Mohit Shrivastava | Senior Full-Stack Engineer Available for Hire",
  description:
    "Looking for a Senior Full-Stack Engineer who scaled platforms to 8.5M users? I've achieved 184% traffic growth at FMT. Available for Next.js/React roles in Malaysia. Contact me today!",

  // Comprehensive keywords
  keywords: [
    "Contact Mohit Shrivastava",
    "Hire Full-Stack Engineer",
    "Senior Developer Malaysia",
    "Next.js Expert Available",
    "React Developer for Hire",
    "Technology Lead Malaysia",
    "News Platform Developer",
    "Media Technology Expert",
    "Performance Optimization",
    "Scalability Expert",
    "StackOverflow Top 3%",
    "Kuala Lumpur Developer",
    "Available for Hire",
    "Job Opportunities",
    "Freelance Developer",
    "Consulting",
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
    canonical: "https://iamohit.com/contact",
  },

  // OpenGraph metadata
  openGraph: {
    title: "Contact Mohit Shrivastava | Senior Full-Stack Engineer",
    description:
      "Scaled platforms to 8.5M users with 184% growth. Available for Next.js/React roles in Malaysia's news and media sector.",
    type: "website",
    url: "https://iamohit.com/contact",
    siteName: "iamohit.com",
    locale: "en_US",
    images: [
      {
        url: "https://iamohit.com/og.png",
        width: 1200,
        height: 630,
        alt: "Contact Mohit Shrivastava",
        type: "image/png",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Contact Mohit Shrivastava | Available for Hire",
    description:
      "Senior Full-Stack Engineer | 8.5M users scaled | 184% growth | Available for Next.js/React roles",
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
  category: "Contact",
  classification: "Professional Portfolio - Contact",
};

// JSON-LD for ContactPage
const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Mohit Shrivastava",
  description:
    "Get in touch with Mohit Shrivastava, Senior Full-Stack Engineer available for hire in Malaysia.",
  url: "https://iamohit.com/contact",
  mainEntity: {
    "@type": "Person",
    name: "Mohit Shrivastava",
    jobTitle: "Head of IT",
    email: "contact@iamohit.com",
    telephone: "+60183553290",
    url: "https://iamohit.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kuala Lumpur",
      addressCountry: "MY",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "professional inquiries",
      email: "contact@iamohit.com",
      telephone: "+60183553290",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://www.linkedin.com/in/mohit5783",
      "https://github.com/mohit5783/",
      "https://twitter.com/mohit5783",
      "https://wa.link/yx7qep",
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
      name: "Contact",
      item: "https://iamohit.com/contact",
    },
  ],
};

const Contact = () => {
  return (
    <main className="bg-[#121212] min-h-screen">
      {/* ContactPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageJsonLd),
        }}
      />

      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      {/* Hero Section with primary CTAs */}
      <ContactHero />

      {/* Quick Contact Methods */}
      <QuickContactCards />

      {/* Availability and What I'm Looking For */}
      <AvailabilityStatus />

      {/* Trust Signals, Privacy, and StackOverflow Badge */}
      <TrustSignals />

      {/* Final Call-to-Action */}
      <ContactCTA />
    </main>
  );
};

export default Contact;
