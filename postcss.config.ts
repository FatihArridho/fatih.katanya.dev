/**
 * PostCSS configuration used by Tailwind CSS. This file registers the
 * Tailwind CSS plugin followed by Autoprefixer to ensure vendor prefixes
 * are automatically added during the build. No further modifications are
 * necessary as Next.js picks up this configuration automatically.
 */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}