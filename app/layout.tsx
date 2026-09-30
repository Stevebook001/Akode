import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Sidebar from "./components/Sidebar";
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
        <header>
          <a className="brand" href="/" aria-label="Ibrahim Akanni Ahmad home"><img src="https://i.ibb.co/B50Jq1Cj/Chat-GPT-Image-Sep-27-2026-08-04-03-AM.png" alt="Ibrahim Akanni Ahmad" /></a>
          <nav>
            <a href="/">Home</a><a href="/about">About</a><a href="/projects">Projects</a>
            <a href="/experience">Experience</a><a href="/stack">Stack</a><a href="/books">Books</a><a href="/blog">Blog</a>
            <a href="/now">Now</a><a href="/contact">Contact</a>
          </nav>
        </header>
        <div className="site-shell"><Sidebar /><div className="site-content">{children}</div></div>
        <footer>
          <div className="footer-brand"><img src="https://i.ibb.co/B50Jq1Cj/Chat-GPT-Image-Sep-27-2026-08-04-03-AM.png" alt="" /><div><strong>Ibrahim Akanni Ahmad</strong><span>Founder · Builder · Author · CEO</span></div></div>
          <div className="footer-links">
            <a href="/projects">Projects</a><a href="/experience">Experience</a><a href="/gallery">Gallery</a>
            <a href="/notes">Notes</a><a href="/roadmap">Roadmap</a><a href="/books">Books</a><a href="/blog">Articles</a><a href="/ai">AI</a><a href="/contact">Contact</a>
          </div>
          <div className="footer-legal"><a href="/terms">Terms of Service</a><a href="/books-policy">Books Policy</a><a href="/code-of-conduct">Code of Conduct</a><a href="/cookies">Cookies Policy</a><a href="/privacy">Privacy</a></div>
          <p>Contact: <a href="mailto:support@aeliaai.org.ng">support@aeliaai.org.ng</a> · <a href="mailto:no-reply@aeliaai.org.ng">no-reply@aeliaai.org.ng</a></p>
          © {new Date().getFullYear()} Ibrahim Akanni Ahmad · Novella Matrix
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
