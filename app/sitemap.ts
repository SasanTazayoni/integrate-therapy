import type { MetadataRoute } from 'next'

const base = 'https://SasanTazayoni.github.io/integrate-therapy'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${base}/`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/about`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/faq`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/privacy-policy`,lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/terms`,         lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/cookie-policy`, lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
  ]
}
