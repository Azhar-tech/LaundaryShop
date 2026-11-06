import { PageContent } from '../PageContent.jsx';
import { buildLocationMarkup } from '../content/seo/locationPageMarkup.js';
import { PageSeo } from '../seo/PageSeo.jsx';
import { JsonLdScript } from '../seo/JsonLdScript.jsx';
import { getLocationBreadcrumbJsonLd, getLocationJsonLd } from '../seo/localBusinessJsonLd.js';
import { NEW_WAY_FAQ, getFaqJsonLd } from '../seo/faqData.js';
import { buildFaqSectionHtml } from '../seo/faqMarkup.js';
import {
  LOCATIONS,
  getLocationMapsDirectionsUrl,
  getLocationMapsEmbedUrl,
  getWhatsAppUrl,
} from '../seo/constants.js';

const loc = LOCATIONS.newWay;
const other = LOCATIONS.pakway;
const MARKUP = buildLocationMarkup(loc, other, {
  directions: getLocationMapsDirectionsUrl(loc),
  embed: getLocationMapsEmbedUrl(loc),
  whatsapp: getWhatsAppUrl(loc),
}).replace(
  '__FAQ__',
  buildFaqSectionHtml(NEW_WAY_FAQ, {
    heading: 'New Way F-10 — questions we hear at the counter',
    id: 'faq-new-way',
  }),
);

export default function NewWayLocation() {
  return (
    <>
      <PageSeo path={`/${loc.slug}`} />
      <JsonLdScript id="ld-json-new-way" json={getLocationJsonLd('newWay')} />
      <JsonLdScript id="ld-faq-new-way" json={getFaqJsonLd(NEW_WAY_FAQ)} />
      <JsonLdScript id="ld-crumb-new-way" json={getLocationBreadcrumbJsonLd('newWay')} />
      <PageContent html={MARKUP} />
    </>
  );
}
