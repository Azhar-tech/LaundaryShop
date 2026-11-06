import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const pub = path.join(root, 'public');

async function fitUnder(make, maxBytes, startQuality = 80) {
  let quality = startQuality;
  let buf;
  while (quality >= 28) {
    buf = await make(quality);
    if (buf.length <= maxBytes) return { buf, quality };
    quality -= 4;
  }
  return { buf, quality };
}

async function writeLogo() {
  const src = path.join(pub, 'logo.png');
  if (!fs.existsSync(src)) {
    console.warn('skip logo — public/logo.png missing');
    return;
  }
  const { buf, quality } = await fitUnder(
    (q) =>
      sharp(src)
        .resize({ width: 880, height: 208, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: q })
        .toBuffer(),
    30 * 1024,
  );
  const dest = path.join(pub, 'logo.webp');
  fs.writeFileSync(dest, buf);
  console.log(`logo.webp ${buf.length} bytes q${quality}`);
}

async function writeOg() {
  const src = path.join(pub, 'dryCleaning.webp');
  const { buf, quality } = await fitUnder(
    (q) =>
      sharp(src)
        .resize(1200, 630, { fit: 'cover', position: 'centre' })
        .webp({ quality: q })
        .toBuffer(),
    150 * 1024,
    72,
  );
  const dest = path.join(pub, 'og-default.webp');
  fs.writeFileSync(dest, buf);
  console.log(`og-default.webp ${buf.length} bytes q${quality} 1200x630`);
}

async function capPublicWebp(maxWidth = 1600) {
  const skip = new Set(['logo.webp', 'og-default.webp']);
  for (const name of fs.readdirSync(pub)) {
    if (!name.endsWith('.webp') || skip.has(name)) continue;
    const src = path.join(pub, name);
    const meta = await sharp(src).metadata();
    if (!meta.width || meta.width <= maxWidth) {
      console.log(`${name} ${meta.width}x${meta.height} (unchanged)`);
      continue;
    }
    const buf = await sharp(src)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toBuffer();
    const tmp = `${src}.tmp.webp`;
    fs.writeFileSync(tmp, buf);
    fs.rmSync(src, { force: true });
    fs.renameSync(tmp, src);
    const next = await sharp(src).metadata();
    console.log(`${name} ${meta.width}x${meta.height} -> ${next.width}x${next.height} ${buf.length} bytes`);
  }
}

await writeLogo();
await writeOg();
await capPublicWebp();
