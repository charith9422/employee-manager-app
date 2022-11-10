/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/api/portraits/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        pathname: '/**',
      },
    ],
  },
  i18n,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://employee-api-six.vercel.app/:path*',
      },
    ]
  },
}


module.exports = nextConfig
