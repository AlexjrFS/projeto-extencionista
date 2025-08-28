/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'],
  },
  // Desabilita o warning de hidratação para desenvolvimento
  reactStrictMode: false,
};

module.exports = nextConfig;
