/** Shared FAQ entries: visible copy on home must match FAQPage schema. */

import { LOCATIONS } from './constants.js';

const { newWay: NW, pakway: PW } = LOCATIONS;

export const HOME_FAQ = [
  {
    q: 'Do you offer laundry pickup in Islamabad?',
    a: 'Yes. We offer free laundry pickup and delivery across Islamabad and nearby areas—including F sectors, parts of Rawalpindi, Bahria Town, and DHA. WhatsApp us to book a time slot.',
  },
  {
    q: 'Can I book an online laundry service without visiting the shop?',
    a: `Yes. LaundryCare.pk is built for WhatsApp-first booking—send photos of your garments, confirm the quote, and we collect from your doorstep. Walk-ins welcome at New Way (F10 Idrees Market, ${NW.hoursShort}) or Pak Way (G15 Century Mall Plaza, ${PW.hoursShort}).`,
  },
  {
    q: 'How fast is dry cleaning and wash & fold in Islamabad?',
    a: 'Most orders are ready within 24 hours. Same-day options are available for many everyday items—ask when you book. Bridal and speciality pieces may take longer depending on trims and solvents.',
  },
  {
    q: 'Do you provide ironing / steam pressing only?',
    a: 'Yes. Steam press-only service is ideal if your clothes are already clean. We iron office wear, uniforms, sarees and kurtas. Book steam press via our Services page or WhatsApp for a pickup slot.',
  },
  {
    q: 'Where are you located—as a dry cleaner near me?',
    a: `We have two shops: New Way at ${NW.fullAddress}, and Pak Way at ${PW.fullAddress}. Free pickup riders cover most twin-city neighbourhoods—WhatsApp the shop nearest you.`,
  },
  {
    q: 'Is there a minimum order for laundry pickup?',
    a: 'No minimum order—pickup & delivery stay free across our covered areas. Oversized sofas and carpets quoted separately.',
  },
  {
    q: 'Is there a laundry shop near me in Islamabad?',
    a: `Our shops are New Way (${NW.areaLabel}, ${NW.hoursShort}) and Pak Way (${PW.areaLabel}, ${PW.hoursShort}). Free pickup is available across covered areas; message the shop closest to you on WhatsApp.`,
  },
  {
    q: 'Do you offer dhobi / laundry pickup near me?',
    a: 'Yes. Think of us as a modern dhobi with pickup: we collect, wash, fold or dry-clean, press if needed, and deliver back—book on WhatsApp at 0323 555 7878 with no minimum order.',
  },
  {
    q: 'Laundromat vs pickup laundry — what\'s the difference in Islamabad?',
    a: 'A laundromat means you carry bags and wait at machines. LaundryCare.pk picks up from home, processes at our F10 facility, and returns folded or on hangers—often inside 24 hours with free delivery.',
  },
];

export const LAUNDRY_SERVICE_FAQ = [
  {
    q: 'What is included in wash-and-fold laundry?',
    a: 'We sort by colour and fabric, wash, dry and fold everyday clothes, bedding and towels. You get stacks ready to put away. Ironing and dry cleaning can be added on the same pickup if you ask.',
  },
  {
    q: 'How do I book laundry pickup in Islamabad?',
    a: `WhatsApp New Way on ${NW.phoneDisplay} or Pak Way on ${PW.phoneDisplay}. Send your area, a time window, and a photo of the load if you want a quote first. There is no app to download.`,
  },
  {
    q: 'Is there a minimum order for wash and fold?',
    a: 'No minimum order. Pickup and delivery stay free in covered areas. Oversized sofas and carpets are quoted separately as home services.',
  },
  {
    q: 'How long does wash and fold take?',
    a: 'Most baskets return within 24 hours. Same-day is available for many everyday loads if you book early — ask when you message the shop.',
  },
  {
    q: 'Do you wash blankets and razais?',
    a: 'Yes. Seasonal blankets and razais go on a wash cycle suited to the fill. See the current blanket offer (Rs 800 each, 5th blanket free) on our blog, then WhatsApp a shop to book.',
  },
  {
    q: 'Can I mix laundry with dry cleaning in one pickup?',
    a: 'Yes. Tell the rider which pieces are wash-and-fold and which need solvent cleaning. We split the load at the shop so silk, wool and bridal pieces are not washed with tees.',
  },
];

export const DRY_CLEANING_FAQ = [
  {
    q: 'Which clothes should be dry cleaned rather than washed?',
    a: 'Suits, blazers, wool coats, silk, beaded sarees, lehengas, structured kameez and anything labelled “dry clean only”. If you are unsure, WhatsApp a photo before pickup.',
  },
  {
    q: 'How does dry cleaning work at New Way and Pak Way?',
    a: 'Each garment is hand-checked and spot-treated, then cleaned with solvent — not a home washer. It is pressed on commercial equipment and returned on a hanger in a protective cover.',
  },
  {
    q: 'How long does dry cleaning take in Islamabad?',
    a: 'Standard turnaround is about 24 hours for most suits and everyday dry-clean pieces. Bridal and heavily embellished items may need extra time; we confirm when you book.',
  },
  {
    q: 'Do you dry clean bridal wear and sarees?',
    a: 'Yes. Bridal lehengas, sarees, sherwanis and embroidered pieces are inspected for beads, sequins and lining before a solvent cycle. Same-day is not typical for bridal — ask for a realistic window.',
  },
  {
    q: 'Can I walk in or do you only pick up?',
    a: `Walk in at New Way (${NW.areaLabel}, ${NW.hoursShort}) or Pak Way (${PW.areaLabel}, ${PW.hoursShort}), or book free pickup if the shop is not on your route.`,
  },
  {
    q: 'Dry cleaning vs washing — how do I choose?',
    a: 'Water and detergent suit cotton tees, jeans and bedding. Solvent suits tailored and delicate pieces. Our guide on dry cleaning vs washing walks through common labels, or send a photo on WhatsApp.',
  },
];

export const IRONING_FAQ = [
  {
    q: 'Can I book steam press without laundry?',
    a: 'Yes. Ironing-only is for clothes you already washed. We pick up, press on commercial steam equipment, and return on hangers. No minimum order in covered areas.',
  },
  {
    q: 'Which items do you iron in Islamabad?',
    a: 'Office shirts and trousers, shalwar kameez, kurtas, uniforms, sarees, dupattas, abayas and many school pieces. Heavily beaded bridal is quoted separately so we do not crush embroidery.',
  },
  {
    q: 'Do you pick up for ironing only?',
    a: 'Yes. WhatsApp New Way or Pak Way, say “press only”, and choose a slot. The rider collects on hangers or in a bag and brings the same pieces back pressed.',
  },
  {
    q: 'Is same-day ironing available?',
    a: 'Same-day steam press is often available for office shirts and everyday sets if you book in the morning. Ask when you message — we will not promise a slot we cannot keep.',
  },
  {
    q: 'Will you press clothes I washed at home?',
    a: 'Yes. That is the usual ironing-only flow. Please send them dry and reasonably smooth so we can finish collars and creases properly.',
  },
  {
    q: 'Can I combine ironing with wash and fold or dry cleaning?',
    a: 'Yes. One pickup can include a wash basket, solvent pieces and press-only items. Label or tell the rider which pile is which.',
  },
];

export const LAUNDRY_NEAR_ME_FAQ = [
  {
    q: 'Where can I find laundry near me in Islamabad?',
    a: `Two shops: New Way at ${NW.fullAddress} (${NW.hoursShort}) and Pak Way at ${PW.fullAddress} (${PW.hoursShort}). Free doorstep pickup covers ${NW.pickupAreas} from New Way and ${PW.pickupAreas} from Pak Way.`,
  },
  {
    q: 'Which shop should I choose — F-10 or G-15?',
    a: 'Pick the closer counter if you are walking in. For pickup, message the shop whose rider already covers your sector. Unsure? WhatsApp either shop with your pin and we will route it.',
  },
  {
    q: 'Do you replace a laundromat or laundry shop near me?',
    a: 'You can still walk in. Most households skip the laundromat run: book pickup on WhatsApp, we wash and fold, and return the basket — usually within 24 hours, no minimum order.',
  },
  {
    q: 'Is laundry pickup near me free?',
    a: 'Pickup and delivery are free in covered areas with no minimum order. Message your pin on WhatsApp so we confirm the route before the rider leaves.',
  },
  {
    q: 'What are the hours for laundry near me?',
    a: `New Way F-10 is open ${NW.hoursShort} and Pak Way G-15 is open ${PW.hoursShort}, every day including Sundays, for walk-ins and for arranging pickup.`,
  },
  {
    q: 'How fast is laundry service near me?',
    a: 'Most wash-and-fold baskets return within 24 hours. Same-day is available on many everyday loads if you book early — ask the shop when you lock the slot.',
  },
];

export const DRY_CLEANERS_NEAR_ME_FAQ = [
  {
    q: 'Where are dry cleaners near me in Islamabad?',
    a: `New Way Dry Cleaners is at ${NW.fullAddress}. Pak Way Dry Cleaners is at ${PW.fullAddress}. Maps and directions are on each shop page. Free pickup if visiting is not convenient.`,
  },
  {
    q: 'What are the opening hours?',
    a: `New Way F-10 is open ${NW.hoursShort}; Pak Way G-15 is open ${PW.hoursShort}. Both welcome walk-ins and pickup bookings daily, including Sundays and public holidays.`,
  },
  {
    q: 'Can dry cleaners near me pick up suits and sarees?',
    a: 'Yes. We collect suits, sarees, bridal wear, coats and delicate fabrics from your door, dry-clean them, and return them on hangers in protective covers.',
  },
  {
    q: 'How fast are dry cleaners near me?',
    a: 'Standard dry cleaning is about 24 hours for most garments. Bridal and heavily embellished pieces may take longer — we confirm timing when you book.',
  },
  {
    q: 'Do I need an appointment to walk in?',
    a: 'No appointment for drop-off. Walk in at F-10 Idrees Market or G-15 Century Mall Plaza during open hours. Pickup still needs a WhatsApp slot so the rider is not guessing your time.',
  },
  {
    q: 'Which shop covers my sector for pickup?',
    a: `New Way riders cover ${NW.pickupAreas}. Pak Way riders cover ${PW.pickupAreas}. Send your pin if you live between the two — we will assign the closer route.`,
  },
];

/** FAQPage structured data derived from FAQ entries. */
export function getFaqJsonLd(faqEntries = HOME_FAQ) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqEntries.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  };
}
