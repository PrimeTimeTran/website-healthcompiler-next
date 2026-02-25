import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Healthcare Analytics News Insights and Upcoming Events',
  description:
    'Stay up to date with company news, research highlights, industry insights, webinars, and events focused on healthcare data, quality, and innovation.',
  alternates: {
    canonical: 'https://marketing.compile.health/resources/news-events',
  },
}

export default function Page() {
  return <PageClient />
}
