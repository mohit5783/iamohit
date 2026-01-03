"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { useEffect, useState } from "react";
import {
  FiCalendar,
  FiClock,
  FiTag,
  FiFolder,
  FiBookOpen,
  FiArrowLeft,
  FiArrowRight,
  FiShare2,
  FiTwitter,
  FiLinkedin,
  FiLink,
} from "react-icons/fi";

// Custom components for ReactMarkdown
const MarkdownComponents = {
  h1: ({ children }) => (
    <h1
      id={generateId(children)}
      className="text-4xl font-bold mt-12 mb-6 text-white scroll-mt-24"
    >
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2
      id={generateId(children)}
      className="text-3xl font-bold mt-10 mb-4 text-white scroll-mt-24"
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      id={generateId(children)}
      className="text-2xl font-semibold mt-8 mb-3 text-white scroll-mt-24"
    >
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4
      id={generateId(children)}
      className="text-xl font-semibold mt-6 mb-2 text-white scroll-mt-24"
    >
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-gray-300 leading-relaxed mb-4">{children}</p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-[#f5f543] hover:underline"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-outside ml-6 space-y-2 mb-4 text-gray-300">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside ml-6 space-y-2 mb-4 text-gray-300">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="text-gray-300">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-[#f5f543] pl-4 italic text-gray-400 my-6">
      {children}
    </blockquote>
  ),
  code: ({ inline, className, children }) => {
    if (inline) {
      return (
        <code className="bg-gray-800 px-2 py-1 rounded text-[#f5f543] text-sm">
          {children}
        </code>
      );
    }
    return (
      <code className={`${className} block overflow-x-auto`}>{children}</code>
    );
  },
  pre: ({ children }) => (
    <pre className="bg-[#1a1a1a] rounded-lg p-4 overflow-x-auto my-6 border border-gray-800">
      {children}
    </pre>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full border border-gray-700 rounded-lg overflow-hidden">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-gray-800">{children}</thead>,
  th: ({ children }) => (
    <th className="px-4 py-3 text-left text-[#f5f543] font-semibold border-b border-gray-700">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-gray-300 border-b border-gray-800">
      {children}
    </td>
  ),
  img: ({ src, alt }) => (
    <span className="block my-6">
      <Image
        src={src}
        alt={alt || "Blog image"}
        width={800}
        height={450}
        className="rounded-lg"
      />
    </span>
  ),
  hr: () => <hr className="border-gray-700 my-8" />,
  strong: ({ children }) => (
    <strong className="font-bold text-white">{children}</strong>
  ),
  em: ({ children }) => <em className="italic text-gray-300">{children}</em>,
};

// Generate ID for headings (for ToC links)
function generateId(children) {
  const text =
    typeof children === "string"
      ? children
      : Array.isArray(children)
      ? children.map((c) => (typeof c === "string" ? c : "")).join("")
      : "";
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Extract headings from content for ToC
function extractHeadings(content) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    headings.push({
      level: match[1].length,
      text: match[2],
      id: generateId(match[2]),
    });
  }

  return headings;
}

// Table of Contents Component
function TableOfContents({ headings }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="hidden xl:block sticky top-24 ml-8 w-64 max-h-[calc(100vh-8rem)] overflow-y-auto"
    >
      <div className="p-4 bg-gray-900/50 border border-gray-800 rounded-xl">
        <h4 className="text-sm font-semibold text-[#f5f543] mb-3 flex items-center gap-2">
          <FiBookOpen />
          Table of Contents
        </h4>
        <ul className="space-y-2">
          {headings.map(({ level, text, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`block text-sm transition-colors duration-200 ${
                  level === 3 ? "pl-4" : ""
                } ${
                  activeId === id
                    ? "text-[#f5f543]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

// Related Posts Component
function RelatedPosts({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-16"
    >
      <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-[#f5f543]/50 transition-all duration-300"
          >
            <div className="flex gap-4">
              {post.image && (
                <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-white group-hover:text-[#f5f543] transition-colors line-clamp-2 mb-2">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-400 line-clamp-2">
                  {post.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

// Series Navigation Component
function SeriesNavigation({ series, seriesOrder, relatedPosts }) {
  if (!series) return null;

  // Find previous and next in series from related posts
  const seriesPosts = relatedPosts?.filter((p) => p.series === series) || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-8 p-4 bg-[#f5f543]/10 border border-[#f5f543]/30 rounded-xl"
    >
      <div className="flex items-center gap-2 text-[#f5f543] text-sm font-medium mb-2">
        <FiFolder />
        <span>Part of series: {series}</span>
        {seriesOrder && (
          <span className="text-gray-400">• Part {seriesOrder}</span>
        )}
      </div>
      {seriesPosts.length > 0 && (
        <div className="text-sm text-gray-400">
          {seriesPosts.length} article{seriesPosts.length > 1 ? "s" : ""} in
          this series
        </div>
      )}
    </motion.div>
  );
}

// Share Buttons Component
function ShareButtons({ title, url }) {
  const [copied, setCopied] = useState(false);
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-gray-400 text-sm flex items-center gap-1">
        <FiShare2 />
        Share:
      </span>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-gray-800 rounded-lg hover:bg-[#1DA1F2] transition-colors"
        title="Share on Twitter"
      >
        <FiTwitter className="w-4 h-4" />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-gray-800 rounded-lg hover:bg-[#0077B5] transition-colors"
        title="Share on LinkedIn"
      >
        <FiLinkedin className="w-4 h-4" />
      </a>
      <button
        onClick={copyLink}
        className="p-2 bg-gray-800 rounded-lg hover:bg-[#f5f543] hover:text-black transition-colors"
        title="Copy link"
      >
        <FiLink className="w-4 h-4" />
      </button>
      {copied && (
        <span className="text-green-400 text-sm animate-pulse">Copied!</span>
      )}
    </div>
  );
}

export default function BlogPostClient({ post, relatedPosts = [] }) {
  const headings = post.toc ? extractHeadings(post.content) : [];
  const postUrl = `https://iamohit.com/blog/${post.slug}`;

  return (
    <div className="min-h-screen bg-[#121212] mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1 max-w-4xl">
            {/* Back to Blog */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-[#f5f543] transition-colors mb-8"
              >
                <FiArrowLeft />
                Back to Blog
              </Link>
            </motion.div>

            {/* Series Navigation */}
            <SeriesNavigation
              series={post.series}
              seriesOrder={post.seriesOrder}
              relatedPosts={relatedPosts}
            />

            {/* Article Header */}
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              {/* Category Badge */}
              {post.category && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center gap-1 text-sm px-3 py-1 bg-[#f5f543]/20 text-[#f5f543] rounded-full mb-4"
                >
                  <FiFolder className="w-3 h-3" />
                  {post.category}
                </motion.span>
              )}

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-6">
                <div className="flex items-center gap-1">
                  <FiCalendar className="text-[#f5f543]" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                {post.modifiedDate && post.modifiedDate !== post.date && (
                  <div className="flex items-center gap-1 text-gray-500">
                    <span>Updated:</span>
                    <time dateTime={post.modifiedDate}>
                      {new Date(post.modifiedDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <FiClock className="text-[#f5f543]" />
                  <span>{post.readTime}</span>
                </div>
                {post.wordCount && (
                  <div className="text-gray-500">
                    {post.wordCount.toLocaleString()} words
                  </div>
                )}
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                    >
                      <FiTag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Share Buttons */}
              <ShareButtons title={post.title} url={postUrl} />

              {/* Featured Image */}
              {post.image && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative h-72 md:h-96 lg:h-[550px] rounded-2xl overflow-hidden border border-gray-800 mt-8"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    priority
                    className="object-cover"
                  />
                </motion.div>
              )}
            </motion.header>

            {/* Excerpt/Summary */}
            {post.excerpt && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-8 p-6 bg-gray-900/50 border-l-4 border-[#f5f543] rounded-r-xl"
              >
                <p className="text-lg text-gray-300 italic leading-relaxed">
                  {post.excerpt}
                </p>
              </motion.div>
            )}

            {/* Article Content */}
            <motion.article
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="prose prose-invert prose-lg max-w-none"
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={MarkdownComponents}
              >
                {post.content}
              </ReactMarkdown>
            </motion.article>

            {/* Author Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-16 p-8 bg-linear-to-br from-gray-900 to-black border border-gray-800 rounded-2xl"
            >
              <div className="flex items-center gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="w-20 h-20 rounded-full bg-linear-to-br from-[#f5f543] to-yellow-600 flex items-center justify-center text-3xl font-bold text-black shrink-0"
                >
                  M
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {post.author || "Mohit Shrivastava"}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    Senior Full-Stack Engineer with 18+ years of experience.
                    Head of IT at Free Malaysia Today. Scaled platforms to 8.5M
                    monthly users. Top 3% on StackOverflow. Specialized in
                    Next.js, performance optimization, and high-traffic systems.
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://twitter.com/mohit5783"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#1DA1F2] transition-colors"
                    >
                      <FiTwitter className="w-5 h-5" />
                    </a>
                    <a
                      href="https://linkedin.com/in/mohit5783"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#0077B5] transition-colors"
                    >
                      <FiLinkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Related Posts */}
            <RelatedPosts posts={relatedPosts} />

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 text-center p-8 bg-linear-to-r from-[#f5f543]/10 to-transparent border border-[#f5f543]/20 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Need help scaling your platform?
              </h3>
              <p className="text-gray-400 mb-6">
                Let's discuss how I can help you achieve similar results.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#f5f543] text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Get In Touch
                <FiArrowRight />
              </Link>
            </motion.div>
          </div>

          {/* Table of Contents Sidebar */}
          {post.toc && headings.length > 0 && (
            <TableOfContents headings={headings} />
          )}
        </div>
      </div>
    </div>
  );
}
