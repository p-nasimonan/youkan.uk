// @ts-check
import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  integrations: [
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  site: 'https://youkan.uk',
  base: '/',
  trailingSlash: 'always',
  devToolbar: {
    enabled: false
  },
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  },
  vite: {
    resolve: {
      alias: {
        '@layouts': '/src/layouts',
        '@components': '/src/components',
        '@styles': '/src/styles',
        '@assets': '/src/assets',
        '@images': '/src/assets/images'
      }
    }
  }
});
