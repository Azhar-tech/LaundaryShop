import { PageContent } from '../PageContent.jsx';
import { MARKUP as MARKUP_RAW } from '../content/seo/laundryServiceIslamabad.js';
import { PageSeo } from '../seo/PageSeo.jsx';
import { JsonLdScript } from '../seo/JsonLdScript.jsx';
import { LAUNDRY_SERVICE_FAQ } from '../seo/faqData.js';
import { buildFaqSectionHtml } from '../seo/faqMarkup.js';
import { getServicePageJsonLd } from '../seo/servicePageJsonLd.js';
import { getPageMeta } from '../seo/pageMeta.js';

const PATH = '/laundry-service-islamabad';
const meta = getPageMeta(PATH);
const ld = getServicePageJsonLd({
  path: PATH,
  name: 'Wash & fold pickup',
  description: meta.description,
  faqs: LAUNDRY_SERVICE_FAQ,
});

const MARKUP = MARKUP_RAW.replace(
  '__FAQ__',
  buildFaqSectionHtml(LAUNDRY_SERVICE_FAQ, {
    heading: 'Wash & fold — questions we hear most',
    id: 'faq-laundry-service',
  }),
);

export default function LaundryServiceIslamabad() {
  return (
    <>
      <PageSeo path={PATH} />
      <JsonLdScript id="ld-crumb-laundry-service" json={ld.breadcrumb} />
      <JsonLdScript id="ld-faq-laundry-service" json={ld.faq} />
      <JsonLdScript id="ld-service-laundry-service" json={ld.service} />
      <PageContent html={MARKUP} />
    </>
  );
}
