'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  Users,
  FileText,
  Activity,
  MessageSquare,
  Phone,
  Shield,
  CheckCircle2,
  Layers,
  Database,
  Lock,
  Stethoscope,
} from 'lucide-react'

import { HeroSectionAlt } from '@/components/home/HeroSectionAlt'
import { Button } from '@/components/ui/button'

const Home = () => {
  return (
    <>
      <Suspense
        fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}
      >
        <HeroSectionAlt />

        {/* Section 1: One Platform. Many Solutions. */}
        <section className="py-20 md:py-32 bg-linear-to-b from-background to-muted/20 border-b border-border/40">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                One Platform. Many Solutions.
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Analytics, reporting, automation, engagement, and quality insights in one connected
                platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Analytics */}
              <div className="bg-card rounded-3xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                <div className="h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary relative z-10">
                  <BarChart3 className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Analytics</h3>
                <p className="text-muted-foreground mb-8">
                  Turn data into clear, actionable insight.
                </p>
                <ul className="space-y-6">
                  <li>
                    <Link
                      href="/who-we-serve/employer-analytics"
                      className="group/link flex flex-col space-y-1"
                    >
                      <div className="flex items-center justify-between text-base font-semibold group-hover/link:text-primary transition-colors">
                        <span>Employer Analytics</span>
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        See cost, utilization, and performance trends
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/solutions/health-outcomes"
                      className="group/link flex flex-col space-y-1"
                    >
                      <div className="flex items-center justify-between text-base font-semibold group-hover/link:text-primary transition-colors">
                        <span>Health Outcomes</span>
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Track clinical and population outcomes
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/surveys" className="group/link flex flex-col space-y-1">
                      <div className="flex items-center justify-between text-base font-semibold group-hover/link:text-primary transition-colors">
                        <span>Surveys</span>
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Capture patient and employer feedback at scale
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Patient Engagement */}
              <div className="bg-card rounded-3xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                <div className="h-14 w-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 text-accent relative z-10">
                  <MessageSquare className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Patient Engagement</h3>
                <p className="text-muted-foreground mb-8">
                  Automate communication and strengthen patient relationships.
                </p>
                <ul className="space-y-6">
                  <li>
                    <Link
                      href="/solutions/ai-receptionist"
                      className="group/link flex flex-col space-y-1"
                    >
                      <div className="flex items-center justify-between text-base font-semibold group-hover/link:text-primary transition-colors">
                        <span>AI Receptionist</span>
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Never miss a patient call or message
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ai-call-triaging" className="group/link flex flex-col space-y-1">
                      <div className="flex items-center justify-between text-base font-semibold group-hover/link:text-primary transition-colors">
                        <span>AI Call Triaging</span>
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Route patients to the right care quickly
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/marketing-automation"
                      className="group/link flex flex-col space-y-1"
                    >
                      <div className="flex items-center justify-between text-base font-semibold group-hover/link:text-primary transition-colors">
                        <span>Marketing Automation</span>
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Engage patients with timely, relevant outreach
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Value-Based Care */}
              <div className="bg-card rounded-3xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/30 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                <div className="h-14 w-14 bg-secondary/50 rounded-2xl flex items-center justify-center mb-8 text-foreground relative z-10">
                  <Activity className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Value-Based Care</h3>
                <p className="text-muted-foreground mb-8">
                  Stay ahead on quality and risk performance.
                </p>
                <ul className="space-y-6">
                  <li>
                    <Link
                      href="/solutions/hcc-suspecting"
                      className="group/link flex flex-col space-y-1"
                    >
                      <div className="flex items-center justify-between text-base font-semibold group-hover/link:text-primary transition-colors">
                        <span>HCC Suspecting</span>
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Identify coding opportunities and risk gaps
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/hedis" className="group/link flex flex-col space-y-1">
                      <div className="flex items-center justify-between text-base font-semibold group-hover/link:text-primary transition-colors">
                        <span>HEDIS</span>
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Monitor and improve quality measures
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/mips" className="group/link flex flex-col space-y-1">
                      <div className="flex items-center justify-between text-base font-semibold group-hover/link:text-primary transition-colors">
                        <span>MIPS</span>
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Simplify reporting and performance tracking
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Signals That Matter */}
        <section className="py-20 md:py-32 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
          <div className="container mx-auto px-6 max-w-7xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                  Signals That Matter
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  We highlight what has changed and what needs attention.
                </p>
                <div className="space-y-6 mb-10">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 h-6 w-6 rounded-full bg-success/10 flex items-center justify-center text-success shrink-0">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <p className="text-lg font-medium">
                      See engagement, utilization, patient touch ratio, and quality measures in one
                      view.
                    </p>
                  </div>
                </div>
                <Button
                  size="xl"
                  asChild
                  className="h-16 px-10 text-lg rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all shadow-xl shadow-primary/20"
                >
                  <Link href="/book-a-demo">
                    Explore solutions
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                {/* Abstract visual representation of signals */}
                <div className="aspect-square md:aspect-video rounded-[2rem] bg-muted/30 border border-border p-8 flex items-center justify-center relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background opacity-50" />

                  {/* Decorative Elements */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent animate-pulse-slow" />

                  <div className="grid grid-cols-2 gap-6 w-full max-w-md relative z-10">
                    <div className="bg-card p-6 rounded-2xl shadow-xl border border-border/50 animate-fade-in-up [animation-delay:0ms] hover:-translate-y-1 transition-transform duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <Activity className="text-accent h-6 w-6" />
                        <span className="text-xs font-bold bg-accent/10 text-accent px-2.5 py-1 rounded-full">
                          +12%
                        </span>
                      </div>
                      <div className="text-3xl font-bold mb-1">94.2%</div>
                      <div className="text-sm text-muted-foreground font-medium">
                        Engagement Rate
                      </div>
                    </div>
                    <div className="bg-card p-6 rounded-2xl shadow-xl border border-border/50 animate-fade-in-up [animation-delay:150ms] mt-8 hover:-translate-y-1 transition-transform duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <Users className="text-primary h-6 w-6" />
                        <span className="text-xs font-bold bg-primary/10 text-primary-foreground px-2.5 py-1 rounded-full">
                          High
                        </span>
                      </div>
                      <div className="text-3xl font-bold mb-1">1,240</div>
                      <div className="text-sm text-muted-foreground font-medium">
                        Active Patients
                      </div>
                    </div>
                    <div className="bg-card p-6 rounded-2xl shadow-xl border border-border/50 animate-fade-in-up [animation-delay:300ms] -mt-8 hover:-translate-y-1 transition-transform duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <BarChart3 className="text-secondary-foreground h-6 w-6" />
                        <span className="text-xs font-bold bg-muted text-muted-foreground px-2.5 py-1 rounded-full">
                          Stable
                        </span>
                      </div>
                      <div className="text-3xl font-bold mb-1">$450</div>
                      <div className="text-sm text-muted-foreground font-medium">
                        Avg. Cost PMPM
                      </div>
                    </div>
                    <div className="bg-card p-6 rounded-2xl shadow-xl border border-border/50 animate-fade-in-up [animation-delay:450ms] hover:-translate-y-1 transition-transform duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <Phone className="text-success h-6 w-6" />
                        <span className="text-xs font-bold bg-success/10 text-success px-2.5 py-1 rounded-full">
                          New
                        </span>
                      </div>
                      <div className="text-3xl font-bold mb-1">4.8/5</div>
                      <div className="text-sm text-muted-foreground font-medium">
                        Patient Satisfaction
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: One Clear Record */}
        <section className="py-20 md:py-32 bg-linear-to-b from-background to-muted/20 border-y border-border/40 overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="order-2 lg:order-1 relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[500px] aspect-square">
                  {/* Background Circles */}
                  <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin-slow_20s_linear_infinite]" />
                  <div className="absolute inset-[15%] rounded-full border border-accent/20 animate-[spin-reverse_15s_linear_infinite]" />
                  <div className="absolute inset-[30%] rounded-full border border-secondary-foreground/10" />

                  {/* Central Card */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-card/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-border/50 w-[320px] relative z-20">
                      <div className="flex items-center space-x-4 mb-8">
                        <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                          JD
                        </div>
                        <div>
                          <div className="font-bold text-lg">John Doe</div>
                          <div className="text-sm text-muted-foreground font-medium">
                            Patient ID: #84920
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4 mb-8">
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs font-medium text-muted-foreground">
                            <span>Risk Score</span>
                            <span>High</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-destructive w-[85%] rounded-full" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs font-medium text-muted-foreground">
                            <span>Adherence</span>
                            <span>Good</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-success w-[70%] rounded-full" />
                          </div>
                        </div>
                      </div>
                      <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="h-10 w-10 rounded-full bg-background border-2 border-card flex items-center justify-center text-xs font-bold text-muted-foreground shadow-sm"
                          >
                            {i}
                          </div>
                        ))}
                        <div className="h-10 px-3 rounded-full bg-primary/10 border-2 border-card flex items-center justify-center text-xs font-bold text-primary shadow-sm z-10">
                          +5
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating icons representing data sources */}
                  <div className="absolute top-[10%] left-[50%] bg-white p-4 rounded-2xl shadow-xl animate-float [animation-delay:0s] z-10">
                    <FileText className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="absolute bottom-[20%] left-[10%] bg-white p-4 rounded-2xl shadow-xl animate-float [animation-delay:1.5s] z-10">
                    <Stethoscope className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="absolute top-[40%] right-[5%] bg-white p-4 rounded-2xl shadow-xl animate-float [animation-delay:0.8s] z-10">
                    <Database className="h-6 w-6 text-purple-500" />
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                  One Clear Record
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Healthcare data is spread across EHRs, claims, labs, pharmacy, and engagement
                  tools. Health Compiler brings it together into one clear, longitudinal record for
                  every patient.
                </p>
                <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
                  <p className="text-lg font-semibold mb-6">
                    We handle the data work for you, no manual effort from your team. So teams can:
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Understand performance',
                      'Spot risks early',
                      'Track outcomes',
                      'Monitor quality measures',
                      'Report with confidence',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center space-x-3 text-muted-foreground">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        </div>
                        <span className="font-medium text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Secure and Connected */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                Secure and Connected
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Built with the highest standards of security and interoperability in mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
              <div className="flex flex-col items-center p-8 bg-card rounded-3xl border border-border/50 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">HIPAA-compliant</h3>
                <p className="text-center text-muted-foreground">
                  Full compliance with healthcare data privacy regulations and standards.
                </p>
              </div>
              <div className="flex flex-col items-center p-8 bg-card rounded-3xl border border-border/50 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="h-16 w-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent">
                  <Lock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">SOC-aligned</h3>
                <p className="text-center text-muted-foreground">
                  Rigorous security controls, monitoring, and audit processes.
                </p>
              </div>
              <div className="flex flex-col items-center p-8 bg-card rounded-3xl border border-border/50 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="h-16 w-16 bg-secondary/50 rounded-2xl flex items-center justify-center mb-6 text-foreground">
                  <Layers className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Secure by design</h3>
                <p className="text-center text-muted-foreground">
                  End-to-end encryption at rest and in transit for all data.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-muted/50 to-background rounded-[2rem] p-10 md:p-14 max-w-5xl mx-auto border border-border/50 relative overflow-hidden">
              <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/5 to-transparent" />
              <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
                <div className="text-left max-w-xl">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Works with your existing EHRs and workflows
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Seamless integration with major healthcare systems. No need to rip and replace
                    your current tech stack.
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="shrink-0 bg-background hover:bg-muted border-2 px-8 h-12 text-base"
                >
                  <Link href="/platform/integration">
                    Explore All Integrations
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Built for the Healthcare Ecosystem */}
        <section className="py-20 md:py-32 bg-linear-to-b from-background to-muted/20 border-t border-border/40">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                Built for the Healthcare Ecosystem
              </h2>
              <p className="text-xl text-muted-foreground">
                For organizations delivering care, managing risk, and financing care.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  title: 'Primary Care',
                  icon: Stethoscope,
                  color: 'text-blue-500',
                  bg: 'bg-blue-500/10',
                },
                {
                  title: 'Specialty Care',
                  icon: Activity,
                  color: 'text-purple-500',
                  bg: 'bg-purple-500/10',
                },
                {
                  title: 'Care Purchasers',
                  icon: Users,
                  color: 'text-emerald-500',
                  bg: 'bg-emerald-500/10',
                },
                {
                  title: 'Value-Based Care',
                  icon: BarChart3,
                  color: 'text-orange-500',
                  bg: 'bg-orange-500/10',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-card hover:bg-card/80 transition-all duration-300 p-8 rounded-3xl border border-border/50 flex flex-col items-center text-center group hover:-translate-y-2 hover:shadow-lg cursor-default"
                >
                  <div
                    className={`h-16 w-16 ${item.bg} rounded-full flex items-center justify-center ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-lg md:text-xl">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Make your data useful. */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="bg-foreground text-background rounded-[3rem] p-12 md:p-24 text-center border border-border relative overflow-hidden isolate">
              {/* Background Glows */}
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 mix-blend-screen" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10 mix-blend-screen" />

              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight text-white">
                  Make your data useful.
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
                  Improve care, control costs, and show results.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Button
                    size="xl"
                    asChild
                    className="h-16 px-10 text-lg rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all shadow-xl shadow-primary/20"
                  >
                    <Link href="/book-a-demo">
                      Schedule a Call
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Suspense>
    </>
  )
}

export default Home
