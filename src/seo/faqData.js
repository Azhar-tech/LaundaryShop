/** Shared FAQ entries: visible copy on home must match FAQPage schema. */

export const HOME_FAQ = [
  {
    q: 'Do you offer laundry pickup in Islamabad?',
    a: 'Yes. We offer free laundry pickup and delivery across Islamabad and nearby areas—including F sectors, parts of Rawalpindi, Bahria Town, and DHA. WhatsApp us to book a time slot.',
  },
  {
    q: 'Can I book an online laundry service without visiting the shop?',
    a: 'Yes. LaundryCare.pk is built for WhatsApp-first booking—send photos of your garments, confirm the quote, and we collect from your doorstep. Walk-ins still welcome at F10/2 Idrees Market.',
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
    a: 'We are at F10/2 Idrees Market, Islamabad. If you live in twin cities neighbourhoods we serve free pickup riders may be closer than you think—same professional clean, no minimum order.',
  },
  {
    q: 'Is there a minimum order for laundry pickup?',
    a: 'No minimum order—pickup & delivery stay free across our covered areas. Oversized sofas and carpets quoted separately.',
  },
];

/** FAQPage structured data derived from HOME_FAQ. */
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
