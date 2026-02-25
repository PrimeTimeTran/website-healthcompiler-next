import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Healthcare Analytics and Industry Insights Blog',
  description:
    'Read expert articles on healthcare data, analytics, quality performance, population health, risk adjustment, value based care, and practice optimization.',
  alternates: {
    canonical: 'https://marketing.compile.health/resources/blogs',
  },
}

export default function Page() {
  return <PageClient />
}
