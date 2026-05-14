/**
 * Footer component containing attribution and a link to scroll back to the
 * top of the page. It uses simple styling consistent with the neon
 * theme.
 */
export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-gray-500 font-mono">
      <p>
        © 2025 Fatih Arridho — Crafted with ⌨️ and ☕ — Deployed on ▲ Vercel
      </p>
      <p className="mt-2">
        <a href="#home" className="text-neon hover:underline">
          [Back to Top]
        </a>
      </p>
    </footer>
  )
}