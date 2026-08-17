import { PageContent } from '../PageContent.jsx';
import { MARKUP as MARKUP_RAW } from '../content/seo/dryCleanersNearMeIslamabad.js';
import { SeoHead } from '../seo/SeoHead.jsx';
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
      <SeoHead
        title="Dry Cleaners Near Me Islamabad — Suits, Sarees & Pickup"
        description="Dry cleaners near me in Islamabad: suits, sarees & bridal at F10 Idrees Market. Free pickup twin cities · 24h turnaround · LaundryCare.pk."
        path="/dry-cleaners-near-me-islamabad"
        keywords="dry cleaners near me, dry cleaner near me, dry cleaning Islamabad, LaundryCare.pk"
      />
      <JsonLdScript id="ld-faq-dry-cleaners-near-me" json={getFaqJsonLd(DRY_CLEANERS_NEAR_ME_FAQ)} />
      <PageContent html={MARKUP} />
    </>
  );
}
