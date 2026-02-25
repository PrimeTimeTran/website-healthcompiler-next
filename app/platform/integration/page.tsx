import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Healthcare Interoperability & Data Integration Platform',
  description:
    'Healthcare interoperability platform that connects EHRs, claims, and business systems to unify healthcare data, enable seamless integration, and improve care coordination.',
  alternates: {
    canonical: 'https://marketing.compile.health/platform/integration',
  },
}

export default function Page() {
  return <PageClient />
}
