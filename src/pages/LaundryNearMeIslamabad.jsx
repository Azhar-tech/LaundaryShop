import { PageContent } from '../PageContent.jsx';
import { MARKUP as MARKUP_RAW } from '../content/seo/laundryNearMeIslamabad.js';
import { SeoHead } from '../seo/SeoHead.jsx';
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
      <SeoHead
        title="Laundry Near Me Islamabad — Free Pickup & Delivery"
        description="Laundry near me in Islamabad: free doorstep pickup, wash & fold, dhobi-style service across F10, Bahria & DHA. 4.9★ rated · LaundryCare.pk."
        path="/laundry-near-me-islamabad"
        keywords="laundry near me, laundry service near me, laundry shop near me, dhobi near me, laundromat Islamabad, LaundryCare.pk"
      />
      <JsonLdScript id="ld-faq-laundry-near-me" json={getFaqJsonLd(LAUNDRY_NEAR_ME_FAQ)} />
      <PageContent html={MARKUP} />
    </>
  );
}
