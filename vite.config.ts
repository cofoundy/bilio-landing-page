import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 5173,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // SEO and Performance optimizations
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React core
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }

          // Router
          if (id.includes('node_modules/react-router-dom')) {
            return 'vendor-router';
          }

          // UI library (Radix)
          if (id.includes('node_modules/@radix-ui')) {
            return 'vendor-ui';
          }

          // i18n
          if (id.includes('node_modules/i18next') || id.includes('node_modules/react-i18next')) {
            return 'vendor-i18n';
          }

          // Charts
          if (id.includes('node_modules/recharts')) {
            return 'vendor-charts';
          }

          // Heavy animations (lazy loaded)
          if (id.includes('src/components/animations')) {
            return 'animations';
          }

          // Form libraries
          if (id.includes('node_modules/react-hook-form') || id.includes('node_modules/zod')) {
            return 'vendor-forms';
          }

          // Other vendors
          if (id.includes('node_modules')) {
            return 'vendor-other';
          }
        },
      },
    },
    // Optimize assets
    assetsInlineLimit: 4096,
    // Enable source maps for better debugging
    sourcemap: mode === 'development',
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 600,
  },
  // PWA and SEO optimizations
  define: {
    // Ensure process.env is available
    'process.env': {},
  },
}));
