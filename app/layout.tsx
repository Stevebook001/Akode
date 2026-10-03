import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Sidebar from "./components/Sidebar";
import AeliaWidget from "./components/AeliaWidget";
import AdSlot from "./components/AdSlot";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ibrahim Akanni Ahmad | Founder, Developer & Author",
  description: "The digital headquarters of Ibrahim Akanni Ahmad — founder, builder, author and creator of a growing technology, publishing and AI ecosystem.",
  metadataBase: new URL("https://akode-nine.vercel.app"),
  alternates: { canonical: "/" },
  icons: { icon: "https://i.ibb.co/B50Jq1Cj/Chat-GPT-Image-Sep-27-2026-08-04-03-AM.png", apple: "https://i.ibb.co/B50Jq1Cj/Chat-GPT-Image-Sep-27-2026-08-04-03-AM.png" },
  openGraph: {
    title: "Ibrahim Akanni Ahmad",
    description: "Founder, developer, AI builder, publisher and author.",
    type: "website",
    url: "https://akode-nine.vercel.app",
    images: [{ url: "https://i.ibb.co/B50Jq1Cj/Chat-GPT-Image-Sep-27-2026-08-04-03-AM.png", width: 1200, height: 630, alt: "Ibrahim Akanni Ahmad — AKODE" }],
  },
  twitter: { card: "summary_large_image", images: ["https://i.ibb.co/B50Jq1Cj/Chat-GPT-Image-Sep-27-2026-08-04-03-AM.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="topbar">
          <a className="brand" href="/" aria-label="Ibrahim Akanni Ahmad home"><img src="https://i.ibb.co/B50Jq1Cj/Chat-GPT-Image-Sep-27-2026-08-04-03-AM.png" alt="Ibrahim Akanni Ahmad" /></a>
        </header>
        <div className="site-shell"><Sidebar /><div className="site-content">{children}</div></div>
        <footer className="site-footer">
          <div className="footer-top">
            <div className="footer-identity">
              <img src="https://i.ibb.co/B50Jq1Cj/Chat-GPT-Image-Sep-27-2026-08-04-03-AM.png" alt="" />
              <strong>Ibrahim Akanni Ahmad</strong>
              <span>Founder · Builder · Author · CEO</span>
              <p>Building software, AI, publishing and digital products from Lagos.</p>
            </div>
            <div><h3>Navigate</h3><a href="/">Home</a><a href="/about">About</a><a href="/projects">Projects</a><a href="/experience">Experience</a><a href="/stack">Stack</a><a href="/roadmap">Roadmap</a><a href="/contact">Contact</a></div>
            <div><h3>Library</h3><a href="/blog">Blog</a><a href="/books">Books & authors</a><a href="/gallery">Gallery</a><a href="/notes">Notes</a><a href="/ai">Aelia</a></div>
            <div><h3>Projects</h3><a href="/projects">Project archive</a><a href="/books">Publishing</a><a href="/blog">Knowledge library</a><a href="/ai">Aelia AI</a></div>
          </div>
          <div className="footer-ad"><span>ADVERTISEMENT</span><AdSlot /></div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} Ibrahim Akanni Ahmad · Novella Matrix</span><div><a href="/terms">Terms</a><a href="/privacy">Privacy</a><a href="/cookies">Cookies</a><a href="/books-policy">Books Policy</a><a href="/code-of-conduct">Code of Conduct</a></div></div>
        </footer>    <AeliaWidget />
        <Analytics />
      </body>
    </html>
  );
}
