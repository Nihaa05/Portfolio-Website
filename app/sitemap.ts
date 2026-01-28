import { MetadataRoute } from 'next';
import { projects } from '@/data/portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://niharika-pendem.dev';

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...projectUrls,
  ];
}
