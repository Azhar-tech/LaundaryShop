import { PageContent } from '../PageContent.jsx';
import { buildLocationMarkup } from '../content/seo/locationPageMarkup.js';
import { SeoHead } from '../seo/SeoHead.jsx';
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
      <SeoHead
        title="New Way Dry Cleaners F10 — Idrees Market Islamabad"
        description="New Way Dry Cleaners at F10/2 Idrees Market: dry cleaning, wash & fold, free pickup. Call 0323 555 7878 · open 8am–10pm daily."
        path={`/${loc.slug}`}
        keywords="New Way dry cleaners F10, Idrees Market laundry Islamabad, LaundryCare.pk F-10"
      />
      <JsonLdScript id="ld-json-new-way" json={getLocationJsonLd('newWay')} />
      <PageContent html={MARKUP} />
    </>
  );
}
