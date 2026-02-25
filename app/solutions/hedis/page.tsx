import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'HEDIS Quality Performance Analytics and Reporting Solutions',
  description:
    'Track HEDIS performance, close care gaps, and monitor quality metrics using analytics that supports compliance, performance benchmarking, and population health improvement.',
  alternates: {
    canonical: 'https://marketing.compile.health/solutions/hedis',
  },
}

export default function Page() {
  return <PageClient />
}
