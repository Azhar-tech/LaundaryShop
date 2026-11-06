import { PageContent } from '../PageContent.jsx';
import { buildLocationMarkup } from '../content/seo/locationPageMarkup.js';
import { PageSeo } from '../seo/PageSeo.jsx';
import { JsonLdScript } from '../seo/JsonLdScript.jsx';
import { getLocationBreadcrumbJsonLd, getLocationJsonLd } from '../seo/localBusinessJsonLd.js';
import { PAKWAY_FAQ, getFaqJsonLd } from '../seo/faqData.js';
import { buildFaqSectionHtml } from '../seo/faqMarkup.js';
import {
  LOCATIONS,
  getLocationMapsDirectionsUrl,
  getLocationMapsEmbedUrl,
  getWhatsAppUrl,
} from '../seo/constants.js';

const loc = LOCATIONS.pakway;
const other = LOCATIONS.newWay;
const MARKUP = buildLocationMarkup(loc, other, {
  directions: getLocationMapsDirectionsUrl(loc),
  embed: getLocationMapsEmbedUrl(loc),
  whatsapp: getWhatsAppUrl(loc),
}).replace(
  '__FAQ__',
  buildFaqSectionHtml(PAKWAY_FAQ, {
    heading: 'Pak Way G-15 — questions we hear at the counter',
    id: 'faq-pakway',
  }),
);

export default function PakwayLocation() {
  return (
    <>
      <PageSeo path={`/${loc.slug}`} />
      <JsonLdScript id="ld-json-pakway" json={getLocationJsonLd('pakway')} />
      <JsonLdScript id="ld-faq-pakway" json={getFaqJsonLd(PAKWAY_FAQ)} />
      <JsonLdScript id="ld-crumb-pakway" json={getLocationBreadcrumbJsonLd('pakway')} />
      <PageContent html={MARKUP} />
    </>
  );
}
