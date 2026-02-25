import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Guide to Direct Specialty Care and Patient Centered Models',
  description:
    'Learn how direct specialty care works, why practices adopt it, and how it improves patient engagement, outcomes, and financial sustainability.',
  alternates: {
    canonical: 'https://marketing.compile.health/resources/guide/direct-specialty-care',
  },
}

export default function Page() {
  return <PageClient />
}
