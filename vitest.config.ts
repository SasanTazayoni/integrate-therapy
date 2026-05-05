import { defineConfig, coverageConfigDefaults } from 'vitest/config'
import path from 'path'

export default defineConfig({
  esbuild: {
    jsx: 'automatic',
  },
  resolve: {
    alias: {
      '@': path.resolve('./'),
      'next/image': path.resolve('./__mocks__/next-image-mock.tsx'),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts'],
    globals: true,
    coverage: {
      exclude: [
        ...coverageConfigDefaults.exclude,
        'app/layout.tsx',
        'app/manifest.ts',
        'app/robots.ts',
        'app/sitemap.ts',
        'app/not-found.tsx',
        'data/faqData.ts',
        'data/testimonials.ts',
        'lib/**',
        'next.config.ts',
        '__mocks__/**',
      ],
    },
  },
})
