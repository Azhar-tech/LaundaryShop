/** Build location page HTML from a LOCATIONS entry. */

function googleRatingCard(loc) {
  const rating = loc.aggregateRating;
  if (!rating?.ratingValue || !rating?.reviewCount) return '';
  const mapsLink = loc.gbpUrl
    ? `<br/><a href="${loc.gbpUrl}" target="_blank" rel="noopener">See reviews on Google Maps</a>`
    : '';
  return `
        <article style="padding: 28px; border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--bg);">
          <h3 style="font-size: 18px; margin-bottom: 10px;">Google rating</h3>
          <p style="margin: 0; line-height: 1.65;">
            ${rating.ratingValue}&#9733; from ${rating.reviewCount} Google reviews${mapsLink}
          </p>
        </article>`;
}

function extraPhoneLine(loc) {
  if (!loc.phoneSecondary) return '';
  return `<br/><a href="tel:${loc.phoneSecondary}">${loc.phoneSecondaryDisplay}</a>`;
}

function shopGuideHtml(loc, other) {
  if (loc.id === 'newWay') {
    return `
      <div class="blog-prose" style="margin-top:36px; max-width:72ch;">
        <h2>How to find New Way at Idrees Market</h2>
        <p>
          The shop is <strong>${loc.gbpName}</strong>, a dry cleaner and laundry at
          ${loc.streetAddress}, Islamabad. On Google Maps the pin sits at plus code
          ${loc.plusCode}. Street 8 runs through F10/2 Idrees Market — walk to the counter,
          or tap Get directions on this page. We are open ${loc.hoursShort}, Monday to Sunday.
        </p>
        <p>
          Call or WhatsApp <a href="tel:${loc.phone}">${loc.phoneDisplay}</a>
          ${loc.phoneSecondary ? ` or <a href="tel:${loc.phoneSecondary}">${loc.phoneSecondaryDisplay}</a>` : ''}
          if you want a rider instead of a walk-in. Quotes stay on WhatsApp; there is no public price list.
          ${loc.sinceYear ? `This F-10 counter has been serving the market since ${loc.sinceYear}.` : ''}
        </p>
        <h2>Services at this F-10 shop</h2>
        <p>
          Bring solvent work — suits, blazers, wool coats, silk, beaded sarees, lehengas and structured kameez —
          for dry cleaning. Everyday bags go through wash and fold: sorted by colour, washed, dried and stacked.
          Already-clean office shirts and kameez can be steam-pressed only. Sofa and carpet jobs are quoted from a
          photo on WhatsApp. The same five services are listed on our
          <a href="/services">services page</a>,
          <a href="/dry-cleaning-islamabad">dry cleaning</a>,
          <a href="/laundry-service-islamabad">wash &amp; fold pickup</a> and
          <a href="/ironing-service-islamabad">ironing</a> landings.
        </p>
        <h2>Pickup areas from New Way</h2>
        <p>
          Free pickup and delivery from this shop covers ${loc.pickupAreas}. No minimum order in those zones.
          If you are choosing a shop by sector, read
          <a href="/blog/laundry-pickup-areas-islamabad-f10-g15">laundry pickup areas in Islamabad — F10, G15 and the twin cities</a>
          and the
          <a href="/dry-cleaners-near-me-islamabad">dry cleaners near me</a> map of both counters.
          Households that want a doorstep wash rather than a walk-in can start on
          <a href="/laundry-near-me-islamabad">laundry near me in Islamabad</a>.
        </p>
        <p>
          Suit rotation in Islamabad dust is covered in
          <a href="/blog/how-often-dry-clean-suits-islamabad">how often to dry clean suits</a>.
          Care labels and washer vs solvent are in
          <a href="/blog/dry-cleaning-vs-washing">dry cleaning vs washing</a>.
          Pickup vs a self-service hall is
          <a href="/blog/wash-and-fold-vs-laundromat-islamabad">wash &amp; fold vs a laundromat</a>.
          Seasonal blankets use the published
          <a href="/blog/blanket-wash-offer-5th-free-islamabad">blanket wash offer</a> at this counter too.
        </p>
        <p>
          Our other shop is <a href="/${other.slug}">${other.name}</a> at ${other.areaLabel}
          (${other.phoneDisplay}) — same services, a different doorstep route for G-13 to G-16.
        </p>
      </div>`;
  }

  return `
      <div class="blog-prose" style="margin-top:36px; max-width:72ch;">
        <h2>How to find Pak Way at Century Mall Plaza</h2>
        <p>
          Pak Way Dry Cleaners is at ${loc.fullAddress}. Shop 16 is in the basement of Century Mall Plaza
          at G15 Markaz. Walk in during ${loc.hoursShort}, every day, or WhatsApp
          <a href="tel:${loc.phone}">${loc.phoneDisplay}</a> and a rider will collect from your door.
          Quotes stay on WhatsApp; there is no public price list.
        </p>
        <p>
          If you are comparing counters, New Way sits in F-10 Idrees Market;
          this page is the G-15 walk-in. Directions on this page use the shop coordinates we publish —
          send the pin on WhatsApp if you want the rider to meet you at a gate.
        </p>
        <h2>Services at this G-15 shop</h2>
        <p>
          Drop off dry cleaning, wash-and-fold laundry, steam press, or ask for a sofa or carpet quote.
          Suits, sarees, bridal pieces and coats are collected here the same way they are at New Way.
          Service detail lives on
          <a href="/services">all services</a>,
          <a href="/dry-cleaning-islamabad">dry cleaning</a>,
          <a href="/laundry-service-islamabad">laundry pickup</a> and
          <a href="/ironing-service-islamabad">ironing</a>.
        </p>
        <h2>Pickup areas from Pak Way</h2>
        <p>
          Riders from this basement counter cover ${loc.pickupAreas}. Pickup and delivery are free, with no
          minimum order in those zones. West Islamabad households often use G-15 as the closer shop;
          F-sector, E-11, Bahria and DHA routes usually run from New Way. Confirm your pin when you book —
          we will not guess a street that is outside the published areas.
        </p>
        <p>
          Neighbourhood split is written up in
          <a href="/blog/laundry-pickup-areas-islamabad-f10-g15">laundry pickup areas — F10, G15 and the twin cities</a>.
          Finding a counter on the map: <a href="/laundry-near-me-islamabad">laundry near me</a> and
          <a href="/dry-cleaners-near-me-islamabad">dry cleaners near me</a>.
          Suit frequency,
          <a href="/blog/how-often-dry-clean-suits-islamabad">how often to dry clean suits</a>;
          fabric choice,
          <a href="/blog/dry-cleaning-vs-washing">dry cleaning vs washing</a>;
          pickup vs machines,
          <a href="/blog/wash-and-fold-vs-laundromat-islamabad">wash &amp; fold vs a laundromat</a>;
          and the
          <a href="/blog/blanket-wash-offer-5th-free-islamabad">blanket wash offer</a>
          all apply at Pak Way as well.
        </p>
        <p>
          Our other shop is <a href="/${other.slug}">${other.name}</a> at ${other.areaLabel}
          (${other.phoneDisplay}).
        </p>
      </div>`;
}

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
      <nav class="blog-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> → <span>${loc.name}</span></nav>
      <span class="eyebrow" style="margin-bottom:14px">${loc.areaLabel}</span>
      <h1>${loc.name} — ${loc.areaLabel}, Islamabad</h1>
      <p class="lede">
        ${sinceLine} Dry cleaner and laundry — wash &amp; fold, steam press and free pickup across Islamabad. Call <a href="tel:${loc.phone}">${loc.phoneDisplay}</a>${loc.phoneSecondary ? ` or <a href="tel:${loc.phoneSecondary}">${loc.phoneSecondaryDisplay}</a>` : ''} or WhatsApp to book.
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
          <p style="margin: 0; line-height: 1.65;">${loc.hoursCard}<br/>Monday to Sunday</p>
        </article>
        <article style="padding: 28px; border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--bg);">
          <h3 style="font-size: 18px; margin-bottom: 10px;">Pickup area</h3>
          <p style="margin: 0; line-height: 1.65;">Free pickup &amp; delivery: ${loc.pickupAreas}. No minimum order.</p>
        </article>${googleRatingCard(loc)}
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
      ${shopGuideHtml(loc, other)}
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
              <div class="val"><a href="tel:${loc.phone}">${loc.phoneDisplay}</a>${extraPhoneLine(loc)}</div>
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

  __FAQ__

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
