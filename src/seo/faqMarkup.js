import { HOME_FAQ } from './faqData.js';

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Inserts before __FAQ__ marker in home markup; visible text matches FAQ JSON-LD. */
export function buildFaqSectionHtml(faqEntries = HOME_FAQ, options = {}) {
  const {
    heading = 'Laundry service Islamabad — questions we hear most',
    id = 'faq',
    eyebrow = 'FAQ',
    footerHtml = '',
  } = options;
  const items = faqEntries.map(({ q, a }) => {
    return `<div class="faq-item">\n            <h3 class="faq-q">${esc(q)}</h3>\n            <p class="faq-a">${esc(a)}</p>\n          </div>`;
  }).join('\n          ');
  return `  <section class="section section-faq" id="${esc(id)}" aria-labelledby="${esc(id)}-heading">\n    <div class="container">\n      <div class="section-head">\n        <div class="h-left">\n          <span class="eyebrow">${esc(eyebrow)}</span>\n          <h2 id="${esc(id)}-heading">${esc(heading)}</h2>\n        </div>\n      </div>\n      <div class="faq-list">\n          ${items}\n      </div>${footerHtml ? `\n      ${footerHtml}` : ''}\n    </div>\n  </section>`;
}
