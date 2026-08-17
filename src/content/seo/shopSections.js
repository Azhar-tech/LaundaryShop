import {
  LOCATIONS,
  getLocationMapsDirectionsUrl,
  getLocationMapsEmbedUrl,
  getWhatsAppUrl,
} from '../../seo/constants.js';

const nw = LOCATIONS.newWay;
const pw = LOCATIONS.pakway;

function shopCard(loc) {
  return `
    <a href="/${loc.slug}" class="shop-picker-card">
      <span class="shop-picker-eyebrow">${loc.areaLabel}</span>
      <h2 class="shop-picker-name">${loc.name}</h2>
      <p class="shop-picker-addr">${loc.addressLine1}</p>
      <p class="shop-picker-phone">${loc.phoneDisplay}</p>
      <span class="shop-picker-cta">Visit shop page
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </span>
    </a>`;
}

const SHOP_PICKER = `
  <section class="hero hero-shops">
    <div class="container">
      <span class="eyebrow" style="margin-bottom:14px">LaundryCare.pk</span>
      <h1>Laundry &amp; dry cleaning in Islamabad — choose your shop</h1>
      <p class="lede" style="margin-top:16px; max-width:52ch">
        Two trusted locations: <strong>New Way</strong> at F-10 Idrees Market and <strong>Pak Way</strong> at G-15 Century Mall Plaza. Same quality — dry cleaning, wash &amp; fold, steam press and free pickup.
      </p>
      <div class="shop-picker-grid">
        ${shopCard(nw)}
        ${shopCard(pw)}
      </div>
      <div class="hero-actions" style="margin-top:28px">
        <a class="btn btn-primary btn-lg" href="/contact#book">Book pickup
          <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
        <a class="btn btn-ghost btn-lg" href="/services">See all services</a>
      </div>
    </div>
  </section>`;

const DUAL_SHOPS_SECTION = `
  <section class="section">
    <div class="container">
      <div class="section-head">
        <div class="h-left">
          <span class="eyebrow">Our shops</span>
          <h2>Visit New Way or Pak Way</h2>
        </div>
        <p class="lede" style="max-width:42ch">Walk in 8am–10pm daily, or WhatsApp either shop for free pickup.</p>
      </div>
      <div class="shop-picker-grid">
        ${shopCard(nw)}
        ${shopCard(pw)}
      </div>
    </div>
  </section>`;

export { SHOP_PICKER, DUAL_SHOPS_SECTION, nw as NW, pw as PW };

export function buildContactShopPanel(loc, panelId) {
  const wa = getWhatsAppUrl(loc);
  const directions = getLocationMapsDirectionsUrl(loc);
  const embed = getLocationMapsEmbedUrl(loc);

  return `
  <div class="contact-shop-panel" id="${panelId}">
    <div class="contact-shop-header">
      <span class="eyebrow">${loc.areaLabel}</span>
      <h2 style="margin-top:8px">${loc.name}</h2>
      <p class="lede" style="margin-top:10px;font-size:15px">${loc.addressLine1} · ${loc.phoneDisplay}</p>
    </div>
    <div class="contact-split" style="margin-top:24px">
      <a href="${wa}" target="_blank" rel="noopener" class="contact-wa-card">
        <div class="contact-wa-icon">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.34 11.892-11.894 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24z"/></svg>
        </div>
        <div>
          <div style="font-size:13px;text-transform:uppercase;letter-spacing:.14em;opacity:.9;font-weight:600">WhatsApp</div>
          <div style="font-family:var(--font-display);font-size:clamp(28px,3vw,36px);font-weight:700;margin-top:6px">${loc.phoneDisplay}</div>
          <p style="margin-top:8px;opacity:.9;font-size:15px">Send a photo — we reply with a quote and pickup slot.</p>
        </div>
        <span class="contact-wa-btn">Open chat →</span>
      </a>
      <div style="display:flex;flex-direction:column;gap:14px">
        <a href="tel:${loc.phone}" class="contact-mini-card">
          <strong>Call</strong> ${loc.phoneDisplay}
        </a>
        <a href="${directions}" target="_blank" rel="noopener" class="contact-mini-card">
          <strong>Directions</strong> ${loc.addressLine1}
        </a>
        <a href="/${loc.slug}" class="contact-mini-card">
          <strong>Shop page</strong> Hours, map &amp; services
        </a>
      </div>
    </div>
    <div class="map-block" style="margin-top:32px">
      <div class="map-frame" style="min-height:280px">
        <iframe title="Map to ${loc.name}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="${embed}"></iframe>
      </div>
    </div>
  </div>`;
}
