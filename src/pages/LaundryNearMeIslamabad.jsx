import { PageContent } from '../PageContent.jsx';
import { MARKUP as MARKUP_RAW } from '../content/seo/laundryNearMeIslamabad.js';
import { PageSeo } from '../seo/PageSeo.jsx';
import { JsonLdScript } from '../seo/JsonLdScript.jsx';
import { LAUNDRY_NEAR_ME_FAQ } from '../seo/faqData.js';
import { buildFaqSectionHtml } from '../seo/faqMarkup.js';
import { getServicePageJsonLd } from '../seo/servicePageJsonLd.js';
import { getPageMeta } from '../seo/pageMeta.js';

const PATH = '/laundry-near-me-islamabad';
const meta = getPageMeta(PATH);
const ld = getServicePageJsonLd({
  path: PATH,
  name: 'Laundry near me',
  description: meta.description,
  faqs: LAUNDRY_NEAR_ME_FAQ,
});

const MARKUP = MARKUP_RAW.replace(
  '__FAQ__',
  buildFaqSectionHtml(LAUNDRY_NEAR_ME_FAQ, {
    heading: 'Laundry near me — common questions',
    id: 'faq-laundry-near-me',
  }),
);

export default function LaundryNearMeIslamabad() {
  return (
    <>
      <PageSeo path={PATH} />
      <JsonLdScript id="ld-crumb-laundry-near-me" json={ld.breadcrumb} />
      <JsonLdScript id="ld-faq-laundry-near-me" json={ld.faq} />
      <JsonLdScript id="ld-service-laundry-near-me" json={ld.service} />
      <PageContent html={MARKUP} />
    </>
  );
}
