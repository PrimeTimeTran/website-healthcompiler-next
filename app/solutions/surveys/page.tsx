import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Healthcare Patient Surveys and Feedback Solutions',
  description:
    'Collect and analyze patient experience feedback to surface insights, drive care improvements, and understand satisfaction across your healthcare population and services.',
  alternates: {
    canonical: 'https://marketing.compile.health/solutions/surveys',
  },
}

export default function Page() {
  return <PageClient />
}
