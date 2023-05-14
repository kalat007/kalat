/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
     forceswctranforms: true,
  },
}

module.exports = nextConfig
