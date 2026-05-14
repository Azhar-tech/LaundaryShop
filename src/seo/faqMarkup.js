import { HOME_FAQ } from './faqData.js';

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Inserts before __FAQ__ marker in home markup; visible text matches FAQ JSON-LD. */
export function buildFaqSectionHtml() {
  const items = HOME_FAQ.map(({ q, a }) => {
    return `<div class="faq-item">\n            <h3 class="faq-q">${esc(q)}</h3>\n            <p class="faq-a">${esc(a)}</p>\n          </div>`;
  }).join('\n          ');
  return `  <section class="section section-faq" id="faq" aria-labelledby="faq-heading">\n    <div class="container">\n      <div class="section-head">\n        <div class="h-left">\n          <span class="eyebrow">FAQ</span>\n          <h2 id="faq-heading">Laundry service Islamabad — questions we hear most</h2>\n        </div>\n      </div>\n      <div class="faq-list">\n          ${items}\n      </div>\n      <p class="lede" style="margin-top:24px; max-width:56ch; font-size:15px;">Prefer to talk? Reach us on <a href="tel:+923235557878">0323 555 7878</a> or WhatsApp for a quick quote on <a href="/laundry-service-islamabad">laundry pickup</a>, <a href="/dry-cleaning-islamabad">dry cleaning</a>, or <a href="/ironing-service-islamabad">ironing in Islamabad</a>.</p>\n    </div>\n  </section>`;
}
