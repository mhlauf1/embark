import { NextResponse } from 'next/server';

export async function GET() {
    // Define your site URLs
    const baseUrl = 'https://www.embarkpetservices.com';

    // Current date for lastmod
    const currentDate = new Date().toISOString().split('T')[0];

    // Define pages with their specific properties
    const pages = [
        { path: '', priority: '1.0', changefreq: 'weekly' },       // homepage
        { path: '/about', priority: '0.8', changefreq: 'monthly' },
        { path: '/services', priority: '0.9', changefreq: 'weekly' },
        { path: '/network', priority: '0.7', changefreq: 'monthly' },
        { path: '/partner-with-us', priority: '0.8', changefreq: 'monthly' }
    ];

    // Generate sitemap XML content
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    // Return the XML with appropriate headers
    return new NextResponse(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=86400, s-maxage=86400'
        }
    });
}