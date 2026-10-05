import ToolsWorkbench from "./ToolsWorkbench";

export const metadata = {
  title: "Tools | AKODE",
  description: "Small browser-based tools for writers, builders and people planning better social previews.",
};

export default function ToolsPage() {
  return (
    <main className="page">
      <p className="eyebrow">THE WORKBENCH · TOOLS</p>
      <h1>Small tools for clearer publishing.</h1>
      <p className="lead">A private, browser-based workbench for drafting, estimating reading time and planning how a page may look when shared.</p>
      <ToolsWorkbench />
      <section className="feature tools-resources">
        <p className="eyebrow">RELIABLE REFERENCES</p>
        <h2>Use tools for planning, not promises.</h2>
        <p>These utilities help you prepare content. They do not guarantee Google indexing, social-network previews or advertising approval. For those decisions, use the official documentation and your own Search Console and AdSense accounts.</p>
        <div className="actions"><a className="button alt" href="https://developers.google.com/search/docs/fundamentals/how-search-works" target="_blank" rel="noreferrer">How Google Search works ↗</a><a className="button alt" href="https://support.google.com/adsense/answer/180195" target="_blank" rel="noreferrer">AdSense revenue share ↗</a></div>
      </section>
    </main>
  );
}
