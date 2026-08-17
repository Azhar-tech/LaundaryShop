/** Build location page HTML from a LOCATIONS entry. */

/**
 * @param {object} loc — LOCATIONS.newWay | LOCATIONS.pakway
 * @param {object} other — the other shop
 * @param {object} urls — precomputed map/whatsapp URLs
 */
export function buildLocationMarkup(loc, other, urls) {
  const sinceLine = loc.sinceYear
    ? `Trusted since ${loc.sinceYear} at ${loc.areaLabel}.`
    : `Walk-in and pickup from ${loc.areaLabel}.`;

  return `
  <section class="page-hero">
    <div class="container">
      <span class="eyebrow" style="margin-bottom:14px">${loc.areaLabel}</span>
      <h1>${loc.name} — ${loc.areaLabel}, Islamabad</h1>
      <p class="lede">
        ${sinceLine} Dry cleaning, wash &amp; fold, steam press and free pickup across Islamabad. Call <a href="tel:${loc.phone}">${loc.phoneDisplay}</a> or WhatsApp to book.
      </p>
      <div style="display:flex; gap:10px; margin-top:24px; flex-wrap:wrap">
        <a class="btn btn-primary" href="${urls.whatsapp}">WhatsApp ${loc.phoneDisplay}
          <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
        <a class="btn btn-ghost" href="${urls.directions}" target="_blank" rel="noopener">Get directions</a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="seo-cards-grid">
        <article style="padding: 28px; border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--bg);">
          <h3 style="font-size: 18px; margin-bottom: 10px;">Address</h3>
          <p style="margin: 0; line-height: 1.65;">${loc.addressLine1}<br/>${loc.addressLine2}</p>
        </article>
        <article style="padding: 28px; border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--bg);">
          <h3 style="font-size: 18px; margin-bottom: 10px;">Hours</h3>
          <p style="margin: 0; line-height: 1.65;">Every day, 8:00am – 10:00pm<br/>Including Sundays &amp; public holidays</p>
        </article>
        <article style="padding: 28px; border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--bg);">
          <h3 style="font-size: 18px; margin-bottom: 10px;">Pickup area</h3>
          <p style="margin: 0; line-height: 1.65;">Free pickup &amp; delivery: ${loc.pickupAreas}. No minimum order.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="section" style="background: var(--blue-50);">
    <div class="container">
      <div class="section-head">
        <div class="h-left">
          <span class="eyebrow">Services</span>
          <h2>What we handle at ${loc.name}</h2>
        </div>
      </div>
      <ul class="seo-checklist">
        <li>Dry cleaning — suits, sarees, bridal &amp; coats</li>
        <li>Wash &amp; fold — everyday laundry with care</li>
        <li>Steam press &amp; ironing — office wear and traditional outfits</li>
        <li>Sofa &amp; carpet care — quote on WhatsApp</li>
      </ul>
      <p class="lede" style="margin-top:28px; max-width:60ch;">
        Browse <a href="/services">all services</a>, <a href="/laundry-service-islamabad">laundry pickup</a>, <a href="/dry-cleaning-islamabad">dry cleaning</a>, or <a href="/contact#book">contact both shops</a>.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="map-block">
        <div class="map-info">
          <span class="eyebrow">Find us</span>
          <h2>${loc.addressLine1}</h2>
          <p>Walk-ins welcome — or book free pickup from your doorstep.</p>
          <div class="row">
            <div class="ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/></svg></div>
            <div>
              <div class="lab">Phone / WhatsApp</div>
              <div class="val"><a href="tel:${loc.phone}">${loc.phoneDisplay}</a></div>
            </div>
          </div>
          <div style="display:flex; gap:10px; margin-top:6px; flex-wrap:wrap;">
            <a class="btn btn-primary" href="${urls.whatsapp}" target="_blank" rel="noopener">WhatsApp us</a>
            <a class="btn btn-ghost" href="${urls.directions}" target="_blank" rel="noopener">Get directions</a>
          </div>
          <p class="lede" style="margin-top:20px; font-size:15px;">
            Our other shop: <a href="/${other.slug}">${other.name}</a> — ${other.areaLabel} · ${other.phoneDisplay}
          </p>
        </div>
        <div class="map-frame">
          <iframe
            title="Map to ${loc.name}, ${loc.areaLabel} Islamabad"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            src="${urls.embed}"></iframe>
        </div>
      </div>
    </div>
  </section>

  <section style="padding: 0 0 96px;">
    <div class="container">
      <div class="cta">
        <div>
          <h2 style="margin-top:6px">Book ${loc.name} on WhatsApp</h2>
          <p style="margin-top:14px">${loc.phoneDisplay} · free pickup across ${loc.pickupAreas}</p>
        </div>
        <div class="cta-actions">
          <a class="btn btn-primary btn-lg" href="${urls.whatsapp}" target="_blank" rel="noopener">WhatsApp ${loc.phoneDisplay}</a>
          <a class="btn btn-ghost btn-lg" href="tel:${loc.phone}">Call shop</a>
        </div>
      </div>
    </div>
  </section>
`;
}
