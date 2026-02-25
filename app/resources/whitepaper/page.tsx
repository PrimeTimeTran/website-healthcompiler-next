import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Healthcare Data and Analytics Whitepapers for Quality and Value',
  description:
    'Download healthcare whitepapers with insights on analytics, risk adjustment, population health, quality measurement, and value based care performance.',
  alternates: {
    canonical: 'https://marketing.compile.health/resources/whitepaper',
  },
}

export default function Page() {
  return <PageClient />
}
