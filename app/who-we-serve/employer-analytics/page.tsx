import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Employer Healthcare Analytics and Workforce Health Intelligence',
  description:
    'Unify claims, clinical, benefits, and workforce data to analyze healthcare spend, predict risk, and improve employee health, productivity, and retention outcomes.',
  alternates: {
    canonical: 'https://marketing.compile.health/who-we-serve/employer-analytics',
  },
}

export default function Page() {
  return <PageClient />
}
