import { LOCATIONS, SITE_URL, getLocationPageUrl } from './constants.js';
import { getFaqJsonLd } from './faqData.js';

/**
 * BreadcrumbList + FAQPage + Service for SEO landings.
 * Visible FAQ HTML must use the same `faqs` array.
 *
 * @param {object} opts
 * @param {string} opts.path pathname, e.g. `/laundry-service-islamabad`
 * @param {string} opts.name breadcrumb + Service name
 * @param {string} opts.description Service description
 * @param {{q: string, a: string}[]} opts.faqs
 * @param {Array<'newWay' | 'pakway'>} [opts.providerIds]
 */
export function getServicePageJsonLd({
  path,
  name,
  description,
  faqs,
  providerIds = ['newWay', 'pakway'],
}) {
  const pageUrl = `${SITE_URL}${path}`;
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name, item: pageUrl },
    ],
  };

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: pageUrl,
    areaServed: [
      { '@type': 'City', name: 'Islamabad' },
      { '@type': 'AdministrativeArea', name: 'Rawalpindi' },
    ],
    provider: providerIds.map((id) => {
      const loc = LOCATIONS[id];
      return {
        '@type': 'LocalBusiness',
        '@id': `${getLocationPageUrl(loc)}#localbusiness`,
        name: loc.name,
      };
    }),
  };

  return {
    breadcrumb,
    faq: getFaqJsonLd(faqs),
    service,
  };
}
