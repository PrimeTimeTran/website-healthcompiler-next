'use client'

import { SurveysHero } from '@/components/surveys/SurveysHero'
import { WhyFeedbackMissed } from '@/components/surveys/WhyFeedbackMissed'
import { AutomatedSurveys } from '@/components/surveys/AutomatedSurveys'
import { SurveyFeatures } from '@/components/surveys/SurveyFeatures'
import { IntegratedTools } from '@/components/surveys/IntegratedTools'
import { ForwardDeployment } from '@/components/surveys/ForwardDeployment'
import { WhyAutomatedFeedback } from '@/components/surveys/WhyAutomatedFeedback'
import { SurveysCTA } from '@/components/surveys/SurveysCTA'

const Surveys = () => {
  return (
    <>
      <SurveysHero />
      <WhyFeedbackMissed />
      <AutomatedSurveys />
      <SurveyFeatures />
      <IntegratedTools />
      <ForwardDeployment />
      <WhyAutomatedFeedback />
      <SurveysCTA />
    </>
  )
}

export default Surveys
