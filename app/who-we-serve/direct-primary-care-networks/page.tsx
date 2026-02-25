import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Analytics and Performance Intelligence for Direct Primary Care Networks',
  description:
    'Unify data across direct primary care networks to monitor performance, manage patient populations, and improve operational efficiency and care delivery outcomes.',
  alternates: {
    canonical: 'https://marketing.compile.health/who-we-serve/direct-primary-care-networks',
  },
}

export default function Page() {
  return <PageClient />
}
