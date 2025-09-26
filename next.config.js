/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
  },
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  experimental: {
    optimizeCss: true,
  },
  env: {
    BUSINESS_NAME: 'Pakar Gearbox Shah Alam',
    PHONE_NUMBER: '+60351918330',
    WHATSAPP_NUMBER: '+60195183330',
    ADDRESS: 'No 15, Jalan Industri 16/12, Seksyen 16, 40200 Shah Alam, Selangor',
    CITY: 'Shah Alam',
    STATE: 'Selangor'
  }
}

module.exports = nextConfig
