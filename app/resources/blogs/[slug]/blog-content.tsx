import Link from 'next/link'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { Calendar, Clock, Share2 } from 'lucide-react'

import { BlogPost } from '@/services/strapi'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SliderCarousel } from './slider-carousel'

interface BlogContentProps {
  blogPost: BlogPost
}

export function BlogContent({ blogPost }: BlogContentProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <Badge variant="secondary" className="flex items-center gap-2">
            <Calendar className="w-3 h-3" />
            {formatDate(blogPost.date)}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-2">
            <Clock className="w-3 h-3" />5 min read
          </Badge>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight font-display">
          {blogPost.title}
        </h1>

        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          {blogPost.description}
        </p>
      </header>

      {blogPost.image && (
        <div className="mb-12">
          <div className="relative overflow-hidden rounded-2xl bg-muted">
            <Image
              unoptimized
              width={800}
              height={400}
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}

      <div className="prose prose-lg max-w-none">
        {blogPost.blocks?.map((block: any, index: number) => {
          const key = `${block.__component}-${block.id}-${index}`

          switch (block.__component) {
            case 'shared.rich-text':
              return <ReactMarkdown key={key}>{block.body}</ReactMarkdown>

            case 'shared.quote':
              return (
                <blockquote key={key}>
                  <p>{block.body}</p>
                  {block.title && <cite>— {block.title}</cite>}
                </blockquote>
              )

            case 'shared.media':
              return (
                <Image
                  key={key}
                  width={0}
                  height={0}
                  unoptimized
                  sizes="100vw"
                  src={block.file.url}
                  alt={block.file.alternativeText || ''}
                  className="my-10 rounded-lg w-full h-auto"
                />
              )

            case 'shared.slider':
              return <SliderCarousel key={key} files={block.files} />

            default:
              return null
          }
        })}
      </div>

      <footer className="mt-16 pt-8 border-t">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
          <Button asChild>
            <Link href="/resources/blogs">Read More Articles</Link>
          </Button>
        </div>
      </footer>
    </article>
  )
}
