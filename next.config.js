/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.freebiesupply.com", "image.tmdb.org"],
  },
};

module.exports = nextConfig;
