import { notFound } from "next/navigation";
import { posts, postMap } from "@/lib/posts";

export function generateStaticParams() { return posts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postMap[slug];
  return post ? { title: `${post.title} | Ibrahim Akanni Ahmad`, description: post.excerpt } : {};
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postMap[slug];
  if (!post) notFound();
  const authorArticle = post.category === "Authors" || post.category === "Publishing";
  return <main className="page article">
    <p className="eyebrow">{post.category} · {post.date}</p>
    <h1>{post.title}</h1>
    <p className="lead">{post.excerpt}</p>
    {post.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
    {authorArticle && <section className="feature"><p className="eyebrow">FEATURED BOOK & AUTHOR</p><h2>Amadi Gift — Namelesswriter</h2><p>This portfolio includes a dedicated author feature and publication links supplied for the author. The links below lead to the external publication destinations.</p><div className="actions"><a className="button" href="/authors/namelesswriter">Author feature</a><a className="button alt" href="https://m.pahina.com/novel/2611437824.html" target="_blank" rel="noreferrer">Branded Omega →</a><a className="button alt" href="https://m.pahina.com/novel/3828441344.html" target="_blank" rel="noreferrer">Second novel →</a></div></section>}
    {post.sources?.length ? <section className="card"><h2>Sources &amp; further reading</h2>{post.sources.map((source) => <p key={source.url}><a href={source.url} target={source.url.startsWith("http") ? "_blank" : undefined} rel={source.url.startsWith("http") ? "noreferrer" : undefined}>{source.label} →</a></p>)}</section> : null}
    <hr /><p className="muted">Part of the Ibrahim Akanni Ahmad portfolio and knowledge library.</p><a href="/blog">← Back to all articles</a>
  </main>;
}