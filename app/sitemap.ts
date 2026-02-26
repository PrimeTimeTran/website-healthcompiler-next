import { fetchBlogPosts } from '@/services/strapi'
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
  '/solutions/patient-analytics',
  '/solutions/pediatrics',
  '/solutions/surveys',
  '/solutions/urgent-care',
  '/solutions/utilization-engagement-analytics',
  '/terms',
  '/tpa-health-plans',
  '/who-we-serve',
  '/who-we-serve/direct-primary-care',
  '/who-we-serve/direct-primary-care-networks',
  '/who-we-serve/employer-analytics',
  '/who-we-serve/independent-primary-care',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: LAST_MOD,
    changeFrequency: 'weekly',
    priority: route === '/' ? 1 : 0.8,
  }))

  let blogRoutes: MetadataRoute.Sitemap = []

  try {
    const blogPosts = await fetchBlogPosts()
    blogRoutes = blogPosts
      .filter((post) => post.slug)
      .map((post) => ({
        url: `${BASE_URL}/resources/blogs/${post.slug}`,
        lastModified: new Date(post.publishedAt || post.date || LAST_MOD),
        changeFrequency: 'weekly',
        priority: 0.8,
      }))
  } catch (error) {
    console.error('Failed to fetch blog posts for sitemap:', error)
  }

  return [...staticRoutes, ...blogRoutes]
}
