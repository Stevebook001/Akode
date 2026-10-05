"use client";
import { useEffect, useState } from "react";

const languages = [
  ["en", "English"], ["fr", "Français"], ["es", "Español"], ["de", "Deutsch"], ["pt", "Português"],
  ["ar", "العربية"], ["zh-CN", "中文"], ["ja", "日本語"], ["ko", "한국어"], ["hi", "हिन्दी"], ["sw", "Kiswahili"],
];

const links = [
  ["Explore", [["Home", "/"], ["About me", "/about"], ["Projects", "/projects"], ["Experience", "/experience"], ["Tech stack", "/stack"], ["Now", "/now"], ["Roadmap", "/roadmap"]]],
  ["Library", [["Articles", "/blog"], ["Books & authors", "/books"], ["Gallery", "/gallery"], ["Notes", "/notes"], ["Tools", "/tools"], ["Aelia AI", "/ai"]]],
  ["Connect", [["Contact", "/contact"], ["Email support", "mailto:support@aeliaai.org.ng"]]],
] as const;

export default function Sidebar() {
  const [language, setLanguage] = useState("en");
  const [open, setOpen] = useState(true);
  const [permanent, setPermanent] = useState(false);

  useEffect(() => {
    setPermanent(window.localStorage.getItem("akode-sidebar-closed") === "1");
  }, []);

  function closePermanently() {
    setPermanent(true);
    window.localStorage.setItem("akode-sidebar-closed", "1");
  }

  function translate(code: string) {
    setLanguage(code);
    if (code === "en") return;
    const url = window.location.href;
    window.open(`https://translate.google.com/translate?sl=auto&tl=${encodeURIComponent(code)}&u=${encodeURIComponent(url)}`, "_blank", "noopener,noreferrer");
  }

  if (permanent) return <button className="sidebar-reopen" type="button" onClick={() => { setPermanent(false); window.localStorage.removeItem("akode-sidebar-closed"); }} aria-label="Reopen portfolio sidebar">☰</button>;

  return <>
    <button className="sidebar-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="portfolio-sidebar">{open ? "‹" : "☰"}</button>
    {open && <button className="sidebar-backdrop" type="button" aria-label="Close sidebar" onClick={() => setOpen(false)} />}
    <aside id="portfolio-sidebar" className={`sidebar ${open ? "is-open" : "is-collapsed"}`} aria-label="Portfolio sidebar">
      <div className="sidebar-controls">
        <button type="button" onClick={() => setOpen(false)} aria-label="Temporarily close sidebar">—</button>
        <button type="button" onClick={closePermanently} aria-label="Hide sidebar until reopened">×</button>
      </div>
      <div className="sidebar-profile">
        <img src="https://i.ibb.co/B50Jq1Cj/Chat-GPT-Image-Sep-27-2026-08-04-03-AM.png" alt="Ibrahim Akanni Ahmad" />
        <strong>Ibrahim Akanni Ahmad</strong><span>Founder · Builder · Author</span>
      </div>
      {links.map(([section, sectionLinks]) => <div className="sidebar-section" key={section}>
        <span className="sidebar-label">{section}</span>
        {sectionLinks.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </div>)}
      <div className="sidebar-section"><label className="sidebar-label" htmlFor="language">Translate this site</label>
        <select id="language" value={language} onChange={(e) => translate(e.target.value)}>{languages.map(([code, name]) => <option key={code} value={code}>{name}</option>)}</select>
        <small>Opens a translated view using Google Translate.</small>
      </div>
    </aside>
  </>;
}
