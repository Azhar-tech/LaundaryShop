import { PageContent } from '../PageContent.jsx';
import { MARKUP as MARKUP_RAW } from '../content/seo/laundryNearMeIslamabad.js';
import { PageSeo } from '../seo/PageSeo.jsx';
import { JsonLdScript } from '../seo/JsonLdScript.jsx';
import { getFaqJsonLd, LAUNDRY_NEAR_ME_FAQ } from '../seo/faqData.js';
import { buildFaqSectionHtml } from '../seo/faqMarkup.js';

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
      <PageSeo path="/laundry-near-me-islamabad" />
      <JsonLdScript id="ld-faq-laundry-near-me" json={getFaqJsonLd(LAUNDRY_NEAR_ME_FAQ)} />
      <PageContent html={MARKUP} />
    </>
  );
}
