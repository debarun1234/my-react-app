import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

// Advanced, complex theme configuration with modern design system
const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  
  // Semantic color tokens for better theming
  semanticTokens: {
    colors: {
      'glass-bg': {
        default: 'rgba(255, 255, 255, 0.1)',
        _dark: 'rgba(255, 255, 255, 0.05)',
      },
      'glass-border': {
        default: 'rgba(255, 255, 255, 0.2)',
        _dark: 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
  
  colors: {
    brand: {
      50: '#e6f3ff',
      100: '#b3d9ff',
      200: '#80bfff',
      300: '#4da6ff',
      400: '#1a8cff',
      500: '#0073e6',
      600: '#005ab3',
      700: '#004080',
      800: '#00264d',
      900: '#000d1a',
    },
    accent: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
    purple: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
    },
  },
  
  fonts: {
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
    mono: "'Fira Code', 'Monaco', 'Courier New', monospace",
  },
  
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  
  // Component-level customizations
  components: {
    Button: {
      baseStyle: {
        fontWeight: '600',
        borderRadius: 'xl',
        transition: 'all 0.3s ease',
      },
      variants: {
        solid: (props) => ({
          bg: mode('brand.500', 'brand.400')(props),
          color: 'white',
          _hover: {
            bg: mode('brand.600', 'brand.500')(props),
            transform: 'translateY(-2px)',
            boxShadow: 'xl',
          },
          _active: {
            transform: 'translateY(0)',
          },
        }),
        outline: (props) => ({
          borderColor: mode('brand.500', 'brand.400')(props),
          color: mode('brand.500', 'brand.400')(props),
          borderWidth: '2px',
          _hover: {
            bg: mode('brand.50', 'whiteAlpha.100')(props),
            transform: 'translateY(-2px)',
          },
        }),
        ghost: (props) => ({
          color: mode('brand.600', 'brand.300')(props),
          _hover: {
            bg: mode('brand.50', 'whiteAlpha.100')(props),
            transform: 'translateY(-2px)',
          },
        }),
        glass: (props) => ({
          bg: 'glass-bg',
          backdropFilter: 'blur(10px)',
          border: '1px solid',
          borderColor: 'glass-border',
          color: mode('gray.800', 'white')(props),
          _hover: {
            bg: mode('whiteAlpha.300', 'whiteAlpha.200')(props),
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
        }),
      },
      sizes: {
        lg: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
    },
    
    Card: {
      baseStyle: {
        container: {
          bg: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
          borderRadius: '2xl',
          border: '1px solid',
          borderColor: 'rgba(255, 255, 255, 0.1)',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          _hover: {
            transform: 'translateY(-8px)',
            boxShadow: '0 8px 32px 0 rgba(109, 40, 217, 0.4)',
            borderColor: 'rgba(109, 40, 217, 0.5)',
            bg: 'rgba(255, 255, 255, 0.08)',
          },
        },
      },
      variants: {
        glass: {
          container: {
            bg: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px 0 rgba(109, 40, 217, 0.2)',
          },
        },
        elevated: {
          container: {
            bg: 'rgba(255, 255, 255, 0.08)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
            borderRadius: '2xl',
            _hover: {
              boxShadow: '0 25px 50px -12px rgba(109, 40, 217, 0.5)',
              transform: 'translateY(-4px)',
            },
          },
        },
      },
    },
    
    Heading: {
      baseStyle: {
        fontWeight: '700',
        color: 'white',
        letterSpacing: '-0.02em',
      },
      sizes: {
        '4xl': {
          fontSize: ['48px', '56px', '64px'],
          lineHeight: '1.1',
        },
        '3xl': {
          fontSize: ['36px', '42px', '48px'],
          lineHeight: '1.2',
        },
        '2xl': {
          fontSize: ['30px', '36px', '42px'],
          lineHeight: '1.2',
        },
      },
    },
    
    Text: {
      baseStyle: {
        color: 'gray.200',
        lineHeight: '1.7',
      },
    },
    
    Container: {
      baseStyle: {
        bg: 'transparent',
      },
    },
    
    Badge: {
      baseStyle: {
        borderRadius: 'full',
        px: '3',
        py: '1',
        textTransform: 'none',
        fontWeight: '600',
      },
      variants: {
        solid: (props) => ({
          bg: mode('brand.500', 'brand.400')(props),
          color: 'white',
        }),
        subtle: (props) => ({
          bg: mode('brand.100', 'brand.900')(props),
          color: mode('brand.700', 'brand.200')(props),
        }),
        glass: (props) => ({
          bg: 'glass-bg',
          backdropFilter: 'blur(10px)',
          border: '1px solid',
          borderColor: 'glass-border',
          color: mode('gray.800', 'white')(props),
        }),
      },
    },
    
    Progress: {
      baseStyle: {
        track: {
          borderRadius: 'full',
          bg: 'gray.200',
          _dark: {
            bg: 'gray.700',
          },
        },
        filledTrack: {
          borderRadius: 'full',
          bgGradient: 'linear(to-r, brand.400, purple.400, accent.400)',
          transition: 'all 0.3s ease',
        },
      },
      sizes: {
        lg: {
          track: { h: '6' },
        },
      },
    },
    
    Divider: {
      baseStyle: (props) => ({
        borderColor: mode('gray.200', 'gray.700')(props),
        opacity: 1,
      }),
    },
  },
  
  // Global styles
  styles: {
    global: (props) => ({
      html: {
        scrollBehavior: 'smooth',
        fontSize: '16px',
      },
      body: {
        position: 'relative',
        bg: '#0d1117',
        bgImage: `
          linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
        `,
        bgSize: '80px 80px',
        color: 'white',
        fontFeatureSettings: '"kern" 1, "liga" 1, "calt" 1',
        fontOpticalSizing: 'auto',
        textRendering: 'optimizeLegibility',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        minHeight: '100vh',
      },
      'body::before': {
        content: '""',
        position: 'fixed',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: `
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 200px,
            rgba(99, 102, 241, 0.03) 200px,
            rgba(99, 102, 241, 0.03) 400px
          )
        `,
        animation: 'diagonalMove 60s linear infinite',
        zIndex: -2,
        pointerEvents: 'none',
      },
      'body::after': {
        content: '""',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle 800px at 20% 20%, rgba(99, 102, 241, 0.08), transparent),
          radial-gradient(circle 600px at 80% 80%, rgba(168, 85, 247, 0.08), transparent),
          radial-gradient(circle 700px at 50% 50%, rgba(139, 92, 246, 0.05), transparent)
        `,
        zIndex: -1,
        pointerEvents: 'none',
      },
      '#root': {
        bg: 'transparent',
      },
      'section': {
        bg: 'transparent',
      },
      '*::selection': {
        bg: mode('brand.200', 'brand.700')(props),
        color: mode('gray.900', 'white')(props),
      },
      '::-webkit-scrollbar': {
        width: '10px',
        height: '10px',
      },
      '::-webkit-scrollbar-track': {
        bg: mode('gray.100', 'gray.900')(props),
      },
      '::-webkit-scrollbar-thumb': {
        bg: mode('gray.400', 'gray.600')(props),
        borderRadius: '8px',
        border: '2px solid',
        borderColor: mode('gray.100', 'gray.900')(props),
      },
      '::-webkit-scrollbar-thumb:hover': {
        bg: mode('gray.500', 'gray.500')(props),
      },
      // Better link styling
      'a': {
        color: mode('brand.600', 'brand.300')(props),
        transition: 'all 0.2s',
        _hover: {
          color: mode('brand.700', 'brand.200')(props),
          textDecoration: 'underline',
        },
      },
      // Ensure main app containers are transparent
      '#root': {
        bg: 'transparent !important',
      },
      'section': {
        bg: 'transparent !important',
      },
      '.chakra-container': {
        bg: 'transparent !important',
      },
      // Animation keyframes
      '@keyframes diagonalMove': {
        '0%': {
          transform: 'translate(0, 0)',
        },
        '100%': {
          transform: 'translate(400px, 400px)',
        },
      },
    }),
  },
  
  // Spacing scale
  space: {
    px: '1px',
    0: '0',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },
  
  // Responsive breakpoints
  breakpoints: {
    sm: '30em',    // 480px
    md: '48em',    // 768px
    lg: '62em',    // 992px
    xl: '80em',    // 1280px
    '2xl': '96em', // 1536px
  },
  
  // Shadows with more depth
  shadows: {
    xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
  },
});

export default theme;
