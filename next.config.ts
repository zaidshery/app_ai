import type { NextConfig } from 'next'

const alternateDistDir = process.env.NEXT_DIST_DIR?.trim()

const nextConfig: NextConfig = {
  ...(alternateDistDir ? { distDir: alternateDistDir } : {}),
}

export default nextConfig
