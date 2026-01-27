import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/', '/api/', '/_not-found', '/index'],
      },
    ],
    sitemap: 'https://healthcompiler.com/sitemap.xml',
  }
}
