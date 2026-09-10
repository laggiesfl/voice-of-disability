import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Voice of Disability',
    short_name: 'Voice of Disability',
    description:
      'Accessible rights, resources, programmes and community information from Voice of Disability.',
    start_url: '/app-home',
    scope: '/',
    display: 'standalone',
    background_color: '#F7F4EF',
    theme_color: '#17324D',
    lang: 'en-ZA',
    orientation: 'any',
    categories: ['education', 'social'],
    icons: [
      {
        src: '/brand/vod-concept-a-mark.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/brand/vod-concept-a-mark.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
  };
}
