import Navbar from "@/components/Navbar";
import "./globals.css";
import "highlight.js/styles/github-dark.min.css";
import { Inter, Handlee } from "next/font/google";
import Footer from "@/components/Footer";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const handlee = Handlee({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-handlee",
  display: "swap",
});

// ENHANCED JSON-LD - Added more professional context
const jsonLd = {
  "@context": "http://schema.org/",
  "@type": "Person",
  name: "Mohit Shrivastava",
  jobTitle: "Senior Full Stack Engineer", // Enhanced from "Full Stack Engineer"
  description:
    "Senior Full-Stack Engineer specializing in Next.js and scalable news platforms. Scaled FMT to 8.5M monthly users with 184% growth.", // NEW
  telephone: "(601) 8355-3290",
  url: "https://iamohit.com",
  image: "https://iamohit.com/og.png", // NEW
  knowsAbout: [
    "Next.js",
    "React",
    "Node.js",
    "Performance Optimization",
    "Kubernetes",
    "GCP",
    "News Platforms",
  ], // NEW
  alumniOf: "Accenture", // NEW
  worksFor: {
    // NEW
    "@type": "Organization",
    name: "Free Malaysia Today",
    url: "https://www.freemalaysiatoday.com",
  },
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

// ENHANCED METADATA - Enriched with more specific details
export const metadata = {
  metadataBase: new URL("https://iamohit.com"),
  title: {
    default:
      "Mohit Shrivastava | Senior Full-Stack Engineer | Next.js & Performance Specialist",
    template: "%s | iAMohit",
  },
  description:
    "Senior Full-Stack Engineer specializing in Next.js and scalable news platforms. Scaled FMT to 8.5M monthly users with 184% growth and 60% faster load times. 18 years experience across 7 industries.",
  keywords: [
    // Original broad keywords
    "Full Stack Engineer",
    "Web 3.0",
    "Blockchain",
    "Frontend Developer",
    "Backend Developer",
    // NEW: Specific high-value keywords
    "Next.js Expert",
    "Next.js Performance Optimization",
    "React Developer Malaysia",
    "News Platform Development",
    "Scalability Engineer",
    "GCP Kubernetes",
    "WordPress to Next.js Migration",
    "High Traffic Website Optimization",
    "8.5M Users Platform",
    "Malaysia Full Stack Developer",
    "Kuala Lumpur Developer",
  ],
  openGraph: {
    title:
      "Mohit Shrivastava | Senior Full-Stack Engineer | Scaled FMT to 8.5M Users",
    description:
      "Senior Full-Stack Engineer specializing in Next.js and scalable news platforms. 184% growth, 60% faster load times. 18 years experience.",
    url: "https://iamohit.com",
    siteName: "iamohit.com",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Mohit Shrivastava - Senior Full-Stack Engineer specializing in scalable news platforms",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohit Shrivastava | Senior Full-Stack Engineer",
    description:
      "Scaled FMT to 8.5M monthly users with 184% growth. Specializing in Next.js, performance optimization, and scalable news platforms.",
    siteId: "iamohit",
    creator: "@mohit5783",
    creatorId: "iamohit",
    images: ["/twitter-og.png"],
  },
  verification: {
    google: "3kX8SgptSvdF5fGJMtyEQ7aCWMER-RPtF_qxMPnSBQk",
    yandex: "272368ba1073970f",
    yahoo: "yahoo",
  },
  alternates: {
    canonical: "https://iamohit.com",
  },
  generator: "iamohit.com",
  applicationName: "iAMohit",
  referrer: "origin-when-cross-origin",
  authors: [
    { name: "Mohit" },
    { name: "Mohit Shrivastava", url: "https://iamohit.com" },
  ],
  creator: "Mohit Shrivastava",
  publisher: "Mohit Shrivastava",
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  // NEW: Additional metadata for better SEO
  category: "Technology",
  classification: "Web Development Portfolio",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  minimumScale: 1.0,
  maximumScale: 5.0,
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${handlee.variable}`}>
        <Navbar />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-LH3YGF0X59" />
      <GoogleTagManager gtmId="GT-M6QW547" />
      <Script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        id="json-ld"
      />
    </html>
  );
}
