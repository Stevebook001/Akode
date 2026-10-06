"use client";

import { useEffect, useMemo, useState } from "react";

type BlogItem = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  image?: string;
  imageAlt?: string;
};

type BlogExplorerProps = {
  posts: BlogItem[];
  initialPage: number;
  perPage: number;
};

export default function BlogExplorer({ posts, initialPage, perPage }: BlogExplorerProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All categories");
  const [page, setPage] = useState(initialPage);

  const categories = useMemo(
    () => ["All categories", ...Array.from(new Set(posts.map((post) => post.category))).sort()],
    [posts],
  );

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = category === "All categories" || post.category === category;
      const searchable = `${post.title} ${post.excerpt} ${post.category} ${post.date}`.toLowerCase();
      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [category, posts, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const safePage = Math.min(page, totalPages);
  const visible = filtered.slice((safePage - 1) * perPage, safePage * perPage);

  useEffect(() => {
    setPage(1);
  }, [category, query]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  return (
    <>
      <section className="blog-explorer" aria-label="Search and filter articles">
        <div className="blog-search-field">
          <label htmlFor="blog-search">Search the library</label>
          <input
            id="blog-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search AI, SEO, authors, projects..."
          />
        </div>
        <div className="blog-category-field">
          <label htmlFor="blog-category">Category</label>
          <select id="blog-category" value={category} onChange={(event) => setCategory(event.target.value)}>
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
        <button className="button alt blog-reset" type="button" onClick={() => { setQuery(""); setCategory("All categories"); }}>
          Reset
        </button>
      </section>

      <div className="blog-results-summary" aria-live="polite">
        <strong>{filtered.length}</strong> {filtered.length === 1 ? "article" : "articles"} found
        {query || category !== "All categories" ? <span> · Filtered from {posts.length} total</span> : null}
      </div>

      {visible.length > 0 ? (
        <div className="grid">
          {visible.map((post) => (
            <article className="card" key={post.slug}>
              {post.image ? <img className="blog-thumb" src={post.image} alt={post.imageAlt || post.title} loading="lazy" /> : null}
              <p className="eyebrow">{post.category}</p>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <p className="muted">{post.date}</p>
              <a href={`/blog/${post.slug}`}>Read full article →</a>
            </article>
          ))}
        </div>
      ) : (
        <div className="blog-empty-state">
          <h2>No articles match that search.</h2>
          <p>Try a broader term or reset the category filter to browse the full library.</p>
          <button className="button" type="button" onClick={() => { setQuery(""); setCategory("All categories"); }}>Show all articles</button>
        </div>
      )}

      <nav className="pagination" aria-label="Filtered blog pages">
        <button className="button alt" type="button" disabled={safePage <= 1} onClick={() => setPage((current) => Math.max(1, current - 1))}>← Previous</button>
        <span className="muted">Page {safePage} of {totalPages}</span>
        <button className="button" type="button" disabled={safePage >= totalPages} onClick={() => setPage((current) => Math.min(totalPages, current + 1))}>Next →</button>
      </nav>
    </>
  );
}
