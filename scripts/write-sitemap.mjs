import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const distDir = path.join(root, 'dist');

const { SITE_URL } = await import(pathToFileURL(path.join(root, 'src/seo/constants.js')).href);
const { getPrerenderPaths } = await import(
  pathToFileURL(path.join(root, 'src/seo/prerenderRoutes.js')).href
);
const { PAGE_META } = await import(pathToFileURL(path.join(root, 'src/seo/pageMeta.js')).href);
const { BLOG_POSTS } = await import(pathToFileURL(path.join(root, 'src/content/blog/posts.js')).href);

function locFor(routePath) {
  return routePath === '/' ? `${SITE_URL}/` : `${SITE_URL}${routePath}`;
}

function lastmodFor(routePath) {
  if (routePath.startsWith('/blog/') && routePath !== '/blog') {
    const slug = routePath.slice('/blog/'.length);
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    const iso = post?.updatedAt || post?.publishedAt || '';
    return iso.slice(0, 10);
  }
  return PAGE_META[routePath]?.lastmod || '';
}

function xmlEscape(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function writeSitemap() {
  const urls = getPrerenderPaths().map((routePath) => {
    const lastmod = lastmodFor(routePath);
    const lastmodXml = lastmod ? `\n    <lastmod>${xmlEscape(lastmod)}</lastmod>` : '';
    return `  <url>\n    <loc>${xmlEscape(locFor(routePath))}</loc>${lastmodXml}\n  </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

  fs.mkdirSync(distDir, { recursive: true });
  const dest = path.join(distDir, 'sitemap.xml');
  fs.writeFileSync(dest, xml);
  console.log(`sitemap ${urls.length} urls -> ${path.relative(root, dest)}`);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  writeSitemap();
}
