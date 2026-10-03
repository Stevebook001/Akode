"use client";
import { useState } from "react";

const languages = [
  ["en","English"],["fr","Français"],["es","Español"],["de","Deutsch"],["pt","Português"],
  ["ar","العربية"],["zh-CN","中文"],["ja","日本語"],["ko","한국어"],["hi","हिन्दी"],["sw","Kiswahili"]
];

export default function Sidebar(){
  const [language,setLanguage]=useState("en");
  function translate(code:string){
    setLanguage(code);
    if(code==="en") return;
    const url=window.location.href;
    window.open(`https://translate.google.com/translate?sl=auto&tl=${encodeURIComponent(code)}&u=${encodeURIComponent(url)}`,"_blank","noopener,noreferrer");
  }
  return <aside className="sidebar" aria-label="Portfolio sidebar">
    <div className="sidebar-profile">
      <img src="https://i.ibb.co/B50Jq1Cj/Chat-GPT-Image-Sep-27-2026-08-04-03-AM.png" alt="Ibrahim Akanni Ahmad" />
      <strong>Ibrahim Akanni Ahmad</strong><span>Founder · Builder · Author</span>
    </div>
    <div className="sidebar-section"><span className="sidebar-label">Explore</span>
      <a href="/">Home</a><a href="/about">About me</a><a href="/projects">Projects</a><a href="/experience">Experience</a><a href="/stack">Tech stack</a><a href="/now">Now</a><a href="/roadmap">Roadmap</a>
    </div>
    <div className="sidebar-section"><span className="sidebar-label">Library</span>
      <a href="/blog">Articles</a><a href="/books">Books & authors</a><a href="/gallery">Gallery</a><a href="/notes">Notes</a><a href="/ai">Aelia AI</a>
    </div>
    <div className="sidebar-section"><span className="sidebar-label">Connect</span><a href="/contact">Contact</a><a href="mailto:support@aeliaai.org.ng">Email support</a></div>
    <div className="sidebar-section"><label className="sidebar-label" htmlFor="language">Translate this site</label>
      <select id="language" value={language} onChange={e=>translate(e.target.value)}>{languages.map(([code,name])=><option key={code} value={code}>{name}</option>)}</select>
      <small>Opens a translated view using Google Translate.</small>
    </div>
  </aside>;
}
