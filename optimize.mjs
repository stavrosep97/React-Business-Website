import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const root = 'public/images';   // ο φάκελος με τις φωτογραφίες σου
const MAX_WIDTH = 1600;         // γενικές φωτογραφίες (carousel, gallery)
const PRODUCT_WIDTH = 900;      // φωτογραφίες προϊόντων (μικρές κάρτες)

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]
  );
}

let totalBefore = 0;
let totalAfter = 0;

for (const file of walk(root)) {
  if (!/\.jpe?g$/i.test(file)) continue;

  const before = fs.statSync(file).size;
  if (before < 150 * 1024) continue; // αφήνει όσες είναι ήδη μικρές

  const isProduct = /product/i.test(path.basename(file));
  const width = isProduct ? PRODUCT_WIDTH : MAX_WIDTH;

  const buf = await sharp(file)
    .rotate() // κρατάει σωστό προσανατολισμό
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality: 75, mozjpeg: true })
    .toBuffer();

  if (buf.length < before) {
    fs.writeFileSync(file, buf);
    totalBefore += before;
    totalAfter += buf.length;
    console.log(`${file}: ${Math.round(before / 1024)} KB -> ${Math.round(buf.length / 1024)} KB`);
  }
}

console.log(`\nΣύνολο: ${(totalBefore / 1048576).toFixed(1)} MB -> ${(totalAfter / 1048576).toFixed(1)} MB`);