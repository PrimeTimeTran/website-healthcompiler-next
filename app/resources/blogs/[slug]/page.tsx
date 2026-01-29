import Link from 'next/link'
import { ArrowLeft, Share2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { BlogContent } from './blog-content'
import { fetchBlogPostBySlug } from '@/services/strapi'

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
      <BlogContent blogPost={blogPost} />
    </>
  )
}

export default BlogPost
