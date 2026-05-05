import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/siteConfig'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`,               lastModified: new Date('2026-05-06'), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${SITE_URL}/about`,          lastModified: new Date('2026-05-06'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/services`,       lastModified: new Date('2026-05-06'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/faq`,            lastModified: new Date('2026-05-06'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/contact`,        lastModified: new Date('2026-05-06'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/privacy-policy`, lastModified: new Date('2026-05-06'), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${SITE_URL}/terms`,          lastModified: new Date('2026-05-06'), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${SITE_URL}/cookie-policy`,  lastModified: new Date('2026-05-06'), changeFrequency: 'yearly',  priority: 0.3 },
  ]
}
