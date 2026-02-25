'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { DAPFlowSection } from '@/components/platform/DAPFlowSection'
import {
  Bot,
  Zap,
  Plug,
  Brain,
  Users,
  Shield,
  Layers,
  Network,
  FileText,
  Database,
  Activity,
  Building2,
  BarChart3,
  ArrowRight,
  TrendingUp,
  Stethoscope,
  CheckCircle2,
  LayoutDashboard,
} from 'lucide-react'

const capabilityCards = [
  {
    icon: Building2,
    title: 'Employer Intelligence',
    bullets: [
      'Total cost & PMPM visibility',
      'Utilization & leakage analysis',
      'Engagement & outcome tracking',
      'Stop-loss & risk insights',
    ],
    footer: 'Built for employers, advisors, and captives seeking clarity.',
  },
  {
    icon: TrendingUp,
    title: 'Measurable Outcomes',
    bullets: [
      'Gap-in-care visibility',
      'Preventive & chronic tracking',
      'Quality measures over time',
      'Outcome-based reporting',
    ],
    footer: 'Turn care delivery into measurable progress.',
  },
  {
    icon: Network,
    title: 'Network Intelligence',
    bullets: [
      'Multi-EHR data unification',
      'Attribution & population views',
      'Practice-level performance',
      'CIN & ACO readiness',
    ],
    footer: 'Designed for fragmented networks operating as one.',
  },
  {
    icon: Activity,
    title: 'Care Operations',
    bullets: [
      'Utilization patterns',
      'Referral & access signals',
      'Care coordination insights',
      'Real-time operational awareness',
    ],
    footer: 'See issues early — not after the quarter closes.',
  },
  {
    icon: Brain,
    title: 'AI-Driven Intelligence',
    bullets: [
      'Pattern detection across datasets',
      'Automated insights & alerts',
      'Cohort analysis at scale',
      'Decision support workflows',
    ],
    footer: 'AI that augments judgment — not replaces it.',
  },
  {
    icon: Plug,
    title: 'Built to Integrate',
    bullets: [
      'Custom data pipelines',
      'EHR, claims, labs, wearables, HRIS',
      'CRM & workflow integrations',
      'Purpose-built analytics',
    ],
    footer: 'We adapt to your ecosystem.',
  },
]

const Infera = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Meet <span className="text-primary">Infera</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-foreground mb-4">
              The AI-powered data platform built for healthcare
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Infera brings healthcare data, analytics, and automation into one place. It helps
              self-funded employers, direct care practices, and value-based organizations turn data
              into action.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="xl"
                asChild
                className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/20"
              >
                <Link href="/book-a-demo">
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* One Clear View of Your Data */}
      <section className="py-20 md:py-32 bg-slate-50 border-y border-border/40">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                One Clear View of Your Data
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Healthcare data is often spread across systems and hard to use. Infera connects it
                into one clear view so teams can see risks, track care, and manage cost.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p className="text-lg">No rigid workflows.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p className="text-lg">No extra tools to manage.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p className="text-lg font-medium text-foreground">
                    Just data that works for you.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Abstract Data Unification Visual */}
              <div className="aspect-square md:aspect-video rounded-4xl bg-card border border-border p-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5" />

                {/* Center Core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-background rounded-full border-4 border-primary/20 flex items-center justify-center z-10 shadow-lg">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary animate-pulse">
                    <Database className="h-10 w-10" />
                  </div>
                </div>

                {/* Orbiting Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-dashed border-border rounded-full animate-[spin-slow_20s_linear_infinite]" />

                {/* Floating Cards */}
                <div className="absolute top-[20%] left-[20%] bg-card p-3 rounded-xl shadow-lg border border-border animate-float [animation-delay:0s]">
                  <Activity className="h-6 w-6 text-accent" />
                </div>
                <div className="absolute bottom-[20%] right-[20%] bg-card p-3 rounded-xl shadow-lg border border-border animate-float [animation-delay:1.5s]">
                  <Users className="h-6 w-6 text-blue-500" />
                </div>
                <div className="absolute top-[30%] right-[15%] bg-card p-3 rounded-xl shadow-lg border border-border animate-float [animation-delay:0.8s]">
                  <BarChart3 className="h-6 w-6 text-green-500" />
                </div>
                <div className="absolute bottom-[30%] left-[15%] bg-card p-3 rounded-xl shadow-lg border border-border animate-float [animation-delay:2.2s]">
                  <Shield className="h-6 w-6 text-purple-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DAPFlowSection />

      {/* What You Can Do with Infera */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              What You Can Do with Infera
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful capabilities to drive your organization forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {[
              {
                title: 'Comprehensive Analytics',
                description:
                  'See cost, utilization, employer analytics, and quality measures clearly.',
                icon: BarChart3,
                color: 'text-blue-500',
                bg: 'bg-blue-500/10',
              },
              {
                title: 'Quality & Outcomes',
                description: 'Track MIPS, care gaps, and patient outcomes.',
                icon: Activity,
                color: 'text-green-500',
                bg: 'bg-green-500/10',
              },
              {
                title: 'Performance Monitoring',
                description: 'Monitor engagement, patient touch points, and DPC performance.',
                icon: LayoutDashboard,
                color: 'text-purple-500',
                bg: 'bg-purple-500/10',
              },
              {
                title: 'Network Management',
                description: 'Manage populations and care networks.',
                icon: Users,
                color: 'text-orange-500',
                bg: 'bg-orange-500/10',
              },
              {
                title: 'Intelligent Workflows',
                description: 'Use AI for alerts, workflows, and outreach.',
                icon: Zap,
                color: 'text-yellow-500',
                bg: 'bg-yellow-500/10',
              },
              {
                title: 'AI Automation',
                description: 'AI agents that answer, triage, and route patient calls.',
                icon: Bot,
                color: 'text-pink-500',
                bg: 'bg-pink-500/10',
              },
              {
                title: 'Reporting & CRM',
                description: 'Support reporting, analytics, and CRM needs.',
                icon: FileText,
                color: 'text-indigo-500',
                bg: 'bg-indigo-500/10',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className={`bg-card p-8 rounded-3xl border border-border/50 hover:shadow-lg transition-all hover:-translate-y-1 group ${
                  i === 6 ? 'lg:col-start-2' : ''
                }`}
              >
                <div
                  className={`h-12 w-12 ${feature.bg} rounded-xl flex items-center justify-center ${feature.color} mb-6 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built to Fit Your Systems */}
      <section className="py-20 md:py-32 bg-slate-50 border-y border-border/40">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Built to Fit Your Systems
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Works with EHRs, claims, labs, HRIS, and CRM tools.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-card p-8 rounded-3xl border border-border/50 flex flex-col items-center">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Secure & Compliant</h3>
              <p className="text-muted-foreground">
                Secure, HIPAA-compliant, and SOC 2 Type II certified.
              </p>
            </div>
            <div className="bg-card p-8 rounded-3xl border border-border/50 flex flex-col items-center">
              <Layers className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Seamless Integration</h3>
              <p className="text-muted-foreground">Connects with your existing tech stack.</p>
            </div>
          </div>

          <Button variant="outline" size="lg" asChild className="rounded-full px-8 h-12 text-base">
            <Link href="/platform/integration">
              Explore our integrations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#1a1a2e 1px, transparent 1px), linear-gradient(90deg, #1a1a2e 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-14">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Core Analytics Capabilities
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to transform healthcare data into actionable intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilityCards.map((card, index) => (
              <div
                key={index}
                className="group p-6 bg-white border border-border/50 rounded-2xl hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-lg text-foreground mb-3">{card.title}</h4>
                <ul className="space-y-2 mb-4">
                  {card.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary/50 mt-2 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground/80 italic border-t border-border/30 pt-3">
                  {card.footer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built For */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Built For</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Self-funded Employers', icon: Building2 },
              { title: 'Direct Care Practices', icon: Stethoscope },
              { title: 'Value-based & ACOs', icon: Activity },
              { title: 'Level-funded Plans', icon: Layers },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-card hover:bg-muted/30 transition-colors p-8 rounded-3xl border border-border/50 flex flex-col items-center text-center group"
              >
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-lg md:text-xl">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Turn insight into action */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-foreground text-background rounded-[3rem] p-12 md:p-24 text-center border border-border relative overflow-hidden isolate">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10 mix-blend-screen" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-white">
                Turn insight into action
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Whether you’re a small practice or a large organization, Infera adapts to your
                needs.
              </p>
              <p className="text-lg text-gray-400 mb-12">
                Want to see how it can support your organization? Let’s figure it out together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button
                  size="xl"
                  asChild
                  className="h-16 px-10 text-lg rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all shadow-xl shadow-primary/20"
                >
                  <Link href="/book-a-demo">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Infera
