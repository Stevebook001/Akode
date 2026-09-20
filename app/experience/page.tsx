export const metadata = { title: "Experience | Ibrahim Akanni Ahmad", description: "The working philosophy, skills and product-building experience of Ibrahim Akanni Ahmad." };

const areas = [
  ["Product architecture", "Breaking ambitious ideas into pages, services, data models, APIs, authentication, billing, observability and deployment stages."],
  ["Web development", "Working across modern web interfaces, Next.js applications, backend APIs, responsive design and production deployment."],
  ["AI systems", "Exploring AI applications through chat, reasoning, document workflows, search, creative tools and agent-like product experiences."],
  ["Digital ecosystems", "Connecting several products without pretending they are one product: each system has a clear purpose while sharing useful infrastructure and identity."],
  ["Publishing & content", "Building long-form editorial pages, author features, book discovery and content structures that can keep growing."],
  ["SEO & discovery", "Treating technical SEO, internal linking, metadata, useful articles and clear project pages as part of product architecture."],
  ["Deployment & iteration", "Using GitHub and Vercel workflows to move from source code to production, inspect failures and improve the system repeatedly."],
  ["Learning by shipping", "Turning real build problems into documentation, reusable patterns and better decisions for the next project."],
];

export default function Experience() { return <main className="page">
  <p className="eyebrow">EXPERIENCE & PRACTICE</p><h1>From idea to deployed system.</h1>
  <p className="lead">My work sits at the intersection of software, AI, publishing and digital product building. The common thread is learning by turning ideas into real systems.</p>
  <div className="grid">{areas.map(([title,text]) => <article className="card" key={title}><h2>{title}</h2><p>{text}</p></article>)}</div>
  <section className="feature"><h2>A production mindset</h2><p>A project is more than a homepage. It needs clear information architecture, reliable data handling, secure secrets, validation, useful content, analytics, error handling and a path for future maintenance.</p><p>That is the standard this portfolio is being built to document: not just what I want to build, but the engineering layers required to make ambitious ideas usable.</p></section>
</main>; }
