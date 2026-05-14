import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6c63ff',
        accent: '#00d4aa',
        dark: {
          950: '#0f0f1a',
          900: '#141425',
          850: '#1a1a2e'
        },
        soft: {
          white: '#e4e4eb',
          muted: '#a0a0b8'
        },
        surface: 'rgba(255,255,255,0.03)'
      },
      fontFamily: {
        sans: ['Satoshi', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'monospace']
      },
      boxShadow: {
        glow: '0 0 32px rgba(108, 99, 255, 0.32)',
        teal: '0 0 32px rgba(0, 212, 170, 0.24)',
        glass: '0 24px 80px rgba(0, 0, 0, 0.35)'
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(28px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-16px)'
          }
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 24px rgba(108, 99, 255, 0.24)'
          },
          '50%': {
            boxShadow: '0 0 48px rgba(0, 212, 170, 0.28)'
          }
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-200% 0'
          },
          '100%': {
            backgroundPosition: '200% 0'
          }
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 0.9s ease both',
        float: 'float 6s ease-in-out infinite',
        glow: 'pulseGlow 2.4s ease-in-out infinite',
        shimmer: 'shimmer 1.6s linear infinite'
      }
    }
  },
  plugins: []
}

export default config