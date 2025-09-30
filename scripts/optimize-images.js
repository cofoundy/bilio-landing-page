#!/usr/bin/env node

/**
 * Image Optimization Script
 * Converts large PNG images to WebP and AVIF formats
 * Reduces file sizes by 70-90% while maintaining quality
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '..', 'public');

const imagesToOptimize = [
  {
    input: 'golden-piggy.png',
    sizes: [
      { width: 800, suffix: '' },
      { width: 400, suffix: '-mobile' }
    ]
  },
  {
    input: 'logo_Bilio_dark_mode.png',
    sizes: [
      { width: 400, suffix: '' }
    ]
  },
  {
    input: 'logo_Bilio.png',
    sizes: [
      { width: 300, suffix: '' }
    ]
  }
];

async function optimizeImage(inputFile, width, suffix) {
  const baseName = path.basename(inputFile, path.extname(inputFile));
  const inputPath = path.join(PUBLIC_DIR, inputFile);

  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  Skipping ${inputFile} - file not found`);
    return;
  }

  console.log(`\n🔄 Processing: ${inputFile} at ${width}px...`);

  // Output paths
  const webpPath = path.join(PUBLIC_DIR, `${baseName}${suffix}.webp`);
  const avifPath = path.join(PUBLIC_DIR, `${baseName}${suffix}.avif`);

  try {
    // Get original size
    const originalStats = fs.statSync(inputPath);
    const originalSizeMB = (originalStats.size / 1024 / 1024).toFixed(2);

    // Convert to WebP
    await sharp(inputPath)
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(webpPath);

    const webpStats = fs.statSync(webpPath);
    const webpSizeMB = (webpStats.size / 1024 / 1024).toFixed(2);
    const webpSavings = (((originalStats.size - webpStats.size) / originalStats.size) * 100).toFixed(1);

    console.log(`  ✅ WebP: ${webpSizeMB}MB (${webpSavings}% smaller)`);

    // Convert to AVIF (even better compression)
    await sharp(inputPath)
      .resize(width, null, { withoutEnlargement: true })
      .avif({ quality: 75 })
      .toFile(avifPath);

    const avifStats = fs.statSync(avifPath);
    const avifSizeMB = (avifStats.size / 1024 / 1024).toFixed(2);
    const avifSavings = (((originalStats.size - avifStats.size) / originalStats.size) * 100).toFixed(1);

    console.log(`  ✅ AVIF: ${avifSizeMB}MB (${avifSavings}% smaller)`);
    console.log(`  📊 Original: ${originalSizeMB}MB`);

  } catch (error) {
    console.error(`  ❌ Error processing ${inputFile}:`, error.message);
  }
}

async function main() {
  console.log('🖼️  Bilio Image Optimization Script\n');
  console.log('Converting large PNG files to modern formats (WebP & AVIF)...\n');

  for (const imageConfig of imagesToOptimize) {
    for (const size of imageConfig.sizes) {
      await optimizeImage(imageConfig.input, size.width, size.suffix);
    }
  }

  console.log('\n✨ Image optimization complete!');
  console.log('\n📝 Next steps:');
  console.log('   1. Update image references to use <picture> elements');
  console.log('   2. Test optimized images in browser');
  console.log('   3. Consider removing original large PNGs if not needed\n');
}

main().catch(console.error);