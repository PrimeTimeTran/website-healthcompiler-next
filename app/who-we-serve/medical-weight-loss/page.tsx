import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Medical Weight Loss Analytics and Patient Outcome Tracking',
  description:
    'Track patient progress, treatment effectiveness, and engagement using analytics that supports medical weight loss programs and long term health improvement.',
  alternates: {
    canonical: 'https://marketing.compile.health/medical-weight-loss',
  },
}

export default function Page() {
  return <PageClient />
}
