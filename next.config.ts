import type { NextConfig } from 'next'
import withTwin from './config/withTwin.mjs'

const nextConfig: NextConfig = withTwin({
  /* config options here */
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
})

export default nextConfig
