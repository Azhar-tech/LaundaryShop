import { pathToFileURL } from 'node:url';
import path from 'node:path';

const root = process.cwd();

const { PAGE_META, TITLE_SUFFIX } = await import(
  pathToFileURL(path.join(root, 'src/seo/pageMeta.js')).href
);
const { BLOG_POSTS } = await import(
  pathToFileURL(path.join(root, 'src/content/blog/posts.js')).href
);
const { getPrerenderPaths } = await import(
  pathToFileURL(path.join(root, 'src/seo/prerenderRoutes.js')).href
);

const TITLE_MAX = 60;
const DESC_MIN = 140;
const DESC_MAX = 155;
let failed = false;
const titles = new Map();
const canons = new Map();

function checkTitle(route, title) {
  const tLen = [...title].length;
  if (!title) {
    console.error(`${route} missing <title>`);
    failed = true;
    return tLen;
  }
  if (tLen > TITLE_MAX) {
    console.error(`${route} title ${tLen} > ${TITLE_MAX}: ${title}`);
    failed = true;
  }
  if (titles.has(title)) {
    console.error(`${route} duplicate title with ${titles.get(title)}`);
    failed = true;
  }
  titles.set(title, route);
  return tLen;
}

for (const [route, meta] of Object.entries(PAGE_META)) {
  const title = meta.exactTitle;
  const desc = meta.description;
  const tLen = checkTitle(route, title);
  const dLen = [...desc].length;

  if (dLen < DESC_MIN || dLen > DESC_MAX) {
    console.error(`${route} description ${dLen} not in ${DESC_MIN}-${DESC_MAX}: ${desc}`);
    failed = true;
  }
  if (canons.has(meta.canonical)) {
    console.error(`${route} duplicate canonical ${meta.canonical}`);
    failed = true;
  }
  canons.set(meta.canonical, route);
  console.log(`${route}\ttitle ${tLen}\tdesc ${dLen}\t${title}`);
}

const homeTitle = PAGE_META['/']?.exactTitle || '';
if (!/pickup/i.test(homeTitle)) {
  console.error(`/: homepage <title> must mention free pickup: ${homeTitle}`);
  failed = true;
}

const dryTitle = PAGE_META['/dry-cleaning-islamabad']?.exactTitle || '';
if (!dryTitle.includes('Dry Cleaners Islamabad')) {
  console.error(
    `/dry-cleaning-islamabad <title> must include "Dry Cleaners Islamabad": ${dryTitle}`,
  );
  failed = true;
}

const blogBySlug = new Map(BLOG_POSTS.map((post) => [post.slug, post]));
const routes = [...getPrerenderPaths(), '/404'];

for (const route of routes) {
  if (PAGE_META[route]) continue;
  if (!route.startsWith('/blog/')) {
    console.error(`${route} has no PAGE_META entry`);
    failed = true;
    continue;
  }
  const slug = route.slice('/blog/'.length);
  const post = blogBySlug.get(slug);
  if (!post) {
    console.error(`${route} missing blog post`);
    failed = true;
    continue;
  }
  if (!post.seoTitle) {
    console.error(`${route} missing seoTitle (H1 may stay long; <title> must be ≤${TITLE_MAX})`);
    failed = true;
    continue;
  }
  const tLen = checkTitle(route, post.seoTitle);
  console.log(`${route}\ttitle ${tLen}\t(blog H1 unchanged)\t${post.seoTitle}`);
}

if (failed) process.exit(1);
console.log('assert-seo-copy: ok');
