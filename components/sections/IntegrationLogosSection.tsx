'use client'

import Image from 'next/image'
import Link from 'next/link'
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
  // { name: 'Akute', src: akuteLogo },
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

export const IntegrationLogosSection = ({ className }: { className?: string }) => {
  const logosContent = (
    <>
      {integrationLogos.map((logo, index) => (
        <Image
          key={index}
          src={logo.src}
          alt={logo.name}
          width={180}
          height={80}
          className="max-h-full max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
        />
      ))}
      <Link
        href="/platform/integration"
        className="shrink-0 h-14 w-32 bg-background rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-all border border-border/40"
      >
        <span className="text-muted-foreground text-sm font-medium">+ More</span>
      </Link>
    </>
  )

  return (
    <div className={`w-full bg-transparent py-10 overflow-hidden relative z-10 ${className}`}>
      <Link
        href="/platform/integration"
        className="group/link flex flex-col space-y-1 relative z-20 cursor-pointer w-full"
      >
        <h2 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8 group-hover/link:text-primary transition-colors">
          Our Integrations
        </h2>
      </Link>
      <div className="flex w-max animate-marquee">
        <div className="flex items-center gap-10 pr-10">{logosContent}</div>
        <div className="flex items-center gap-10 pr-10">{logosContent}</div>
      </div>
    </div>
  )
}
