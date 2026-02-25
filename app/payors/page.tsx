import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Healthcare Analytics and Population Risk Intelligence for Payors',
  description:
    'Improve cost control, risk modeling, and quality performance with analytics that supports payor population health management and value based care programs.',
  alternates: {
    canonical: 'https://marketing.compile.health/payors',
  },
}

export default function Page() {
  return <PageClient />
}
