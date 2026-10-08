import { posts } from "@/lib/posts";
import { postImage, postImageAlt } from "@/lib/postImages";
import BlogExplorer from "./BlogExplorer";

export const metadata = {
  title: "Blog | Ibrahim Akanni Ahmad",
  description: "Long-form writing about AI, technology, SEO, publishing, authors and building digital products.",
};

export default async function Blog({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const requested = Number(params.page || "1");
  const page = Number.isFinite(requested) && requested > 0 ? Math.floor(requested) : 1;
  const perPage = 10;
  const items = posts.map(({ slug, title, category, excerpt, date, image, imageAlt }) => ({
    slug,
    title,
    category,
    excerpt,
    date,
    image: image ?? postImage(category, title),
    imageAlt: imageAlt ?? postImageAlt(category, title),
  }));

  return (
    <main className="page">
      <p className="eyebrow">KNOWLEDGE LIBRARY</p>
      <h1>AI, technology, SEO, publishing, authors & building.</h1>
      <p className="lead">
        A growing library of long-form articles documenting projects, lessons, author discovery and current industry news.
        Search by topic or filter by category to find the right article quickly. The library stays paginated so it remains fast and readable as it grows.
      </p>
      <BlogExplorer posts={items} initialPage={page} perPage={perPage} />
    </main>
  );
}
