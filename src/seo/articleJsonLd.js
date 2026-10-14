import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from './constants.js';

/**
 * @param {object} post — blog post with slug, title, description, publishedAt, updatedAt?
 */
export function getArticleJsonLd(post) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const dateModified = post.updatedAt || post.publishedAt;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: DEFAULT_OG_IMAGE,
      },
    },
    image: DEFAULT_OG_IMAGE,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}
