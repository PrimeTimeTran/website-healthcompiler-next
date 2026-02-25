import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Forward Deployed Engineering for Healthcare Data and Integration',
  description:
    'Embedded engineering teams work directly with healthcare organizations to build data pipelines, connect clinical and operational systems, and launch production solutions faster.',
  alternates: {
    canonical: 'https://marketing.compile.health/platform/fde',
  },
}

export default function Page() {
  return <PageClient />
}
