import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://akode-nine.vercel.app";
  const staticPages = [
    "/", "/explore", "/marketplace", "/marketplace/terms", "/marketplace/kedi-distributor-policy",
    "/marketplace/refund-policy", "/marketplace/client-agreement", "/marketplace/technology-policy",
    "/about", "/about/ibrahim-akanni-ahmad", "/projects", "/experience", "/stack", "/roadmap",
    "/books", "/blog", "/notes", "/now", "/gallery", "/tools", "/ai", "/contact",
    "/authors/namelesswriter", "/authors/sab", "/book/isla-was-never-her-name",
    "/terms", "/books-policy", "/code-of-conduct", "/cookies", "/privacy"
  ];
  const paths = [...new Set(staticPages)];
  return [
    ...paths.map((path) => ({ url: base + path, lastModified: new Date(), changeFrequency: "weekly" as const, priority: path === "/" ? 1 : path === "/explore" || path === "/marketplace" ? 0.9 : 0.7 })),
    ...posts.map((post) => ({ url: base + "/blog/" + post.slug, lastModified: new Date(post.date), changeFrequency: "monthly" as const, priority: 0.65 })),
  ];
}
