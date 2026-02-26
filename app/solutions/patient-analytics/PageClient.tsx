'use client'

import { CTAButton, GridSection } from '@/components/ui'
import { HeartPulse, Users, LineChart, CheckCircle } from 'lucide-react'

const PatientAnalytics = () => {
  const dataBenefits = [
    'Identify high-risk patient cohorts',
    'Track health outcomes over time',
    'Personalize care plans with data',
    'Improve patient retention and satisfaction',
  ]
  const personas = [
    {
      icon: HeartPulse,
      title: 'Health Outcomes',
      description: 'Track clinical improvements and health markers',
    },
    {
      icon: Users,
      title: 'Population Health',
      description: 'Analyze trends across your entire patient base',
    },
    {
      icon: LineChart,
      title: 'Predictive Insights',
      description: 'Anticipate patient needs before they arise',
    },
  ]

  return (
    <>
      <GridSection>
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]">
                Transform Care with <span className="text-primary">Patient Analytics</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Unlock the power of your patient data to drive better outcomes and personalized
                care.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <CTAButton link="/contact" text="Book a Demo" />
              </div>
            </div>
            {/* Placeholder for visualization */}
            <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden bg-muted/30 border border-border/50 flex items-center justify-center">
              <LineChart className="w-24 h-24 text-muted-foreground/20" />
            </div>
          </div>
        </div>
      </GridSection>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Benefits</h2>
            <div className="grid gap-6">
              {dataBenefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50"
                >
                  <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PatientAnalytics
