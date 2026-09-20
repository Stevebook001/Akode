export const metadata = {
  title: "Projects & Sites | Ibrahim Akanni Ahmad",
  description: "The projects, products and web properties connected to Ibrahim Akanni Ahmad and Novella Matrix.",
};

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
  ["Ibrahim Ahmad", "Founder portfolio and central digital identity.", "https://ibrahimahmad2.netlify.app"],
];

export default function Projects() {
  return (
    <main className="page">
      <p className="eyebrow">PROJECT DIRECTORY</p>
      <h1>The ecosystem, mapped in one place.</h1>
      <p className="lead">
        This directory connects the portfolio to the projects and deployments
        that have been part of the wider journey. Some are active, some are
        experiments or alternate deployments, and their status can change over time.
      </p>
      <div className="grid">
        {sites.map(([name, description, url]) => (
          <article className="card" key={url}>
            <p className="eyebrow">SITE / PROJECT</p>
            <h2>{name}</h2>
            <p>{description}</p>
            <a href={url} target="_blank" rel="noreferrer">Open website →</a>
          </article>
        ))}
      </div>
      <section className="feature">
        <h2>How the ecosystem fits together</h2>
        <p>
          Novella Matrix is the wider ecosystem. AELIA AI explores intelligence,
          SeaChat explores communication, AKODE explores software building, and
          the publishing and author work explores discovery for stories and creators.
          This portfolio is the map connecting those directions.
        </p>
      </section>
    </main>
  );
}
