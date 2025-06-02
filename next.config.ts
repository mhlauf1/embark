/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      // 1) If someone hits http://embarkpetservices.com/:path*  OR  https://embarkpetservices.com/:path*,
      //    immediately 301 → https://www.embarkpetservices.com/:path*
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'embarkpetservices.com' }],
        destination: 'https://www.embarkpetservices.com/:path*',
        permanent: true,
      },
      // 2) If someone hits http://www.embarkpetservices.com/:path*,
      //    immediately 301 → https://www.embarkpetservices.com/:path*
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.embarkpetservices.com' }],
        // But only match if they came in via “http” (not https)
        // Next.js can’t directly match protocol in this “has” condition.
        // Instead, we let Vercel handle the certificate so that
        // every http automatically becomes https. On Vercel, you can
        // also force HTTPS at the domain level, so this second rule 
        // is often unnecessary if you already told Vercel to “Enforce HTTPS.”
        destination: 'https://www.embarkpetservices.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
