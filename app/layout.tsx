import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ibrahim Akanni Ahmad | Founder, Developer & Author",
  description: "The digital headquarters of Ibrahim Akanni Ahmad — founder, builder, author and creator of a growing technology, publishing and AI ecosystem.",
  metadataBase: new URL("https://ibrahimahmad.vercel.app"),
  openGraph: {
    title: "Ibrahim Akanni Ahmad",
    description: "Founder, developer, AI builder, publisher and author.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <a className="brand" href="/">IA<span>.</span></a>
          <nav>
            <a href="/">Home</a><a href="/about">About</a><a href="/projects">Projects</a>
            <a href="/experience">Experience</a><a href="/stack">Stack</a><a href="/books">Books</a><a href="/blog">Blog</a>
            <a href="/now">Now</a><a href="/contact">Contact</a>
          </nav>
        </header>
        {children}
        <footer>
          <div className="footer-links">
            <a href="/projects">Projects</a><a href="/experience">Experience</a><a href="/gallery">Gallery</a>
            <a href="/notes">Notes</a><a href="/roadmap">Roadmap</a><a href="/books">Books</a><a href="/blog">Articles</a><a href="/ai">AI</a><a href="/contact">Contact</a>
          </div>
          © {new Date().getFullYear()} Ibrahim Akanni Ahmad · Novella Matrix
        </footer>
        <Analytics />
      </body>
    </html>
  );
}