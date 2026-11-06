import { PageContent } from '../PageContent.jsx';
import { buildLocationMarkup } from '../content/seo/locationPageMarkup.js';
import { PageSeo } from '../seo/PageSeo.jsx';
import { JsonLdScript } from '../seo/JsonLdScript.jsx';
import { getLocationJsonLd } from '../seo/localBusinessJsonLd.js';
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
});

export default function NewWayLocation() {
  return (
    <>
      <PageSeo path={`/${loc.slug}`} />
      <JsonLdScript id="ld-json-new-way" json={getLocationJsonLd('newWay')} />
      <PageContent html={MARKUP} />
    </>
  );
}
