'use client'

import { HealthOutcomesHero } from '@/components/health-outcomes/HealthOutcomesHero'
import { MissedBetweenVisits } from '@/components/health-outcomes/MissedBetweenVisits'
import { IoTWearablesSection } from '@/components/health-outcomes/IoTWearablesSection'
import { HowWeImprove } from '@/components/health-outcomes/HowWeImprove'
import { PopulationHealthFeatures } from '@/components/health-outcomes/PopulationHealthFeatures'
import { WhyProactiveCare } from '@/components/health-outcomes/WhyProactiveCare'
import { BuiltForWorkflows } from '@/components/health-outcomes/BuiltForWorkflows'
import { HealthOutcomesCTA } from '@/components/health-outcomes/HealthOutcomesCTA'

const HealthOutcomes = () => {
  return (
    <>
      <HealthOutcomesHero />
      <MissedBetweenVisits />
      <IoTWearablesSection />
      <HowWeImprove />
      <PopulationHealthFeatures />
      <WhyProactiveCare />
      <BuiltForWorkflows />
      <HealthOutcomesCTA />
    </>
  )
}

export default HealthOutcomes
