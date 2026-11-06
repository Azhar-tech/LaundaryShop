import { PageContent } from '../PageContent.jsx';
import { BLOG_INDEX_MARKUP } from '../content/blog/blogIndexMarkup.js';
import { PageSeo } from '../seo/PageSeo.jsx';

export default function Blog() {
  return (
    <>
      <PageSeo path="/blog" />
      <PageContent html={BLOG_INDEX_MARKUP} />
    </>
  );
}
