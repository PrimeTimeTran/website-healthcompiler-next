import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Comprehensive Guide to Direct Primary Care Models',
  description:
    'Explore direct primary care fundamentals, benefits, operational models, and real world examples to help practices improve patient experience and care delivery.',
  alternates: {
    canonical: 'https://marketing.compile.health/resources/guide/direct-primary-care',
  },
}

export default function Page() {
  return <PageClient />
}
