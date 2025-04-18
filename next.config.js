/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    locales: ['en', 'ru', 'bg'],
    defaultLocale: 'ru',
    localeDetection: false, // Изменено с true на false
  },
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig