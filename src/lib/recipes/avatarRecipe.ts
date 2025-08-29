import { cva } from '@styles/css';

export const avatarRecipe = cva({
  base: {
    position: 'absolute',
    pointerEvents: 'none',
    transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    willChange: 'transform, opacity',
    objectFit: 'contain',
  },
  variants: {
    size: {
      sm: { width: '160px', height: '160px' },
      md: { width: '320px', height: '320px' },
      lg: { width: '480px', height: '480px' },
      xl: { width: '640px', height: '640px' },
    },
    type: {
      vrc: {
        animation: 'bounce 1.2s cubic-bezier(0.68,-0.55,0.27,1.55) infinite',
        filter: 'drop-shadow(0 0 16px #ffb6c1aa)',
      },
      engineer: {
        animation: 'none',
        filter: 'drop-shadow(0 0 12px #6495ed99)',
        ".group:hover &": {
          animation: 'slide 0.5s ease-in-out 1 forwards',
        },
      },
      aircraft: {
        animation: 'float 3.2s ease-in-out infinite',
        filter: 'drop-shadow(0 0 18px #ffd70099)',
      },
    },
    position: {
        // 代表的な位置バリアント例。必要に応じて追加・拡張可能。
    // 上段
  'top-left': { bottom: '0', left: '0' },
  'top-center': { bottom: '0', left: '50%' },
  'top-right': { bottom: '0', right: '0' },
  // 中央
  'middle-left': { top: '-200', left: '-100' },
  'middle-center': { top: '-200', left: '50%' },
  'middle-right': { top: '-200', right: '0' },
  // 下段
  'bottom-left': { bottom: '0', left: '0' },
  'bottom-center': { bottom: '0', left: '50%' },
  'bottom-right': { bottom: '0', right: '0' },
    },
  },
  defaultVariants: {
    type: 'vrc',
    position: 'middle-center',
  },
});
