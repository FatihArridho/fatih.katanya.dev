import type { Config } from 'tailwindcss'

/**
 * Tailwind configuration for the Fatih Arridho personal site.
 *
 * The theme extends the default palette with a neon green accent and a deep
 * black background reminiscent of old terminal displays. It also defines
 * custom keyframes and animations for the glitch effect used in the hero
 * section and a shimmer animation for loading skeletons. Fonts are wired up
 * via CSS variables defined in the root layout.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: '#00ff41',
        background: '#0a0a0a'
      },
      fontFamily: {
        mono: ['var(--font-jetbrains)', 'monospace'],
        sans: ['var(--font-inter)', 'sans-serif']
      },
      keyframes: {
        glitch: {
          '0%, 100%': { textShadow: '2px 2px #00ff41, -2px -2px #00ff41' },
          '20%': { textShadow: '-2px 2px #00ff41, 2px -2px #00ff41' },
          '40%': { textShadow: '2px -2px #00ff41, -2px 2px #00ff41' },
          '60%': { textShadow: '-2px -2px #00ff41, 2px 2px #00ff41' },
          '80%': { textShadow: '2px 2px #00ff41, -2px -2px #00ff41' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        }
      },
      animation: {
        glitch: 'glitch 2s infinite',
        shimmer: 'shimmer 2s infinite linear'
      },
      boxShadow: {
        neon: '0 0 6px #00ff41, 0 0 12px #00ff41'
      }
    }
  },
  plugins: []
}

export default config