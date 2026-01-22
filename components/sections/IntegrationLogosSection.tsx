'use client'

import Image from 'next/image'

interface Logo {
  name: string
  src: any
}

interface IntegrationLogosSectionProps {
  logos: Logo[]
}

export const IntegrationLogosSection = ({
  logos,
}: IntegrationLogosSectionProps) => {
  return (
    <div className='flex flex-wrap justify-center items-center gap-8 md:gap-12 p-8 bg-muted/30 rounded-2xl border border-border/50'>
      {logos.map((logo, index) => (
        <div
          key={index}
          className='h-12 w-32 bg-background rounded-lg flex items-center justify-center p-2 shadow-sm'
        >
          <Image
            src={logo.src}
            alt={logo.name}
            width={128}
            height={48}
            className='max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity'
          />
          <span className='hidden text-muted-foreground font-medium'>
            {logo.name}
          </span>
        </div>
      ))}
      <div className='h-12 w-32 bg-background rounded-lg flex items-center justify-center p-2 shadow-sm'>
        <span className='text-muted-foreground text-sm font-medium'>
          + More
        </span>
      </div>
    </div>
  )
}
