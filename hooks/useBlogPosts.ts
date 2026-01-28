import { useState, useEffect } from 'react'
import { BlogPost } from '@/services/strapi'

import { STRAPI_URL, STRAPI_TOKEN } from '../lib/constants'

export async function getBlogPostBySlug(slug: string) {
  const res = await fetch(
    `${STRAPI_URL}/api/articles/?filters[slug][$eq]=${slug}&populate=*`,
    {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
    },
  )

  if (!res.ok) {
    throw new Error('Failed to fetch blog post')
  }

  const json = await res.json()
  return json.data?.[0] ?? null
}

export const useBlogPost = (slug: string) => {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!slug) return

    const loadBlogPost = async () => {
      try {
        setLoading(true)
        const post = await getBlogPostBySlug(slug)
        setBlogPost(post)
        setError(null)
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to load blog post',
        )
        console.error('Error loading blog post:', err)
      } finally {
        setLoading(false)
      }
    }

    loadBlogPost()
  }, [slug])

  return { blogPost, loading, error }
}
