/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '375px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        primary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f8a5d8',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          pink: 'hsl(326 91% 54% / <alpha-value>)',
          pink2: 'hsl(334 100% 50% / <alpha-value>)',
          pink3: 'hsl(326 100% 68% / <alpha-value>)',
        },
        secondary: {
          teal: 'hsl(171 100% 35% / <alpha-value>)',
          teal2: 'hsl(171 100% 45% / <alpha-value>)',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          base: '#030A0D',
          base2: '#080F12',
          base3: '#0D1519',
          base4: '#111C21',
          card: '#0D1A20',
        },
        text: {
          white: '#ffffff',
          light: 'rgba(255, 255, 255, 0.7)',
          muted: 'rgba(255, 255, 255, 0.3)',
          disabled: 'rgba(255, 255, 255, 0.06)',
        },
        border: {
          primary: 'rgba(232, 0, 125, 0.18)',
          secondary: 'rgba(255, 255, 255, 0.07)',
        }
      },
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
        'dm': ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'xs': ['clamp(0.65rem, 1.2vw, 0.75rem)', { lineHeight: '1rem' }],
        'sm': ['clamp(0.78rem, 1.5vw, 0.875rem)', { lineHeight: '1.125rem' }],
        'base': ['clamp(0.9rem, 1.75vw, 1rem)', { lineHeight: '1.375rem' }],
        'lg': ['clamp(1rem, 2vw, 1.125rem)', { lineHeight: '1.5rem' }],
        'xl': ['clamp(1.1rem, 2.25vw, 1.25rem)', { lineHeight: '1.75rem' }],
        '2xl': ['clamp(1.15rem, 2.5vw, 1.5rem)', { lineHeight: '1.75rem' }],
        '3xl': ['clamp(1.5rem, 3vw, 1.875rem)', { lineHeight: '2rem' }],
        '4xl': ['clamp(2rem, 4vw, 2.5rem)', { lineHeight: '2.5rem' }],
        '5xl': ['clamp(2.4rem, 5vw, 3rem)', { lineHeight: '1' }],
        '6xl': ['clamp(2.8rem, 6.5vw, 5.5rem)', { lineHeight: '1.02' }],
      },
      spacing: {
        'gutter-xs': 'clamp(1rem, 2vw, 1.5rem)',
        'gutter-sm': 'clamp(1.5rem, 3vw, 2rem)',
        'gutter-md': 'clamp(2rem, 4vw, 2.5rem)',
        'gutter-lg': 'clamp(2.5rem, 5vw, 3rem)',
      },
      maxWidth: {
        'container-sm': '95%',
        'container-md': 'clamp(320px, 95vw, 640px)',
        'container-lg': 'clamp(640px, 95vw, 1024px)',
        'container-xl': 'clamp(1024px, 95vw, 1280px)',
        'container-2xl': 'clamp(1280px, 95vw, 1440px)',
      },
      animation: {
        drift: 'drift 10s ease-in-out infinite',
        blink: 'blink 2s infinite',
        fadeUp: 'fadeUp 0.8s ease both',
        floatA: 'floatA 7s ease-in-out infinite',
        scrollFlow: 'scrollFlow 2s ease infinite',
      },
      keyframes: {
        drift: {
          '0%,100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-25px) scale(1.04)' },
        },
        blink: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(1.3)' },
        },
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(28px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        floatA: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        scrollFlow: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '51%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
      },
      backgroundImage: {
        'gradient-pink': 'linear-gradient(135deg, #E8007D, #FF6EC4)',
        'gradient-teal': 'linear-gradient(135deg, #00B4A0, #00E5CC)',
        'gradient-full': 'linear-gradient(135deg, #030A0D 0%, #12002D 50%, #030A0D 100%)',
      },
      backdropFilter: {
        'blur-lg': 'blur(24px)',
        'blur-md': 'blur(12px)',
      },
      boxShadow: {
        'pink': '0 16px 40px rgba(232, 0, 125, 0.45)',
        'pink-lg': '0 24px 50px rgba(232, 0, 125, 0.18)',
        'teal': '0 12px 30px rgba(0, 180, 160, 0.4)',
        'glow': '0 0 30px rgba(232, 0, 125, 0.3)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '350': '350ms',
        '700': '700ms',
        '900': '900ms',
        '1000': '1000ms',
      },
    },
  },
  plugins: [],
}

