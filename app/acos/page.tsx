import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'ACO Population Health and Value Based Care Analytics Solutions',
  description:
    'Support accountable care organizations with analytics that improves quality performance, cost management, patient outcomes, and value based care success.',
  alternates: {
    canonical: 'https://marketing.compile.health/acos',
  },
}

export default function Page() {
  return <PageClient />
}
