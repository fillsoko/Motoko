import type { APIRoute } from 'astro';
import { bikes } from '../data/bikes';

const site = 'https://www.motoko.de';

const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/fleet', priority: '0.9', changefreq: 'weekly' },
  { url: '/tours', priority: '0.9', changefreq: 'monthly' },
  { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { url: '/testimonials', priority: '0.7', changefreq: 'monthly' },
  { url: '/impressum', priority: '0.3', changefreq: 'yearly' },
  { url: '/datenschutz', priority: '0.3', changefreq: 'yearly' },
];

export const GET: APIRoute = () => {
  const today = new Date().toISOString().split('T')[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(
    (page) => `  <url>
    <loc>${site}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
${bikes
  .map(
    (bike) => `  <url>
    <loc>${site}/bikes/${bike.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
