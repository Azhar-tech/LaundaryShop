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

function walkHtmlFiles(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walkHtmlFiles(full, acc);
    else if (name === 'index.html' || name === '404.html') acc.push(full);
  }
  return acc;
}

function allowedPhoneDigits() {
  const set = new Set();
  for (const loc of Object.values(LOCATIONS)) {
    for (const raw of [loc.phone, loc.phoneSecondary, loc.phoneDisplay, loc.phoneSecondaryDisplay]) {
      const d = String(raw || '').replace(/\D/g, '');
      if (!d) continue;
      set.add(d);
      if (d.startsWith('92') && d.length > 2) set.add(`0${d.slice(2)}`);
      if (d.startsWith('0') && d.length > 1) set.add(`92${d.slice(1)}`);
    }
  }
  return set;
}

const allowed = allowedPhoneDigits();
const telRe = /href=["']tel:([^"']+)["']/gi;
const waRe = /href=["']https?:\/\/wa\.me\/(\d+)/gi;
let linkFailed = false;

for (const file of walkHtmlFiles(distDir)) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = path.relative(root, file);
  for (const re of [telRe, waRe]) {
    re.lastIndex = 0;
    let match;
    while ((match = re.exec(html))) {
      const d = match[1].replace(/\D/g, '');
      if (!d || allowed.has(d)) continue;
      console.error(`${rel}: ${match[0]} is not a LOCATIONS number`);
      linkFailed = true;
    }
  }
}

if (linkFailed) {
  throw new Error('verify-gbp-html: tel:/wa.me link used a number not in constants.js');
}

const notFoundHtml = read('/404');
if (notFoundHtml.includes('sticky-contact-bar')) {
  throw new Error('/404 must not render the sticky contact bar');
}

const nwHasBar = nwPage.includes('sticky-contact-bar');
if (!nwHasBar) {
  throw new Error('/new-way-dry-cleaners-f10 must render the sticky contact bar');
}

console.log('verify-gbp-html: ok');
