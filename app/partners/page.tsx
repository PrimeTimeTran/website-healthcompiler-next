import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Strategic Healthcare Technology and Integration Partners',
  description:
    'Explore our partner ecosystem that enhances connectivity, accelerates implementation, and expands value through shared healthcare data and technology solutions.',
  alternates: {
    canonical: 'https://marketing.compile.health/partners',
  },
}

export default function Page() {
  return <PageClient />
}
