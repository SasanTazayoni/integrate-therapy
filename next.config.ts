import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/integrate-therapy',
  images: { unoptimized: true },
}

export default nextConfig
