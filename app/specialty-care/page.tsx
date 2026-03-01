'use client'

import Link from 'next/link'
import { Bot, BarChart3, Megaphone, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GridSection } from '@/components/ui/GridSection'

export default function SpecialtyCarePage() {
  return (
    <>
      {/* Hero Section */}
      <GridSection>
        <div className="container mx-auto px-6 py-20 md:py-32 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-tight">
              Clear Data for <span className="text-primary">Focused Care</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Health Compiler helps specialty and focused care practices track what matters —
              engagement, adherence, and outcomes — without adding operational complexity.
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

      {/* Specialty Care Section */}
      <section className="py-20 md:py-32 bg-background border-b border-border/40">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Specialty Care Generates Rich Data. Now Use It.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Lab trends, visit patterns, adherence signals, outcome trajectories — specialty care
              produces deeply specific patient data. The problem isn't the data. It's that it sits
              in disconnected systems, unconnected to decisions.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground">
              Health Compiler brings it together so teams see the full picture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors flex flex-col h-full">
              <h3 className="text-xl font-bold mb-4">Functional Medicine</h3>
              <p className="text-muted-foreground mb-6 grow">
                Track engagement, lab trends, and outcomes across personalized care plans.
              </p>
              <Link
                href="/who-we-serve/functional-medicine"
                className="text-primary font-medium inline-flex items-center hover:underline mt-auto"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors flex flex-col h-full">
              <h3 className="text-xl font-bold mb-4">Urgent Care</h3>
              <p className="text-muted-foreground mb-6 grow">
                Real-time operational visibility across sites; utilization, and performance unified.
              </p>
              <Link
                href="/who-we-serve/urgent-care"
                className="text-primary font-medium inline-flex items-center hover:underline mt-auto"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors flex flex-col h-full">
              <h3 className="text-xl font-bold mb-4">Pediatrics</h3>
              <p className="text-muted-foreground mb-6 grow">
                Age-appropriate milestone tracking, preventive care gaps, and family engagement.
              </p>
              <Link
                href="/who-we-serve/pediatrics"
                className="text-primary font-medium inline-flex items-center hover:underline mt-auto"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Card 4 */}
            <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors flex flex-col h-full">
              <h3 className="text-xl font-bold mb-4">Medical Weight Loss</h3>
              <p className="text-muted-foreground mb-6 grow">
                Long-term adherence tracking and outcome reporting for sustained programs.
              </p>
              <Link
                href="/who-we-serve/medical-weight-loss"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Feature 1 */}
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">AI-Powered Analytics</h3>
                <p className="text-muted-foreground">
                  Engagement, utilization, and outcome trends across your patient population.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-6">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">AI Agents for Triage</h3>
                <p className="text-muted-foreground">
                  Communication and triage — helping teams stay responsive as volumes grow.
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
                  Lead tracking, patient retention, and steady program growth.
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
            Ready to See How This Fits Your Practice?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect data, care, and outcomes, so your team can focus on what matters most.
          </p>
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="/book-a-demo">
              Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
