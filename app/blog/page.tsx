import { posts } from "@/lib/posts";
import { postImage, postImageAlt } from "@/lib/postImages";

export const metadata = {
  title: "Blog | Ibrahim Akanni Ahmad",
  description: "Long-form writing about AI, technology, SEO, publishing, authors and building digital products.",
};

export default async function Blog({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const requested = Number(params.page || "1");
  const page = Number.isFinite(requested) && requested > 0 ? Math.floor(requested) : 1;
  const perPage = 10;
  const totalPages = Math.max(1, Math.ceil(posts.length / perPage));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * perPage;
  const visible = posts.slice(start, start + perPage);

  return (
    <main className="page">
      <p className="eyebrow">KNOWLEDGE LIBRARY · PAGE {safePage}</p>
      <h1>AI, technology, SEO, publishing, authors & building.</h1>
      <p className="lead">
        A growing library of long-form articles documenting projects, lessons, author discovery and current industry news.
        Articles are paginated so the index stays fast and readable as the library grows.
      </p>
      <div className="grid">
        {visible.map((post) => (
          <article className="card" key={post.slug}><img className="blog-thumb" src={postImage(post.category, post.title)} alt={postImageAlt(post.category, post.title)} loading="lazy" />
            <p className="eyebrow">{post.category}</p>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <p className="muted">{post.date}</p>
            <a href={`/blog/${post.slug}`}>Read full article →</a>
          </article>
        ))}
      </div>
      <nav className="pagination" aria-label="Blog pages">
        {safePage > 1 ? <a className="button alt" href={safePage === 2 ? "/blog" : `/blog?page=${safePage - 1}`}>← Previous</a> : <span />}
        <span className="muted">Page {safePage} of {totalPages}</span>
        {safePage < totalPages ? <a className="button" href={`/blog?page=${safePage + 1}`}>Next →</a> : <span />}
      </nav>
    </main>
  );
}
