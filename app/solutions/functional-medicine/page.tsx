import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Functional Medicine Analytics and Patient Outcome Intelligence',
  description:
    'Track patient progress, engagement, and treatment effectiveness with analytics that supports personalized functional medicine care and long term health outcomes.',
  alternates: {
    canonical: 'https://marketing.compile.health/solutions/functional-medicine',
  },
}

export default function Page() {
  return <PageClient />
}
