'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Activity,
  FileBarChart,
  Building2,
  Shield,
  Eye,
  TrendingUp,
  FileText,
  RefreshCcw,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GridSection } from '@/components/ui/GridSection'

export default function CarePurchasersPage() {
  return (
    <>
      {/* Hero Section */}
      <GridSection>
        <div className="container mx-auto px-6 py-20 md:py-32 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-tight">
              See What You're Paying For. <span className="text-primary">Continuously.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Health Compiler gives employers, TPAs, brokers, and self-funded plan sponsors
              continuous visibility into care performance, cost trends, and outcomes — not just at
              renewal time.
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

      {/* From Episodic Reporting Section */}
      <section className="py-20 md:py-32 bg-background border-b border-border/40">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              From Episodic Reporting to Ongoing Insight
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Care purchasers have historically relied on backward-looking claims reports to
              evaluate care strategy. By the time problems surface, the financial impact has already
              landed.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground">
              Health Compiler changes the cadence. Utilization, engagement, avoidance, and outcomes
              become visible continuously.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors flex flex-col h-full">
              <div className="mb-4 text-primary">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">TPA & Health Plans</h3>
              <p className="text-muted-foreground mb-6 grow">
                Evaluate performance across populations, contracts, and care models.
              </p>
              <Link
                href="/who-we-serve/tpa-health-plans"
                className="text-primary font-medium inline-flex items-center hover:underline mt-auto"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors flex flex-col h-full">
              <div className="mb-4 text-primary">
                <FileBarChart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Brokers & Advisors</h3>
              <p className="text-muted-foreground mb-6 grow">
                Client-ready reporting, ROI tracking, and benchmarking that strengthen advisory
                relationships.
              </p>
              <Link
                href="/who-we-serve/brokers-advisors"
                className="text-primary font-medium inline-flex items-center hover:underline mt-auto"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors flex flex-col h-full">
              <div className="mb-4 text-primary">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Employers</h3>
              <p className="text-muted-foreground mb-6 grow">
                Fiduciary oversight with ongoing visibility into utilization, engagement, and
                outcomes.
              </p>
              <Link
                href="/who-we-serve/employers"
                className="text-primary font-medium inline-flex items-center hover:underline mt-auto"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Card 4 */}
            <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors flex flex-col h-full">
              <div className="mb-4 text-primary">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Captives & Union Plans</h3>
              <p className="text-muted-foreground mb-6 grow">
                Pool-level intelligence, risk visibility, stop-loss analytics, and fiduciary-ready
                reporting.
              </p>
              <Link
                href="/who-we-serve/captives"
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
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Continuous Performance Visibility</h3>
                <p className="text-muted-foreground">
                  Utilization, engagement, cost trends, and outcomes all year long.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">AI-Powered Risk & Cost Signals</h3>
                <p className="text-muted-foreground">
                  Surface emerging patterns before financial impact compounds.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Fiduciary-Ready Reporting</h3>
                <p className="text-muted-foreground">
                  Built for clarity, accountability, and defensibility.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <RefreshCcw className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Works With Existing Systems</h3>
                <p className="text-muted-foreground">No disruption, no manual data stitching.</p>
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
            Make Performance Visible — All Year Long
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Move from episodic reporting to continuous insight that supports confident decisions.
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
