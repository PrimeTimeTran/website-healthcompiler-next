'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Target, Code2, Heart, Handshake } from 'lucide-react'

import { Button } from '@/components/ui/button'
import mehulPhoto from '@/assets/mehul-agarwal.png'
import santoshPhoto from '@/assets/santosh-pujari.png'
import burhanPhoto from '@/assets/burhan-mithaiwala.png'

const leadershipTeam = [
  {
    name: 'Mehul Agarwal',
    role: 'Business, Product, Marketing',
    photo: mehulPhoto,
  },
  {
    name: 'Santosh Pujari',
    role: 'Data, Engineering, Tech',
    photo: santoshPhoto,
  },
  {
    name: 'Burhan Mithaiwala',
    role: 'Product, Customer Success',
    photo: burhanPhoto,
  },
]

const teamMembers = [
  'Santosh Pujari',
  'Burhan Mithaiwala',
  'Anuj Jain',
  'Sanket Pande',
  'Mahesh Meena',
  'Kumar Anunay',
  'Rahul Kharche',
  'Sukanya Ladi',
  'Pradnya Mahabale',
  'Diksha Munot',
  'Arya Uplap',
  'Shagun Patwa',
  'Noopur Saligram',
  'Nimish Chougule',
  'Dnyaneshwar Bhosle',
  'Vivek Singh',
]

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We simplify healthcare data so teams can focus on delivering quality care.',
  },
  {
    icon: Code2,
    title: 'Engineering Excellence',
    description:
      'Every solution is built with robust architecture, clean code, and best practices.',
  },
  {
    icon: Heart,
    title: 'Healthcare Expertise',
    description: 'Deep domain knowledge in healthcare workflows, compliance, and data standards.',
  },
  {
    icon: Handshake,
    title: 'Long-term Partnership',
    description: 'We build scalable solutions designed to grow with your organization.',
  },
]

const About = () => {
  return (
    <>
      {/* Why We Exist */}
      <section className="py-20 md:py-32 bg-linear-to-b from-background to-muted/20 border-b border-border/40">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-8 tracking-tight">
              Why We Exist
            </h1>
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
              <p>
                Healthcare is built by people who care deeply about doing the right thing.
                Clinicians, operators, and teams make important decisions every day that affect real
                lives.
              </p>
              <p>Too often, the systems meant to support those decisions fall short.</p>
              <p>
                Data is everywhere, but clarity is not. Information is fragmented across tools,
                workflows, and formats, making it harder than it should be to see what matters and
                act with confidence.
              </p>
              <p className="font-medium text-foreground text-2xl mt-8">
                Health Compiler exists to change that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We’re Building */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                What We’re Building
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We build AI-powered healthcare infrastructure that turns fragmented data into
                  clear, confident decisions, inside real workflows, where care actually happens.
                </p>
                <p>
                  Our systems are designed for how healthcare truly works. Messy data. Multiple
                  systems. Real people operating under real constraints.
                </p>
                <p>
                  Our vision is straightforward: a healthcare system where data reduces complexity
                  instead of adding to it. Where care teams feel supported, not overwhelmed. Where
                  better information leads to better care.
                </p>
                <p>
                  We are building toward that future deliberately, one workflow and one decision at
                  a time.
                </p>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              {/* Visual abstraction of building/infrastructure */}
              <div className="aspect-square bg-muted/30 rounded-4xl border border-border p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5" />
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm relative z-10">
                  <div className="bg-card p-6 rounded-2xl shadow-lg border border-border/50 flex flex-col items-center text-center animate-fade-in-up [animation-delay:0ms]">
                    <Target className="w-8 h-8 text-primary mb-3" />
                    <span className="font-semibold text-sm">Clear Decisions</span>
                  </div>
                  <div className="bg-card p-6 rounded-2xl shadow-lg border border-border/50 flex flex-col items-center text-center animate-fade-in-up [animation-delay:100ms] mt-8">
                    <Code2 className="w-8 h-8 text-accent mb-3" />
                    <span className="font-semibold text-sm">Robust Infra</span>
                  </div>
                  <div className="bg-card p-6 rounded-2xl shadow-lg border border-border/50 flex flex-col items-center text-center animate-fade-in-up [animation-delay:200ms] -mt-8">
                    <Heart className="w-8 h-8 text-red-500 mb-3" />
                    <span className="font-semibold text-sm">Better Care</span>
                  </div>
                  <div className="bg-card p-6 rounded-2xl shadow-lg border border-border/50 flex flex-col items-center text-center animate-fade-in-up [animation-delay:300ms]">
                    <Handshake className="w-8 h-8 text-blue-500 mb-3" />
                    <span className="font-semibold text-sm">Real Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 md:py-32 bg-muted/30 border-y border-border/40">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Leadership
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Guided by deep experience in healthcare, technology, and product building.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {leadershipTeam.map((leader) => (
              <div
                key={leader.name}
                className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group border border-border/50"
              >
                <div className="aspect-4/5 bg-muted relative overflow-hidden">
                  <Image
                    src={leader.photo}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-primary font-medium text-sm">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F5E6E0]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 tracking-tight">
              What <span className="text-primary">Drives Us</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our values shape every project we take on and every solution we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/20"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <div className="rounded-xl overflow-hidden shadow-lg border border-border/30">
                <video
                  controls
                  poster="https://irp.cdn-website.com/c9f7398c/dms3rep/multi/GPIwi8FgRgyjPBVfuyoF_Health+Compiler-4K.v2.0000000.jpg"
                  className="w-full aspect-video object-cover"
                >
                  <source
                    src="https://vid.cdn-website.com/c9f7398c/videos/GPIwi8FgRgyjPBVfuyoF_Health+Compiler-4K-v.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 tracking-tight">
                What Our User Say
              </h2>
              <div className="relative pl-5 border-l-4 border-primary/30">
                <blockquote className="text-base md:text-lg text-muted-foreground italic leading-relaxed">
                  Before Health Compiler, compiling these metrics was a manual and time-consuming
                  process. Now, everything is captured automatically, and employers can access a
                  dashboard with these metrics anytime.
                </blockquote>
                <div className="mt-5">
                  <p className="font-display font-semibold text-foreground">Dr. Ken Rictor</p>
                  <p className="text-muted-foreground text-sm">Genovo Health</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F5E6E0]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div
              className="rounded-xl overflow-hidden shadow-md bg-card border border-border/30"
              style={{ minHeight: '550px' }}
            >
              <iframe
                src="https://cal.com/mehulhc/30min?embed=true&theme=light"
                width="100%"
                height="550"
                frameBorder="0"
                className="w-full"
                title="Schedule a meeting with Mehul Agarwal"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-10 tracking-tight">
            Built by the Best
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 max-w-4xl">
            {teamMembers.map((name) => (
              <div key={name} className="flex items-center gap-3 py-1">
                <div className="w-9 h-9 rounded-full bg-linear-to-br from-primary/25 to-primary/10 flex items-center justify-center text-foreground font-medium text-xs shrink-0 border border-primary/10">
                  {name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <span className="text-foreground text-sm font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F5E6E0]">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-5 tracking-tight leading-snug">
              Let Health Compiler do the heavy lifting, so you can focus on what you do best —
              providing exceptional Direct Care
            </h2>
            <p className="text-muted-foreground mb-3">
              Unveil the value of your services and free yourself from the manual effort of
              reporting
            </p>
            <p className="text-muted-foreground mb-8">
              Ready to enhance your practice&apos;s efficiency and growth? Connect with us today.
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact" className="gap-2">
                Schedule a demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
