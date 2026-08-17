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
    a: 'Yes. LaundryCare.pk is built for WhatsApp-first booking—send photos of your garments, confirm the quote, and we collect from your doorstep. Walk-ins welcome at New Way (F10 Idrees Market) or Pak Way (G15 Century Mall Plaza), 8am–10pm daily.',
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
    a: `Our shops are New Way (${NW.areaLabel}) and Pak Way (${PW.areaLabel})—both open 8am–10pm. Free pickup is available across covered areas; message the shop closest to you on WhatsApp.`,
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

export const LAUNDRY_NEAR_ME_FAQ = [
  {
    q: 'Where can I find laundry near me in Islamabad?',
    a: 'LaundryCare.pk serves Islamabad and Rawalpindi with free doorstep pickup from F10, F11, E11, G9, Bahria and DHA. Our F10/2 Idrees Market shop is also open daily 8am–10pm for walk-ins.',
  },
  {
    q: 'Do you replace a laundromat or laundry shop near me?',
    a: 'Yes. Instead of hauling bags to a laundromat, book pickup on WhatsApp—we wash, fold and deliver back, usually within 24 hours, with no delivery charge in covered areas.',
  },
  {
    q: 'Is laundry pickup near me free?',
    a: 'Pickup and delivery are free across our service areas with no minimum order. Message us your pin on WhatsApp to confirm coverage before booking.',
  },
  {
    q: 'How fast is laundry service near me in Islamabad?',
    a: 'Most wash-and-fold baskets return within 24 hours. Same-day options exist for many everyday loads—ask when you book your slot.',
  },
];

export const DRY_CLEANERS_NEAR_ME_FAQ = [
  {
    q: 'Where are dry cleaners near me in Islamabad?',
    a: `New Way Dry Cleaners is at ${NW.fullAddress}. Pak Way Dry Cleaners is at ${PW.fullAddress}. We also offer free pickup across Islamabad and Rawalpindi if visiting a shop is not convenient.`,
  },
  {
    q: 'Can dry cleaners near me pick up suits and sarees?',
    a: 'Yes. We collect suits, sarees, bridal wear, coats and delicate fabrics from your door, dry-clean at our F10 facility, and return on hangers in protective covers.',
  },
  {
    q: 'How fast are dry cleaners near me in Islamabad?',
    a: 'Standard dry cleaning turnaround is about 24 hours for most garments. Bridal and heavily embellished pieces may take longer—we confirm timing when you book.',
  },
  {
    q: 'Are dry cleaners near me open on Sundays?',
    a: 'Yes. We are open every day from 8:00am to 10:00pm, including Sundays and public holidays, for both walk-ins and pickup bookings.',
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
