import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Handle non-www to www redirects
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'embarkpetservices.com',
          },
        ],
        destination: 'https://www.embarkpetservices.com/',
        permanent: true,
      },
      // Handle http to https redirects
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'embarkpetservices.com',
          },
        ],
        destination: 'https://www.embarkpetservices.com/:path*',
        permanent: true,
      },
      // Clean up old WordPress content
      {
        source: '/wp-content/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-includes/:path*',
        destination: '/',
        permanent: true,
      }
    ]
  },
};

export default nextConfig;