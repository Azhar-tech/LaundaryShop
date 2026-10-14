import { BLOG_POSTS, formatPostDate } from './posts.js';

function blogCard(post) {
  return `
    <article class="blog-card">
      <span class="blog-card-date">${formatPostDate(post.publishedAt)} · ${post.readMinutes} min read</span>
      <h2 class="blog-card-title"><a href="/blog/${post.slug}">${post.title}</a></h2>
      <p class="blog-card-excerpt">${post.excerpt}</p>
      <a class="blog-card-link" href="/blog/${post.slug}">Read article
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
    </article>`;
}

export const BLOG_INDEX_MARKUP = `
  <section class="page-hero">
    <div class="container">
      <span class="eyebrow" style="margin-bottom:14px">Blog</span>
      <h1>Laundry &amp; dry cleaning tips for Islamabad</h1>
      <p class="lede" style="max-width:52ch">
        Practical guides on pickup laundry, dry cleaning, and caring for everyday and formal wear — from the team at LaundryCare.pk (New Way &amp; Pak Way).
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="blog-grid">
        ${BLOG_POSTS.map(blogCard).join('\n')}
      </div>
    </div>
  </section>
`;
