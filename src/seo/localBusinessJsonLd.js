import {
  DEFAULT_OG_IMAGE,
  LOCATIONS,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
  getLocationMapsSearchUrl,
  getLocationPageUrl,
} from './constants.js';

const DAYS_ALL = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const CORE_SERVICES = [
  { name: 'Dry Cleaning', url: `${SITE_URL}/dry-cleaning-islamabad` },
  { name: 'Wash & Fold', url: `${SITE_URL}/laundry-service-islamabad` },
  { name: 'Steam Press & Ironing', url: `${SITE_URL}/ironing-service-islamabad` },
  { name: 'Sofa Cleaning', url: `${SITE_URL}/services#sofa` },
  { name: 'Carpet Cleaning', url: `${SITE_URL}/services#carpet` },
];

function getSameAsUrls(gbpUrl) {
  const urls = [gbpUrl, SOCIAL_LINKS.instagram, SOCIAL_LINKS.facebook].filter(Boolean);
  return urls.length ? urls : undefined;
}

/** @param {'newWay' | 'pakway'} locationId */
export function getLocationJsonLd(locationId) {
  const loc = LOCATIONS[locationId];
  const pageUrl = getLocationPageUrl(loc);
  const mapsUrl = getLocationMapsSearchUrl(loc);

  const node = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    additionalType: 'https://schema.org/DryCleaningOrLaundry',
    '@id': `${pageUrl}#localbusiness`,
    name: loc.name,
    alternateName: loc.alternateName,
    description: `${loc.name} — laundry, dry cleaning and steam press at ${loc.areaLabel}, Islamabad. Book on WhatsApp or walk in daily 8am–10pm.`,
    url: pageUrl,
    image: DEFAULT_OG_IMAGE,
    logo: DEFAULT_OG_IMAGE,
    telephone: loc.phone,
    priceRange: '$$',
    hasMap: mapsUrl,
    sameAs: getSameAsUrls(loc.gbpUrl || mapsUrl),
    parentOrganization: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: loc.streetAddress,
      addressLocality: loc.addressLocality,
      addressRegion: loc.addressRegion,
      postalCode: loc.postalCode,
      addressCountry: loc.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: loc.latitude,
      longitude: loc.longitude,
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
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Laundry & dry cleaning services',
      itemListElement: CORE_SERVICES.map((service, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          url: service.url,
        },
      })),
    },
  };

  if (loc.aggregateRating) {
    node.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: loc.aggregateRating.ratingValue,
      reviewCount: loc.aggregateRating.reviewCount,
      bestRating: '5',
      worstRating: '1',
    };
  }

  return node;
}

/** Organization + both locations for homepage. */
export function getOrganizationJsonLd() {
  const locations = Object.values(LOCATIONS);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: DEFAULT_OG_IMAGE,
        sameAs: [SOCIAL_LINKS.instagram, SOCIAL_LINKS.facebook].filter(Boolean),
        subOrganization: locations.map((loc) => ({
          '@type': 'LocalBusiness',
          name: loc.name,
          url: getLocationPageUrl(loc),
          telephone: loc.phone,
          address: {
            '@type': 'PostalAddress',
            streetAddress: loc.streetAddress,
            addressLocality: loc.addressLocality,
            addressCountry: loc.addressCountry,
          },
        })),
      },
      ...locations.map((loc) => {
        const summary = getLocationJsonLd(loc.id);
        return {
          ...summary,
          '@id': `${getLocationPageUrl(loc)}#localbusiness-summary`,
        };
      }),
    ],
  };
}

/** @deprecated Use getLocationJsonLd('newWay') or getOrganizationJsonLd */
export function getLocalBusinessJsonLd() {
  return getLocationJsonLd('newWay');
}
