/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/presale': { page: '/presale' },
    };
  },
  images:{
    unoptimized: true
  }
}

module.exports = nextConfig
