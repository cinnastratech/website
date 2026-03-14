import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cinnastratech.com';
  
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/courses/fundamentals',
    '/courses/selenium',
    '/courses/playwright',
    '/courses/cloud',
    '/courses/api-rest',
    '/courses/ai',
    '/legal',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return staticPages;
}
