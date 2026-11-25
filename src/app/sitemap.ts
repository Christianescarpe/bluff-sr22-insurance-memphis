import type { MetadataRoute } from 'next';
import { ALL_SUB_PAGES } from '@/data/allSubPages';
import { SITE_CONFIG } from '@/data/siteContent';

export default function sitemap(): MetadataRoute.Sitemap {
  const subPageEntries: MetadataRoute.Sitemap = ALL_SUB_PAGES.map((page) => ({
    url: `${SITE_CONFIG.siteUrl}/${page.slug}`,
    changeFrequency: 'weekly',
    priority: page.type === 'service' ? 0.9 : 0.8,
  }));

  return [
    {
      url: `${SITE_CONFIG.siteUrl}/`,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...subPageEntries,
    {
      url: `${SITE_CONFIG.siteUrl}/contact-us`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_CONFIG.siteUrl}/privacy`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
