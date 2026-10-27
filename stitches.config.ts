import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      background: '#fafafa', // Light, neutral off-white
      surface: '#ffffff',
      textPrimary: '#111111', // Deep crisp black
      textSecondary: '#666666',
      accent: '#222222', // Dark contrast
      border: '#e5e5e5',
      error: '#ef4444',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '48px',
      7: '64px',
      8: '96px',
      9: '128px',
    },
    fontSizes: {
      1: '12px',
      2: '14px',
      3: '16px', // Base
      4: '20px',
      5: '24px',
      6: '32px',
      7: '48px',
      8: '64px',
    },
    fonts: {
      sans: 'Inter, -apple-system, system-ui, sans-serif',
      serif: '"Playfair Display", serif',
      mono: 'menlo, monospace',
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    lineHeights: {
      solid: 1,
      heading: 1.25,
      body: 1.6,
    },
    letterSpacings: {
      tighter: '-0.04em',
      tight: '-0.02em',
      normal: '0',
      wide: '0.02em',
      wider: '0.04em',
      widest: '0.1em',
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '96px',
      container: '1200px',
    },
    radii: {
      1: '2px',
      2: '4px',
      3: '8px',
      round: '50%',
      pill: '9999px',
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
  },
  utils: {
    m: (value: any) => ({ margin: value }),
    mt: (value: any) => ({ marginTop: value }),
    mr: (value: any) => ({ marginRight: value }),
    mb: (value: any) => ({ marginBottom: value }),
    ml: (value: any) => ({ marginLeft: value }),
    mx: (value: any) => ({ marginLeft: value, marginRight: value }),
    my: (value: any) => ({ marginTop: value, marginBottom: value }),
    p: (value: any) => ({ padding: value }),
    pt: (value: any) => ({ paddingTop: value }),
    pr: (value: any) => ({ paddingRight: value }),
    pb: (value: any) => ({ paddingBottom: value }),
    pl: (value: any) => ({ paddingLeft: value }),
    px: (value: any) => ({ paddingLeft: value, paddingRight: value }),
    py: (value: any) => ({ paddingTop: value, paddingBottom: value }),
  },
});

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  'html, body': {
    height: '100%',
    fontFamily: '$sans',
    backgroundColor: '$background',
    color: '$textPrimary',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    lineHeight: '$body',
  },
  'a': {
    color: 'inherit',
    textDecoration: 'none',
  },
  'img, picture, video, canvas, svg': {
    display: 'block',
    maxWidth: '100%',
  },
  'input, button, textarea, select': {
    font: 'inherit',
  },
  'p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: 'break-word',
  }
});
