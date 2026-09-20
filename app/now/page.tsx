export const metadata = { title: "Now | Ibrahim Akanni Ahmad", description: "What Ibrahim Akanni Ahmad is building and exploring right now." };

const focus = [
  ["AELIA AI", "Turning a large AI vision into a staged, production-minded platform with chat, reasoning, creative tools, documents, search, APIs, credits and future integrations."],
  ["SeaChat", "Designing a communication network around verified identity, messaging, communities, creator features, premium services and a strong privacy foundation."],
  ["Novella Matrix", "Expanding the ecosystem into a home for developers, creators, authors, SEO, advertising, digital products and shared infrastructure."],
  ["AKODE", "Building a practical learn-build-scale layer where software ideas become real projects, deployment lessons and reusable engineering patterns."],
  ["Publishing & authors", "Developing author and book discovery content that gives stories context, permanent pages and legitimate links to publication destinations."],
  ["This portfolio", "Growing this website into a public digital headquarters: projects, articles, experiments, books, author features, technical notes and a living record of the journey."],
];

export default function Now() {
  return <main className="page">
    <p className="eyebrow">CURRENT FOCUS</p>
    <h1>What I am building right now.</h1>
    <p className="lead">A snapshot of active directions. Some items are live, some are being developed, and some are long-term product directions.</p>
    <div className="stats"><div><strong>6+</strong><span>major directions</span></div><div><strong>15+</strong><span>connected web properties</span></div><div><strong>20+</strong><span>long-form articles</span></div><div><strong>∞</strong><span>ideas to document</span></div></div>
    <div className="grid">{focus.map(([title, text], i) => <article className="card" key={title}><p className="eyebrow">0{i+1}</p><h2>{title}</h2><p>{text}</p></article>)}</div>
    <section className="feature"><p className="eyebrow">DIRECTION</p><h2>Build the foundation before the noise.</h2><p>The goal is not to make every project look finished at once. The goal is to create strong foundations that can be tested, documented, connected and improved over time.</p></section>
  </main>;
}
