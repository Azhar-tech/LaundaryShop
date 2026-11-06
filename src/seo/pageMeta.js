import { LOCATIONS, SITE_NAME, SITE_URL } from './constants.js';

const NW = LOCATIONS.newWay;
const PW = LOCATIONS.pakway;

export const TITLE_SUFFIX = ` | ${SITE_NAME}`;

function entry(path, titleWithoutSuffix, description, extra = {}) {
  return {
    path,
    title: titleWithoutSuffix,
    exactTitle: `${titleWithoutSuffix}${TITLE_SUFFIX}`,
    description,
    canonical: `${SITE_URL}${path === '/' ? '/' : path}`,
    lastmod: extra.lastmod || '2026-11-06',
    keywords: extra.keywords,
  };
}

/** Static-route SEO copy. Titles must stay ≤ 60 including ` | LaundryCare.pk`. */
export const PAGE_META = {
  '/': entry(
    '/',
    'Free Pickup Laundry Islamabad',
    `Free pickup laundry and dry cleaning in Islamabad. New Way F-10 ${NW.hoursShort}, Pak Way G-15 ${PW.hoursShort} daily. 24h turnaround. WhatsApp ${NW.phoneDisplay}.`,
    { keywords: 'laundry Islamabad, dry cleaning Islamabad, New Way F10, Pak Way G15, laundry pickup Islamabad' },
  ),
  '/about': entry(
    '/about',
    'About New Way Dry Cleaners',
    `Family-run New Way at F-10 Idrees Market since ${NW.sinceYear}, now with Pak Way G-15. Dry cleaning, laundry and free pickup. F-10 open ${NW.hoursShort} daily.`,
    { keywords: 'Islamabad dry cleaners about, LaundryCare.pk New Way Idrees Market' },
  ),
  '/blog': entry(
    '/blog',
    'Laundry & Dry Cleaning Tips',
    'Guides on wash-and-fold, dry cleaning suits, pickup areas and seasonal offers from New Way F-10 and Pak Way G-15. Read tips from LaundryCare.pk.',
    { keywords: 'laundry blog Islamabad, dry cleaning tips, LaundryCare.pk blog' },
  ),
  '/contact': entry(
    '/contact',
    'Contact New Way & Pak Way',
    `WhatsApp New Way F-10 on ${NW.phoneDisplay} (${NW.hoursShort}) or Pak Way G-15 on ${PW.phoneDisplay} (${PW.hoursShort}). Free pickup and walk-ins, no minimum order in Islamabad.`,
    { keywords: 'LaundryCare.pk contact, New Way F10, Pak Way G15, book laundry pickup' },
  ),
  '/services': entry(
    '/services',
    'Laundry Services in Islamabad',
    `Dry cleaning, wash and fold, steam press, sofa and carpet care with free pickup. New Way F-10 ${NW.hoursShort} and Pak Way G-15 ${PW.hoursShort} every day in Islamabad.`,
    { keywords: 'laundry services Islamabad, dry cleaning, wash and fold, steam press' },
  ),
  '/new-way-dry-cleaners-f10': entry(
    '/new-way-dry-cleaners-f10',
    'New Way Dry Cleaners F-10',
    `Visit New Way at F10/2 Idrees Market for dry cleaning, wash and fold, and free pickup. Call ${NW.phoneDisplay}. Open ${NW.hoursShort} daily in Islamabad.`,
    { keywords: 'New Way dry cleaners F10, Idrees Market laundry Islamabad' },
  ),
  '/pak-way-dry-cleaners-g15': entry(
    '/pak-way-dry-cleaners-g15',
    'Pak Way Dry Cleaners G-15',
    `Pak Way at Century Mall Plaza, G15 Markaz: dry cleaning, laundry and free pickup. Call ${PW.phoneDisplay}. Open ${PW.hoursShort} every day. Walk-ins welcome.`,
    { keywords: 'Pak Way dry cleaners G15, Century Mall Plaza laundry Islamabad' },
  ),
  '/laundry-service-islamabad': entry(
    '/laundry-service-islamabad',
    'Wash & Fold Pickup Islamabad',
    'Wash-and-fold laundry with free pickup and delivery in Islamabad. Sorted, washed and folded, usually within 24 hours. No minimum order at either shop.',
    { keywords: 'laundry service Islamabad, wash and fold, laundry pickup Islamabad' },
  ),
  '/dry-cleaning-islamabad': entry(
    '/dry-cleaning-islamabad',
    'Dry Cleaners Islamabad',
    'Professional dry cleaning for suits, sarees and bridal wear in Islamabad. Hand-checked, solvent-cleaned and pressed. Free pickup, 24h standard.',
    { keywords: 'dry cleaning Islamabad, suits sarees bridal, LaundryCare.pk' },
  ),
  '/ironing-service-islamabad': entry(
    '/ironing-service-islamabad',
    'Ironing & Steam Press Islamabad',
    'Steam press and ironing with free pickup in Islamabad. Office shirts, kameez and uniforms finished on commercial presses. Book on WhatsApp today.',
    { keywords: 'ironing service Islamabad, steam press pickup' },
  ),
  '/laundry-near-me-islamabad': entry(
    '/laundry-near-me-islamabad',
    'Laundry Near Me Islamabad Pickup',
    `Laundry near you in Islamabad: New Way F-10 ${NW.hoursShort} and Pak Way G-15 ${PW.hoursShort}, plus free doorstep pickup. Wash and fold with no minimum order.`,
    { keywords: 'laundry near me Islamabad, laundry shop near me, dhobi pickup' },
  ),
  '/dry-cleaners-near-me-islamabad': entry(
    '/dry-cleaners-near-me-islamabad',
    'Dry Cleaners Near Me – F-10 & G-15',
    `Two dry cleaners near you in Islamabad: New Way F-10 ${NW.hoursShort} and Pak Way G-15 ${PW.hoursShort}. Maps, Google hours, and free pickup at both shops daily.`,
    { keywords: 'dry cleaners near me Islamabad, F-10 G-15 dry cleaners' },
  ),
  '/404': entry(
    '/404',
    'Page not found',
    `That page is not on LaundryCare.pk. Return home, or WhatsApp New Way ${NW.phoneDisplay} or Pak Way ${PW.phoneDisplay} to book a free Islamabad pickup.`,
  ),
};

export function getPageMeta(path) {
  return PAGE_META[path] || null;
}
