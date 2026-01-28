import type { NextConfig } from 'next'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const nextConfig: NextConfig & { turbopack?: any } = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lirp.cdn-website.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8080',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'api.marketing.compile.health',
        pathname: '/uploads/**',
      },
    ],
  },
  turbopack: {
    root: process.cwd(),
  },
}

export default nextConfig
