export const metadata = { title: "Gallery | Ibrahim Akanni Ahmad", description: "A visual index for projects, products, experiments and the Novella Matrix ecosystem." };

const albums = [
  ["AELIA AI", "AI product interfaces, identity, architecture concepts and future creative tooling."],
  ["SeaChat", "Communication-network identity, the ocean-inspired visual language and product concepts."],
  ["Novella Matrix", "Ecosystem pages, developer services, creator workflows and publishing concepts."],
  ["AKODE", "Developer-focused pages, experiments, code projects and build documentation."],
  ["Books & authors", "Author profiles, book discovery pages, editorial features and campaign concepts."],
  ["Web properties", "A growing archive of deployments and connected websites across the ecosystem."],
  ["Experiments", "Small interfaces, prototypes and ideas that may become larger products later."],
  ["Behind the build", "Architecture diagrams, content structures and milestones from the process."],
];

export default function Gallery() { return <main className="page">
  <p className="eyebrow">VISUAL ARCHIVE</p><h1>Projects, products and the work behind them.</h1>
  <p className="lead">This gallery is structured as an archive rather than a decorative image wall. As more screenshots, product visuals and project media are created, each collection can become a permanent record.</p>
  <div className="stats"><div><strong>8</strong><span>planned collections</span></div><div><strong>15+</strong><span>web properties</span></div><div><strong>6+</strong><span>major product directions</span></div><div><strong>1</strong><span>connected archive</span></div></div>
  <div className="grid">{albums.map(([title,text],i) => <article className="card gallery-card" key={title}><div className="gallery-number">{String(i+1).padStart(2,"0")}</div><h2>{title}</h2><p>{text}</p><span className="muted">Media collection · growing</span></article>)}</div>
  <section className="feature"><h2>Why keep a gallery?</h2><p>Visual history makes a digital portfolio easier to understand. It can show how a product changed, what an interface looked like at a particular stage, and how different projects share a design language without becoming identical.</p></section>
</main>; }
