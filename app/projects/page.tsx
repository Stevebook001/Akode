export const metadata = { title: "Projects & Sites | Ibrahim Akanni Ahmad", description: "The projects, products and web properties connected to Ibrahim Akanni Ahmad and Novella Matrix." };

const sites = [
  ["AELIA AI", "AI platform and intelligence ecosystem.", "https://aeliaai.org"],
  ["AELIA AI — Vercel", "Development deployment of AELIA AI.", "https://aeliaai.vercel.app"],
  ["AELIA AI — Netlify", "Additional AELIA AI deployment.", "https://aeliaai.netlify.app"],
  ["SeaChat", "Sovereign communication network concept.", "https://seachat.me"],
  ["Novella Matrix", "Wider technology, publishing and digital ecosystem.", "https://novellamatrix.org"],
  ["Novella Matrix — Netlify", "Additional Novella Matrix deployment.", "https://novellamatrix.netlify.app"],
  ["Novella Matrix Portfolio", "Portfolio deployment for the Novella Matrix ecosystem.", "https://novellamatrix-portfolio-page.netlify.app"],
  ["AKODE", "Developer-focused build and scale project.", "https://akode.dev"],
  ["AKODE — Vercel", "AKODE deployment.", "https://akodedev.vercel.app"],
  ["AK Digital Studio", "Digital studio project.", "https://ak-digital-studiou.netlify.app"],
  ["Author AK Ibrahim", "Author-focused website.", "https://author-ak-ibrahim.netlify.app"],
  ["M-I-S", "Additional digital project.", "https://m-i-s.netlify.app"],
  ["Masfada IntelSch", "Digital project deployment.", "https://masfadatintelsch.netlify.app"],
  ["Masfada IntelSch — Vercel", "Additional Masfada IntelSch deployment.", "https://masfadatintelsch.vercel.app"],
  ["Ibrahim Ahmad — Netlify", "Earlier founder portfolio deployment.", "https://ibrahimahmad2.netlify.app"],
];

const ecosystem = [
  ["AELIA AI", "Intelligence, AI tools, documents, search, creative workflows and developer capabilities."],
  ["SeaChat", "Communication, identity, communities, creators and premium services."],
  ["Novella Matrix", "The wider ecosystem connecting technology, publishing, SEO, advertising and digital products."],
  ["AKODE", "Learning, building, scaling and documenting practical software development."],
  ["Publishing", "Author profiles, book discovery, editorial features and legitimate external publication links."],
];

export default function Projects() {
  return <main className="page">
    <p className="eyebrow">PROJECT DIRECTORY</p><h1>The ecosystem, mapped in one place.</h1>
    <p className="lead">A large portfolio needs an index. This directory keeps the different products, deployments and experiments connected while clearly treating each as its own property.</p>
    <div className="stats"><div><strong>15+</strong><span>known web properties</span></div><div><strong>5</strong><span>ecosystem pillars</span></div><div><strong>4</strong><span>core product brands</span></div><div><strong>1</strong><span>central portfolio</span></div></div>
    <div className="grid">{sites.map(([name,description,url]) => <article className="card" key={url}><p className="eyebrow">SITE / PROJECT</p><h2>{name}</h2><p>{description}</p><a href={url} target="_blank" rel="noreferrer">Open website →</a></article>)}</div>
    <section className="feature"><p className="eyebrow">THE MAP</p><h2>How the ecosystem fits together.</h2><div className="grid">{ecosystem.map(([title,text])=><div className="mini-card" key={title}><h3>{title}</h3><p>{text}</p></div>)}</div></section>
    <section className="feature"><h2>Publishing destinations</h2><p>The portfolio also connects author and book discovery to external publication destinations. These links are intentionally kept as destinations rather than copied content.</p><div className="actions"><a className="button" href="/authors/namelesswriter">Namelesswriter</a><a className="button alt" href="https://m.pahina.com/novel/2611437824.html" target="_blank" rel="noreferrer">Branded Omega →</a><a className="button alt" href="https://m.pahina.com/novel/3828441344.html" target="_blank" rel="noreferrer">Second novel →</a></div></section>
  </main>;
}