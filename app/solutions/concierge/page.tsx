import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Concierge Medicine Analytics and Patient Experience Intelligence',
  description:
    'Measure patient engagement, membership performance, and care outcomes with analytics designed to support concierge medicine growth and personalized care delivery.',
  alternates: {
    canonical: 'https://marketing.compile.health/solutions/concierge',
  },
}

export default function Page() {
  return <PageClient />
}
