import type { MetadataRoute } from 'next'
import { services } from '@/lib/site-content'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'http://localhost:3000'

  const staticRoutes = [
    '/',
    '/services',
    '/about',
    '/contact',
    '/get-started',
    '/blog',
    '/privacy-policy',
    '/terms-of-service',
  ]

  const serviceRoutes = services.map(service => `/services/${service.slug}`)

  return [...staticRoutes, ...serviceRoutes].map(route => ({
    url: new URL(route, baseUrl).toString(),
    lastModified: new Date(),
  }))
}
