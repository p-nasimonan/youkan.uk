// @ts-check
import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

// https://astro.build/config
export default defineConfig({
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
