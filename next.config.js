const withPWA = require('next-pwa');
/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['stellarforge.org'],
  },
  pwa: {
    dest: 'public',
    swSrc: 'src/service-worker.js',
  }
});

module.exports = nextConfig;
