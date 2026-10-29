import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { DEFAULT_LOCALE, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from './constants.js';

/**
 * @param {object} props
 * @param {string} props.title Page title (unique)
 * @param {string} props.description Meta description
 * @param {string} props.path Pathname only, e.g. `/` or `/services`
 * @param {string} [props.keywords] Optional meta keywords (legacy / other engines)
 * @param {string} [props.ogImage] Absolute image URL for OG/Twitter
 * @param {'website' | 'article'} [props.ogType]
 * @param {string} [props.publishedAt] ISO date for article:published_time
 * @param {string} [props.modifiedAt] ISO date for article:modified_time
 * @param {string} [props.ogImageAlt] Alt text for og:image / twitter:image
 * @param {string} [props.exactTitle] Use as the full <title>, skipping the site-name suffix
 */
export function SeoHead({
  title,
  description,
  path,
  keywords,
  ogImage,
  ogType = 'website',
  publishedAt,
  modifiedAt,
  ogImageAlt,
  exactTitle,
}) {
  // index.html keeps a baseline title/description for crawlers that skip JS.
  // Once Helmet has set route-specific tags, drop the static ones to avoid duplicates.
  useEffect(() => {
    document.querySelectorAll('[data-static-seo]').forEach((el) => el.remove());
  }, []);

  const normalizedPath = path === '/' ? '/' : path.replace(/\/$/, '') || '/';
  const canonical = `${SITE_URL}${normalizedPath === '/' ? '/' : normalizedPath}`;
  const image = ogImage
    ? ogImage.startsWith('http')
      ? ogImage
      : `${SITE_URL}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`
    : DEFAULT_OG_IMAGE;
  const fullTitle = exactTitle || (title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`);

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en-PK" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={ogType} />
      {ogType === 'article' && publishedAt ? (
        <meta property="article:published_time" content={publishedAt} />
      ) : null}
      {ogType === 'article' && modifiedAt ? (
        <meta property="article:modified_time" content={modifiedAt} />
      ) : null}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      {ogImageAlt ? <meta property="og:image:alt" content={ogImageAlt} /> : null}
      <meta property="og:locale" content={DEFAULT_LOCALE.replace('_', '-')} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {ogImageAlt ? <meta name="twitter:image:alt" content={ogImageAlt} /> : null}
    </Helmet>
  );
}
