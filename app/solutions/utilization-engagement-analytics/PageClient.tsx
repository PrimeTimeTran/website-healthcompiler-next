'use client'

import { CTAButton, GridSection } from '@/components/ui'
import { Activity, Users, BarChart3, CheckCircle } from 'lucide-react'

const UtilizationAnalytics = () => {
  const dataBenefits = [
    'Track utilization trends in real-time',
    'Understand patient engagement patterns',
    'Optimize resource allocation',
    'Identify opportunities for intervention',
  ]
  const personas = [
    {
      icon: Activity,
      title: 'Utilization Metrics',
      description: 'Comprehensive tracking of service usage and capacity',
    },
    {
      icon: Users,
      title: 'Engagement Insights',
      description: 'Deep dive into patient interaction and adherence',
    },
    {
      icon: BarChart3,
      title: 'Performance Dashboards',
      description: 'Visual analytics for better decision making',
    },
  ]

  return (
    <>
      <GridSection>
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1]">
                Maximize Impact with <span className="text-primary">Utilization Analytics</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Gain clear visibility into how your services are being used and how patients are
                engaging with your care.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <CTAButton link="/contact" text="Book a Demo" />
              </div>
            </div>
            {/* Placeholder for visualization */}
            <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden bg-muted/30 border border-border/50 flex items-center justify-center">
              <BarChart3 className="w-24 h-24 text-muted-foreground/20" />
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

export default UtilizationAnalytics
