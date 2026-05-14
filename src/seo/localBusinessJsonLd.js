import { BUSINESS, DEFAULT_OG_IMAGE, SITE_URL } from './constants.js';

const DAYS_ALL = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

/** Single LocalBusiness node for sitewide JSON-LD. */
export function getLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    additionalType: 'https://schema.org/DryCleaningOrLaundry',
    '@id': `${SITE_URL}/#localbusiness`,
    name: BUSINESS.name,
    alternateName: BUSINESS.alternateName,
    url: SITE_URL,
    image: DEFAULT_OG_IMAGE,
    logo: DEFAULT_OG_IMAGE,
    telephone: BUSINESS.phone,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: DAYS_ALL,
        opens: '08:00',
        closes: '22:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Islamabad' },
      { '@type': 'AdministrativeArea', name: 'Rawalpindi' },
    ],
  };
}
