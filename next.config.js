/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Standalone output for easier deployment
  output: 'standalone',
}

module.exports = nextConfig

