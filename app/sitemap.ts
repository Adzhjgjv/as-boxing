import type { MetadataRoute } from 'next'

import { seoPages } from '@/lib/seo-pages'

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = [
    {
      url: 'https://www.asboxingfitness.com/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.asboxingfitness.com/boxing-coach-belvedere',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.asboxingfitness.com/boxing-guides',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  const guidePages: MetadataRoute.Sitemap = seoPages.map((page) => ({
    url: `https://www.asboxingfitness.com/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: page.kind === 'service' ? 'monthly' : 'weekly',
    priority: page.kind === 'service' ? 0.8 : 0.7,
  }))

  return [...corePages, ...guidePages]
}
