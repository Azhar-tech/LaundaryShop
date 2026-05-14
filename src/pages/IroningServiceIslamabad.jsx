import { PageContent } from '../PageContent.jsx';
import { MARKUP } from '../content/seo/ironingServiceIslamabad.js';
import { SeoHead } from '../seo/SeoHead.jsx';

export default function IroningServiceIslamabad() {
  return (
    <>
      <SeoHead
        title="Ironing & steam press pickup Islamabad — LaundryCare.pk"
        description="Ironing service Islamabad with free pickup/delivery by New Way LaundryCare.pk. Sharpen office wear & traditional outfits from F10."
        path="/ironing-service-islamabad"
        keywords="ironing service Islamabad, steam press Islamabad, clothes ironing pickup LaundryCare.pk"
      />
      <PageContent html={MARKUP} />
    </>
  );
}
