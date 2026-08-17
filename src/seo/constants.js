/** Canonical public site (www, HTTPS, no trailing slash on paths). */
export const SITE_URL = 'https://www.laundrycare.pk';

export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;

export const DEFAULT_LOCALE = 'en_PK';

/** Umbrella brand for header, og:site_name, and homepage meta. */
export const SITE_NAME = 'LaundryCare.pk';

export const HOURS_LABEL = 'Open 8:00am – 10:00pm, daily';

/** Social profile URLs for footer links and schema sameAs. */
export const SOCIAL_LINKS = {
  instagram: '',
  facebook: '',
};

const SHARED_ADDRESS = {
  addressLocality: 'Islamabad',
  addressRegion: 'ICT',
  postalCode: '44000',
  addressCountry: 'PK',
};

/** @typedef {'newWay' | 'pakway'} LocationId */

export const LOCATIONS = {
  newWay: {
    id: 'newWay',
    slug: 'new-way-dry-cleaners-f10',
    name: 'New Way Dry Cleaners',
    alternateName: 'LaundryCare.pk',
    phone: '+923235557878',
    phoneDisplay: '0323 555 7878',
    whatsappText: 'Hi New Way, I would like to book a pickup.',
    plusCode: 'MXVX+VV3',
    streetAddress: 'F10/2 Idrees Market, Street 8, F-10',
    areaLabel: 'F-10 Idrees Market',
    addressLine1: 'F10/2 Idrees Market, Street 8',
    addressLine2: 'F-10 Islamabad, Pakistan (MXVX+VV3)',
    fullAddress: 'F10/2 Idrees Market, Street 8, F-10, Islamabad, Pakistan (MXVX+VV3)',
    latitude: 33.693,
    longitude: 73.0135,
    gbpUrl: '',
    sinceYear: 2001,
    aggregateRating: { ratingValue: '4.9', reviewCount: '800' },
    pickupAreas: 'F sectors, E-11, G-9, G-10, Bahria & DHA',
    ...SHARED_ADDRESS,
  },
  pakway: {
    id: 'pakway',
    slug: 'pakway-dry-cleaners-g15',
    name: 'Pakway Dry Cleaners',
    alternateName: 'LaundryCare.pk',
    phone: '+923495963359',
    phoneDisplay: '0349 596 3359',
    whatsappText: 'Hi Pakway, I would like to book a pickup.',
    plusCode: '',
    streetAddress: 'Shop 16, Basement Century Mall Plaza, G15 Markaz',
    areaLabel: 'G15 Markaz',
    addressLine1: 'Shop 16, Basement Century Mall Plaza',
    addressLine2: 'G15 Markaz, Islamabad, Pakistan',
    fullAddress: 'Shop 16, Basement Century Mall Plaza, G15 Markaz, Islamabad, Pakistan',
    latitude: 33.6338,
    longitude: 72.8765,
    gbpUrl: '',
    sinceYear: null,
    aggregateRating: null,
    pickupAreas: 'G-13, G-14, G-15, G-16 and nearby sectors',
    ...SHARED_ADDRESS,
  },
};

/** @param {LocationId} locationId */
export function getLocation(locationId) {
  return LOCATIONS[locationId];
}

/** @param {import('./constants.js').LOCATIONS.newWay} loc */
function mapsQueryFor(loc) {
  return encodeURIComponent(loc.fullAddress);
}

/** @param {import('./constants.js').LOCATIONS.newWay} loc */
export function getLocationPagePath(loc) {
  return `/${loc.slug}`;
}

/** @param {import('./constants.js').LOCATIONS.newWay} loc */
export function getLocationPageUrl(loc) {
  return `${SITE_URL}${getLocationPagePath(loc)}`;
}

/** @param {import('./constants.js').LOCATIONS.newWay} loc */
export function getLocationMapsDirectionsUrl(loc) {
  return `https://www.google.com/maps/dir/?api=1&destination=${mapsQueryFor(loc)}`;
}

/** @param {import('./constants.js').LOCATIONS.newWay} loc */
export function getLocationMapsSearchUrl(loc) {
  const gbp = loc.gbpUrl || `https://www.google.com/maps/search/?api=1&query=${mapsQueryFor(loc)}`;
  return gbp.startsWith('http') ? gbp : `https://www.google.com/maps/search/?api=1&query=${mapsQueryFor(loc)}`;
}

/** @param {import('./constants.js').LOCATIONS.newWay} loc */
export function getLocationMapsEmbedUrl(loc) {
  return `https://maps.google.com/maps?q=${mapsQueryFor(loc)}&z=17&output=embed`;
}

/** @param {import('./constants.js').LOCATIONS.newWay} loc */
export function getWhatsAppUrl(loc, text = loc.whatsappText) {
  const digits = loc.phone.replace(/\D/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

/** Backward-compatible alias — primary legacy references use New Way F10. */
export const BUSINESS = LOCATIONS.newWay;

export const MAPS_DIRECTIONS_URL = getLocationMapsDirectionsUrl(LOCATIONS.newWay);
export const MAPS_SEARCH_URL = getLocationMapsSearchUrl(LOCATIONS.newWay);
export const MAPS_EMBED_URL = getLocationMapsEmbedUrl(LOCATIONS.newWay);
export const GBP_URL = LOCATIONS.newWay.gbpUrl || MAPS_SEARCH_URL;
