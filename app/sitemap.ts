import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const BASE_URL = 'https://healthcompiler.com'
const LAST_MOD = new Date('2026-01-28')

const ROUTES = [
  '/',
  '/about',
  '/acos',
  '/ai-call-triaging',
  '/blog-post',
  '/book-a-demo',
  '/brokers-advisors',
  '/brokers-and-advisors',
  '/capabilities',
  '/captives',
  '/careers',
  '/cins',
  '/contact',
  '/design-kit',
  '/developer',
  '/employers-loop',
  '/form',
  '/get-featured',
  '/marketing-automation',
  '/medical-weight-loss',
  '/partners',
  '/payors',
  '/platform',
  '/platform/fde',
  '/platform/infera',
  '/platform/integration',
  '/privacy',
  '/resources/apex',
  '/resources/blogs',
  '/resources/faqs',
  '/resources/guide/direct-primary-care',
  '/resources/guide/direct-specialty-care',
  '/resources/guide/self-funded-health-plans',
  '/resources/news-events',
  '/resources/whitepaper',
  '/solutions',
  '/solutions/ai-receptionist',
  '/solutions/concierge',
  '/solutions/employers',
  '/solutions/functional-medicine',
  '/solutions/hcc-suspecting',
  '/solutions/health-outcomes',
  '/solutions/hedis',
  '/solutions/managed-service-orgs',
  '/solutions/mips',
  '/solutions/pediatrics',
  '/solutions/surveys',
  '/solutions/urgent-care',
  '/terms',
  '/tpa-health-plans',
  '/who-we-serve',
  '/who-we-serve/direct-primary-care',
  '/who-we-serve/direct-primary-care-networks',
  '/who-we-serve/employer-analytics',
  '/who-we-serve/independent-primary-care',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: LAST_MOD,
    changeFrequency: 'weekly',
    priority: route === '/' ? 1 : 0.8,
  }))
}
