import { PageContent } from '../PageContent.jsx';
import { MARKUP as MARKUP_RAW } from '../content/seo/dryCleaningIslamabad.js';
import { PageSeo } from '../seo/PageSeo.jsx';
import { JsonLdScript } from '../seo/JsonLdScript.jsx';
import { DRY_CLEANING_FAQ } from '../seo/faqData.js';
import { buildFaqSectionHtml } from '../seo/faqMarkup.js';
import { getServicePageJsonLd } from '../seo/servicePageJsonLd.js';
import { getPageMeta } from '../seo/pageMeta.js';

const PATH = '/dry-cleaning-islamabad';
const meta = getPageMeta(PATH);
const ld = getServicePageJsonLd({
  path: PATH,
  name: 'Dry cleaning',
  description: meta.description,
  faqs: DRY_CLEANING_FAQ,
});

const MARKUP = MARKUP_RAW.replace(
  '__FAQ__',
  buildFaqSectionHtml(DRY_CLEANING_FAQ, {
    heading: 'Dry cleaning — questions we hear most',
    id: 'faq-dry-cleaning',
  }),
);

export default function DryCleaningIslamabad() {
  return (
    <>
      <PageSeo path={PATH} />
      <JsonLdScript id="ld-crumb-dry-cleaning" json={ld.breadcrumb} />
      <JsonLdScript id="ld-faq-dry-cleaning" json={ld.faq} />
      <JsonLdScript id="ld-service-dry-cleaning" json={ld.service} />
      <PageContent html={MARKUP} />
    </>
  );
}
