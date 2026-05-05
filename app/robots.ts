import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://SasanTazayoni.github.io/integrate-therapy/sitemap.xml',
  }
}
