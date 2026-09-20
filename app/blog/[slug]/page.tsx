import { notFound } from "next/navigation";
import { posts, postMap } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postMap[slug];
  return post
    ? { title: `${post.title} | Ibrahim Akanni Ahmad`, description: post.excerpt }
    : {};
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postMap[slug];
  if (!post) notFound();

  return (
    <main className="page article">
      <p className="eyebrow">{post.category} · {post.date}</p>
      <h1>{post.title}</h1>
      <p className="lead">{post.excerpt}</p>
      {post.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      {post.sources?.length ? (
        <section className="card">
          <h2>Sources &amp; further reading</h2>
          {post.sources.map((source) => (
            <p key={source.url}>
              <a href={source.url} target="_blank" rel="noreferrer">{source.label} →</a>
            </p>
          ))}
        </section>
      ) : null}
      <hr />
      <p className="muted">Part of the Ibrahim Akanni Ahmad portfolio and knowledge library.</p>
      <a href="/blog">← Back to all articles</a>
    </main>
  );
}
