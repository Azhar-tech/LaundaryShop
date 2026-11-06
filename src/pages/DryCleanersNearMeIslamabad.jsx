import { PageContent } from '../PageContent.jsx';
import { MARKUP as MARKUP_RAW } from '../content/seo/dryCleanersNearMeIslamabad.js';
import { PageSeo } from '../seo/PageSeo.jsx';
import { JsonLdScript } from '../seo/JsonLdScript.jsx';
import { DRY_CLEANERS_NEAR_ME_FAQ } from '../seo/faqData.js';
import { buildFaqSectionHtml } from '../seo/faqMarkup.js';
import { getServicePageJsonLd } from '../seo/servicePageJsonLd.js';
import { getPageMeta } from '../seo/pageMeta.js';

const PATH = '/dry-cleaners-near-me-islamabad';
const meta = getPageMeta(PATH);
const ld = getServicePageJsonLd({
  path: PATH,
  name: 'Dry cleaners near me',
  description: meta.description,
  faqs: DRY_CLEANERS_NEAR_ME_FAQ,
});

const MARKUP = MARKUP_RAW.replace(
  '__FAQ__',
  buildFaqSectionHtml(DRY_CLEANERS_NEAR_ME_FAQ, {
    heading: 'Dry cleaners near me — common questions',
    id: 'faq-dry-cleaners-near-me',
  }),
);

export default function DryCleanersNearMeIslamabad() {
  return (
    <>
      <PageSeo path={PATH} />
      <JsonLdScript id="ld-crumb-dry-cleaners-near-me" json={ld.breadcrumb} />
      <JsonLdScript id="ld-faq-dry-cleaners-near-me" json={ld.faq} />
      <JsonLdScript id="ld-service-dry-cleaners-near-me" json={ld.service} />
      <PageContent html={MARKUP} />
    </>
  );
}
