import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://akode-nine.vercel.app";
  const staticPages = ["/","/about","/projects","/experience","/stack","/roadmap","/books","/blog","/notes","/now","/gallery","/tools","/ai","/contact","/authors/namelesswriter","/authors/sab","/book/isla-was-never-her-name","/terms","/books-policy","/code-of-conduct","/cookies","/privacy","/blog/aelia-ai-how-to-use-the-platform","/blog/aelia-ai-october-2026-product-direction","/blog/aelia-ai-building-a-connected-ecosystem"];
  return [
    ...staticPages.map((path) => ({ url: `${base}${path}`, lastModified: new Date() })),
    ...posts.map((post) => ({ url: `${base}/blog/${post.slug}`, lastModified: new Date(post.date) })),
  ];
}
