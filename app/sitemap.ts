import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { aboutPages } from "@/lib/aboutPages";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://akode-nine.vercel.app";
  const staticPages = [
    "/", "/explore", "/marketplace", "/marketplace/terms", "/marketplace/kedi-distributor-policy",
    "/marketplace/refund-policy", "/marketplace/client-agreement", "/marketplace/technology-policy",
    "/about", "/projects", "/experience", "/stack", "/roadmap", "/books", "/blog", "/notes",
    "/now", "/gallery", "/tools", "/ai", "/contact", "/authors/namelesswriter", "/authors/sab",
    "/book/isla-was-never-her-name", "/terms", "/books-policy", "/code-of-conduct", "/cookies", "/privacy"
  ];
  const staticEntries = [...new Set(staticPages)].map(path => ({
    url: base + path,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : path === "/explore" || path === "/marketplace" || path === "/blog" || path === "/about" ? 0.9 : 0.7,
    ...(path === "/" || path === "/about" ? { images: ["https://i.ibb.co/B50Jq1Cj/Chat-GPT-Image-Sep-27-2026-08-04-03-AM.png"] } : {})
  }));
  const blogEntries = posts.map(post => ({
    url: base + "/blog/" + post.slug,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.65,
    images: [base + "/blog/" + post.slug + "/opengraph-image"]
  }));
  const aboutEntries = aboutPages.map(page => ({
    url: base + "/about/" + page.slug,
    lastModified: new Date(page.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    images: [base + "/about/" + page.slug + "/opengraph-image", page.image]
  }));
  return [...staticEntries, ...blogEntries, ...aboutEntries];
}