'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import CTAButton from '@/components/ui/CTAButton'
import { Home, Mail } from 'lucide-react'

const NotFound = () => {
  const pathname = usePathname()

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', pathname)
  }, [pathname])

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-16 text-center overflow-hidden">
      <div className="relative mb-12">
        <div className="absolute -inset-12 bg-primary/5 rounded-full blur-3xl" />
        <h1 className="relative text-[12rem] md:text-[16rem] leading-none font-bold text-primary/5 select-none">
          404
        </h1>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <span className="text-2xl md:text-6xl font-black text-foreground tracking-tighter shadow-sm">
            Page Not Found
          </span>
        </div>
      </div>

      <div className="max-w-lg mx-auto space-y-8 relative z-10">
        <p className="text-xl text-muted-foreground font-light">
          Oops! It seems you've wandered into uncharted territory. The page you're looking for might
          have been moved, deleted, or never existed.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <CTAButton
            text="Go Back Home"
            link="/"
            variant="primary"
            size="lg"
            iconPrefix={<Home className="w-4 h-4" />}
          />
          <CTAButton
            text="Contact Support"
            link="/contact"
            variant="outline"
            size="lg"
            iconPrefix={<Mail className="w-4 h-4" />}
          />
        </div>
      </div>
    </div>
  )
}

export default NotFound
