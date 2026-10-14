import { Link, useParams } from 'react-router-dom';
import { PageContent } from '../PageContent.jsx';
import { getPostBySlug } from '../content/blog/posts.js';
import { SeoHead } from '../seo/SeoHead.jsx';
import { JsonLdScript } from '../seo/JsonLdScript.jsx';
import { getArticleJsonLd } from '../seo/articleJsonLd.js';

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
    return (
      <>
        <SeoHead
          title="Article not found"
          description="This blog post could not be found. Browse laundry and dry cleaning tips on the LaundryCare.pk blog."
          path={`/blog/${slug || ''}`}
        />
        <section className="page-hero">
          <div className="container">
            <h1>Post not found</h1>
            <p className="lede">That article may have moved or the link is incorrect.</p>
            <p style={{ marginTop: 24 }}>
              <Link className="btn btn-primary" to="/blog">Back to blog</Link>
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SeoHead
        title={post.title}
        description={post.description}
        path={`/blog/${post.slug}`}
        keywords={post.keywords}
        ogType="article"
        publishedAt={post.publishedAt}
      />
      <JsonLdScript id={`ld-article-${post.slug}`} json={getArticleJsonLd(post)} />
      <PageContent html={post.html} />
    </>
  );
}
