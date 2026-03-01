'use client'

import Link from 'next/link'
import { ArrowRight, BarChart3, Bot, Megaphone, Network, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GridSection } from '@/components/ui/GridSection'

export default function PrimaryCarePage() {
  return (
    <>
      {/* Hero Section */}
      <GridSection>
        <div className="container mx-auto px-6 py-20 md:py-32 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-tight">
              Primary Care, Powered by <span className="text-primary">Clarity</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Health Compiler gives primary care practices, from DPC clinics to managed networks —
              AI-powered analytics, patient engagement, and growth tools that make everyday data
              useful and care value easy to show.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/book-a-demo">
                  Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </GridSection>

      {/* One Platform Section */}
      <section className="py-20 md:py-32 bg-background border-b border-border/40">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              One Platform. Every Primary Care Model.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Whether you run a direct care practice, a concierge clinic, or a multi-practice
              network — Health Compiler brings clinical, operational, and engagement data together
              so your team can focus on care while the platform handles insight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors flex flex-col h-full">
              <h3 className="text-xl font-bold mb-4">Direct Primary Care</h3>
              <p className="text-muted-foreground mb-6 grow">
                Membership insights, engagement tracking, and employer-ready reporting for DPC
                practices.
              </p>
              <Link
                href="/who-we-serve/direct-primary-care"
                className="text-primary font-medium inline-flex items-center hover:underline mt-auto"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors flex flex-col h-full">
              <h3 className="text-xl font-bold mb-4">DPC Networks</h3>
              <p className="text-muted-foreground mb-6 grow">
                Unified analytics across multi-practice DPC networks.
              </p>
              <Link
                href="/who-we-serve/direct-primary-care-networks"
                className="text-primary font-medium inline-flex items-center hover:underline mt-auto"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors flex flex-col h-full">
              <h3 className="text-xl font-bold mb-4">Concierge Medicine</h3>
              <p className="text-muted-foreground mb-6 grow">
                Premium care analytics that preserve the personal touch.
              </p>
              <Link
                href="/who-we-serve/concierge"
                className="text-primary font-medium inline-flex items-center hover:underline mt-auto"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Card 4 */}
            <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors flex flex-col h-full">
              <h3 className="text-xl font-bold mb-4">Managed Service Organizations</h3>
              <p className="text-muted-foreground mb-6 grow">
                Clinical and operational visibility across the practices you support.
              </p>
              <Link
                href="/who-we-serve/managed-service-orgs"
                className="text-primary font-medium inline-flex items-center hover:underline mt-auto"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 md:py-32 bg-muted/30 border-b border-border/40">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight">
            What You Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Feature 1 */}
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">AI-Powered Analytics</h3>
                <p className="text-muted-foreground">
                  Engagement, utilization, care gaps, and outcomes — visible in one place.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">AI Agents for Front Desk</h3>
                <p className="text-muted-foreground">
                  Your team handles fewer interruptions without losing responsiveness.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Megaphone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Marketing Automation</h3>
                <p className="text-muted-foreground">
                  Drives steady growth quietly in the background.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Network className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Seamless EHR Integration</h3>
                <p className="text-muted-foreground">
                  Works with the systems you already use. No switching. No retraining.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center text-sm font-medium text-muted-foreground flex items-center justify-center gap-4 flex-wrap">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" /> HIPAA-compliant
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-border" />
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" /> Secure by design
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-border" />
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" /> Interoperable
            </span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary/5 border-t border-border/40">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to See What Your Data Can Do?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get clear, actionable insight for your primary care practice or network.
          </p>
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="/book-a-demo">
              Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
