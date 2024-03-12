/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/presale': { page: '/presale' },
      '/referral-info': { page: '/referral-info' },
      '/presale': { page: '/presale' },
      'rebuild': {page: '/rebuild'},
      // '/presale-admin': {page: '/presale-admin'}
    };
  },
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
