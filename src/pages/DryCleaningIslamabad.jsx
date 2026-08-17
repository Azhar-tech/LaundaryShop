import { PageContent } from '../PageContent.jsx';
import { MARKUP } from '../content/seo/dryCleaningIslamabad.js';
import { SeoHead } from '../seo/SeoHead.jsx';

export default function DryCleaningIslamabad() {
  return (
    <>
      <SeoHead
        title="Dry cleaning Islamabad — dry cleaner near me"
        description="Dry cleaner near me in Islamabad: suits, sarees & bridal at F10 Idrees Market. Free pickup across twin cities · 24h turnaround · LaundryCare.pk."
        path="/dry-cleaning-islamabad"
        keywords="dry cleaning Islamabad, dry cleaner near me, dry cleaners near me Islamabad, bridal dry cleaning Pakistan, LaundryCare.pk"
      />
      <PageContent html={MARKUP} />
    </>
  );
}
