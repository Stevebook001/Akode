"use client";

import { FormEvent, useEffect, useState } from "react";

type Message = { role: "user" | "assistant"; text: string };

export default function AeliaWidget() {
  const [open, setOpen] = useState(false);
  const [notice, setNotice] = useState(true);
  const [permanent, setPermanent] = useState(false);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", text: "Hello 👋 I’m Aelia. Need any help with this portfolio?" }]);

  useEffect(() => {
    setPermanent(window.localStorage.getItem("aelia-widget-hidden") === "1");
  }, []);

  useEffect(() => {
    if (notice || permanent) return;
    const timer = window.setTimeout(() => setNotice(true), 10000);
    return () => window.clearTimeout(timer);
  }, [notice, permanent]);

  function temporaryHide() { setNotice(false); }
  function permanentlyHide() { setNotice(false); setPermanent(true); window.localStorage.setItem("aelia-widget-hidden", "1"); }

  async function send(event: FormEvent) {
    event.preventDefault();
    const text = message.trim();
    if (!text || busy) return;
    setMessage("");
    setMessages((old) => [...old, { role: "user", text }]);
    setBusy(true);
    try {
      const response = await fetch("/api/ai", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: text }) });
      const data = await response.json();
      setMessages((old) => [...old, { role: "assistant", text: data.answer || data.error || "Aelia could not reply right now." }]);
    } catch {
      setMessages((old) => [...old, { role: "assistant", text: "Aelia is temporarily offline. Please try again shortly." }]);
    } finally { setBusy(false); }
  }

  if (permanent) return null;

  return <>
    {notice && <div className="aelia-notice-wrap">
      <button type="button" className="aelia-notice-close" onClick={temporaryHide} aria-label="Temporarily hide Aelia">×</button>
      <button type="button" className="aelia-text-trigger" onClick={() => { setNotice(false); setOpen(true); }}>Hello 👋 I&apos;m Aelia — need any help?</button>
    </div>}
    {!notice && !open && <button type="button" className="aelia-reopen" onClick={() => setNotice(true)} aria-label="Show Aelia">Aelia</button>}
    {open && <div className="aelia-overlay" role="dialog" aria-modal="true" aria-label="Aelia AI chat">
      <section className="aelia-chat">
        <header className="aelia-chat-head"><div className="aelia-chat-brand"><button type="button" className="aelia-chat-menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="aelia-chat-sidebar" aria-label="Open Aelia chat menu">☰</button><strong>Aelia AI</strong></div><div><button type="button" onClick={() => setOpen(false)} aria-label="Temporarily close chat">—</button><button type="button" onClick={permanentlyHide} aria-label="Permanently hide Aelia">×</button></div></header>
        {menuOpen && <aside id="aelia-chat-sidebar" className="aelia-chat-sidebar"><strong>Conversation</strong><button type="button" onClick={() => { setMessages([{ role: "assistant", text: "New chat started. What would you like to explore?" }]); setMenuOpen(false); }}>Start new chat</button><a href="/ai">Open the full Aelia page</a><small>Aelia can answer questions about the public portfolio and its projects.</small></aside>}
        <div className="aelia-chat-body">{messages.map((item, index) => <p className={`aelia-message ${item.role}`} key={index}>{item.text}</p>)}{busy && <p className="aelia-message assistant">Aelia is thinking…</p>}</div>
        <form className="aelia-chat-form" onSubmit={send}><input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Ask about the portfolio…" aria-label="Message Aelia" /><button className="button" type="submit" disabled={busy}>Send</button></form>
        <div className="aelia-chat-links"><a href="/ai">Open full Aelia page</a><button type="button" onClick={() => setMessages([{ role: "assistant", text: "New chat started. What would you like to explore?" }])}>Start new chat</button></div>
      </section>
    </div>}
  </>;
}
