import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Healthcare Outcomes Solutions and Population Health Analytics',
  description:
    'Turn healthcare data into insights that improve clinical quality, close care gaps, support value based care, and measure outcomes across populations and providers.',
  alternates: {
    canonical: 'https://marketing.compile.health/solutions/health-outcomes',
  },
}

export default function Page() {
  return <PageClient />
}
