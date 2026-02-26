'use client'

import Image from 'next/image'
import Link from 'next/link'
import akuteLogo from '@/assets/akute-health-logo.png'
import athenaLogo from '@/assets/logos/athena.png'
import cerboLogo from '@/assets/logos/cerbo.png'
import eclinicalWorksLogo from '@/assets/logos/eclinical-works.png'
import elationLogo from '@/assets/logos/elation.png'
import hintLogo from '@/assets/logos/hint.png'
import manifestRxLogo from '@/assets/logos/manifest-rx.png'
import optimantraLogo from '@/assets/logos/optimantra.png'
import spruceLogo from '@/assets/logos/spruce.png'
import yuzuLogo from '@/assets/logos/yuzu.png'

const integrationLogos = [
  { name: 'Akute', src: akuteLogo },
  { name: 'Athena', src: athenaLogo },
  { name: 'Cerbo', src: cerboLogo },
  { name: 'eClinicalWorks', src: eclinicalWorksLogo },
  { name: 'Elation', src: elationLogo },
  { name: 'Hint', src: hintLogo },
  { name: 'Manifest RX', src: manifestRxLogo },
  { name: 'Optimantra', src: optimantraLogo },
  { name: 'Spruce', src: spruceLogo },
  { name: 'Yuzu', src: yuzuLogo },
]

export const IntegrationLogosSection = () => {
  const firstRow = integrationLogos.slice(0, 5)
  const secondRow = integrationLogos.slice(5)

  return (
    <div className="flex flex-col items-center gap-8 md:gap-12 p-8 bg-muted/30 rounded-2xl border border-border/50">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 w-full">
        {firstRow.map((logo, index) => (
          <div
            key={`row1-${index}`}
            className="h-12 w-32 bg-background rounded-lg flex items-center justify-center p-2 shadow-sm"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={128}
              height={48}
              className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
            <span className="hidden text-muted-foreground font-medium">{logo.name}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 w-full">
        {secondRow.map((logo, index) => (
          <div
            key={`row2-${index}`}
            className="h-12 w-32 bg-background rounded-lg flex items-center justify-center p-2 shadow-sm"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={128}
              height={48}
              className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
            <span className="hidden text-muted-foreground font-medium">{logo.name}</span>
          </div>
        ))}
        <Link
          href="/platform/integration"
          className="h-12 w-32 bg-background rounded-lg flex items-center justify-center p-2 shadow-sm hover:shadow-md transition-all"
        >
          <span className="text-muted-foreground text-sm font-medium">+ More</span>
        </Link>
      </div>
    </div>
  )
}
