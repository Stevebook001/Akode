"use client";
import {useState} from "react";
export default function Contact(){
 const [status,setStatus]=useState("");
 async function send(e:React.FormEvent<HTMLFormElement>){e.preventDefault();setStatus("Sending…");const form=new FormData(e.currentTarget);try{const r=await fetch("/api/contact",{method:"POST",body:JSON.stringify(Object.fromEntries(form)),headers:{"content-type":"application/json"}});const d=await r.json();setStatus(r.ok?"Message sent successfully.":"Could not send: "+(d.error||"unknown error"));if(r.ok)e.currentTarget.reset()}catch{setStatus("Could not reach the contact service.")}}
 return <main className="page"><p className="eyebrow">CONTACT · COLLABORATE · CONNECT</p><h1>Let&apos;s build something useful.</h1><p className="lead">This is more than a contact form. Use the portfolio to explore my work, books, articles and ecosystem, then choose the easiest way to reach me.</p>
 <div className="contact-grid">
  <section className="contact-option"><h2>Send a message</h2><p>For project ideas, partnerships, author promotion, technical conversations or general enquiries.</p><form onSubmit={send}><input name="name" placeholder="Your name" required/><input name="email" type="email" placeholder="Your email" required/><textarea name="message" placeholder="Tell me what you want to build, promote or discuss…" required/><button className="button">Send message</button></form>{status&&<p className="muted">{status}</p>}</section>
  <div className="policy-list">
   <section className="contact-option"><h2>Support</h2><p><a href="mailto:support@aeliaai.org.ng">support@aeliaai.org.ng</a></p><p className="muted">General support and portfolio enquiries.</p></section>
   <section className="contact-option"><h2>System email</h2><p><a href="mailto:no-reply@aeliaai.org.ng">no-reply@aeliaai.org.ng</a></p><p className="muted">Reserved for automated product notifications.</p></section>
   <section className="contact-option"><h2>Explore first</h2><p><a href="/projects">Projects →</a></p><p><a href="/books">Books & authors →</a></p><p><a href="/blog">Knowledge library →</a></p></section>
  </div>
 </div>
 </main>;
}