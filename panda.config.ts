import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx,astro}"],

  // Files to exclude
  exclude: [],

  // Global CSS styles
  globalCss: {
    '@keyframes fadeInUp': {
      '0%': {
        opacity: '0',
        transform: 'translateY(30px)'
      },
      '100%': {
        opacity: '1',
        transform: 'translateY(0)'
      }
    },
    '@keyframes fadeInScale': {
      '0%': {
        opacity: '0',
        transform: 'scale(0.8)'
      },
      '100%': {
        opacity: '1',
        transform: 'scale(1)'
      }
    }
  },

  // Useful for theme customization
  theme: {
    extend: {
      // カスタムトランジション
      // PandaCSS ではカスタムトークンを tokens で追加できます
    },
    tokens: {
      durations: {
        '400': { value: '400ms' },
        '600': { value: '600ms' }
      },
      easings: {
        'bounce': { value: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' },
        'smooth': { value: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }
      }
    },
  },

  // The output directory for your css system
  outdir: "./src/styles",
});
