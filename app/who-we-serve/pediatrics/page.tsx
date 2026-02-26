import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Pediatric Population Health and Clinical Performance Analytics',
  description:
    'Monitor pediatric care quality, patient outcomes, immunization performance, and engagement trends using analytics designed for pediatric population health management.',
  alternates: {
    canonical: 'https://marketing.compile.health/solutions/pediatrics',
  },
}

export default function Page() {
  return <PageClient />
}
