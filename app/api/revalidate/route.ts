import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'

// Trigger this in browser:
// https://marketing.compile.health/api/revalidate?key=refresh-blog
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  if (searchParams.get('key') !== 'refresh-blog') {
    return NextResponse.json({ message: 'Nope' }, { status: 403 })
  }

  revalidateTag('blog-posts', 'max')

  return NextResponse.json({ revalidated: true })
}
