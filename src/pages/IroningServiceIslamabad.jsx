import { PageContent } from '../PageContent.jsx';
import { MARKUP as MARKUP_RAW } from '../content/seo/ironingServiceIslamabad.js';
import { PageSeo } from '../seo/PageSeo.jsx';
import { JsonLdScript } from '../seo/JsonLdScript.jsx';
import { IRONING_FAQ } from '../seo/faqData.js';
import { buildFaqSectionHtml } from '../seo/faqMarkup.js';
import { getServicePageJsonLd } from '../seo/servicePageJsonLd.js';
import { getPageMeta } from '../seo/pageMeta.js';

const PATH = '/ironing-service-islamabad';
const meta = getPageMeta(PATH);
const ld = getServicePageJsonLd({
  path: PATH,
  name: 'Ironing & steam press',
  description: meta.description,
  faqs: IRONING_FAQ,
});

const MARKUP = MARKUP_RAW.replace(
  '__FAQ__',
  buildFaqSectionHtml(IRONING_FAQ, {
    heading: 'Ironing & steam press — questions we hear most',
    id: 'faq-ironing',
  }),
);

export default function IroningServiceIslamabad() {
  return (
    <>
      <PageSeo path={PATH} />
      <JsonLdScript id="ld-crumb-ironing" json={ld.breadcrumb} />
      <JsonLdScript id="ld-faq-ironing" json={ld.faq} />
      <JsonLdScript id="ld-service-ironing" json={ld.service} />
      <PageContent html={MARKUP} />
    </>
  );
}
