import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const distDir = path.join(root, 'dist');

const { LOCATIONS, SOCIAL_LINKS } = await import(
  pathToFileURL(path.join(root, 'src/seo/constants.js')).href
);

const NW = LOCATIONS.newWay;
const PW = LOCATIONS.pakway;

function fileForPath(routePath) {
  if (routePath === '/') return path.join(distDir, 'index.html');
  if (routePath === '/404') return path.join(distDir, '404.html');
  return path.join(distDir, routePath.replace(/^\//, ''), 'index.html');
}

function read(routePath) {
  const file = fileForPath(routePath);
  if (!fs.existsSync(file)) {
    throw new Error(`Missing prerender ${file}`);
  }
  return fs.readFileSync(file, 'utf8');
}

function mustInclude(html, route, snippets) {
  const missing = snippets.filter((s) => !html.includes(s));
  if (missing.length) {
    throw new Error(`${route} missing: ${missing.join(' | ')}`);
  }
}

function mustNotInclude(html, route, snippets) {
  const found = snippets.filter((s) => html.includes(s));
  if (found.length) {
    throw new Error(`${route} still contains: ${found.join(' | ')}`);
  }
}

const forbiddenLegacy = ['2001', '33.693', '73.0135'];

const nwPage = read('/new-way-dry-cleaners-f10');
mustInclude(nwPage, '/new-way-dry-cleaners-f10', [
  String(NW.sinceYear),
  String(NW.latitude),
  String(NW.longitude),
  NW.phoneDisplay,
  NW.phoneSecondaryDisplay,
  NW.phone,
  NW.phoneSecondary,
  NW.opens,
  NW.closes,
  NW.foundingDate,
  NW.hoursShort,
  `${NW.aggregateRating.ratingValue}`,
  `${NW.aggregateRating.reviewCount} Google reviews`,
  SOCIAL_LINKS.facebook,
]);
mustNotInclude(nwPage, '/new-way-dry-cleaners-f10', forbiddenLegacy);

const pwPage = read('/pak-way-dry-cleaners-g15');
mustInclude(pwPage, '/pak-way-dry-cleaners-g15', [
  PW.phoneDisplay,
  PW.phone,
  PW.opens,
  PW.closes,
  PW.hoursShort,
  `${PW.aggregateRating.ratingValue}`,
  `${PW.aggregateRating.reviewCount} Google reviews`,
]);
mustNotInclude(pwPage, '/pak-way-dry-cleaners-g15', [
  ...forbiddenLegacy,
  'hasMap',
]);

const home = read('/');
mustInclude(home, '/', [NW.hoursShort, PW.hoursShort, NW.phoneDisplay, PW.phoneDisplay]);
mustNotInclude(home, '/', forbiddenLegacy);

const about = read('/about');
mustInclude(about, '/about', [
  String(NW.sinceYear),
  `${NW.aggregateRating.ratingValue}`,
  `${NW.aggregateRating.reviewCount} Google reviews`,
]);
mustNotInclude(about, '/about', forbiddenLegacy);

const contact = read('/contact');
mustInclude(contact, '/contact', [NW.phoneDisplay, NW.phoneSecondaryDisplay, PW.phoneDisplay]);
mustNotInclude(contact, '/contact', forbiddenLegacy);

console.log('verify-gbp-html: ok');
