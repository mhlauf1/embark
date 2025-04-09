import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      // Redirect from http to https
      {
        source: 'http://:path*',
        destination: 'https://:path*',
        permanent: true,
      },
      // Redirect non-www to www
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
      // Redirect old WordPress paths
      {
        source: '/wp-content/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-includes/:path*',
        destination: '/',
        permanent: true,
      },
      // Other common WordPress paths
      {
        source: '/xmlrpc.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/feed/:path*',
        destination: '/',
        permanent: true,
      }
    ]
  },
};

export default nextConfig;