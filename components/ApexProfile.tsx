'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { getProfileBySlug } from '@/data/apexProfiles'
import apexLogo from '@/assets/apex-magazine-logo.png'

interface ApexProfileProps {
  slug: string
}

const ApexProfile = ({ slug }: ApexProfileProps) => {
  const profile = slug ? getProfileBySlug(slug) : undefined

  if (!profile) {
    return (
      <>
        <div className="min-h-screen bg-apex-bg flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-apex-foreground mb-4">Profile Not Found</h1>
            <Link href="/resources/apex">
              <Button
                variant="outline"
                className="border-apex-accent text-apex-accent hover:bg-apex-accent hover:text-apex-bg"
              >
                Back to APEX
              </Button>
            </Link>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        <section className="bg-apex-bg pt-32 pb-16 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <Link
              href="/resources/apex"
              className="inline-flex items-center gap-2 text-apex-accent hover:text-apex-accent-warm transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to APEX</span>
            </Link>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  width={400}
                  height={500}
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>

              <div>
                <Image
                  src={apexLogo}
                  alt="APEX Magazine"
                  width={80}
                  height={48}
                  className="h-12 mb-6 brightness-0 invert opacity-50"
                />
                <h2 className="text-apex-accent font-medium text-lg mb-2">{profile.name}</h2>
                {profile.subtitle && (
                  <p className="text-apex-foreground/70 text-xl mb-4">{profile.subtitle}</p>
                )}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-apex-foreground leading-tight">
                  {profile.title}
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 border-l-4 border-apex-accent pl-6">
              {profile.intro}
            </p>

            {profile.sections.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  {section.heading}
                </h2>
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}

            <div className="mt-16 p-8 bg-gray-50 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Interested to share your story?
              </h3>
              <p className="text-gray-600 mb-6">Contact us today & let us know!</p>
              <Link href="/get-featured-form">
                <Button className="bg-apex-accent hover:bg-apex-accent-warm text-white">
                  Get Featured
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ApexProfile
