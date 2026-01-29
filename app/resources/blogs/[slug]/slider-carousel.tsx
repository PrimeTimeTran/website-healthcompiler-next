'use client'

import { useState } from 'react'

type SliderCarouselProps = {
  files: any[]
}
const getMediaUrl = (url?: string) => (url ? `${process.env.STRAPI_URL}${url}` : undefined)

export function SliderCarousel({ files }: SliderCarouselProps) {
  const [index, setIndex] = useState(0)

  if (!files?.length) return null

  return (
    <div className="my-12">
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={getMediaUrl(files[index].url)}
          alt={files[index].alternativeText || ''}
          className="w-full h-auto transition-opacity duration-300"
        />

        {/* Prev */}
        <button
          onClick={() => setIndex((index - 1 + files.length) % files.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
        >
          ‹
        </button>

        {/* Next */}
        <button
          onClick={() => setIndex((index + 1) % files.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
        >
          ›
        </button>
      </div>

      {/* Indicators */}
      <div className="mt-4 flex justify-center gap-2">
        {files.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === index ? 'bg-foreground' : 'bg-muted-foreground/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
