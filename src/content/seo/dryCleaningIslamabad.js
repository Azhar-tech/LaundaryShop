import {
  areasHtml,
  breadcrumbHtml,
  landingImg,
  PRIMARY_WHATSAPP_HREF,
  processSectionHtml,
  quoteCtaHtml,
} from '../../seo/landingHtml.js';
import { LOCATIONS } from '../../seo/constants.js';

const NW = LOCATIONS.newWay;
const PW = LOCATIONS.pakway;

const dryImg = landingImg({
  src: '/dryCleaning.webp',
  alt: 'Suits and formal wear on the dry-cleaning rail in Islamabad',
  width: 1600,
  height: 1056,
});

const pressImg = landingImg({
  src: '/SteamPress.webp',
  alt: 'Commercial steam press finishing a dry-cleaned garment',
  width: 1536,
  height: 1024,
  lazy: true,
});

/** SEO landing: dry cleaning Islamabad */
export const MARKUP = `
  <section class="page-hero">
    <div class="container">
      ${breadcrumbHtml('Dry cleaning')}
      <span class="eyebrow" style="margin-bottom:14px">Dry cleaning Islamabad</span>
      <h1>Dry cleaning for suits, sarees and bridal wear</h1>
      <p class="lede">
        Suits, sarees, coats and bridal pieces are hand-checked, solvent-cleaned and pressed — not machine-washed. Drop in at New Way F-10 or Pak Way G-15, or book free pickup. Standard turnaround is about 24 hours; same-day is available when you ask.
      </p>
      <div style="display:flex; gap:10px; margin-top:24px; flex-wrap:wrap">
        <a class="btn btn-primary" href="${PRIMARY_WHATSAPP_HREF}" target="_blank" rel="noopener">Get a quote on WhatsApp</a>
        <a class="btn btn-ghost" href="/services#dry-cleaning">See the item list</a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div style="display:grid; grid-template-columns: 1fr 1.1fr; gap:48px; align-items:center;">
        <div class="svc-visual-card">${dryImg}</div>
        <div>
          <span class="eyebrow">The process</span>
          <h2 style="margin-top:14px">Hand-checked, solvent-cleaned, then pressed</h2>
          <p style="margin-top:18px; font-size:16.5px; line-height:1.7;">
            Dry cleaning is for garments water would shrink, fade or distort. A tailored two-piece, a silk saree, a wool overcoat, a sherwani, a lehenga with beadwork — those pieces are inspected when they arrive. Stains are treated by hand before the solvent cycle. Trims, linings and hidden seams are checked so a sequin trail or a fused canvas is not a surprise after the drum stops.
          </p>
          <p style="margin-top:14px; font-size:16.5px; line-height:1.7;">
            The cycle is not a home washer with “dry clean” on the panel. Solvent lifts oil and city dust without soaking fibres the way detergent and water do. After cleaning, pieces go to commercial presses: trousers get a crease, jackets get shape, sarees and dupattas are finished so pleats sit. Everything leaves on a hanger in a protective cover — not folded into a damp bag.
          </p>
          <p style="margin-top:14px; font-size:16.5px; line-height:1.7;">
            If a label is unclear, WhatsApp a close-up to <a href="/new-way-dry-cleaners-f10">New Way</a> or <a href="/pak-way-dry-cleaners-g15">Pak Way</a> before the rider comes. We will say solvent, wash, or “bring it in so we can look”. Quotes are on WhatsApp from photos or a garment count. We do not invent a price table on this page.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="section" style="background: var(--blue-50);">
    <div class="container">
      <div class="section-head">
        <div class="h-left">
          <span class="eyebrow">What we dry-clean</span>
          <h2>Suits, sarees, bridal and the weekly office rail</h2>
        </div>
      </div>
      <ul class="seo-checklist">
        <li>Business suits, blazers, waistcoats, trousers and court-ready coats</li>
        <li>Sarees, lehengas, bridal dresses and heavily embellished occasion wear</li>
        <li>Shalwar kameez, kurtas, abayas, silk dupattas and embroidered layers</li>
        <li>Wool, cashmere, structured jackets and pieces labelled dry clean only</li>
        <li>Sherwanis and formal sets that should not go through a washer</li>
      </ul>
      <p style="margin-top:28px; font-size:16.5px; line-height:1.7; max-width:68ch;">
        Households often mix a dry-clean pile with a wash basket. Book both on the same pickup: wash-and-fold is described on <a href="/laundry-service-islamabad">laundry service Islamabad</a>. Looking for the nearest counter rather than the method? <a href="/dry-cleaners-near-me-islamabad">Dry cleaners near me</a> lists both shops, hours and maps. How often a suit actually needs solvent — not every wear — is in
        <a href="/blog/how-often-dry-clean-suits-islamabad">how often to dry clean suits in Islamabad</a>.
      </p>
    </div>
  </section>

  ${processSectionHtml({
    eyebrow: 'How it works',
    heading: 'WhatsApp, pickup, clean, return on hangers',
    lede: `Walk-ins welcome at both shops — New Way ${NW.hoursShort}, Pak Way ${PW.hoursShort}. Pickup is free in covered areas with no minimum order.`,
    steps: [
      {
        title: 'WhatsApp a photo',
        text: 'Send fabric close-ups to New Way or Pak Way. We flag solvent versus wash before a rider is booked.',
      },
      {
        title: 'Pickup or drop-off',
        text: 'Walk in at F-10 Idrees Market or G-15 Century Mall Plaza, or leave pieces for a rider in a 30-minute slot.',
      },
      {
        title: 'Clean &amp; press',
        text: 'Hand check, spot treatment, solvent cycle, then commercial press. Bridal windows are confirmed up front.',
      },
      {
        title: 'Return',
        text: 'On hangers in covers, usually about 24 hours later. Same-day is for many everyday dry-clean items if you ask early.',
      },
    ],
  })}

  ${areasHtml({
    heading: 'Where dry-clean pickup runs',
    intro: 'Same shops as laundry. New Way covers F sectors, E-11, G-9, G-10, Bahria and DHA. Pak Way covers G-13 to G-16 and nearby sectors.',
  })}

  <section class="section">
    <div class="container">
      <div style="display:grid; grid-template-columns: 1.1fr 1fr; gap:48px; align-items:center;">
        <div>
          <h2>When washing is the wrong tool</h2>
          <p style="margin-top:16px; font-size:16.5px; line-height:1.7;">
            Cotton tees and bed sheets belong in <a href="/laundry-service-islamabad">wash and fold</a>. Structured wool, silk and beadwork do not. If you already washed a garment at home and only need a crease, that is <a href="/ironing-service-islamabad">steam press</a>, not a solvent cycle. The side-by-side is written up in
            <a href="/blog/dry-cleaning-vs-washing">dry cleaning vs washing</a> — useful before you bag a whole wardrobe as “dry clean”.
          </p>
          <p style="margin-top:14px; font-size:16.5px; line-height:1.7;">
            Bridal pieces need a realistic clock. Beadwork, multiple layers and stain work on a lehenga are not a same-day shirt. Tell us the function date when you book. We would rather quote a longer window than return a rushed piece.
          </p>
        </div>
        <div class="svc-visual-card">${pressImg}</div>
      </div>
    </div>
  </section>

  __FAQ__

  ${quoteCtaHtml({
    heading: 'Not sure whether to dry-clean?',
    text: `WhatsApp a fabric close-up. We will say solvent, wash, or bring it in. New Way ${NW.phoneDisplay} · Pak Way ${PW.phoneDisplay}.`,
  })}
`;
