'use client'

import Link from 'next/link'
import { ArrowRight, Database, Sparkles, FileText, Globe, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GridSection } from '@/components/ui/GridSection'

export default function ValueBasedCarePage() {
  return (
    <>
      {/* Hero Section */}
      <GridSection>
        <div className="container mx-auto px-6 py-20 md:py-32 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-tight">
              Intelligence Infrastructure for <span className="text-primary">Value-Based Care</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Health Compiler powers accountable care performance across ACOs, clinically integrated
              networks, and health plans.
            </p>
            <p className="text-lg font-medium text-foreground">One platform. Global reach.</p>
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

      {/* Data Unified Section */}
      <section className="py-20 md:py-32 bg-background border-b border-border/40">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Data Unified Across Systems
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              ACOs, CINs, and payors operate at the intersection of quality, cost, and coordination
              — but across fragmented data, disconnected providers, and evolving contracts.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground">
              Health Compiler acts as the neutral data activation layer — unifying clinical, claims,
              and quality data into decision-grade intelligence. From MSSP and REACH in the United
              States to emerging value-based models in the Middle East, this is the infrastructure
              modern VBC requires.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors flex flex-col h-full">
              <h3 className="text-xl font-bold mb-4">ACOs & Registries</h3>
              <p className="text-muted-foreground mb-6 grow">
                Unified clinical and claims intelligence for MSSP, REACH, and commercial ACO models.
              </p>
              <Link
                href="/who-we-serve/acos"
                className="text-primary font-medium inline-flex items-center hover:underline mt-auto"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors flex flex-col h-full">
              <h3 className="text-xl font-bold mb-4">Clinically Integrated Networks</h3>
              <p className="text-muted-foreground mb-6 grow">
                Consistent performance measurement across independent member practices.
              </p>
              <Link
                href="/who-we-serve/cins"
                className="text-primary font-medium inline-flex items-center hover:underline mt-auto"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors flex flex-col h-full">
              <h3 className="text-xl font-bold mb-4">Payers & Health Plans</h3>
              <p className="text-muted-foreground mb-6 grow">
                Go beyond claims-only views with earlier visibility into risk, quality, and
                utilization.
              </p>
              <Link
                href="/who-we-serve/payors"
                className="text-primary font-medium inline-flex items-center hover:underline mt-auto"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Card 4 */}
            <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors flex flex-col h-full">
              <h3 className="text-xl font-bold mb-4">Independent Primary Care</h3>
              <p className="text-muted-foreground mb-6 grow">
                Quality reporting, risk visibility, and payer-ready insight.
              </p>
              <Link
                href="/who-we-serve/independent-primary-care"
                className="text-primary font-medium inline-flex items-center hover:underline mt-auto"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 md:py-32 bg-muted/30 border-b border-border/40">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
            From the US to the UAE
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Health Compiler acts as the neutral data activation layer — unifying clinical, claims,
            and quality data into decision-grade intelligence. The platform supports CMS programs
            like MSSP and REACH, and is designed to support global value-based initiatives like
            EJADAH in the UAE.
          </p>
          <p className="text-xl font-semibold text-foreground">
            Same platform. Same rigor. Adapted for local requirements.
          </p>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 md:py-32 bg-background border-b border-border/40">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight">
            What You Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Feature 1 */}
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Unified Data Foundation</h3>
                <p className="text-muted-foreground">
                  Clinical, claims, pharmacy, lab, eligibility, and quality data normalized into one
                  longitudinal view.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">AI-Powered Performance Intelligence</h3>
                <p className="text-muted-foreground">
                  Risk signals, quality measure drift, and utilization anomalies surfaced
                  automatically.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">CMS and Regulatory Reporting</h3>
                <p className="text-muted-foreground">
                  Clean, defensible reports for MSSP, REACH, HEDIS, Stars, MIPS, and commercial
                  contracts.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Network-Wide Visibility</h3>
                <p className="text-muted-foreground">
                  Performance by provider, attribution analysis, and quality vs. cost trends across
                  the network.
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
            Power Value-Based Performance From One Platform
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Unify clinical, claims, and quality data into decision-grade intelligence for ACOs,
            networks, payers, and global VBC programs.
          </p>
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="/contact">
              Talk to Health Compiler <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
