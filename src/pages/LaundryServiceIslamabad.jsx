import { PageContent } from '../PageContent.jsx';
import { MARKUP } from '../content/seo/laundryServiceIslamabad.js';
import { SeoHead } from '../seo/SeoHead.jsx';

export default function LaundryServiceIslamabad() {
  return (
    <>
      <SeoHead
        title="Laundry service Islamabad — wash, fold & pickup"
        description="Laundry service Islamabad with free pickup: wash & fold, laundromat alternative & laundry shop near me coverage across F10, Bahria & DHA. Book via LaundryCare.pk."
        path="/laundry-service-islamabad"
        keywords="laundry service Islamabad, laundry shop near me, laundromat Islamabad, laundry pickup Islamabad, wash and fold Islamabad, LaundryCare.pk"
      />
      <PageContent html={MARKUP} />
    </>
  );
}
