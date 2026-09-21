export const metadata = { title: "Roadmap | Ibrahim Akanni Ahmad", description: "Public roadmap for the portfolio and connected digital ecosystem." };

const stages = [
  ["01", "Foundation", "Project directory, About, Experience, Books, author discovery, articles, sitemap, analytics and reliable deployment."],
  ["02", "Knowledge layer", "Expand the editorial library, technical notes, current news, language guides, case studies and cross-links between projects."],
  ["03", "Interactive layer", "Portfolio search, richer gallery, AI-assisted navigation, project timelines and interactive project documentation."],
  ["04", "Creator layer", "More author profiles, book records, legitimate publication links, campaign resources and measurable discovery workflows."],
  ["05", "Ecosystem layer", "Deeper connections between Novella Matrix, AELIA AI, SeaChat, AKODE and future products without collapsing their separate identities."],
];

export default function Roadmap(){return <main className="page"><p className="eyebrow">PUBLIC ROADMAP</p><h1>Build the headquarters in layers.</h1><p className="lead">The portfolio is intentionally designed to grow. Each stage adds capability without requiring the whole site to be rebuilt.</p><div className="grid">{stages.map(([n,title,text])=><article className="card" key={n}><p className="eyebrow">{n}</p><h2>{title}</h2><p>{text}</p></article>)}</div><section className="feature"><h2>Near-term priorities</h2><p>More project detail pages, richer author and book indexing, searchable articles, visual case studies, verified public links, better analytics and stronger technical SEO.</p></section></main>;}