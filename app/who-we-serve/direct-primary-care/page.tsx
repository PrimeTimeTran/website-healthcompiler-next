import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Direct Primary Care Analytics and Patient Engagement Solutions',
  description:
    'Support direct primary care practices with analytics that tracks membership growth, patient outcomes, utilization patterns, and care engagement performance.',
  alternates: {
    canonical: 'https://marketing.compile.health/who-we-serve/direct-primary-care',
  },
}

export default function Page() {
  return <PageClient />
}
