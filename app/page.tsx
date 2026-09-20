const highlights = [
  ["AI", "AELIA AI", "A unified AI platform vision spanning conversation, reasoning, creative tools, documents, search and developer capabilities.", "https://aeliaai.org"],
  ["Communication", "SeaChat", "A communication network concept built around identity, messaging, communities, creators and premium services.", "https://seachat.me"],
  ["Ecosystem", "Novella Matrix", "The wider digital ecosystem connecting software, publishing, advertising, SEO, creators and product development.", "https://novellamatrix.org"],
  ["Development", "AKODE", "A learn-build-scale direction for practical software development and digital products.", "https://akode.dev"],
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div>
          <div className="eyebrow">IBRAHIM AKANNI AHMAD · FOUNDER · BUILDER · AUTHOR</div>
          <h1>Building ideas into <span>products, platforms and stories.</span></h1>
          <p className="lead">
            Founder of Novella Matrix, builder of AELIA AI, SeaChat and AKODE,
            and a writer documenting technology, SEO, publishing and the creative process.
          </p>
          <div className="actions">
            <a className="button" href="/projects">Explore the ecosystem</a>
            <a className="button alt" href="/blog">Read the knowledge library</a>
          </div>
        </div>
      </section>
      <section>
        <div className="eyebrow">THE BIG PICTURE</div>
        <h2>One portfolio. Many directions. One connected journey.</h2>
        <p className="lead">
          This site is being developed as a digital headquarters: part portfolio,
          part project directory, part knowledge base, part author-discovery space.
        </p>
        <div className="grid">
          {highlights.map(([tag, title, description, url]) => (
            <article className="card" key={title}>
              <p className="eyebrow">{tag}</p>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={url} target="_blank" rel="noreferrer">Visit project →</a>
            </article>
          ))}
        </div>
      </section>
      <section style={{ marginTop: 90 }}>
        <div className="eyebrow">CONTENT</div>
        <h2>More than a résumé</h2>
        <p className="lead">
          Explore long-form articles about AI, web development, SEO, author discovery,
          publishing, product design and the lessons behind building a growing digital ecosystem.
        </p>
        <div className="actions">
          <a className="button" href="/blog">Browse 20+ articles</a>
          <a className="button alt" href="/books">Explore books & authors</a>
        </div>
      </section>
    </main>
  );
}
