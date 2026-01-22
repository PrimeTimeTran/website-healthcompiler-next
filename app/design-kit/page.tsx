'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useLayoutEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

export default function DesignKitPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useLayoutEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className='container mx-auto px-6 py-24 space-y-24'>
      <div className='flex items-start justify-between'>
        <div className='space-y-4'>
          <h1 className='font-display text-4xl md:text-5xl font-bold text-foreground'>
            Design System
          </h1>
          <p className='text-muted-foreground text-lg max-w-2xl'>
            Comprehensive guide to the design tokens, typography, colors, and
            components used across the Healthcare Data Platform.
          </p>
        </div>
        {mounted && (
          <Button
            variant='outline'
            size='icon'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='rounded-full'
          >
            <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
            <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
            <span className='sr-only'>Toggle theme</span>
          </Button>
        )}
      </div>

      {/* Typography Section */}
      <section className='space-y-8'>
        <h2 className='text-2xl font-semibold border-b border-border pb-2'>
          Typography
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div className='space-y-6'>
            <h3 className='text-sm font-medium text-muted-foreground uppercase tracking-wider'>
              Headings (Outfit)
            </h3>
            <div className='space-y-4'>
              <div>
                <h1 className='font-display text-5xl font-bold'>Heading 1</h1>
                <p className='text-xs text-muted-foreground mt-1'>
                  Outfit Bold 48px
                </p>
              </div>
              <div>
                <h2 className='font-display text-4xl font-semibold'>
                  Heading 2
                </h2>
                <p className='text-xs text-muted-foreground mt-1'>
                  Outfit Semibold 36px
                </p>
              </div>
              <div>
                <h3 className='font-display text-3xl font-semibold'>
                  Heading 3
                </h3>
                <p className='text-xs text-muted-foreground mt-1'>
                  Outfit Semibold 30px
                </p>
              </div>
              <div>
                <h4 className='font-display text-2xl font-semibold'>
                  Heading 4
                </h4>
                <p className='text-xs text-muted-foreground mt-1'>
                  Outfit Semibold 24px
                </p>
              </div>
            </div>
          </div>

          <div className='space-y-6'>
            <h3 className='text-sm font-medium text-muted-foreground uppercase tracking-wider'>
              Body (Inter)
            </h3>
            <div className='space-y-4'>
              <div>
                <p className='text-lg'>
                  Large body text. Used for lead paragraphs and introductions.
                  The quick brown fox jumps over the lazy dog.
                </p>
                <p className='text-xs text-muted-foreground mt-1'>
                  Inter Regular 18px
                </p>
              </div>
              <div>
                <p className='text-base'>
                  Default body text. Used for general content. The quick brown
                  fox jumps over the lazy dog.
                </p>
                <p className='text-xs text-muted-foreground mt-1'>
                  Inter Regular 16px
                </p>
              </div>
              <div>
                <p className='text-sm text-muted-foreground'>
                  Small text. Used for captions and secondary information.
                </p>
                <p className='text-xs text-muted-foreground mt-1'>
                  Inter Regular 14px
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 pt-8'>
          <div className='space-y-6'>
            <h3 className='text-sm font-medium text-muted-foreground uppercase tracking-wider'>
              APEX Display (Cormorant Garamond)
            </h3>
            <div className='font-apex-display'>
              <h1 className='text-5xl italic font-semibold'>
                Editorial Heading
              </h1>
              <h2 className='text-4xl mt-4'>Article Title Style</h2>
            </div>
          </div>
          <div className='space-y-6'>
            <h3 className='text-sm font-medium text-muted-foreground uppercase tracking-wider'>
              APEX Body (DM Sans)
            </h3>
            <div className='font-apex-body space-y-2'>
              <p className='text-lg'>
                Editorial body text for magazine layouts.
              </p>
              <p>Standard article reading text style.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='space-y-8'>
        <h2 className='text-2xl font-semibold border-b border-border pb-2'>
          Color Palette
        </h2>

        <div className='space-y-8'>
          <div>
            <h3 className='text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4'>
              Semantic Colors
            </h3>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
              <ColorCard
                name='Primary'
                bg='bg-primary'
                text='text-primary-foreground'
              />
              <ColorCard
                name='Secondary'
                bg='bg-secondary'
                text='text-secondary-foreground'
              />
              <ColorCard
                name='Accent'
                bg='bg-accent'
                text='text-accent-foreground'
              />
              <ColorCard
                name='Muted'
                bg='bg-muted'
                text='text-muted-foreground'
              />
              <ColorCard
                name='Destructive'
                bg='bg-destructive'
                text='text-destructive-foreground'
              />
              <ColorCard
                name='Success'
                bg='bg-success'
                text='text-success-foreground'
              />
              <ColorCard
                name='Card'
                bg='bg-card'
                text='text-card-foreground'
                border='border'
              />
              <ColorCard
                name='Popover'
                bg='bg-popover'
                text='text-popover-foreground'
                border='border'
              />
              <ColorCard
                name='Background'
                bg='bg-background'
                text='text-foreground'
                border='border'
              />
              <ColorCard
                name='Bg Secondary'
                bg='bg-background-secondary'
                text='text-foreground'
                border='border'
              />
            </div>
          </div>

          {/* APEX Colors */}
          <div>
            <h3 className='text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4'>
              APEX Magazine Theme
            </h3>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
              <ColorCard
                name='Apex Bg'
                bg='bg-apex-bg'
                text='text-apex-foreground'
              />
              <ColorCard
                name='Apex Secondary'
                bg='bg-apex-bg-secondary'
                text='text-apex-foreground'
              />
              <ColorCard
                name='Apex Accent'
                bg='bg-apex-accent'
                text='text-apex-bg'
              />
              <ColorCard
                name='Apex Warm'
                bg='bg-apex-accent-warm'
                text='text-white'
              />
              <ColorCard
                name='Apex Muted'
                bg='bg-apex-muted'
                text='text-apex-foreground'
              />
            </div>
          </div>

          <div>
            <h3 className='text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4'>
              Gradients
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <GradientCard
                name='Hero Gradient'
                className='bg-(image:--gradient-hero)'
              />
              <GradientCard
                name='Accent Gradient'
                className='bg-(image:--gradient-accent)'
              />
              <GradientCard
                name='CTA Gradient'
                className='bg-(image:--gradient-cta)'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='space-y-8'>
        <h2 className='text-2xl font-semibold border-b border-border pb-2'>
          Shadows & Effects
        </h2>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          <div className='p-6 rounded-lg bg-card shadow-soft flex items-center justify-center h-32'>
            <span className='text-sm font-medium text-muted-foreground'>
              Shadow Soft
            </span>
          </div>
          <div className='p-6 rounded-lg bg-card shadow-card flex items-center justify-center h-32'>
            <span className='text-sm font-medium text-muted-foreground'>
              Shadow Card
            </span>
          </div>
          <div className='p-6 rounded-lg bg-card shadow-elevated flex items-center justify-center h-32'>
            <span className='text-sm font-medium text-muted-foreground'>
              Shadow Elevated
            </span>
          </div>
          <div className='p-6 rounded-lg bg-card shadow-glow border border-accent/20 flex items-center justify-center h-32'>
            <span className='text-sm font-medium text-muted-foreground'>
              Shadow Glow
            </span>
          </div>
        </div>
      </section>

      <section className='space-y-8'>
        <h2 className='text-2xl font-semibold border-b border-border pb-2'>
          Components
        </h2>

        <div className='space-y-6'>
          <h3 className='text-sm font-medium text-muted-foreground uppercase tracking-wider'>
            Buttons
          </h3>
          <div className='flex flex-wrap gap-4 items-center'>
            <Button>Default Button</Button>
            <Button variant='secondary'>Secondary</Button>
            <Button variant='outline'>Outline</Button>
            <Button variant='ghost'>Ghost</Button>
            <Button variant='link'>Link Button</Button>
            <Button variant='destructive'>Destructive</Button>
          </div>
          <div className='flex flex-wrap gap-4 items-center'>
            <Button size='lg'>Large Button</Button>
            <Button size='default'>Default</Button>
            <Button size='sm'>Small</Button>
            <Button size='icon'>icon</Button>
          </div>
        </div>

        <div className='space-y-6'>
          <h3 className='text-sm font-medium text-muted-foreground uppercase tracking-wider'>
            Cards & Containers
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='p-8 rounded-lg border border-border bg-card'>
              <h4 className='font-semibold text-lg mb-2'>Simple Card</h4>
              <p className='text-muted-foreground'>
                Standard card container with border and background color. Used
                for most content blocks.
              </p>
            </div>

            <div className='p-8 rounded-lg border border-border bg-background-secondary'>
              <h4 className='font-semibold text-lg mb-2'>
                Secondary Background
              </h4>
              <p className='text-muted-foreground'>
                Container using the secondary background color for subtle
                differentiation.
              </p>
            </div>

            <div className='interactive-card p-8 rounded-lg border border-border bg-card cursor-pointer'>
              <h4 className='font-semibold text-lg mb-2'>Interactive Card</h4>
              <p className='text-muted-foreground'>
                Hover me! This card uses the <code>.interactive-card</code>{' '}
                utility class for hover effects.
              </p>
            </div>

            <div className='card-hover p-8 rounded-lg border border-border bg-card'>
              <h4 className='font-semibold text-lg mb-2'>Hover Effect Card</h4>
              <p className='text-muted-foreground'>
                Uses <code>.card-hover</code> for a lift effect on hover.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='space-y-8'>
        <h2 className='text-2xl font-semibold border-b border-border pb-2'>
          Animations
        </h2>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          <div className='p-6 rounded-lg border border-border bg-card flex flex-col items-center gap-4'>
            <div className='w-12 h-12 rounded-full bg-accent animate-pulse-slow'></div>
            <span className='text-sm text-muted-foreground'>Pulse Slow</span>
          </div>

          <div className='p-6 rounded-lg border border-border bg-card flex flex-col items-center gap-4'>
            <div className='w-12 h-12 bg-primary rounded-lg animate-spin-slow'></div>
            <span className='text-sm text-muted-foreground'>Spin Slow</span>
          </div>

          <div className='p-6 rounded-lg border border-border bg-card flex flex-col items-center gap-4'>
            <div className='w-12 h-12 bg-secondary rounded-full animate-bounce-subtle'></div>
            <span className='text-sm text-muted-foreground'>Bounce Subtle</span>
          </div>

          <div className='p-6 rounded-lg border border-border bg-card flex flex-col items-center gap-4 overflow-hidden relative'>
            <div className='absolute inset-0 animate-shimmer opacity-20'></div>
            <span className='relative z-10 font-medium'>Shimmer BG</span>
            <span className='text-sm text-muted-foreground relative z-10'>
              Overlay Effect
            </span>
          </div>
        </div>

        <div className='space-y-4'>
          <div className='animate-fade-in p-4 bg-muted/30 rounded border border-border'>
            Fade In Animation (On Load)
          </div>
          <div className='animate-slide-up p-4 bg-muted/30 rounded border border-border'>
            Slide Up Animation (On Load)
          </div>
        </div>
      </section>
    </div>
  )
}

function ColorCard({
  name,
  bg,
  text,
  border,
}: {
  name: string
  bg: string
  text: string
  border?: string
}) {
  return (
    <div
      className={`rounded-lg overflow-hidden border ${border ? `border-border` : 'border-transparent'}`}
    >
      <div className={`h-24 ${bg} flex items-center justify-center`}>
        <span className={`${text} text-xs font-medium`}>{bg}</span>
      </div>
      <div className='p-3 bg-card'>
        <p className='text-sm font-medium'>{name}</p>
      </div>
    </div>
  )
}

function GradientCard({
  name,
  className,
}: {
  name: string
  className: string
}) {
  return (
    <div className='rounded-lg overflow-hidden border border-border'>
      <div className={`h-32 w-full ${className}`}></div>
      <div className='p-3 bg-card'>
        <p className='text-sm font-medium'>{name}</p>
      </div>
    </div>
  )
}
