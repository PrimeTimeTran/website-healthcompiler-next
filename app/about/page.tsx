'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, Users, Target, Shield, Zap } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { GridSection } from '@/components/ui/GridSection'

import focusPatients from '@/assets/svgs/focus-patients.svg'
import medicalResearch from '@/assets/svgs/medical-research.svg'
import medicalProfessionals from '@/assets/svgs/medical-professionals.svg'

const values = [
  {
    icon: Shield,
    title: 'Uncompromising Integrity',
    description:
      'We hold ourselves to the highest ethical standards. Data privacy and security are not just features—they are promises we keep.',
  },
  {
    icon: Users,
    title: 'Patient-Centered Impact',
    description:
      'Technology exists to serve people. We measure our success by the lives improved and the care outcomes delivered.',
  },
  {
    icon: Target,
    title: 'Precision & Quality',
    description:
      'In healthcare, details matter. We build robust, reliable systems designed to perform flawlessly when it counts most.',
  },
  {
    icon: Zap,
    title: 'Continuous Innovation',
    description:
      "We are constantly pushing boundaries to solve complex problems, turning today's challenges into tomorrow's solutions.",
  },
]

const teamMembers = [
  { name: 'Lorem Ipsum', role: 'Chief Executive Officer' },
  { name: 'Dolor Sit', role: 'Chief Technology Officer' },
  { name: 'Amet Consectetur', role: 'Head of Product' },
  { name: 'Adipiscing Elit', role: 'Lead Engineer' },
  { name: 'Sed Do', role: 'Product Designer' },
  { name: 'Eiusmod Tempor', role: 'Marketing Manager' },
  { name: 'Incididunt Ut', role: 'Sales Director' },
  { name: 'Labore Et', role: 'Customer Success' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <GridSection>
        <div className="container mx-auto px-6 py-20 md:py-32 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-tight">
              We are building the future of <span className="text-primary">healthcare data</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Health Compiler exists to simplify the complex. We connect systems, structure data,
              and deliver clarity so that healthcare works better for everyone.
            </p>
          </div>
        </div>
      </GridSection>
      {/* Empowering Professionals */}
      <section className="py-20 md:py-32 bg-muted/30 border-b border-border/40">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative order-last lg:order-first">
              <div className="aspect-square md:aspect-4/3 rounded-3xl bg-background overflow-hidden border border-border shadow-xl relative">
                <Image
                  src={medicalProfessionals}
                  alt="Medical Professionals"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-full -z-10" />
            </div>
            <div className="space-y-8">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
                Empowering Care Teams
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  To provide the best care, clinicians need the full picture. Our platform ensures
                  medical professionals have instant access to comprehensive patient history,
                  real-time health metrics, and longitudinal outcome data.
                </p>
                <p>
                  We streamline the flow of information so care teams can make evidence-based
                  decisions quickly, track treatment effectiveness, and focus their energy where it
                  matters most: with the patient.
                </p>
                <div className="flex flex-col gap-3 pt-4">
                  {[
                    'Complete Patient History',
                    'Longitudinal Outcome Tracking',
                    'Evidence-Based Decision Support',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Medical Research */}
      <section className="py-20 md:py-32 bg-background border-b border-border/40">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
                Accelerating Medical Discovery
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Unlock the power of aggregate health data. We structure and standardize messy
                  healthcare information into research-ready datasets. From identifying population
                  health trends to accelerating clinical trials, our platform bridges the gap
                  between raw data and life-saving discoveries.
                </p>
                <div className="flex flex-col gap-3 pt-4">
                  {[
                    'Standardized Data Models',
                    'Population Health Analytics',
                    'Research-Ready Cohorts',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square md:aspect-4/3 rounded-3xl bg-muted overflow-hidden border border-border shadow-xl relative">
                <Image src={medicalResearch} alt="Medical Research" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>
      {/* Focus on Patients */}
      <section className="py-20 md:py-32 bg-background border-b border-border/40">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
                Focus on Patients, Not Paperwork
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  The healthcare experience should be seamless and personal. By connecting disparate
                  data sources, we create a unified view of the patient journey. This ensures that
                  every interaction is informed, personalized, and focused on better health
                  outcomes.
                </p>
                <div className="flex flex-col gap-3 pt-4">
                  {[
                    'Unified Patient View',
                    'Personalized Care Plans',
                    'Seamless Interoperability',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square md:aspect-4/3 rounded-3xl bg-muted overflow-hidden border border-border shadow-xl relative">
                <Image src={focusPatients} alt="Focus on Patients" fill className="object-cover" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground">
              Our principles guide every decision we make, ensuring we build a future where data
              empowers better health for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* Timeline Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              From a simple idea to a platform transforming healthcare, here&apos;s how we got here.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border/60" />

            <div className="space-y-12">
              {[
                {
                  year: '2020',
                  title: 'The Inception',
                  description:
                    'Founded with a mission to bridge the gap between fragmented healthcare data and actionable insights.',
                },
                {
                  year: '2021',
                  title: 'First Major Integration',
                  description:
                    'Launched our first seamless EHR integration, proving that interoperability is not just a dream but a reality.',
                },
                {
                  year: '2022',
                  title: 'Scaling Impact',
                  description:
                    'Expanded to support over 50 clinics, processing millions of data points to improve patient outcomes.',
                },
                {
                  year: '2023',
                  title: 'AI-Powered Analytics',
                  description:
                    'Introduced advanced machine learning models to predict health trends and personalize care plans.',
                },
                {
                  year: '2024',
                  title: 'National Recognition',
                  description:
                    'Partnered with major health networks, solidifying our position as a leader in healthcare data infrastructure.',
                },
              ].map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center justify-between ${
                    index % 2 === 0 ? 'flex-row-reverse' : ''
                  }`}
                >
                  {/* Empty half for alignment */}
                  <div className="w-5/12" />

                  {/* Center Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-xs z-10" />

                  {/* Content */}
                  <div className="w-5/12 bg-card p-6 rounded-2xl border border-border/50 shadow-xs hover:shadow-md transition-all duration-300">
                    <span className="text-primary font-bold text-lg block mb-2">{item.year}</span>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              A Team of Experts, United by Purpose
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 50 years of combined experience across Medical Imaging, DME, Health Data,
              and Enterprise Software, our team brings unparalleled expertise to the table. We
              don&apos;t just understand healthcare; we&apos;ve built the systems that power it.
              From complex integrations to AI-driven insights, we do it all with precision and
              passion.
            </p>
          </div>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="aspect-square rounded-2xl bg-muted mb-4 overflow-hidden relative">
                  <div className="w-full h-full bg-linear-to-b from-muted to-muted/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <Users className="w-12 h-12 text-muted-foreground/30" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-display text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
        <div className="absolute inset-0 bg-linear-to-r from-primary via-primary to-primary-foreground/10 opacity-20" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 tracking-tight max-w-2xl mx-auto">
            Ready to transform your healthcare data?
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Are you a healthcare provider wanting to streamline operations, improve patient
            outcomes, and unlock the true value of your data? Let&apos;s build the future of care
            together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-primary font-bold h-12 px-8"
              asChild
            >
              <Link href="/contact">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
