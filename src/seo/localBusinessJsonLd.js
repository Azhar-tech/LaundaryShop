import {
  LOGO_URL,
  LOCATIONS,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
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

function getSameAsUrls(loc) {
  const urls = [loc.gbpUrl];
  if (loc.id === 'newWay') {
    urls.push(SOCIAL_LINKS.instagram, SOCIAL_LINKS.facebook);
  }
  const filled = urls.filter(Boolean);
  return filled.length ? filled : undefined;
}

/** @param {'newWay' | 'pakway'} locationId */
export function getLocationJsonLd(locationId) {
  const loc = LOCATIONS[locationId];
  const pageUrl = getLocationPageUrl(loc);

  const node = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    additionalType: [
      'https://schema.org/DryCleaningOrLaundry',
      'https://schema.org/LaundryService',
    ],
    '@id': `${pageUrl}#localbusiness`,
    name: loc.gbpName || loc.name,
    alternateName: loc.alternateName,
    description: `${loc.gbpName || loc.name} — ${loc.primaryCategory.toLowerCase()} and ${loc.secondaryCategory.toLowerCase()} at ${loc.areaLabel}, Islamabad. Book on WhatsApp or walk in daily ${loc.hoursShort}.`,
    url: pageUrl,
    image: LOGO_URL,
    logo: LOGO_URL,
    telephone: loc.phone,
    priceRange: '$$',
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
        opens: loc.opens,
        closes: loc.closes,
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

  if (loc.foundingDate) node.foundingDate = loc.foundingDate;
  else if (loc.sinceYear) node.foundingDate = String(loc.sinceYear);

  const contactPoints = [
    {
      '@type': 'ContactPoint',
      telephone: loc.phone,
      contactType: 'customer service',
      areaServed: 'PK',
      availableLanguage: ['en', 'ur'],
    },
  ];
  if (loc.phoneSecondary) {
    contactPoints.push({
      '@type': 'ContactPoint',
      telephone: loc.phoneSecondary,
      contactType: 'customer service',
      areaServed: 'PK',
      availableLanguage: ['en', 'ur'],
    });
  }
  node.contactPoint = contactPoints;

  const sameAs = getSameAsUrls(loc);
  if (sameAs) node.sameAs = sameAs;
  if (loc.gbpUrl) node.hasMap = loc.gbpUrl;
  if (loc.aggregateRating?.ratingValue && loc.aggregateRating?.reviewCount) {
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

  const organization = {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
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
  };
  const orgSameAs = [SOCIAL_LINKS.instagram, SOCIAL_LINKS.facebook].filter(Boolean);
  if (orgSameAs.length) organization.sameAs = orgSameAs;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization,
      ...locations.map((loc) => {
        const summary = getLocationJsonLd(loc.id);
        // Keep AggregateRating on the shop page, where the Google score is shown.
        delete summary.aggregateRating;
        return {
          ...summary,
          '@id': `${getLocationPageUrl(loc)}#localbusiness-summary`,
        };
      }),
    ],
  };
}

/** Home > shop page breadcrumb. */
export function getLocationBreadcrumbJsonLd(locationId) {
  const loc = LOCATIONS[locationId];
  const pageUrl = getLocationPageUrl(loc);
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: loc.name, item: pageUrl },
    ],
  };
}

/** @deprecated Use getLocationJsonLd('newWay') or getOrganizationJsonLd */
export function getLocalBusinessJsonLd() {
  return getLocationJsonLd('newWay');
}
