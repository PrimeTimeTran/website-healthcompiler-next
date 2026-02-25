import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'AI Healthcare Analytics for Employers | Infera',
  description:
    'Unify healthcare data, automate care gap detection, and improve outcomes with Infera’s AI-driven healthcare analytics and population health intelligence platform.',
  alternates: {
    canonical: 'https://marketing.compile.health/platform/infera',
  },
}

export default function Page() {
  return <PageClient />
}
