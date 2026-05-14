import { PageContent } from '../PageContent.jsx';
import { MARKUP } from '../content/seo/laundryServiceIslamabad.js';
import { SeoHead } from '../seo/SeoHead.jsx';

export default function LaundryServiceIslamabad() {
  return (
    <>
      <SeoHead
        title="Laundry pickup & wash Islamabad — LaundryCare.pk"
        description="Laundry service Islamabad: free pickup/delivery, wash & fold online booking via LaundryCare.pk. Serving twin cities since 2001 from F10 Idrees Market."
        path="/laundry-service-islamabad"
        keywords="laundry service Islamabad, laundry pickup Islamabad, wash and fold Islamabad, LaundryCare.pk, online laundry Islamabad"
      />
      <PageContent html={MARKUP} />
    </>
  );
}
