/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["chong-lap.local", "new.chonglap.com"]
  },
  async rewrites() {
    return [
      {
        source: '/search/:slug*',
        destination: '/search',
      },
    ];
  },
};

export default nextConfig;
