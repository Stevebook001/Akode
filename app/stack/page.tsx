export const metadata = { title: "Tech Stack | Ibrahim Akanni Ahmad", description: "The technologies and engineering layers used across the Ibrahim Akanni Ahmad portfolio." };

const groups = [
  ["Frontend", ["Next.js", "React", "TypeScript / TSX", "JavaScript", "HTML", "CSS"]],
  ["Backend", ["Node.js", "API routes", "server-side validation", "REST-style integrations"]],
  ["Data & services", ["PostgreSQL / SQL concepts", "MongoDB concepts", "structured content", "JSON APIs"]],
  ["AI", ["LLM APIs", "prompt and context design", "AI-assisted workflows", "document and search concepts"]],
  ["Delivery", ["GitHub", "Vercel", "environment variables", "deployment verification", "analytics"]],
  ["Discovery", ["Technical SEO", "metadata", "sitemaps", "internal linking", "long-form content"]],
];

export default function Stack(){return <main className="page"><p className="eyebrow">TECH STACK</p><h1>The tools behind the work.</h1><p className="lead">A living map of the technologies, patterns and delivery tools used or explored across my portfolio and product ecosystem.</p><div className="grid">{groups.map(([title,items])=><section className="card" key={title}><h2>{title}</h2><div className="checklist">{items.map(x=><span key={x}>✓ {x}</span>)}</div></section>)}</div><section className="feature"><h2>Stack is a means, not the product.</h2><p>The right technology depends on the problem. A small page does not need the same architecture as a communication network or an AI platform. I use the stack as a set of building blocks and choose the simplest reliable layer that can support the next stage.</p></section></main>;}