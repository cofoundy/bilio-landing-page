/**
 * Web Vitals Monitoring
 * Reports Core Web Vitals metrics to console (and optionally to analytics)
 *
 * Metrics tracked:
 * - LCP (Largest Contentful Paint): Loading performance
 * - FID (First Input Delay): Interactivity
 * - CLS (Cumulative Layout Shift): Visual stability
 * - FCP (First Contentful Paint): Initial rendering
 * - TTFB (Time to First Byte): Server response time
 */

import { onCLS, onINP, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';

// Thresholds (Google recommended)
// Note: FID is deprecated, replaced by INP (Interaction to Next Paint)
const THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },
  INP: { good: 200, poor: 500 }, // Replaced FID
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  TTFB: { good: 800, poor: 1800 },
};

type ThresholdStatus = 'good' | 'needs-improvement' | 'poor';

function getThresholdStatus(name: string, value: number): ThresholdStatus {
  const threshold = THRESHOLDS[name as keyof typeof THRESHOLDS];
  if (!threshold) return 'good';

  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

function getStatusEmoji(status: ThresholdStatus): string {
  switch (status) {
    case 'good': return '🟢';
    case 'needs-improvement': return '🟡';
    case 'poor': return '🔴';
  }
}

function reportMetric(metric: Metric) {
  const status = getThresholdStatus(metric.name, metric.value);
  const emoji = getStatusEmoji(status);

  const displayValue = metric.name === 'CLS'
    ? metric.value.toFixed(3)
    : `${Math.round(metric.value)}ms`;

  console.log(
    `${emoji} ${metric.name}: ${displayValue} (${status})`,
    metric
  );

  // TODO: Send to Google Analytics when configured
  // Example:
  // if (window.gtag) {
  //   window.gtag('event', metric.name, {
  //     value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
  //     metric_id: metric.id,
  //     metric_value: metric.value,
  //     metric_delta: metric.delta,
  //   });
  // }

  // TODO: Send to custom analytics endpoint
  // Example:
  // fetch('/api/analytics/vitals', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     name: metric.name,
  //     value: metric.value,
  //     id: metric.id,
  //     delta: metric.delta,
  //     rating: metric.rating,
  //   }),
  // });
}

export function initWebVitals() {
  // Only run in production or when explicitly enabled
  if (import.meta.env.DEV && !import.meta.env.VITE_ENABLE_WEB_VITALS) {
    return;
  }

  console.log('🚀 Web Vitals monitoring initialized');

  // Track all Core Web Vitals
  onLCP(reportMetric);
  onINP(reportMetric); // Replaced FID with INP (web-vitals v5+)
  onCLS(reportMetric);

  // Track additional metrics
  onFCP(reportMetric);
  onTTFB(reportMetric);
}

// Export for use in analytics integration
export { reportMetric };