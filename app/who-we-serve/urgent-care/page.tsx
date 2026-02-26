import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Urgent Care Analytics and Patient Flow Performance Solutions',
  description:
    'Improve urgent care efficiency with analytics that tracks patient flow, visit patterns, operational performance, and care delivery outcomes across locations.',
  alternates: {
    canonical: 'https://marketing.compile.health/solutions/urgent-care',
  },
}

export default function Page() {
  return <PageClient />
}
