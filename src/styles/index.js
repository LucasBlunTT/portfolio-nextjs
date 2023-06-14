import { createStitches } from '@stitches/react';

export const { styled, globalCss, keyframes, getCssText, theme } =
  createStitches({
    theme: {
      colors: {
        primayDefault: '#653DF5',
        primayLight: '#CCBEFF',
        primayDark: '#4D1CFF',

        gray900: '#030E15',
        gray800: '#2D3235',
        gray600: '#78797A',
        gray500: '#9A9D9E',
        gray700: '#4F5152',
        gray400: '#BABCBD',
        gray300: '#C6C7C8',
        gray200: '#DADCDD',
        gray100: '#F6F6F6',
        backgrounColorDefault: 'linear-gradient(0deg, #050610, #050610), rgba(255, 255, 255, 0.02)'
      },
    },

    media: {
        
      xxs: '(max-width: 360px)',
      xs: '(max-width: 414px)',
      sm: '(max-width: 640px)',
      md: '(max-width: 768px)',
      tmd: '(max-width: 828px)',
      mmd: '(max-width: 960px)',
      lg: '(max-width: 1024px)',
      xl: '(max-width: 1280px)',
      xxl: '(min-width: 1536px)',
    },
  });
