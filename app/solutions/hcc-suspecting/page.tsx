import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'HCC Suspecting and Risk Adjustment Analytics for Healthcare',
  description:
    'Identify undocumented conditions and improve RAF accuracy using analytics that surfaces suspect diagnoses, supports coding workflows, and strengthens risk adjustment performance.',
  alternates: {
    canonical: 'https://marketing.compile.health/solutions/hcc-suspecting',
  },
}

export default function Page() {
  return <PageClient />
}
