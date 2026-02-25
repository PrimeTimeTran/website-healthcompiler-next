import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Employer Healthcare Analytics and Workforce Health Intelligence',
  description:
    'Unify claims, benefits, and workforce data to analyze healthcare costs, predict risk, and improve employee health outcomes, productivity, and retention.',
  alternates: {
    canonical: 'https://marketing.compile.health/solutions/employers',
  },
}

export default function Page() {
  return <PageClient />
}
