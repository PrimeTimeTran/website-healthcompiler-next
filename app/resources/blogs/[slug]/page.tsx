import Link from 'next/link'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { fetchBlogPostBySlug } from '@/services/strapi'
import { SliderCarousel } from './slider-carousel'

const getMediaUrl = (url?: string) => (url ? `${process.env.STRAPI_URL}${url}` : undefined)

const BlogPost = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params
  const { slug } = params

  let error = null
  let blogPost = null

  try {
    blogPost = await fetchBlogPostBySlug(slug)
  } catch (err) {
    error = err instanceof Error ? err.message : 'Failed to load blog post'
  }

  if (error || !blogPost) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-destructive/10 flex items-center justify-center">
          <Share2 className="w-8 h-8 text-destructive" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
        <p className="text-muted-foreground mb-8">
          {error || "The blog post you're looking for doesn't exist."}
        </p>
        <Button asChild>
          <Link href="/resources/blogs">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </Link>
        </Button>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <>
      <div className="border-b bg-background/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" asChild className="group">
            <Link href="/resources/blogs" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blogs
            </Link>
          </Button>
        </div>
      </div>

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
                  <img
                    key={key}
                    src={getMediaUrl(block.file.url)}
                    alt={block.file.alternativeText || ''}
                    className="my-10 rounded-lg"
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
    </>
  )
}

export default BlogPost
