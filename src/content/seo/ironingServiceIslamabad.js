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

const pressImg = landingImg({
  src: '/SteamPress.webp',
  alt: 'Steam press and ironing of office shirts in Islamabad',
  width: 1536,
  height: 1024,
});

const dryImg = landingImg({
  src: '/dryCleaning.webp',
  alt: 'Pressed garments on hangers after steam finishing',
  width: 1600,
  height: 1056,
});

/** SEO landing: ironing / steam press Islamabad */
export const MARKUP = `
  <section class="page-hero">
    <div class="container">
      ${breadcrumbHtml('Ironing & steam press')}
      <span class="eyebrow" style="margin-bottom:14px">Steam press Islamabad</span>
      <h1>Ironing &amp; steam press with free pickup in Islamabad</h1>
      <p class="lede">
        Already washed at home but facing a backlog of shirts and kameez? Book ironing-only pickup. We finish office wear, uniforms and traditional sets on commercial steam presses, then return them on hangers. Walk in at F-10 (${NW.hoursShort}) or G-15 (${PW.hoursShort}).
      </p>
      <div style="display:flex; gap:10px; margin-top:24px; flex-wrap:wrap">
        <a class="btn btn-primary" href="${PRIMARY_WHATSAPP_HREF}" target="_blank" rel="noopener">Get a quote on WhatsApp</a>
        <a class="btn btn-ghost" href="/contact#book">Book pickup</a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div style="display:grid; grid-template-columns: 1.1fr 1fr; gap:48px; align-items:center;">
        <div>
          <span class="eyebrow">Press only — or with a full order</span>
          <h2 style="margin-top:14px">Industrial steam, hand-finished collars</h2>
          <p style="margin-top:18px; font-size:16.5px; line-height:1.7;">
            Ironing pickup is for clothes that are already clean. You wash at home, or you send a mixed order where only some pieces need a crease. Garments go across roller presses set for the cotton, linen and blended fabrics common in Islamabad wardrobes. Collars, cuffs, plackets and dupatta edges are finished by hand so embroidery is not flattened and a shirt point does not curl.
          </p>
          <p style="margin-top:14px; font-size:16.5px; line-height:1.7;">
            This is not a travel steamer waved over a wrinkle. Commercial boilers hold steam that sets a trouser crease and takes the rumple out of a kameez after a wash. School uniforms, office trousers, shalwar sets and many abayas take the same path. Bridal with dense beadwork is quoted separately so we do not crush work that should be blocked, not rolled.
          </p>
          <p style="margin-top:14px; font-size:16.5px; line-height:1.7;">
            Send a photo to <a href="/new-way-dry-cleaners-f10">New Way F-10</a> or <a href="/pak-way-dry-cleaners-g15">Pak Way G-15</a> for a quote. There is no itemised tariff on this page. If the same pickup includes a dirty basket, add <a href="/laundry-service-islamabad">wash and fold</a>. If a jacket should never see a washer, add <a href="/dry-cleaning-islamabad">dry cleaning</a> and tell the rider which pile is which.
          </p>
          <p style="margin-top:14px; font-size:16.5px; line-height:1.7;">
            Please send ironing-only pieces dry. Damp cotton from a home rail will not take a stable crease on the press, and we would rather wait than scorch a shirt you already washed with care.
          </p>
        </div>
        <div class="svc-visual-card">${pressImg}</div>
      </div>
    </div>
  </section>

  ${processSectionHtml({
    eyebrow: 'How it works',
    heading: 'Four steps for press-only orders',
    lede: 'Same WhatsApp booking as laundry. Say “ironing only” so the rider is not expecting a wash bag.',
    steps: [
      {
        title: 'WhatsApp the shop',
        text: `${NW.phoneDisplay} (New Way) or ${PW.phoneDisplay} (Pak Way). Count of shirts or sets is enough for a quote.`,
      },
      {
        title: 'We pick up',
        text: 'Send pieces dry. A rider collects in a short slot, or you walk in at Idrees Market or Century Mall Plaza.',
      },
      {
        title: 'Steam press',
        text: 'Commercial press plus hand finishing on collars, cuffs and pleats. Same-day is often possible if you book in the morning.',
      },
      {
        title: 'Return on hangers',
        text: 'Covered, ready for the cupboard or the office. No folding into a crease you then have to undo.',
      },
    ],
  })}

  ${areasHtml({
    heading: 'Ironing pickup areas',
    intro: 'Press-only rides the same routes as wash and dry-clean. Check the shop that already covers your sector.',
  })}

  <section class="section">
    <div class="container">
      <div class="section-head">
        <div class="h-left">
          <span class="eyebrow">What we press</span>
          <h2>Weekday shirts through weekend kameez</h2>
        </div>
      </div>
      <ul class="seo-checklist">
        <li>Office shirts, trousers, blazers that are already clean</li>
        <li>Shalwar kameez, kurtas, waistcoats and dupattas</li>
        <li>School uniforms and many abayas or hijabs</li>
        <li>Sarees that need finishing after a careful home wash</li>
        <li>Bed sheets and pillow covers when you want a flatter fold</li>
      </ul>
      <p style="margin-top:28px; font-size:16.5px; line-height:1.7; max-width:68ch;">
        A suit that still has city dust in the cloth needs solvent first — see <a href="/dry-cleaning-islamabad">dry cleaning for suits, sarees and bridal</a> — then press is part of that finishing, not a separate miracle. Finding the nearer counter is on <a href="/dry-cleaners-near-me-islamabad">dry cleaners near me</a> and <a href="/laundry-near-me-islamabad">laundry near me</a>. Care labels and when to skip the washer are in
        <a href="/blog/dry-cleaning-vs-washing">dry cleaning vs washing</a>.
      </p>
      <div class="svc-visual-card" style="margin-top:32px; max-width:640px;">${dryImg}</div>
    </div>
  </section>

  __FAQ__

  ${quoteCtaHtml({
    heading: 'Send a shirt count. Get a press quote.',
    text: `Ironing-only or mixed with laundry — say which. New Way ${NW.hoursShort} · Pak Way ${PW.hoursShort}. New Way ${NW.phoneDisplay} · Pak Way ${PW.phoneDisplay}.`,
  })}
`;
