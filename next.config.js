/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = withNextIntl(nextConfig);