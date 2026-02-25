import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'MIPS Performance Analytics and Quality Reporting Solutions',
  description:
    'Simplify MIPS reporting and improve performance scores using analytics that tracks quality measures, supports compliance, and identifies improvement opportunities.',
  alternates: {
    canonical: 'https://marketing.compile.health/solutions/mips',
  },
}

export default function Page() {
  return <PageClient />
}
