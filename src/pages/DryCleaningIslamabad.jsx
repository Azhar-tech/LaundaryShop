import { PageContent } from '../PageContent.jsx';
import { MARKUP } from '../content/seo/dryCleaningIslamabad.js';
import { PageSeo } from '../seo/PageSeo.jsx';

export default function DryCleaningIslamabad() {
  return (
    <>
      <PageSeo path="/dry-cleaning-islamabad" />
      <PageContent html={MARKUP} />
    </>
  );
}
