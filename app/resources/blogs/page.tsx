import BlogsClient from './BlogsClient'
import { BlogPost } from '@/services/strapi'
import { fetchBlogPosts } from '@/services/strapi'

export const metadata = {
  title: 'Blog - Insights & Resources',
  description:
    'Discover insights on Direct Primary Care, Wellness, Health Analytics, and innovative healthcare solutions.',
}

export const revalidate = 86400

const Blogs = async () => {
  let error = null
  let blogPosts: BlogPost[] = []

  try {
    blogPosts = await fetchBlogPosts()
  } catch (err) {
    error = err instanceof Error ? err.message : 'Failed to load blog posts'
    console.error('Error loading blog posts:', err)
  }

  return <BlogsClient error={error} posts={blogPosts} />
}

export default Blogs
