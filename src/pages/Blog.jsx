import { PageContent } from '../PageContent.jsx';
import { BLOG_INDEX_MARKUP } from '../content/blog/blogIndexMarkup.js';
import { SeoHead } from '../seo/SeoHead.jsx';

export default function Blog() {
  return (
    <>
      <SeoHead
        title="Blog — laundry & dry cleaning tips Islamabad"
        description="Guides on wash-and-fold pickup, dry cleaning suits, and service areas in Islamabad — from LaundryCare.pk (New Way & Pak Way)."
        path="/blog"
        keywords="laundry blog Islamabad, dry cleaning tips, wash and fold Islamabad, LaundryCare.pk blog"
      />
      <PageContent html={BLOG_INDEX_MARKUP} />
    </>
  );
}
