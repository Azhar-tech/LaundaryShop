import fs from 'node:fs';
import path from 'node:path';

const distDir = path.join(process.cwd(), 'dist');
const LD_RE = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;

function walkHtmlFiles(dir, acc = []) {
  if (!fs.existsSync(dir)) {
    throw new Error(`Missing ${dir}`);
  }
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      walkHtmlFiles(full, acc);
    } else if (name === 'index.html' || name === '404.html') {
      acc.push(full);
    }
  }
  return acc;
}

function decodeEntities(raw) {
  return raw
    .replace(/&quot;/g, '"')
    .replace(/&#34;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function collectTypes(node, acc = []) {
  if (!node || typeof node !== 'object') return acc;
  if (Array.isArray(node)) {
    node.forEach((item) => collectTypes(item, acc));
    return acc;
  }
  if (node['@type']) {
    const types = Array.isArray(node['@type']) ? node['@type'] : [node['@type']];
    acc.push(...types);
  }
  if (node['@graph']) collectTypes(node['@graph'], acc);
  return acc;
}

const files = walkHtmlFiles(distDir);
let failed = false;
let blocks = 0;

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = path.relative(process.cwd(), file);
  let match;
  const re = new RegExp(LD_RE.source, 'gi');
  while ((match = re.exec(html))) {
    blocks += 1;
    const raw = decodeEntities(match[1].trim());
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch (err) {
      console.error(`FAIL parse ${rel}: ${err.message}`);
      failed = true;
      continue;
    }
    const types = collectTypes(parsed);
    if (types.includes('Review') || types.includes('AggregateRating')) {
      console.error(`FAIL ${rel} emits ${types.filter((t) => t === 'Review' || t === 'AggregateRating').join(', ')}`);
      failed = true;
    }
  }
}

console.log(`verify-jsonld: ${blocks} blocks in ${files.length} files`);
if (failed) process.exit(1);
console.log('verify-jsonld: ok');
