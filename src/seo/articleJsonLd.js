import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from './constants.js';

function absoluteUrl(src) {
  if (!src) return DEFAULT_OG_IMAGE;
  return src.startsWith('http') ? src : `${SITE_URL}${src.startsWith('/') ? '' : '/'}${src}`;
}

/**
 * @param {object} post — blog post with slug, title, description, publishedAt, updatedAt?, image?
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
    image: absoluteUrl(post.image),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

/** Home > Blog > article breadcrumb trail. */
export function getBlogBreadcrumbJsonLd(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  };
}
