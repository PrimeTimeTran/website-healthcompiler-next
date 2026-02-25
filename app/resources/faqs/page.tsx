import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions About Healthcare Analytics and Solutions',
  description:
    'Find answers to common questions about healthcare analytics, reporting, integrations, outcomes solutions, and how these tools support care and performance goals.',
  alternates: {
    canonical: 'https://marketing.compile.health/resources/faqs',
  },
}

export default function Page() {
  return <PageClient />
}
