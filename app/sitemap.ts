import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://akode-nine.vercel.app";
  const staticPages = ["/","/about","/projects","/experience","/stack","/roadmap","/books","/blog","/notes","/now","/gallery","/ai","/contact","/authors/namelesswriter","/authors/sab","/book/isla-was-never-her-name"];
  return [
    ...staticPages.map((path) => ({ url: `${base}${path}` })),
    ...posts.map((post) => ({ url: `${base}/blog/${post.slug}` })),
  ];
}
