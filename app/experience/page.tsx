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

const stack: [string, number, string, string][] = [
  ["TypeScript / TSX", 55, "Typed application code and React/Next.js components. TypeScript helps define data shapes, catch mistakes earlier and make larger codebases easier to refactor.", "/blog/why-typescript-matters-in-modern-web-products"],
  ["JavaScript", 20, "The runtime language behind browser behavior, React, APIs and Node.js. It connects interface interactions with application logic.", "/blog/what-javascript-does-beyond-the-interface"],
  ["CSS", 15, "The presentation layer: responsive layouts, spacing, typography, cards, navigation, mobile behavior and visual identity.", "/blog/javascript-typescript-css-and-html-in-my-stack"],
  ["HTML", 5, "The semantic structure that gives pages headings, links, forms and content that browsers, users and search crawlers can understand.", "/blog/javascript-typescript-css-and-html-in-my-stack"],
  ["JSON / configuration", 5, "A practical data and configuration format used around package metadata, structured settings, API payloads and tooling.", "/blog/javascript-typescript-css-and-html-in-my-stack"],
];

export default function Experience() { return <main className="page">
  <p className="eyebrow">EXPERIENCE & PRACTICE</p><h1>From idea to deployed system.</h1>
  <p className="lead">My work sits at the intersection of software, AI, publishing and digital product building. The common thread is learning by turning ideas into real systems.</p>
  <div className="grid">{areas.map(([title,text]) => <article className="card" key={title}><h2>{title}</h2><p>{text}</p></article>)}</div>
  <section className="feature"><p className="eyebrow">CURRENT WORKING MIX</p><h2>The languages and formats I use most in this web-building workflow.</h2><p>These percentages are a portfolio working mix for communicating where each technology appears most often in the current workflow; they are <strong>not a formal proficiency score</strong>.</p><div className="grid">{stack.map(([name,pct,description,href]) => <article className="card" key={name}><div style={{display:"flex",justifyContent:"space-between",gap:12}}><h3>{name}</h3><strong>{pct}%</strong></div><div style={{height:8,background:"#10263a",borderRadius:99,overflow:"hidden"}}><div style={{width:pct+"%",height:"100%",background:"#00e5ff"}} /></div><p>{description}</p><a href={href}>Read the related article →</a></article>)}</div></section>
  <section className="feature"><h2>A production mindset</h2><p>A project is more than a homepage. It needs clear information architecture, reliable data handling, secure secrets, validation, useful content, analytics, error handling and a path for future maintenance.</p><p>That is the standard this portfolio is being built to document: not just what I want to build, but the engineering layers required to make ambitious ideas usable.</p></section>
</main>; }