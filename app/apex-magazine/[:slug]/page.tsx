'use client'

import { useParams } from 'next/navigation'
import ApexProfile from '@/components/ApexProfile'

export default function ApexMagazinePage() {
  const params = useParams<{ ':slug': string | string[] }>()
  const slug = Array.isArray(params[':slug']) ? params[':slug'][0] : params[':slug']

  return <ApexProfile slug={slug} />
}
