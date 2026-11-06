import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

function findSsrEntry() {
  const candidates = ['entry-server.js', 'entry-server.mjs'];
  for (const name of candidates) {
    const p = path.join(ssrDir, name);
    if (fs.existsSync(p)) return p;
  }
  const files = fs.existsSync(ssrDir) ? fs.readdirSync(ssrDir) : [];
  const match = files.find((f) => f.startsWith('entry-server'));
  if (!match) {
    throw new Error(`SSR bundle not found in ${ssrDir}. Files: ${files.join(', ') || '(empty)'}`);
  }
  return path.join(ssrDir, match);
}

function outFileForPath(routePath) {
  if (routePath === '/') return path.join(distDir, 'index.html');
  if (routePath === '/404') return path.join(distDir, '404.html');
  const rel = routePath.replace(/^\//, '');
  return path.join(distDir, rel, 'index.html');
}

/**
 * react-helmet-async 3 on React 19 renders <title>/<meta>/<link>/<script>
 * into the component tree. Hoist them into <head> for crawlers, and strip
 * them from #root so hydration matches the client hoist.
 */
function hoistHeadTagsFromBody(appHtml) {
  const parts = [];
  const take = (re) => {
    appHtml = appHtml.replace(re, (match) => {
      parts.push(match);
      return '';
    });
  };
  take(/<title\b[^>]*>[\s\S]*?<\/title>/gi);
  take(/<meta\b[^>]*>/gi);
  take(/<link\b[^>]*>/gi);
  take(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi);
  return { body: appHtml, head: parts.join('\n    ') };
}

function applyHelmet(template, appHtml, helmet) {
  let html = template;

  const htmlAttrs = helmet?.htmlAttributes?.toString?.() || '';
  if (htmlAttrs) {
    html = html.replace(/<html([^>]*)>/i, `<html$1 ${htmlAttrs}>`);
  }

  const hoisted = hoistHeadTagsFromBody(appHtml);
  const headBits = [
    helmet?.title?.toString?.() || '',
    helmet?.meta?.toString?.() || '',
    helmet?.link?.toString?.() || '',
    helmet?.script?.toString?.() || '',
    helmet?.style?.toString?.() || '',
    hoisted.head,
  ]
    .filter(Boolean)
    .join('\n    ');

  html = html.replace('</head>', `    ${headBits}\n  </head>`);
  html = html.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${hoisted.body}</div>`,
  );
  return html;
}

const { getPrerenderPaths } = await import(
  pathToFileURL(path.join(root, 'src/seo/prerenderRoutes.js')).href
);

const { render } = await import(pathToFileURL(findSsrEntry()).href);

const templatePath = path.join(distDir, 'index.html');
if (!fs.existsSync(templatePath)) {
  throw new Error('dist/index.html missing — run the client Vite build first.');
}
const template = fs.readFileSync(templatePath, 'utf8');

const extra = process.env.PRERENDER_EXTRA_PATHS
  ? process.env.PRERENDER_EXTRA_PATHS.split(',').filter(Boolean)
  : [];
const routes = [...getPrerenderPaths(), '/404', ...extra];

for (const routePath of routes) {
  const { html, helmet } = render(routePath);
  const page = applyHelmet(template, html, helmet);
  const dest = outFileForPath(routePath);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, page);
  console.log(`prerender ${routePath} -> ${path.relative(root, dest)}`);
}
