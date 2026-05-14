import { PageContent } from '../PageContent.jsx';
import { MARKUP } from '../content/seo/dryCleaningIslamabad.js';
import { SeoHead } from '../seo/SeoHead.jsx';

export default function DryCleaningIslamabad() {
  return (
    <>
      <SeoHead
        title="Dry cleaning Islamabad — suits, sarees | LaundryCare.pk"
        description="Professional dry cleaners in Islamabad: bridalwear, coats & office suits cleaned at LaundryCare.pk. Book pickup across Islamabad-Rawalpindi."
        path="/dry-cleaning-islamabad"
        keywords="dry cleaning Islamabad, dry cleaners near me Islamabad, bridal dry cleaning Pakistan, LaundryCare.pk"
      />
      <PageContent html={MARKUP} />
    </>
  );
}
