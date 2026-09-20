export const metadata = { title: "About Ibrahim Akanni Ahmad", description: "About the founder, builder and author behind this digital ecosystem." };

export default function About() {
  return <main className="page">
    <p className="eyebrow">ABOUT THE FOUNDER</p><h1>Ibrahim Akanni Ahmad</h1>
    <p className="lead">Founder of Novella Matrix and builder of digital products across AI, communication, software, publishing, SEO and online discovery.</p>
    <section className="feature split"><div><p className="eyebrow">THE IDEA</p><h2>A portfolio that behaves like a digital headquarters.</h2></div><div><p>A conventional résumé tells a visitor where someone has been. This site is designed to also show what is being built, what has been learned, what has been written, what is being explored and where each project lives.</p><p>That means projects get their own context, articles become a knowledge layer, books get discovery pages, and external deployments remain connected through a central map.</p></div></section>
    <div className="grid">
      <section className="card"><h2>Novella Matrix</h2><p>The wider ecosystem for technology, creators, authors, SEO, advertising, software development and product launches.</p></section>
      <section className="card"><h2>AELIA AI</h2><p>An ambitious AI platform direction focused on accessible intelligence, creative tools, research, documents, automation and developer capabilities.</p></section>
      <section className="card"><h2>SeaChat</h2><p>A communication-network concept exploring verified identity, private messaging, communities, creator features and premium services.</p></section>
      <section className="card"><h2>AKODE</h2><p>A learn-build-scale direction for practical software development, deployment and reusable engineering patterns.</p></section>
      <section className="card"><h2>Writing & publishing</h2><p>Stories, author discovery, book features and editorial content sit alongside the technology work instead of being hidden from it.</p></section>
      <section className="card"><h2>Engineering approach</h2><p>Start with the vision, break it into systems, build in stages, deploy, test, learn from failures and keep improving the foundation.</p></section>
    </div>
    <section className="feature"><h2>What this site records</h2><div className="checklist"><span>✓ Products and deployments</span><span>✓ Technical decisions and lessons</span><span>✓ AI and web experiments</span><span>✓ Author and book discovery</span><span>✓ SEO and content strategy</span><span>✓ Current focus and future directions</span></div></section>
  </main>;
}