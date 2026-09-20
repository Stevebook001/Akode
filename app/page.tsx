const highlights = [
  ["AI", "AELIA AI", "A unified AI platform vision spanning conversation, reasoning, creative tools, documents, search and developer capabilities.", "https://aeliaai.org"],
  ["Communication", "SeaChat", "A communication network concept built around identity, messaging, communities, creators and premium services.", "https://seachat.me"],
  ["Ecosystem", "Novella Matrix", "The wider digital ecosystem connecting software, publishing, advertising, SEO, creators and product development.", "https://novellamatrix.org"],
  ["Development", "AKODE", "A learn-build-scale direction for practical software development and digital products.", "https://akode.dev"],
];

const numbers = [
  ["15+", "connected sites & deployments"],
  ["20+", "long-form articles"],
  ["6+", "major product directions"],
  ["1", "digital headquarters"],
];

export default function Home() {
  return <main>
    <section className="hero">
      <div>
        <div className="eyebrow">IBRAHIM AKANNI AHMAD · FOUNDER · BUILDER · AUTHOR</div>
        <h1>Building ideas into <span>products, platforms and stories.</span></h1>
        <p className="lead">Founder of Novella Matrix, builder of AELIA AI, SeaChat and AKODE, and a writer documenting technology, AI, SEO, publishing and the creative process.</p>
        <div className="actions"><a className="button" href="/projects">Explore the ecosystem</a><a className="button alt" href="/blog">Read the knowledge library</a></div>
      </div>
    </section>

    <section>
      <div className="stats">{numbers.map(([n,label]) => <div key={label}><strong>{n}</strong><span>{label}</span></div>)}</div>
    </section>

    <section className="section-block">
      <div className="eyebrow">THE DIGITAL HEADQUARTERS</div>
      <h2>One portfolio. Many directions. One connected journey.</h2>
      <p className="lead">This site is being built as more than a résumé: it is a project directory, knowledge base, author-discovery space, product archive and public record of the work behind a growing ecosystem.</p>
      <div className="grid">{highlights.map(([tag,title,description,url]) => <article className="card" key={title}><p className="eyebrow">{tag}</p><h3>{title}</h3><p>{description}</p><a href={url} target="_blank" rel="noreferrer">Visit project →</a></article>)}</div>
    </section>

    <section className="feature split">
      <div><p className="eyebrow">WHAT IS HERE</p><h2>Projects, experience, writing, books and experiments.</h2></div>
      <div><p>Browse the project directory, read technical and founder notes, explore the author and book section, see the current focus, or use the AI area as the beginning of the interactive side of the portfolio.</p><div className="actions"><a className="button" href="/experience">Experience</a><a className="button alt" href="/now">What I&apos;m building now</a></div></div>
    </section>

    <section className="section-block">
      <div className="eyebrow">THE WORKBENCH</div><h2>Writing that documents the journey.</h2>
      <p className="lead">AI, web development, technical SEO, author discovery, publishing, product design, digital trust and the lessons that appear while building.</p>
      <div className="actions"><a className="button" href="/blog">Browse 20+ articles</a><a className="button alt" href="/notes">Open notes</a><a className="button alt" href="/books">Explore books & authors</a></div>
    </section>

    <section className="section-block">
      <div className="eyebrow">CONNECTED WEB PROPERTIES</div><h2>The portfolio is the map, not the whole territory.</h2>
      <p className="lead">AELIA AI, SeaChat, Novella Matrix, AKODE and other deployments have their own identities and destinations. This site keeps the relationships visible without pretending every project is the same thing.</p>
      <a className="button" href="/projects">Open the full project directory →</a>
    </section>
  </main>;
}