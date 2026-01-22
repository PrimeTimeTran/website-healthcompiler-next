'use client'
import { EmployerAnalyticsHero } from '@/components/employer-analytics/EmployerAnalyticsHero'
import { HealthBenefitsLayers } from '@/components/employer-analytics/HealthBenefitsLayers'
import { WorkforceHealthSphere } from '@/components/employer-analytics/WorkforceHealthSphere'
import { HumanCapitalTriangle } from '@/components/employer-analytics/HumanCapitalTriangle'
import { FinancialRiskTimeline } from '@/components/employer-analytics/FinancialRiskTimeline'
import { FiduciaryShield } from '@/components/employer-analytics/FiduciaryShield'
import { DataFoundationPipeline } from '@/components/employer-analytics/DataFoundationPipeline'
import { EmployerAnalyticsCTA } from '@/components/employer-analytics/EmployerAnalyticsCTA'

const EmployerAnalytics = () => {
  return (
    <>
      <EmployerAnalyticsHero />
      <HealthBenefitsLayers />
      <WorkforceHealthSphere />
      <HumanCapitalTriangle />
      <FinancialRiskTimeline />
      <FiduciaryShield />
      <DataFoundationPipeline />
      <EmployerAnalyticsCTA />
    </>
  )
}

export default EmployerAnalytics
