export const metadata = { title: "Blog | Ibrahim Akanni Ahmad" };

export default function Blog() {
  return (
    <main className="page">
      <p className="eyebrow">BLOG</p>
      <h1>Books, technology, SEO &amp; building.</h1>
      <p className="lead">
        Long-form articles and project notes published from Ibrahim Akanni
        Ahmad&apos;s digital workspace.
      </p>
      <div className="grid">
        <article className="card">
          <p className="eyebrow">BOOK FEATURE</p>
          <h2>Branded Omega — an introduction to Namelesswriter&apos;s novel</h2>
          <p>
            A reader-focused introduction to the novel, its author and the
            themes that make the story worth exploring.
          </p>
          <a href="/blog/branded-omega">Read article →</a>
        </article>
        <article className="card">
          <p className="eyebrow">TECH</p>
          <h2>Building an independent AI ecosystem</h2>
          <p>
            Why products like AELIA AI, SeaChat and AKODE are being developed
            as connected parts of a larger ecosystem.
          </p>
        </article>
        <article className="card">
          <p className="eyebrow">SEO</p>
          <h2>Why useful long-form content matters</h2>
          <p>
            A practical look at creating pages that help real readers before
            chasing search rankings.
          </p>
        </article>
      </div>
    </main>
  );
}