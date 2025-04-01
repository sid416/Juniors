/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Required for GitHub Pages static export
  basePath: process.env.NODE_ENV === 'production' ? '/juniors-mini-mart' : '',
  images: {
    unoptimized: true, // For static export
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig;
