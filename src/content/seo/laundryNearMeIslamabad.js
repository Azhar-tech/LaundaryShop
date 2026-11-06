import {
  areasHtml,
  breadcrumbHtml,
  landingImg,
  processSectionHtml,
  quoteCtaHtml,
} from '../../seo/landingHtml.js';
import { LOCATIONS } from '../../seo/constants.js';

const NW = LOCATIONS.newWay;
const PW = LOCATIONS.pakway;

const shopImg = landingImg({
  src: '/WashandFold.webp',
  alt: 'Wash-and-fold laundry from New Way F-10 and Pak Way G-15',
  width: 2520,
  height: 1664,
  lazy: false,
  priority: true,
});

const sofaImg = landingImg({
  src: '/sofaCleaning.webp',
  alt: 'Household laundry and home textile care from Islamabad shops',
  width: 1536,
  height: 1024,
  lazy: true,
});

/** SEO landing: laundry near me Islamabad */
export const MARKUP = `
  <section class="page-hero">
    <div class="container">
      ${breadcrumbHtml('Laundry near me')}
      <span class="eyebrow" style="margin-bottom:14px">Near you · Islamabad</span>
      <h1>Laundry near you — New Way F-10 and Pak Way G-15</h1>
      <p class="lede">
        Two laundry shops in Islamabad: <strong>New Way</strong> at F-10/2 Idrees Market and <strong>Pak Way</strong> at Century Mall Plaza, G-15 Markaz. New Way ${NW.hoursShort}, Pak Way ${PW.hoursShort}. Walk in, or book free doorstep pickup for wash &amp; fold — no minimum order.
      </p>
      <div style="display:flex; gap:10px; margin-top:24px; flex-wrap:wrap">
        <a class="btn btn-primary" href="https://wa.me/923235557878" target="_blank" rel="noopener">Get a quote on WhatsApp</a>
        <a class="btn btn-ghost" href="/laundry-service-islamabad">Wash &amp; fold details</a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <div class="h-left">
          <span class="eyebrow">Two counters</span>
          <h2>Pick a shop by map, or book the rider that already covers you</h2>
        </div>
        <p class="lede" style="max-width:46ch">Walk-in hours: New Way ${NW.hoursShort}, Pak Way ${PW.hoursShort}, every day including Sundays.</p>
      </div>
      <div class="seo-cards-grid">
        <article style="padding: 28px; border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--bg);">
          <h3 style="font-size: 18px; margin-bottom: 10px;">${NW.name} — F-10</h3>
          <p style="margin: 0 0 12px; line-height: 1.65;">${NW.fullAddress}</p>
          <p style="margin: 0 0 12px; line-height: 1.65;">Phone / WhatsApp <a href="tel:${NW.phone}">${NW.phoneDisplay}</a>. Pickup: ${NW.pickupAreas}.</p>
          <p style="margin: 0;"><a href="/new-way-dry-cleaners-f10">Shop page with map and directions</a></p>
        </article>
        <article style="padding: 28px; border-radius: var(--radius-lg); border: 1px solid var(--line); background: var(--bg);">
          <h3 style="font-size: 18px; margin-bottom: 10px;">${PW.name} — G-15</h3>
          <p style="margin: 0 0 12px; line-height: 1.65;">${PW.fullAddress}</p>
          <p style="margin: 0 0 12px; line-height: 1.65;">Phone / WhatsApp <a href="tel:${PW.phone}">${PW.phoneDisplay}</a>. Pickup: ${PW.pickupAreas}.</p>
          <p style="margin: 0;"><a href="/pak-way-dry-cleaners-g15">Shop page with map and directions</a></p>
        </article>
      </div>
      <p style="margin-top:28px; font-size:16.5px; line-height:1.7; max-width:68ch;">
        If you are standing in a markaz with a bag, walk into the nearer door. If you are at home, you do not need a laundromat. WhatsApp the shop whose published pickup area matches your sector. Live between the two? Send the pin — we will not make you guess the rider. The method itself (sort, wash, fold) is written on
        <a href="/laundry-service-islamabad">wash &amp; fold pickup in Islamabad</a>.
      </p>
      <div class="svc-visual-card" style="margin-top:32px; max-width:720px;">${shopImg}</div>
    </div>
  </section>

  ${processSectionHtml({
    eyebrow: 'If you book pickup',
    heading: 'Still four steps — shop choice first',
    lede: 'Same flow as the laundry service page, routed through the counter that already serves your streets.',
    steps: [
      {
        title: 'WhatsApp F-10 or G-15',
        text: 'Name your sector. New Way and Pak Way share quality; they do not share one phone number.',
      },
      {
        title: 'Rider or walk-in',
        text: 'Free pickup in covered areas, no minimum. Or drop the bag at Idrees Market or Century Mall Plaza yourself.',
      },
      {
        title: 'Wash &amp; fold',
        text: 'Sorted and processed at the shop. Typical return is about 24 hours; same-day when you ask early.',
      },
      {
        title: 'Back home',
        text: 'Stacks at the door, or collect from the same counter you used. Pressed pieces come on hangers.',
      },
    ],
  })}

  ${areasHtml({
    heading: 'Where “near me” actually maps to',
    intro: 'These are the published pickup strings — not a promise of every lane in Rawalpindi. Confirm the pin.',
  })}

  <section class="section">
    <div class="container">
      <div class="blog-promo-box">
        <p class="blog-promo-box-title">Blanket wash — the published offer</p>
        <p style="margin:0 0 12px; line-height:1.65;">
          If you are searching laundry near you because winter bedding is in a pile: <strong>Rs 800 a blanket, fifth free</strong> is the offer already on the site.
          <a href="/blog/blanket-wash-offer-5th-free-islamabad">Read the blanket wash post</a>, then message the closer shop.
        </p>
      </div>
      <h2>Laundromat, dhobi, or a shop with a rider?</h2>
      <p style="margin-top:16px; font-size:16.5px; line-height:1.7; max-width:68ch;">
        A laundromat means you carry the weight and wait. A traditional dhobi may not send a tagged receipt or a WhatsApp slot. We sit in the middle: two fixed shops you can visit, plus free pickup for wash and fold. Compare the trade-offs in
        <a href="/blog/wash-and-fold-vs-laundromat-islamabad">wash &amp; fold vs laundromat in Islamabad</a>.
        Street-level coverage notes live in <a href="/blog/laundry-pickup-areas-islamabad-f10-g15">pickup areas for F10, G15 and nearby sectors</a>.
      </p>
      <p style="margin-top:14px; font-size:16.5px; line-height:1.7; max-width:68ch;">
        Need solvent care instead of wash? Switch to <a href="/dry-cleaners-near-me-islamabad">dry cleaners near me</a> for the same two addresses, or the service write-up at <a href="/dry-cleaning-islamabad">dry cleaning for suits, sarees and bridal</a>. Ironing-only is <a href="/ironing-service-islamabad">steam press pickup</a>. Quotes stay on WhatsApp — we are not listing a made-up menu of rupees here.
      </p>
      <div class="svc-visual-card" style="margin-top:32px; max-width:640px;">${sofaImg}</div>
    </div>
  </section>

  __FAQ__

  ${quoteCtaHtml({
    heading: 'Laundry near you — message the closer shop',
    text: `New Way F-10 ${NW.phoneDisplay} (${NW.hoursShort}) · Pak Way G-15 ${PW.phoneDisplay} (${PW.hoursShort}). No minimum order on pickup.`,
  })}
`;
