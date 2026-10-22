import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true,
  },
  build: {
    // Improve chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'router': ['react-router-dom'],
          'framer': ['framer-motion'],
        },
      },
    },
    // Increase inline threshold for tiny assets
    assetsInlineLimit: 4096,
    // Target modern browsers for smaller output
    target: 'es2020',
    // Disable source maps in production
    sourcemap: false,
    // Enable CSS minification
    cssMinify: true,
    // Enable JS minification
    minify: 'esbuild',
  },
})
