import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowLeft, Share2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { BlogContent } from './blog-content'
import { fetchBlogPostBySlug } from '@/services/strapi'
import { STRAPI_URL, STRAPI_TOKEN } from '@/lib/constants'

export const revalidate = 86400

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const params = await props.params
  const { slug } = params
  const blogPost = await fetchBlogPostBySlug(slug)

  if (!blogPost) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://healthcompiler.com'
  const url = blogPost.canonicalUrl || `${siteUrl}/resources/blogs/${slug}`

  return {
    title: blogPost.title,
    description: blogPost.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: blogPost.title,
      description: blogPost.description,
      type: 'article',
      publishedTime: blogPost.publishedAt,
      url,
      images: [
        {
          url: blogPost.image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blogPost.title,
      description: blogPost.description,
      images: [blogPost.image],
      site: '@HealthCompiler',
    },
  }
}

export async function fetchAllBlogSlugs() {
  try {
    const res = await fetch(`${STRAPI_URL}/api/articles?fields=slug&pagination[limit]=5000`, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
      next: { revalidate: 300 },
    })

    if (!res.ok) {
      console.error('Failed to fetch blog slugs:', res.status, res.statusText)
      return []
    }

    const data = await res.json()

    console.log(`Fetched ${data?.data?.length} slugs from Strapi`)

    if (!data?.data) {
      console.error('No data in Strapi response for slugs')
      return []
    }

    return data.data
      .map((post: any) => post.slug || post.attributes?.slug)
      .filter((slug: any) => typeof slug === 'string')
  } catch (error) {
    console.error('Error fetching blog slugs:', error)
    return []
  }
}

export async function generateStaticParams() {
  const slugs = await fetchAllBlogSlugs()

  return slugs.map((slug: string) => ({
    slug,
  }))
}

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
