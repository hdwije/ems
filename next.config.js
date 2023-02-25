/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/employee/list',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  images: {
    domains: ['randomuser.me'],
  },
};

module.exports = nextConfig;
