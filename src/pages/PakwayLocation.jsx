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

const loc = LOCATIONS.pakway;
const other = LOCATIONS.newWay;
const MARKUP = buildLocationMarkup(loc, other, {
  directions: getLocationMapsDirectionsUrl(loc),
  embed: getLocationMapsEmbedUrl(loc),
  whatsapp: getWhatsAppUrl(loc),
});

export default function PakwayLocation() {
  return (
    <>
      <SeoHead
        title="Pak Way Dry Cleaners G15 — Century Mall Plaza Islamabad"
        description="Pak Way Dry Cleaners at G15 Markaz Century Mall Plaza: dry cleaning, laundry & pickup. Call 0349 596 3359 · open 8am–10pm daily."
        path={`/${loc.slug}`}
        keywords="Pak Way dry cleaners G15, Century Mall Plaza laundry Islamabad, LaundryCare.pk G-15"
      />
      <JsonLdScript id="ld-json-pakway" json={getLocationJsonLd('pakway')} />
      <PageContent html={MARKUP} />
    </>
  );
}
