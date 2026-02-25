import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Healthcare Analytics Platform for Population Health and Outcomes',
  description:
    'Discover a unified healthcare analytics platform that integrates clinical, claims, and engagement data to drive insights, care quality improvement, and performance outcomes.',
  alternates: {
    canonical: 'https://marketing.compile.health/platform',
  },
}

export default function Page() {
  return <PageClient />
}
