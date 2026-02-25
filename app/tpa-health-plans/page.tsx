import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Analytics and Cost Intelligence for Third Party Administrator Health Plans',
  description:
    'Support third party administrator health plans with analytics that improves claims visibility, cost control, performance monitoring, and population health insights.',
  alternates: {
    canonical: 'https://marketing.compile.health/tpa-health-plans',
  },
}

export default function Page() {
  return <PageClient />
}
