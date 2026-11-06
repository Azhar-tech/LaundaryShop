/** Canonical public site (www, HTTPS, no trailing slash on paths). */
export const SITE_URL = 'https://www.laundrycare.pk';

/** Quotes are on WhatsApp. No public itemised price list. */
export const PRICE_LIST_URL = '';

export const LOGO_URL = `${SITE_URL}/logo.webp`;
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.webp`;

export const DEFAULT_LOCALE = 'en_PK';

/** Umbrella brand for header, og:site_name, and homepage meta. */
export const SITE_NAME = 'LaundryCare.pk';

/** Social profile URLs for footer links and schema sameAs. */
export const SOCIAL_LINKS = {
  instagram: '', // TODO: paste Instagram profile URL
  facebook: 'https://www.facebook.com/profile.php?id=61555667625168',
};

const SHARED_ADDRESS = {
  addressLocality: 'Islamabad',
  addressRegion: 'ICT',
  postalCode: '44000',
  addressCountry: 'PK',
};

/** @typedef {'newWay' | 'pakway'} LocationId */

function clockLabel(hhmm, { compact = false } = {}) {
  const [h, m] = hhmm.split(':').map(Number);
  const suffix = h >= 12 ? 'pm' : 'am';
  const hour12 = h % 12 || 12;
  if (compact && m === 0) return `${hour12}${suffix}`;
  return `${hour12}:${String(m).padStart(2, '0')}${suffix}`;
}

function hoursCopy(opens, closes) {
  return {
    hoursShort: `${clockLabel(opens, { compact: true })}–${clockLabel(closes, { compact: true })}`,
    hoursLabel: `Open ${clockLabel(opens)} – ${clockLabel(closes)}, daily`,
    hoursCard: `Every day, ${clockLabel(opens)} – ${clockLabel(closes)}`,
  };
}

const NEW_WAY_HOURS = hoursCopy('08:00', '23:00');
// TODO: confirm against GBP
const PAK_WAY_HOURS = hoursCopy('08:00', '21:00');

export const LOCATIONS = {
  newWay: {
    id: 'newWay',
    slug: 'new-way-dry-cleaners-f10',
    name: 'New Way Dry Cleaners',
    gbpName: 'New Way Dry Cleaners and Steam Press',
    alternateName: 'LaundryCare.pk',
    primaryCategory: 'Dry cleaner',
    secondaryCategory: 'Laundry',
    phone: '+923235557878',
    phoneDisplay: '0323 555 7878',
    phoneSecondary: '+923454810410',
    phoneSecondaryDisplay: '0345 481 0410',
    whatsappText: 'Hi New Way, I would like to book a pickup.',
    plusCode: 'MXVX+VV3',
    // TODO: confirm the exact street-address wording so name/address/phone match GBP exactly.
    // GBP listing currently shows "11A F10-2, Islamabad".
    streetAddress: 'F10/2 Idrees Market, Street 8, F-10',
    gbpStreetAddress: '11A F10-2, Islamabad',
    areaLabel: 'F-10 Idrees Market',
    addressLine1: 'F10/2 Idrees Market, Street 8',
    addressLine2: 'F-10 Islamabad, Pakistan (MXVX+VV3)',
    fullAddress: 'F10/2 Idrees Market, Street 8, F-10, Islamabad, Pakistan (MXVX+VV3)',
    latitude: 33.6949006,
    longitude: 72.9994665,
    gbpUrl:
      'https://www.google.com/maps/place/New+Way+Dry+Cleaners+and+Steam+Press/@33.6949006,72.9994665,17z/data=!4m6!3m5!1s0x38dfbf5434d68ef5:0xc87be616ccd3ac10!8m2!3d33.6949006!4d72.9994665!16s%2Fg%2F11t71shhxb',
    sinceYear: 1990,
    foundingDate: '1990-02-01',
    opens: '08:00',
    closes: '23:00',
    ...NEW_WAY_HOURS,
    aggregateRating: { ratingValue: '5.0', reviewCount: '5' },
    pickupAreas: 'F sectors, E-11, G-9, G-10, Bahria & DHA',
    ...SHARED_ADDRESS,
  },
  pakway: {
    id: 'pakway',
    slug: 'pak-way-dry-cleaners-g15',
    name: 'Pak Way Dry Cleaners',
    gbpName: 'Pakway Dry Cleaners',
    alternateName: 'LaundryCare.pk',
    primaryCategory: 'Dry cleaner',
    secondaryCategory: 'Laundry',
    // TODO: confirm against GBP
    phone: '+923495963359',
    phoneDisplay: '0349 596 3359',
    phoneSecondary: '',
    phoneSecondaryDisplay: '',
    whatsappText: 'Hi Pak Way, I would like to book a pickup.',
    plusCode: '', // TODO: paste Pak Way plus code when confirmed
    streetAddress: 'Shop 16, Basement Century Mall Plaza, G15 Markaz',
    areaLabel: 'G15 Markaz',
    addressLine1: 'Shop 16, Basement Century Mall Plaza',
    addressLine2: 'G15 Markaz, Islamabad, Pakistan',
    fullAddress: 'Shop 16, Basement Century Mall Plaza, G15 Markaz, Islamabad, Pakistan',
    // TODO: confirm against GBP
    latitude: 33.6338,
    longitude: 72.8765,
    // TODO: paste the real Google Maps share link; do not use a hand-built hasMap URL
    gbpUrl: '',
    // TODO: confirm against GBP
    sinceYear: null,
    foundingDate: '',
    // TODO: confirm against GBP
    opens: '08:00',
    closes: '21:00',
    ...PAK_WAY_HOURS,
    aggregateRating: { ratingValue: '4.0', reviewCount: '5' },
    pickupAreas: 'G-13, G-14, G-15, G-16 and nearby sectors',
    ...SHARED_ADDRESS,
  },
};

/** @param {LocationId} locationId */
export function getLocation(locationId) {
  return LOCATIONS[locationId];
}

/** Spoken hours (e.g. compact opens–closes) derived from the shop's opens/closes. */
export function hoursToWords(loc) {
  return loc.hoursShort.replace('–', ' to ');
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
  return `https://www.google.com/maps/dir/?api=1&destination=${loc.latitude},${loc.longitude}`;
}

/** @param {import('./constants.js').LOCATIONS.newWay} loc */
export function getLocationMapsSearchUrl(loc) {
  const gbp = loc.gbpUrl || `https://www.google.com/maps/search/?api=1&query=${loc.latitude},${loc.longitude}`;
  return gbp.startsWith('http') ? gbp : `https://www.google.com/maps/search/?api=1&query=${loc.latitude},${loc.longitude}`;
}

/** @param {import('./constants.js').LOCATIONS.newWay} loc */
export function getLocationMapsEmbedUrl(loc) {
  return `https://maps.google.com/maps?q=${loc.latitude},${loc.longitude}&z=17&output=embed`;
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
