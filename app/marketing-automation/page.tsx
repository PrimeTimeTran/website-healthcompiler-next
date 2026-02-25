import { Metadata } from 'next'
import PageClient from './PageClient'

export const metadata: Metadata = {
  title: 'Healthcare Marketing Automation for Patient Engagement and Growth',
  description:
    'Automate outreach and engagement across email, text, and messaging to grow patient relationships, improve retention, and measure campaign performance in healthcare services.',
  alternates: {
    canonical: 'https://marketing.compile.health/marketing-automation',
  },
}

export default function Page() {
  return <PageClient />
}
