export const metadata = { title: "Books & Authors | Ibrahim Akanni Ahmad", description: "Author and book discovery pages connected to the portfolio." };

export default function Books() {
  return <main className="page">
    <p className="eyebrow">BOOKS & AUTHORS</p><h1>Stories deserve a home, not just a link.</h1>
    <p className="lead">A growing discovery layer for authors and books: who created the work, what it is about, where it can be found, and which pages can help readers discover it.</p>

    <article className="feature">
      <p className="eyebrow">NEW AUTHOR FEATURE</p><h2>SAB — Romance Author & Poet</h2>
      <p>SAB is a romance author and poet and the writer behind <strong>Isla Was Never Her Name</strong>. She enjoys creating stories filled with romance, mystery, secrets and unforgettable characters, turning the ideas and emotions in her head into stories readers can connect with and enjoy.</p>
      <p>Outside writing, SAB enjoys novels, manga and manhwa and draws inspiration from the stories and worlds she discovers there.</p>
      <div className="actions"><a className="button" href="/authors/sab">Read SAB&apos;s author profile</a><a className="button alt" href="/book/isla-was-never-her-name">Open Isla Was Never Her Name →</a></div>
    </article>

    <article className="feature">
      <p className="eyebrow">FEATURED AUTHOR</p><h2>Amadi Gift — Namelesswriter</h2>
      <p>Hello, I&apos;m Namelesswriter. Writing has always been more than a hobby for me—it&apos;s a way to bring emotions, characters, and ideas to life. I enjoy creating stories filled with romance, drama, suspense, and unforgettable journeys that keep readers turning pages. I love exploring complex characters, meaningful relationships, and the challenges that shape who we become.</p>
      <div className="actions"><a className="button" href="/authors/namelesswriter">Read author feature</a><a className="button alt" href="https://m.pahina.com/novel/2611437824.html" target="_blank" rel="noreferrer">Branded Omega →</a><a className="button alt" href="https://m.pahina.com/novel/3828441344.html" target="_blank" rel="noreferrer">Second novel →</a></div>
    </article>

    <div className="grid">
      <section className="card">
        <p className="eyebrow">BOOK PAGE</p><h2>Isla Was Never Her Name</h2>
        <p>By SAB. Romance, mystery, secrets and character-driven storytelling.</p>
        <div className="book-cover-wrap"><img className="book-cover-image" src="https://i.ibb.co/TBQx1mcB/IMG-20260929-WA0111.jpg" alt="Isla Was Never Her Name book cover by SAB" loading="lazy" /></div>
        <div className="actions"><a className="button" href="/book/isla-was-never-her-name">Shareable AKODE page →</a><a href="https://page.joyreadings.com/h5-book-share.html?id=22540&lang=en&is_from_myscroll=1&is_composition_contest=0" target="_blank" rel="noreferrer" aria-label="Open Isla Was Never Her Name on JoyRead"><img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ef/18/bd/ef18bd36-46c1-6c85-83b0-1b07cfe4a813/AppIcon-0-0-1x_U007epad-0-1-85-220.png/640x640bb.webp" alt="JoyRead app icon" width="64" height="64" style={{borderRadius:"16px",display:"inline-block",verticalAlign:"middle",marginRight:"10px"}} /></a><a className="button alt" href="https://page.joyreadings.com/h5-book-share.html?id=22540&lang=en&is_from_myscroll=1&is_composition_contest=0" target="_blank" rel="noreferrer">Open on JoyRead →</a></div>
      </section>
      <section className="card"><p className="eyebrow">BOOK FEATURE</p><h2>Branded Omega</h2><p>A featured novel connected to Namelesswriter&apos;s author profile. The publication page remains the external reading destination.</p><a href="https://m.pahina.com/novel/2611437824.html" target="_blank" rel="noreferrer">Open Branded Omega on Pahina →</a></section>
      <section className="card"><p className="eyebrow">BOOK FEATURE</p><h2>Second novel</h2><p>A second publication destination supplied for Namelesswriter. The final public title can be added when confirmed.</p><a href="https://m.pahina.com/novel/3828441344.html" target="_blank" rel="noreferrer">Open second novel on Pahina →</a></section>
      <section className="card"><p className="eyebrow">PUBLIC INDEX — VERIFY IDENTITY</p><h2>The Myriad Lives Of A Nameless Cultivator</h2><p>Search found a Royal Road listing under the pen name NamelessWriter. It is publicly indexed, but I have not independently verified that it is the same author behind Branded Omega.</p><a href="https://www.royalroad.com/fiction/186915/the-myriad-lives-of-a-nameless-cultivator" target="_blank" rel="noreferrer">Open indexed Royal Road listing →</a></section>
      <section className="card"><p className="eyebrow">EDITORIAL</p><h2>Author discovery</h2><p>Read long-form articles about author pages, reader discovery, publishing infrastructure and indexed public listings.</p><div className="actions"><a className="button" href="/blog/author-discovery-in-the-digital-age">Author discovery →</a><a className="button alt" href="/blog/building-a-publishing-layer-for-authors">Publishing layer →</a></div></section>
    </div>
    <section className="feature"><h2>Growing this catalogue</h2><p>Every verified author and book can receive its own permanent AKODE URL. That means a book can be shared directly, indexed independently and connected to an author profile, articles and its legitimate reading/purchase destination.</p></section>
  </main>;
}