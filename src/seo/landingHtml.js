import { LOCATIONS, getWhatsAppUrl } from './constants.js';

const NW = LOCATIONS.newWay;
const PW = LOCATIONS.pakway;

export const PRIMARY_WHATSAPP_HREF = getWhatsAppUrl(NW);

export function breadcrumbHtml(label) {
  return `<nav class="blog-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> → <span>${label}</span></nav>`;
}

export function processSectionHtml({ eyebrow, heading, lede, steps }) {
  const items = steps
    .map(
      (step, i) => `<div class="step">
          <div class="ico" aria-hidden="true">${i + 1}</div>
          <h3>${step.title}</h3>
          <p>${step.text}</p>
        </div>`,
    )
    .join('\n        ');
  return `  <section class="section">
    <div class="container">
      <div class="section-head">
        <div class="h-left">
          <span class="eyebrow">${eyebrow}</span>
          <h2>${heading}</h2>
        </div>
        <p class="lede" style="max-width:42ch">${lede}</p>
      </div>
      <div class="steps">
        ${items}
      </div>
    </div>
  </section>`;
}

export function landingImg({ src, alt, width, height, lazy = true, priority = false }) {
  const loading = lazy ? 'lazy' : 'eager';
  const fp = priority ? ' fetchPriority="high"' : '';
  return `<img src="${src}" alt="${alt}" width="${width}" height="${height}" loading="${loading}" decoding="async"${fp}/>`;
}

export function quoteCtaHtml({ heading, text }) {
  return `  <section style="padding: 0 0 96px;">
    <div class="container">
      <div class="cta">
        <div>
          <h2 style="margin-top:6px">${heading}</h2>
          <p style="margin-top:14px">${text}</p>
        </div>
        <div class="cta-actions">
          <a class="btn btn-primary btn-lg" href="${getWhatsAppUrl(NW)}" target="_blank" rel="noopener">Get a quote on WhatsApp</a>
          <a class="btn btn-ghost btn-lg" href="/contact#book">Book pickup</a>
        </div>
      </div>
    </div>
  </section>`;
}

export function areasHtml({ heading, intro }) {
  return `  <section class="section" style="background: var(--blue-50);">
    <div class="container">
      <div class="section-head">
        <div class="h-left">
          <span class="eyebrow">Areas served</span>
          <h2>${heading}</h2>
        </div>
        <p class="lede" style="max-width:46ch">${intro}</p>
      </div>
      <div class="seo-cards-grid">
        <article style="padding: 28px; border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--bg);">
          <h3 style="font-size: 18px; margin-bottom: 10px;"><a href="/new-way-dry-cleaners-f10">${NW.name}</a></h3>
          <p style="margin: 0; line-height: 1.65;">${NW.areaLabel} · ${NW.phoneDisplay}<br/>Pickup: ${NW.pickupAreas}. Open ${NW.hoursShort} daily.</p>
        </article>
        <article style="padding: 28px; border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--bg);">
          <h3 style="font-size: 18px; margin-bottom: 10px;"><a href="/pak-way-dry-cleaners-g15">${PW.name}</a></h3>
          <p style="margin: 0; line-height: 1.65;">${PW.areaLabel} · ${PW.phoneDisplay}<br/>Pickup: ${PW.pickupAreas}. Open ${PW.hoursShort} daily.</p>
        </article>
      </div>
    </div>
  </section>`;
}
