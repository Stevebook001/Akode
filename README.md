# AKODE — Ibrahim Akanni Ahmad Portfolio

**Learn · Build · Scale**

This repository powers the public portfolio and knowledge hub for **Ibrahim Akanni Ahmad**, founder of Novella Matrix and builder of AELIA AI, SeaChat, AKODE and related digital projects.

## What this site contains

- Founder profile and long-form About page
- Project and deployment directory
- Experience and technology stack
- Current **Now** page
- Gallery and project archive
- Books and author discovery
- Author features and legitimate external publication links
- Long-form articles covering AI, web development, SEO, publishing, authors and technology news
- Daily/dated technology and SEO news posts with sources
- AI portfolio interface
- Contact workflow
- Sitemap and metadata for search discovery
- Vercel Analytics integration

## Featured ecosystem

- AELIA AI — https://aeliaai.org
- SeaChat — https://seachat.me
- Novella Matrix — https://novellamatrix.org
- AKODE — https://akode.dev
- Portfolio — https://ibrahimahmad.vercel.app

## Stack

- Next.js
- React
- TypeScript / TSX
- CSS
- Node.js APIs
- Vercel
- GitHub

The percentages shown on the Experience page are a **working-stack presentation**, not a formal measure of programming proficiency.

## Content model

Articles live in `lib/posts.ts` and are rendered through `app/blog/[slug]/page.tsx`. Adding a post to the collection automatically makes it available through the dynamic blog route and sitemap.

## Development

```bash
npm install
npm run dev
```

For production:

```bash
npm run build
npm start
```

## Deployment

The repository is connected to Vercel. Pushing to the `main` branch triggers the connected deployment workflow.

## Security

Do **not** commit API keys, passwords, tokens or other secrets to this repository. Production credentials belong in protected environment variables or an appropriate secret manager.

## Editorial rule

News articles are dated and linked to their sources. Author and book information should only use details supplied by the author or verified from a public publication page. If an indexed profile cannot be confidently matched to an author, it is labeled as an **unverified public listing** rather than presented as confirmed identity.

Built by **Ibrahim Akanni Ahmad** · Novella Matrix · Lagos, Nigeria.
