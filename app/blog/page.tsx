import { posts } from "@/lib/posts";

export const metadata = {
  title: "Blog | Ibrahim Akanni Ahmad",
  description: "Long-form writing about AI, technology, SEO, publishing, authors and building digital products.",
};

export default function Blog() {
  return (
    <main className="page">
      <p className="eyebrow">KNOWLEDGE LIBRARY</p>
      <h1>AI, technology, SEO, publishing, authors & building.</h1>
      <p className="lead">
        A growing library of long-form articles documenting the ideas, products,
        lessons and creative work behind this digital ecosystem.
      </p>
      <div className="grid">
        {posts.map((post) => (
          <article className="card" key={post.slug}>
            <p className="eyebrow">{post.category}</p>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <p className="muted">{post.date}</p>
            <a href={`/blog/${post.slug}`}>Read full article →</a>
          </article>
        ))}
      </div>
    </main>
  );
}
