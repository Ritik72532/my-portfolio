import type { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  
  const baseUrl = 'https://my-portfolio-mu-six-yjodpkffbf.vercel.app/';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0, // Signals to Google that this is the main landing hub
    },
  ];
}
