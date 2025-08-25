import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { services, locations, blogPosts } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/services',
    '/locations',
    '/blog',
    '/about',
    '/contact',
    '/diesel-mechanic',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const servicePages = services.map((service) => ({
    url: `${SITE_URL}/services${service.url}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const locationPages = locations.map((location) => ({
    url: `${SITE_URL}/locations${location.url}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogPostPages = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog${post.url}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...servicePages, ...locationPages, ...blogPostPages];
}
