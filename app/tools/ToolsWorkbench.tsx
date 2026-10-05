"use client";

import { useMemo, useState } from "react";

const defaultTitle = "Your article title appears here";
const defaultDescription = "Write a clear description that tells readers what they will learn from this page.";

export default function ToolsWorkbench() {
  const [draft, setDraft] = useState("");
  const [title, setTitle] = useState(defaultTitle);
  const [description, setDescription] = useState(defaultDescription);
  const [url, setUrl] = useState("https://akode-nine.vercel.app/blog/your-article");
  const [imageUrl, setImageUrl] = useState("https://akode-nine.vercel.app/og-image.png");

  const stats = useMemo(() => {
    const words = draft.trim() ? draft.trim().split(/\s+/).length : 0;
    const characters = draft.length;
    const minutes = words ? Math.max(1, Math.ceil(words / 220)) : 0;
    return { words, characters, minutes };
  }, [draft]);

  const titleLength = title.length;
  const descriptionLength = description.length;

  return (
    <div className="tools-stack">
      <section className="tool-panel">
        <div className="tool-panel-heading">
          <div>
            <p className="eyebrow">01 · WRITING</p>
            <h2>Word counter & reading time</h2>
          </div>
          <span className="tool-kicker">No data leaves this browser</span>
        </div>
        <textarea
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Paste or write a draft here…"
          aria-label="Draft text for word count"
        />
        <div className="tool-metrics" aria-live="polite">
          <div><strong>{stats.words}</strong><span>words</span></div>
          <div><strong>{stats.characters}</strong><span>characters</span></div>
          <div><strong>{stats.minutes}</strong><span>min read</span></div>
        </div>
      </section>

      <section className="tool-panel">
        <div className="tool-panel-heading">
          <div>
            <p className="eyebrow">02 · SHARING</p>
            <h2>Social preview planner</h2>
          </div>
          <span className="tool-kicker">A visual planning aid</span>
        </div>
        <div className="tool-form-grid">
          <label>Title <input value={title} onChange={(event) => setTitle(event.target.value)} maxLength={110} /></label>
          <label>Page URL <input value={url} onChange={(event) => setUrl(event.target.value)} type="url" /></label>
          <label className="tool-wide">Description <textarea value={description} onChange={(event) => setDescription(event.target.value)} maxLength={220} /></label>
          <label className="tool-wide">Image URL <input value={imageUrl} onChange={(event) => setImageUrl(event.target.value)} type="url" /></label>
        </div>
        <div className="tool-lengths"><span className={titleLength > 70 ? "is-warn" : ""}>{titleLength}/110 title characters</span><span className={descriptionLength > 160 ? "is-warn" : ""}>{descriptionLength}/220 description characters</span></div>
        <div className="preview-card">
          <div className="preview-image" style={{ backgroundImage: `url(${imageUrl})` }} aria-label="Preview image" />
          <div className="preview-copy"><span>{url || "https://example.com/article"}</span><strong>{title || defaultTitle}</strong><p>{description || defaultDescription}</p></div>
        </div>
        <p className="tool-note">This preview helps you plan the metadata that your page should expose. It does not fetch or validate another website.</p>
      </section>

      <section className="tool-panel tool-panel-light">
        <div className="tool-panel-heading">
          <div>
            <p className="eyebrow">03 · PUBLISHING</p>
            <h2>Pre-publish checklist</h2>
          </div>
        </div>
        <div className="checklist tool-checklist">
          <span>✓ One clear search-focused title</span>
          <span>✓ A useful original introduction</span>
          <span>✓ Descriptive image alt text</span>
          <span>✓ Links to related pages on AKODE</span>
          <span>✓ A canonical URL and sitemap entry</span>
          <span>✓ Human review before publishing</span>
        </div>
      </section>
    </div>
  );
}
