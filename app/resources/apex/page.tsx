import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Healthcare Leadership Interviews and Direct Care Innovation Insights',
  description:
    'Explore interviews with healthcare innovators, direct care leaders, and benefits experts sharing insights on value based care, patient access, and cost saving strategies.',
  alternates: {
    canonical: 'https://marketing.compile.health/resources/apex',
  },
}

export default function Page() {
  return <PageClient />
}
