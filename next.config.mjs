/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/privacy.html',
        destination: '/privacy',
      },
      {
        source: '/non-owners-sr22-insurance',
        destination: '/non-owner-sr22-insurance',
      },
    ];
  },
};

export default nextConfig;
