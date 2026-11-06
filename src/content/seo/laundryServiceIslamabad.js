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

const washImg = landingImg({
  src: '/WashandFold.webp',
  alt: 'Wash-and-fold laundry stacked after pickup in Islamabad',
  width: 1600,
  height: 1057,
});

const beddingImg = landingImg({
  src: '/carpetCleaning.webp',
  alt: 'Household textiles collected for laundry pickup in Islamabad',
  width: 1536,
  height: 1024,
  lazy: true,
});

/** SEO landing: laundry pickup + wash Islamabad */
export const MARKUP = `
  <section class="page-hero">
    <div class="container">
      ${breadcrumbHtml('Wash & fold pickup')}
      <span class="eyebrow" style="margin-bottom:14px">Laundry Islamabad</span>
      <h1>Wash &amp; fold laundry with free pickup in Islamabad</h1>
      <p class="lede">
        Everyday laundry is sorted by colour, washed, dried and folded, then returned ready to put away. Book free pickup on WhatsApp — New Way F-10 or Pak Way G-15 — with no minimum order. Standard turnaround is about 24 hours; same-day is available when you ask.
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
          <span class="eyebrow">What wash &amp; fold includes</span>
          <h2 style="margin-top:14px">Sorted, washed, dried, folded — not a laundromat queue</h2>
          <p style="margin-top:18px; font-size:16.5px; line-height:1.7;">
            Wash and fold is the service for the clothes you wear every week: tees, jeans, kurtas, shalwar sets, school uniforms, towels and bed sheets. We do not throw a mixed bag into one cycle. Colour and fabric are separated so whites stay brighter and darks do not bleed. Loads that need a gentler temperature — baby clothes, delicates you still want washed rather than solvent-cleaned — are split out before the machines start.
          </p>
          <p style="margin-top:14px; font-size:16.5px; line-height:1.7;">
            You never have to sit with a coin machine. Message <a href="/new-way-dry-cleaners-f10">New Way in F-10</a> or <a href="/pak-way-dry-cleaners-g15">Pak Way in G-15</a>, leave a bag for the rider, and get stacks back that go straight into a cupboard. If some pieces in the same pickup should not see water — a wool blazer, a beaded kameez — tell the rider. Those go to <a href="/dry-cleaning-islamabad">dry cleaning</a> instead of the washers.
          </p>
          <p style="margin-top:14px; font-size:16.5px; line-height:1.7;">
            Office shirts in the basket can be finished on the steam press in the same turnaround. That is our <a href="/ironing-service-islamabad">ironing service</a>, not a surprise add-on sprung at the door. Say “press these” when you book. Rates are quoted on WhatsApp from a photo or a count of pieces — there is no public price list.
          </p>
        </div>
        <div class="svc-visual-card">${washImg}</div>
      </div>
    </div>
  </section>

  ${processSectionHtml({
    eyebrow: 'How it works',
    heading: 'Four steps from WhatsApp to a folded stack',
    lede: 'No app store. No minimum order. The same path we use for dry cleaning and press-only jobs.',
    steps: [
      {
        title: 'WhatsApp a shop',
        text: `New Way ${NW.phoneDisplay} or Pak Way ${PW.phoneDisplay}. Send your sector, a window, and a photo if you want a quote first.`,
      },
      {
        title: 'We pick up',
        text: 'A rider collects the bag in a 30-minute slot. No need to visit Idrees Market or Century Mall Plaza unless you prefer to walk in.',
      },
      {
        title: 'We wash &amp; fold',
        text: 'Sorted by colour, washed, dried and folded at the shop. Everyday loads are usually ready inside 24 hours.',
      },
      {
        title: 'Back to your door',
        text: 'Stacks returned in the slot you chose. Hanger pieces — pressed shirts or dry-clean garments — come in covers.',
      },
    ],
  })}

  ${areasHtml({
    heading: 'Pickup for wash and fold across both shops',
    intro: 'Riders run from each counter. Confirm your pin when you book — coverage is the published pickup areas, not every street in the twin cities.',
  })}

  <section class="section">
    <div class="container">
      <div class="blog-promo-box">
        <p class="blog-promo-box-title">Seasonal blankets and razais</p>
        <p style="margin:0 0 12px; line-height:1.65;">
          Blanket season is the one published offer on this site: <strong>Rs 800 per blanket, fifth blanket free</strong>. It is not a guess at other item prices. Read the terms and book through the shop on
          <a href="/blog/blanket-wash-offer-5th-free-islamabad">the blanket wash offer</a>.
        </p>
        <p class="blog-promo-box-foot">WhatsApp a count of blankets with your pickup slot. Other laundry in the same bag is quoted separately.</p>
      </div>
      <div class="section-head">
        <div class="h-left">
          <span class="eyebrow">Typical loads</span>
          <h2>What households send every week</h2>
        </div>
      </div>
      <ul class="seo-checklist">
        <li>Everyday kurtas, shalwar kameez, jeans, tees and loungewear</li>
        <li>Bed sheets, pillow covers, towels and bath mats</li>
        <li>Kids’ uniforms and a separate cycle for baby clothes when you ask</li>
        <li>Gym kits on request — not mixed with whites</li>
        <li>Blankets and razais in season, including the published 5th-free offer</li>
      </ul>
      <p style="margin-top:28px; font-size:16.5px; line-height:1.7; max-width:68ch;">
        Searching from your phone for a shop rather than a service? Use <a href="/laundry-near-me-islamabad">laundry near me in Islamabad</a> for both counters, maps and hours. Prefer to compare pickup versus a self-service hall? <a href="/blog/wash-and-fold-vs-laundromat-islamabad">Wash &amp; fold vs a laundromat</a> spells out the difference. Pickup streets and sectors are listed in
        <a href="/blog/laundry-pickup-areas-islamabad-f10-g15">laundry pickup areas — F10, G15 and the twin cities</a>.
      </p>
      <div class="svc-visual-card" style="margin-top:32px; max-width:640px;">${beddingImg}</div>
    </div>
  </section>

  __FAQ__

  ${quoteCtaHtml({
    heading: 'Send a photo. Get a wash-and-fold quote.',
    text: `Book before 5pm for same-day pickup on many everyday loads. No minimum order. New Way ${NW.phoneDisplay} · Pak Way ${PW.phoneDisplay}.`,
  })}
`;
