/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/presale': { page: '/presale' },
      '/referral-info': { page: '/referral-info' },
    };
  },
  images:{
    unoptimized: true
  }
}

module.exports = nextConfig
