import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Healthcare Analytics and Risk Intelligence for Captive Health Programs',
  description:
    'Monitor healthcare spending, population risk, and performance outcomes across captive programs using analytics that supports cost control and long term plan sustainability.',
  alternates: {
    canonical: 'https://marketing.compile.health/captives',
  },
}

export default function Page() {
  return <PageClient />
}
