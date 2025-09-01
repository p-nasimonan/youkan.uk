import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx,astro}"],

  // Files to exclude
  exclude: [],

  // ダークモード設定
  conditions: {
    dark: '@media (prefers-color-scheme: dark)',
    light: '@media (prefers-color-scheme: light)',
  },

  // Global CSS styles
  globalCss: {
    // 既存のアニメーション
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
    },
    
    '@keyframes float': {
      '0%, 100%': {
        transform: 'translateY(0px)'
      },
      '50%': {
        transform: 'translateY(-20px)'
      }
    },
    '@keyframes bounce': {
      '0%, 20%, 53%, 80%, 100%': {
        transform: 'translateY(0px)'
      },
      '40%, 43%': {
        transform: 'translateY(-30px)'
      },
      '70%': {
        transform: 'translateY(-15px)'
      },
      '90%': {
        transform: 'translateY(-4px)'
      }
    },
    '@keyframes pulse': {
      '0%, 100%': {
        transform: 'scale(1)'
      },
      '50%': {
        transform: 'scale(1.1)'
      }
    },
    '@keyframes rotate': {
      '0%': {
        transform: 'rotate(0deg)'
      },
      '100%': {
        transform: 'rotate(360deg)'
      }
    },
    '@keyframes slide': {
      '0%': {
        transform: 'translateX(-500px)',
        opacity: '0'
      },
      '100%': {
        transform: 'translateX(0px)',
        opacity: '1'
      }
    },
    '@keyframes fade': {
      '0%': {
        opacity: '0'
      },
      '100%': {
        opacity: '1'
      }
    },
    '@keyframes scale': {
      '0%': {
        transform: 'scale(0)'
      },
      '100%': {
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
