import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Patient Analytics | Health Compiler',
  description:
    'Gain deep insights into your patient population with our advanced analytics platform.',
  alternates: {
    canonical: 'https://marketing.compile.health/solutions/patient-analytics',
  },
}

export default function Page() {
  return <PageClient />
}
