import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ibrahimahmad.vercel.app";
  const staticPages = ["/","/about","/projects","/experience","/books","/blog","/notes","/now","/gallery","/ai","/contact","/authors/namelesswriter"];
  return [
    ...staticPages.map((path) => ({ url: `${base}${path}` })),
    ...posts.map((post) => ({ url: `${base}/blog/${post.slug}` })),
  ];
}