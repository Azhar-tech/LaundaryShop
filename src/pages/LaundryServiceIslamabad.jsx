import { PageContent } from '../PageContent.jsx';
import { MARKUP } from '../content/seo/laundryServiceIslamabad.js';
import { PageSeo } from '../seo/PageSeo.jsx';

export default function LaundryServiceIslamabad() {
  return (
    <>
      <PageSeo path="/laundry-service-islamabad" />
      <PageContent html={MARKUP} />
    </>
  );
}
