import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Analytics and Operational Intelligence for Managed Service Organizations',
  description:
    'Support managed service organizations with analytics that improves operational visibility, tracks performance across providers, and strengthens financial and care outcomes.',
  alternates: {
    canonical: 'https://marketing.compile.health/solutions/managed-service-orgs',
  },
}

export default function Page() {
  return <PageClient />
}
