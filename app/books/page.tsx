export const metadata = { title: "Books & Authors | Ibrahim Akanni Ahmad", description: "Author and book discovery pages connected to the portfolio." };

export default function Books() {
  return <main className="page">
    <p className="eyebrow">BOOKS & AUTHORS</p><h1>Stories deserve a home, not just a link.</h1>
    <p className="lead">The publishing side of this portfolio is designed to give authors and books permanent context: who created the work, what it is about, where it can be found and which articles discuss it.</p>

    <article className="feature">
      <p className="eyebrow">FEATURED AUTHOR</p><h2>Amadi Gift — Namelesswriter</h2>
      <p>Hello, I&apos;m Namelesswriter. Writing has always been more than a hobby for me—it&apos;s a way to bring emotions, characters, and ideas to life. I enjoy creating stories filled with romance, drama, suspense, and unforgettable journeys that keep readers turning pages. I love exploring complex characters, meaningful relationships, and the challenges that shape who we become.</p>
      <div className="actions"><a className="button" href="/authors/namelesswriter">Read author feature</a><a className="button alt" href="https://m.pahina.com/novel/2611437824.html" target="_blank" rel="noreferrer">Branded Omega →</a><a className="button alt" href="https://m.pahina.com/novel/3828441344.html" target="_blank" rel="noreferrer">Second novel →</a></div>
    </article>

    <div className="grid">
      <section className="card"><p className="eyebrow">BOOK FEATURE</p><h2>Branded Omega</h2><p>A featured novel connected to Namelesswriter&apos;s author profile. The book page is kept as an external publication destination rather than copied into this portfolio.</p><a href="https://m.pahina.com/novel/2611437824.html" target="_blank" rel="noreferrer">Open Branded Omega on Pahina →</a></section>
      <section className="card"><p className="eyebrow">BOOK FEATURE</p><h2>Second novel</h2><p>A second publication destination supplied for the author. The title can be added when the author provides the final public title and description.</p><a href="https://m.pahina.com/novel/3828441344.html" target="_blank" rel="noreferrer">Open second novel on Pahina →</a></section>
      <section className="card"><p className="eyebrow">PUBLIC INDEX — VERIFY IDENTITY</p><h2>The Myriad Lives Of A Nameless Cultivator</h2><p>Search found a Royal Road listing under the pen name <strong>NamelessWriter</strong>. It is publicly indexed, but I could not independently verify from the search result that this is the same Amadi Gift behind Branded Omega. It is therefore listed separately until the author confirms the match.</p><a href="https://www.royalroad.com/fiction/186915/the-myriad-lives-of-a-nameless-cultivator" target="_blank" rel="noreferrer">Open indexed Royal Road listing →</a></section>
      <section className="card"><p className="eyebrow">EDITORIAL</p><h2>Author discovery</h2><p>Read the long-form articles about author pages, reader discovery, publishing infrastructure and indexed public listings.</p><div className="actions"><a className="button" href="/blog/author-discovery-in-the-digital-age">Author discovery →</a><a className="button alt" href="/blog/building-a-publishing-layer-for-authors">Publishing layer →</a></div></section>
    </div>
    <section className="feature"><h2>Growing this catalogue</h2><p>This page will become a larger index rather than staying attached to one author. New author profiles, novels, public publication pages and editorial features can be added as they are verified.</p></section>
  </main>;
}