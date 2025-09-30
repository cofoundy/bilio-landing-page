/**
 * Optimized Image Component
 * Automatically uses WebP/AVIF with PNG fallback
 * Includes lazy loading and proper sizing attributes
 */

import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface OptimizedImageProps {
  src: string; // Base image path (e.g., "/golden-piggy.png")
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean; // Disable lazy loading for above-fold images
  mobile?: boolean; // Use mobile version if available
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  mobile = false,
}) => {
  // Extract filename without extension
  const getBaseName = (path: string) => {
    const filename = path.split('/').pop() || '';
    return filename.replace(/\.[^/.]+$/, '');
  };

  const baseName = getBaseName(src);
  const basePath = src.substring(0, src.lastIndexOf('/') + 1);
  const mobileSuffix = mobile ? '-mobile' : '';

  // Generate source paths for modern formats
  const avifSrc = `${basePath}${baseName}${mobileSuffix}.avif`;
  const webpSrc = `${basePath}${baseName}${mobileSuffix}.webp`;
  const fallbackSrc = src; // Original PNG

  // Disable lazy loading for priority images (above the fold)
  if (priority) {
    return (
      <picture>
        <source srcSet={avifSrc} type="image/avif" />
        <source srcSet={webpSrc} type="image/webp" />
        <img
          src={fallbackSrc}
          alt={alt}
          width={width}
          height={height}
          className={className}
          loading="eager"
        />
      </picture>
    );
  }

  // Lazy loaded version
  return (
    <picture>
      <source srcSet={avifSrc} type="image/avif" />
      <source srcSet={webpSrc} type="image/webp" />
      <LazyLoadImage
        src={fallbackSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        effect="blur"
        threshold={100}
      />
    </picture>
  );
};