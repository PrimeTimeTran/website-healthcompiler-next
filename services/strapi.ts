import { STRAPI_URL, STRAPI_TOKEN } from '../lib/constants'

export interface BlogPost {
  id: number
  date: string
  link: string
  slug?: string
  title: string
  image: string
  blocks?: any[]
  content?: string
  description: string
}

export const strapiUrl = (path?: string | null) => {
  if (!path) return ''
  if (path.startsWith('http')) return path
  return `${process.env.NEXT_PUBLIC_STRAPI_URL}${path}`
}

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await fetch(`${STRAPI_URL}/api/articles?populate=cover`, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
      next: {
        tags: ['blog-posts'],
        revalidate: 86400, // optional safety net
      },
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()

    return data.data.map((item: any) => ({
      id: item.id,
      link: item.link || item.attributes?.link,
      slug: item.slug || item.attributes?.slug,
      title: item.title || item.attributes?.title,
      date: item.createdAt || item.attributes?.date,
      content: item.content || item.attributes?.content,
      description: item.description || item.attributes?.description,
      image: `${STRAPI_URL}${item.cover?.formats?.thumbnail?.url || ''}`,
    }))
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    throw error
  }
}

export const fetchBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  // Note:
  // Verbose but must be written this way to populate all fields,  title, description, cover, blocks, block media
  const url =
    `${STRAPI_URL}/api/articles` +
    `?filters[slug][$eq]=${slug}` +
    `&status=published` +
    `&fields[0]=title` +
    `&fields[1]=description` +
    `&fields[2]=createdAt` +
    '&populate[cover][populate]=*' +
    `&populate[blocks][on][shared.media][populate]=*` +
    `&populate[blocks][on][shared.slider][populate]=*` +
    `&populate[blocks][on][shared.rich-text]=*` +
    `&populate[blocks][on][shared.quote]=*`

  console.log({ url })
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    const item = data.data?.[0]

    if (!item) return null

    // Helper to get image URL safely
    const getImageUrl = (item: any) => {
      // Check for direct property or attributes
      const attributes = item.attributes || item
      const cover = attributes.cover?.data?.attributes || attributes.cover

      if (cover?.url) {
        return `${STRAPI_URL}${cover.url}`
      }

      return ''
    }

    return {
      id: item.id,
      image: getImageUrl(item),
      slug: item.slug || item.attributes?.slug,
      link: item.link || item.attributes?.link,
      title: item.title || item.attributes?.title,
      date: item.createdAt || item.attributes?.date,
      content: item.content || item.attributes?.content,
      blocks: item.blocks || item.attributes?.blocks || [],
      description: item.description || item.attributes?.description,
    }
  } catch (error) {
    console.error('Error fetching blog post by slug:', error)
    throw error
  }
}
