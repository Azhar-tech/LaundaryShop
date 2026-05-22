/** Canonical public site (www, HTTPS, no trailing slash on paths). */
export const SITE_URL = 'https://www.laundrycare.pk';

export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;

export const DEFAULT_LOCALE = 'en_PK';

export const SITE_NAME = 'New Way Dry Cleaners';

export const BUSINESS = {
  name: 'New Way Dry Cleaners',
  alternateName: 'LaundryCare.pk',
  phone: '+923235557878',
  phoneDisplay: '0323 555 7878',
  plusCode: 'MXVX+VV3',
  streetAddress: 'Street 8, F-10/2 F 10/3 F-10',
  addressLocality: 'Islamabad',
  addressRegion: 'ICT',
  postalCode: '44000',
  addressCountry: 'PK',
  fullAddress: 'MXVX+VV3, Street 8, F-10/2 F 10/3 F-10, Islamabad, Pakistan',
  addressLine1: 'Street 8, F-10/2 F 10/3 F-10',
  addressLine2: 'Islamabad, Pakistan (MXVX+VV3)',
  latitude: 33.693,
  longitude: 73.0135,
};

const mapsQuery = encodeURIComponent(BUSINESS.fullAddress);

/** Opens Google Maps directions to the shop. */
export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;

/** Opens Google Maps at the shop location. */
export const MAPS_SEARCH_URL = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

/** Embedded map iframe src. */
export const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${mapsQuery}&z=17&output=embed`;
