'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Heart, Shield, Zap, Target, Clock, Smile, ArrowRight, Briefcase } from 'lucide-react'

export default function Careers() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-linear-to-b from-background to-muted/20 border-b border-border/40">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-8 tracking-tight">
              Healthcare doesn’t need <span className="text-primary">more tools</span>.
            </h1>
            <p className="text-xl md:text-2xl font-medium text-foreground mb-6">
              It needs people who care about getting the hard things right.
            </p>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              <p>
                At Health Compiler, we work on problems that show up in the real world. Real care,
                real data, and real consequences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Values */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                Built on Trust
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We believe people do their best work when they feel respected, trusted, and
                  supported. So, we design for humans. Inside our systems and inside our teams.
                </p>
                <p>
                  We move with urgency because healthcare depends on it. We test, verify, and take
                  responsibility until things actually work.
                </p>
                <p className="font-medium text-foreground">
                  If you want to build infrastructure that simplifies healthcare, supports care
                  teams, and leads to better outcomes, you’ll fit in here.
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-xl">Ownership over handoffs.</h3>
                </div>
                <p className="text-muted-foreground">
                  We take end-to-end responsibility for outcomes, not just tasks.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-xl">Outcomes over optics.</h3>
                </div>
                <p className="text-muted-foreground">
                  We focus on real results that matter to patients and providers.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary/50 rounded-xl flex items-center justify-center text-foreground">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-xl">Integrity over shortcuts.</h3>
                </div>
                <p className="text-muted-foreground">
                  We do the right thing, even when it&apos;s harder or takes longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Designed for People */}
      <section className="py-20 md:py-32 bg-muted/30 border-y border-border/40">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Designed for People, Not Just Output
            </h2>
            <p className="text-xl text-muted-foreground">
              Join us and help simplify healthcare through data and better decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center p-6">
              <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center shadow-sm mb-6 text-primary">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-3">Take time off</h3>
              <p className="text-muted-foreground">Rest and recharge to do your best work.</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center shadow-sm mb-6 text-accent">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-3">Work flexibly</h3>
              <p className="text-muted-foreground">
                Balance work with life in a way that works for you.
              </p>
            </div>
            <div className="flex flex-col items-center p-6">
              <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center shadow-sm mb-6 text-secondary-foreground">
                <Smile className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-3">Be recognized</h3>
              <p className="text-muted-foreground">For meaningful work that impacts real lives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Briefcase className="h-4 w-4" />
              Open Roles
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">
              Join the Team
            </h2>

            <div className="bg-muted/20 rounded-3xl p-12 border border-border dashed">
              <p className="text-xl text-muted-foreground mb-2">
                We don’t have any open roles right now.
              </p>
              <p className="text-muted-foreground">
                If our work speaks to you, this is a good place to check back.
              </p>
            </div>

            <div className="mt-12">
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">
                  Learn more about us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
