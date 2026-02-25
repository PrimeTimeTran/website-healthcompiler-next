import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Healthcare Analytics and Performance for Clinically Integrated Networks',
  description:
    'Unify provider data across clinically integrated networks to monitor quality performance, improve care coordination, and support value based care strategies.',
  alternates: {
    canonical: 'https://marketing.compile.health/cins',
  },
}

export default function Page() {
  return <PageClient />
}
