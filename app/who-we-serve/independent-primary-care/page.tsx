import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Healthcare Analytics and Performance for Independent Primary Care',
  description:
    'Help independent primary care practices improve care quality, patient engagement, operational performance, and financial sustainability using healthcare analytics.',
  alternates: {
    canonical: 'https://marketing.compile.health/who-we-serve/independent-primary-care',
  },
}

export default function Page() {
  return <PageClient />
}
