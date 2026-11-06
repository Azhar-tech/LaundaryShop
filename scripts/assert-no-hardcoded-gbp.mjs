import fs from 'node:fs';
import path from 'node:path';

const srcRoot = path.join(process.cwd(), 'src');
const allowed = new Set([path.normalize('seo/constants.js')]);

const checks = [
  { name: '8am', re: /8am/i },
  { name: '10pm', re: /10pm/i },
  { name: '11pm', re: /11pm/i },
  { name: '2001', re: /\b2001\b/ },
  {
    name: 'phone-number',
    re: /(?:\+?92|0)?[\s-]*3(?:23[\s-]*555[\s-]*7878|45[\s-]*481[\s-]*0410|49[\s-]*596[\s-]*3359)|923235557878|923454810410|923495963359/g,
  },
];

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full, acc);
    else if (/\.(js|jsx)$/.test(name)) acc.push(full);
  }
  return acc;
}

const files = walk(srcRoot);
let failed = false;

for (const file of files) {
  const rel = path.relative(srcRoot, file);
  if (allowed.has(path.normalize(rel))) continue;
  const source = fs.readFileSync(file, 'utf8');
  for (const { name, re } of checks) {
    re.lastIndex = 0;
    const match = source.match(re);
    if (!match) continue;
    failed = true;
    console.error(`${rel}: hard-coded ${name} (${[...new Set(match)].join(', ')})`);
  }
}

if (failed) {
  console.error(
    'assert-no-hardcoded-gbp: use LOCATIONS / helpers in src/seo/constants.js instead of literals.',
  );
  process.exit(1);
}

console.log(`assert-no-hardcoded-gbp: ok (${files.length} files scanned)`);
