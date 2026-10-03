"use client";

import { useState } from "react";

export default function AeliaWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="aelia-text-trigger"
        onClick={() => setOpen(true)}
        aria-label="Open Aelia AI"
      >
        Aelia
      </button>
      {open && (
        <div className="aelia-overlay" role="dialog" aria-modal="true" aria-label="Aelia AI">
          <div className="aelia-chat">
            <div className="aelia-chat-head">
              <strong>Aelia</strong>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close Aelia">×</button>
            </div>
            <p className="muted">Ask about Ibrahim's projects, books, articles, technology and digital ecosystem.</p>
            <a className="button" href="/ai" onClick={() => setOpen(false)}>Open Aelia chat →</a>
          </div>
        </div>
      )}
    </>
  );
}
