import { PageContent } from '../PageContent.jsx';
import { MARKUP as MARKUP_RAW } from '../content/seo/dryCleanersNearMeIslamabad.js';
import { PageSeo } from '../seo/PageSeo.jsx';
import { JsonLdScript } from '../seo/JsonLdScript.jsx';
import { DRY_CLEANERS_NEAR_ME_FAQ, getFaqJsonLd } from '../seo/faqData.js';
import { buildFaqSectionHtml } from '../seo/faqMarkup.js';

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
      <PageSeo path="/dry-cleaners-near-me-islamabad" />
      <JsonLdScript id="ld-faq-dry-cleaners-near-me" json={getFaqJsonLd(DRY_CLEANERS_NEAR_ME_FAQ)} />
      <PageContent html={MARKUP} />
    </>
  );
}
