/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/account': { page: '/account' },
      '/referral-info': { page: '/referral-info' },
      '/ambassador': { page: '/ambassador' }
    };
  },
  images: {
    unoptimized: true
  },
  transpilePackages: ['@esotericsoftware/spine-threejs', '@esotericsoftware/spine-player']
}

module.exports = nextConfig
