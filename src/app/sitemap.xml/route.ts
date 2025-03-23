import { NextResponse } from 'next/server';

export async function GET() {
    // Define your site URLs
    const baseUrl = 'https://www.embarkpetservices.com';

    const urls = [
        '',              // homepage
        '/about',
        '/services',
        '/network',
        '/partner-with-us'
    ];

    // Generate sitemap XML content
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(path => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  `).join('')}
</urlset>`;

    // Return the XML with appropriate headers
    return new NextResponse(sitemap, {
        headers: {
            'Content-Type': 'text/xml',
            'Cache-Control': 'public, max-age=86400, s-maxage=86400'
        }
    });
}