import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ibrahim Akanni Ahmad | Founder, Developer & Author",
  description: "Official website of Ibrahim Akanni Ahmad — founder of Novella Matrix, builder of AELIA AI, SeaChat and AKODE, and published multigenre author.",
  metadataBase: new URL("https://ibrahimahmad.vercel.app"),
  openGraph: {
    title: "Ibrahim Akanni Ahmad",
    description: "Founder, developer, AI builder and published multigenre author.",
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
            <a href="/books">Books</a><a href="/blog">Blog</a><a href="/ai">AI</a><a href="/contact">Contact</a>
          </nav>
        </header>
        {children}
        <footer>© {new Date().getFullYear()} Ibrahim Akanni Ahmad · Novella Matrix</footer>
        <Analytics />
      </body>
    </html>
  );
}