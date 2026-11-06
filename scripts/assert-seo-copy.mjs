import { pathToFileURL } from 'node:url';
import path from 'node:path';

const { PAGE_META, TITLE_SUFFIX } = await import(
  pathToFileURL(path.join(process.cwd(), 'src/seo/pageMeta.js')).href
);

const TITLE_MAX = 60;
const DESC_MIN = 140;
const DESC_MAX = 155;
let failed = false;
const titles = new Map();
const canons = new Map();

for (const [route, meta] of Object.entries(PAGE_META)) {
  const title = meta.exactTitle;
  const desc = meta.description;
  const tLen = [...title].length;
  const dLen = [...desc].length;

  if (!title.endsWith(TITLE_SUFFIX) && route !== '/404') {
    // 404 also uses suffix via exactTitle
  }
  if (tLen > TITLE_MAX) {
    console.error(`${route} title ${tLen} > ${TITLE_MAX}: ${title}`);
    failed = true;
  }
  if (dLen < DESC_MIN || dLen > DESC_MAX) {
    console.error(`${route} description ${dLen} not in ${DESC_MIN}-${DESC_MAX}: ${desc}`);
    failed = true;
  }
  if (titles.has(title)) {
    console.error(`${route} duplicate title with ${titles.get(title)}`);
    failed = true;
  }
  titles.set(title, route);
  if (canons.has(meta.canonical)) {
    console.error(`${route} duplicate canonical ${meta.canonical}`);
    failed = true;
  }
  canons.set(meta.canonical, route);
  console.log(`${route}\ttitle ${tLen}\tdesc ${dLen}\t${title}`);
}

if (failed) process.exit(1);
console.log('assert-seo-copy: ok');
