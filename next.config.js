/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/presale': { page: '/presale' },
      '/referral-info': { page: '/referral-info' },
      '/presale': { page: '/presale' },
      '/ambassador': { page: '/ambassador' }
    };
  },
  images: {
    unoptimized: true
  },
  transpilePackages: ['@esotericsoftware/spine-threejs', '@esotericsoftware/spine-player']
}

module.exports = nextConfig
