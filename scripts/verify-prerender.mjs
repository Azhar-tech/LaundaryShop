import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const SITE = 'https://www.laundrycare.pk';

const { getPrerenderPaths } = await import(
  pathToFileURL(path.join(root, 'src/seo/prerenderRoutes.js')).href
);

function fileForPath(routePath) {
  if (routePath === '/') return path.join(distDir, 'index.html');
  if (routePath === '/404') return path.join(distDir, '404.html');
  return path.join(distDir, routePath.replace(/^\//, ''), 'index.html');
}

function extract(html, re) {
  const m = html.match(re);
  return m ? m[1].trim() : '';
}

const extra = process.env.PRERENDER_EXTRA_PATHS
  ? process.env.PRERENDER_EXTRA_PATHS.split(',').filter(Boolean)
  : [];
const routes = [...getPrerenderPaths(), '/404', ...extra];
const titles = new Map();
let failed = false;

console.log('\nroute\th1\ttitle\tcanonical\tjson-ld');
for (const routePath of routes) {
  const file = fileForPath(routePath);
  if (!fs.existsSync(file)) {
    console.error(`MISSING ${file}`);
    failed = true;
    continue;
  }
  const html = fs.readFileSync(file, 'utf8');
  const h1 = (html.match(/<h1\b/gi) || []).length;
  const title = extract(html, /<title>([^<]*)<\/title>/i);
  const canonical = extract(html, /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)
    || extract(html, /<link[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["']/i);
  const jsonLd = (html.match(/application\/ld\+json/gi) || []).length;
  const expectedCanon = `${SITE}${routePath === '/' ? '/' : routePath}`;

  console.log(`${routePath}\t${h1}\t${title}\t${canonical}\t${jsonLd}`);

  if (h1 !== 1) {
    console.error(`  FAIL h1 count ${h1} (want 1)`);
    failed = true;
  }
  if (!title) {
    console.error('  FAIL missing title');
    failed = true;
  }
  if (titles.has(title)) {
    console.error(`  FAIL duplicate title (also ${titles.get(title)})`);
    failed = true;
  } else {
    titles.set(title, routePath);
  }
  if (canonical !== expectedCanon) {
    console.error(`  FAIL canonical ${canonical} (want ${expectedCanon})`);
    failed = true;
  }
}

if (failed) {
  process.exit(1);
}
console.log('\nverify-prerender: ok');
