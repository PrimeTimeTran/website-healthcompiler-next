import { Metadata } from 'next'
import HomePage from './home/page'

export const metadata: Metadata = {
  title: 'Healthcare Solutions for DPC | Health Compiler',
  description:
    'Empower your DPC practice with AI-driven analytics & tailored solutions. Enhance patient engagement & optimize care strategies today!',
  alternates: {
    canonical: 'https://marketing.compile.health/',
  },
}

const Index = () => {
  return <HomePage />
}

export default Index
