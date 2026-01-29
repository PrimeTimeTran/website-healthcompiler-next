import { Skeleton } from '@/components/ui/skeleton'

export default function BlogCardSkeleton() {
  return (
    <div className="group block animate-pulse">
      <div className="relative overflow-hidden rounded-2xl bg-muted h-52 md:h-60 mb-5" />
      <div className="space-y-3">
        <Skeleton className="h-4 w-24 rounded-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-4/5" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  )
}
