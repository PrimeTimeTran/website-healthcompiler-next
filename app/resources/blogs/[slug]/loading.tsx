import { Skeleton } from '@/components/ui/skeleton'

const BlogPostSkeleton = () => (
  <div className='container mx-auto px-4 py-20'>
    <div className='space-y-8'>
      <div className='space-y-4'>
        <Skeleton className='h-4 w-24' />
        <Skeleton className='h-12 w-full' />
        <Skeleton className='h-6 w-3/4' />
      </div>
      <Skeleton className='h-96 w-full rounded-2xl' />
      <div className='space-y-4'>
        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-4 w-3/4' />
      </div>
    </div>
  </div>
)

export default BlogPostSkeleton
