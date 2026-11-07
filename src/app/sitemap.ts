import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  // Use VERCEL_PROJECT_PRODUCTION_URL or fallback
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://railpnr-live.vercel.app';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1.0,
    },
  ];
}
