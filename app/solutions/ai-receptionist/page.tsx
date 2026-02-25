import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'AI Receptionist for Healthcare and Patient Communication Automation',
  description:
    'Automate patient calls, texts, and web inquiries with an AI receptionist that schedules visits, routes requests, and improves access and patient experience across healthcare services.',
  alternates: {
    canonical: 'https://marketing.compile.health/solutions/ai-receptionist',
  },
}

export default function Page() {
  return <PageClient />
}
