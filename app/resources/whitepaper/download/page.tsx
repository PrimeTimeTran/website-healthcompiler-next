'use client'

import { useState, Suspense } from 'react'
import { Button } from '@/components/ui/button'
import { FileText, CheckCircle2 } from 'lucide-react'
import { toast } from 'sonner'
import { useSearchParams } from 'next/navigation'

const DownloadForm = () => {
  const searchParams = useSearchParams()
  const paper = searchParams.get('paper')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const fileName = paper ? `${paper}.pdf` : 'how-to-dpc.pdf'
      const filePath = `/docs/${fileName}`

      const body = {
        fields: [
          { name: 'name', value: formData.name },
          { name: 'email', value: formData.email },
          { name: 'company', value: formData.company || '' },
          { name: 'message', value: `Guide Download Request: ${fileName}` },
        ],
        context: {
          pageUri: window.location.href,
          pageName: document.title,
        },
      }

      const response = await fetch(
        'https://api.hsforms.com/submissions/v3/integration/submit/21742361/581dbcaf-9082-4487-ae6f-7398b456dfc5',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      )

      if (!response.ok) {
        const text = await response.text()
        throw new Error(`HubSpot submission failed: ${response.status} ${text}`)
      }

      toast.success('Thank you! Your download is starting.')
      setFormData({ name: '', email: '', company: '' })

      // Trigger download
      const link = document.createElement('a')
      link.href = filePath
      link.setAttribute('download', fileName)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (err) {
      console.error(err)
      toast.error('Failed to process the request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="section-padding bg-background">
      <div className="container-tight mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border/50">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Get the Guide</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  placeholder="Your company name"
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Processing...' : 'Download Guide'}
              </Button>
            </form>
          </div>

          {/* Guide Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Everything You Need to Know
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our comprehensive guides cover the essentials of starting, managing, and scaling
                successful healthcare practices and solutions.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-6">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-accent" />
                Inside the Guide
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>Step-by-step implementation framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>Proven strategies for growth and retention</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>Operational best practices and tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>Financial modeling for sustainability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const DownloadGuide = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DownloadForm />
    </Suspense>
  )
}

export default DownloadGuide
