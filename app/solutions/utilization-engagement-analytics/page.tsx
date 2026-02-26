import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Utilization & Engagement Analytics | Health Compiler',
  description:
    'Track performance and engagement metrics across your healthcare organization with our utilization analytics platform.',
  alternates: {
    canonical: 'https://marketing.compile.health/solutions/utilization-engagement-analytics',
  },
}

export default function Page() {
  return <PageClient />
}
