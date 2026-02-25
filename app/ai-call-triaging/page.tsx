import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'AI Call Triaging for Healthcare Patient Routing and Prioritization',
  description:
    'Automatically prioritize and route patient calls with AI, reduce front desk workload, improve access, and ensure patients reach the right care team when they need it most.',
  alternates: {
    canonical: 'https://marketing.compile.health/ai-call-triaging',
  },
}

export default function Page() {
  return <PageClient />
}
