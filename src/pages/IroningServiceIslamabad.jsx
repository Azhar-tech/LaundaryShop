import { PageContent } from '../PageContent.jsx';
import { MARKUP } from '../content/seo/ironingServiceIslamabad.js';
import { PageSeo } from '../seo/PageSeo.jsx';

export default function IroningServiceIslamabad() {
  return (
    <>
      <PageSeo path="/ironing-service-islamabad" />
      <PageContent html={MARKUP} />
    </>
  );
}
