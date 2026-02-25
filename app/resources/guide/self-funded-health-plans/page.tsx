import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Self Funded Health Plans Guide for Employers and Benefits Leaders',
  description:
    'Understand self funded health plan design, cost transparency, risk management strategies, and tools for employers seeking more control over healthcare spending.',
  alternates: {
    canonical: 'https://marketing.compile.health/resources/guide/self-funded-health-plans',
  },
}

export default function Page() {
  return <PageClient />
}
