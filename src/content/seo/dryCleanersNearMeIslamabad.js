import {
  areasHtml,
  breadcrumbHtml,
  landingImg,
  processSectionHtml,
  PRIMARY_WHATSAPP_HREF,
  quoteCtaHtml,
} from '../../seo/landingHtml.js';
import { LOCATIONS } from '../../seo/constants.js';

const NW = LOCATIONS.newWay;
const PW = LOCATIONS.pakway;

const dryImg = landingImg({
  src: '/dryCleaning.webp',
  alt: 'Dry cleaning rail at an Islamabad shop — suits and formal wear',
  width: 2522,
  height: 1664,
  lazy: false,
  priority: true,
});

const pressImg = landingImg({
  src: '/SteamPress.webp',
  alt: 'Pressed dry-cleaned garments ready for pickup in Islamabad',
  width: 1536,
  height: 1024,
  lazy: true,
});

/** SEO landing: dry cleaners near me Islamabad */
export const MARKUP = `
  <section class="page-hero">
    <div class="container">
      ${breadcrumbHtml('Dry cleaners near me')}
      <span class="eyebrow" style="margin-bottom:14px">Near you · Islamabad</span>
      <h1>Dry cleaners near you — F-10 Idrees Market and G-15</h1>
      <p class="lede">
        Two dry cleaners in Islamabad: <strong>New Way</strong> at F-10/2 Idrees Market (${NW.phoneDisplay}) and <strong>Pak Way</strong> at Century Mall Plaza, G-15 (${PW.phoneDisplay}). New Way ${NW.hoursShort}, Pak Way ${PW.hoursShort}. Walk in, or book free pickup if the shop is not on your route.
      </p>
      <div style="display:flex; gap:10px; margin-top:24px; flex-wrap:wrap">
        <a class="btn btn-primary" href="${PRIMARY_WHATSAPP_HREF}" target="_blank" rel="noopener">Get a quote on WhatsApp</a>
        <a class="btn btn-ghost" href="/dry-cleaning-islamabad">Dry cleaning guide</a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <div class="h-left">
          <span class="eyebrow">Addresses, hours, phones</span>
          <h2>Two shops — maps live on each location page</h2>
        </div>
        <p class="lede" style="max-width:46ch">No appointment to drop off. Pickup still needs a WhatsApp window so the rider is not guessing.</p>
      </div>
      <div class="seo-cards-grid">
        <article style="padding: 28px; border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--bg);">
          <h3 style="font-size: 18px; margin-bottom: 10px;">${NW.name}</h3>
          <p style="margin: 0 0 8px; line-height: 1.65;">${NW.fullAddress}</p>
          <p style="margin: 0 0 8px; line-height: 1.65;">Open ${NW.hoursShort} daily · <a href="tel:${NW.phone}">${NW.phoneDisplay}</a></p>
          <p style="margin: 0 0 12px; line-height: 1.65;">Pickup: ${NW.pickupAreas}.</p>
          <p style="margin: 0;"><a href="/new-way-dry-cleaners-f10">Map, directions and shop details</a></p>
        </article>
        <article style="padding: 28px; border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--bg);">
          <h3 style="font-size: 18px; margin-bottom: 10px;">${PW.name}</h3>
          <p style="margin: 0 0 8px; line-height: 1.65;">${PW.fullAddress}</p>
          <p style="margin: 0 0 8px; line-height: 1.65;">Open ${PW.hoursShort} daily · <a href="tel:${PW.phone}">${PW.phoneDisplay}</a></p>
          <p style="margin: 0 0 12px; line-height: 1.65;">Pickup: ${PW.pickupAreas}.</p>
          <p style="margin: 0;"><a href="/pak-way-dry-cleaners-g15">Map, directions and shop details</a></p>
        </article>
      </div>
      <p style="margin-top:28px; font-size:16.5px; line-height:1.7; max-width:68ch;">
        “Near me” on a phone usually means the closest counter that will take a suit without a weekday expedition. F-10 Idrees Market sits with the older New Way shop. G-15 Century Mall Plaza (basement shop 16) is Pak Way. Same care standard, different rider lists. How we actually clean — hand check, solvent, press — is the
        <a href="/dry-cleaning-islamabad">dry cleaning Islamabad</a> page, not this finder.
      </p>
      <div class="svc-visual-card" style="margin-top:32px; max-width:720px;">${dryImg}</div>
    </div>
  </section>

  <section class="section" style="background: var(--blue-50);">
    <div class="container">
      <div class="section-head">
        <div class="h-left">
          <span class="eyebrow">What to bring</span>
          <h2>Garments both shops take every week</h2>
        </div>
      </div>
      <ul class="seo-checklist">
        <li>Office suits, blazers, trousers and waistcoats</li>
        <li>Sarees, lehengas, bridal and heavily embellished pieces</li>
        <li>Shalwar kameez, kurtas, abayas and silk dupattas</li>
        <li>Wool coats and labelled dry-clean-only fabrics</li>
        <li>Sherwanis and structured occasion wear</li>
      </ul>
      <p style="margin-top:28px; font-size:16.5px; line-height:1.7; max-width:68ch;">
        Everyday tees and bedding are not why most people search “dry cleaners near me”. Those go to <a href="/laundry-near-me-islamabad">laundry near me</a> or <a href="/laundry-service-islamabad">wash and fold</a>. Press-only after a home wash is <a href="/ironing-service-islamabad">ironing / steam press</a>.
      </p>
    </div>
  </section>

  ${processSectionHtml({
    eyebrow: 'How it works',
    heading: 'Walk in, or WhatsApp → pickup → clean → hangers',
    lede: 'Bridal and heavy embroidery get a time window before we take the piece, not after.',
    steps: [
      {
        title: 'WhatsApp a photo',
        text: 'Especially for sarees and bridal. We say solvent versus wash, and whether same-day is honest.',
      },
      {
        title: 'Shop or rider',
        text: 'Drop off at F-10 or G-15, or book free pickup in the published areas. No minimum order.',
      },
      {
        title: 'Dry clean',
        text: 'Spot treatment, solvent, commercial press. Not outsourced to a nameless plant.',
      },
      {
        title: 'Collect or delivery',
        text: 'On hangers in covers. Standard is about 24 hours for most suits; ask if you need faster.',
      },
    ],
  })}

  ${areasHtml({
    heading: 'Pickup when the shop is not next door',
    intro: 'Use the shop page map for walking directions. Use WhatsApp plus your pin for a rider.',
  })}

  <section class="section">
    <div class="container">
      <h2>How often a suit actually needs the solvent</h2>
      <p style="margin-top:16px; font-size:16.5px; line-height:1.7; max-width:68ch;">
        Searching for dry cleaners nearby does not mean every wear goes in the bag. Airing, a brush, and press-only cover a lot of office weeks. When solvent is the right call — shine on a lapel, a food stain, a season of dust — read
        <a href="/blog/how-often-dry-clean-suits-islamabad">how often to dry clean suits in Islamabad</a>
        and <a href="/blog/dry-cleaning-vs-washing">dry cleaning vs washing</a>. Quotes are WhatsApp-only until a full public list is published.
      </p>
      <div class="svc-visual-card" style="margin-top:32px; max-width:640px;">${pressImg}</div>
    </div>
  </section>

  __FAQ__

  ${quoteCtaHtml({
    heading: 'Dry cleaners near you — F-10 or G-15',
    text: `Walk in at New Way ${NW.hoursShort} or Pak Way ${PW.hoursShort}, or book pickup. New Way ${NW.phoneDisplay} · Pak Way ${PW.phoneDisplay}.`,
  })}
`;
