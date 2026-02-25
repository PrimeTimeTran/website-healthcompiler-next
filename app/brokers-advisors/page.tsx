import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Healthcare Analytics and Reporting Solutions for Brokers and Advisors',
  description:
    'Deliver data driven insights to employer clients with analytics that tracks healthcare cost trends, plan performance, and workforce health outcomes.',
  alternates: {
    canonical: 'https://marketing.compile.health/brokers-advisors',
  },
}

export default function Page() {
  return <PageClient />
}
