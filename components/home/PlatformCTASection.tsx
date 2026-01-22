import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export const PlatformCTASection = () => {
  return (
    <section className='py-24 lg:py-32 bg-linear-to-br from-foreground via-foreground to-foreground/95 overflow-hidden'>
      <div className='container mx-auto px-6'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl lg:text-4xl xl:text-5xl font-bold text-background leading-tight mb-6'>
            Turn healthcare data into operational intelligence
          </h2>
          <p className='text-lg text-background/70 mb-10 max-w-xl mx-auto'>
            See how Health Compiler transforms fragmented healthcare data into
            actionable insights for your organization.
          </p>
          <Link
            href='/book-a-demo'
            className={cn(
              buttonVariants({ variant: 'primary', size: 'lg' }),
              'group',
            )}
          >
            Talk to Health Compiler
            <ArrowRight className='ml-2 w-5 h-5 transition-transform group-hover:translate-x-1' />
          </Link>
        </div>
      </div>
    </section>
  )
}
