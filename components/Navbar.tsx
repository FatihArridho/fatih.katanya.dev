import Link from 'next/link'
import { Code, Moon, Sun } from 'lucide-react'
import { useState } from 'react'

/**
 * The navigation bar is a server component by default, but we include
 * client‑side state for the dark/light toggle. Because dark mode is
 * enforced in this design, the toggle is nonfunctional and only serves as
 * a decorative element. The bar is sticky, semi‑transparent and uses a
 * backdrop blur to integrate seamlessly with the matrix rain background.
 */
export default function Navbar() {
  // Dark mode toggle state (unused but can be extended).
  const [dark] = useState(true)
  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-md bg-black/50 py-3 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Code className="text-neon" size={24} />
        <span className="font-mono text-xl text-neon">Fatih Arridho</span>
      </div>
      <div className="hidden md:flex items-center space-x-6 font-mono text-sm">
        <Link href="#home" className="hover:text-neon transition-colors">Home</Link>
        <Link href="#about" className="hover:text-neon transition-colors">About</Link>
        <Link href="#projects" className="hover:text-neon transition-colors">Projects</Link>
        <Link href="#contact" className="hover:text-neon transition-colors">Contact</Link>
      </div>
      <button
        aria-label="Toggle dark mode (forced)"
        className="ml-4 p-2 rounded-md border border-neon text-neon hover:bg-neon hover:text-background transition-colors"
        onClick={() => { /* intentionally empty: dark mode is forced */ }}
      >
        {dark ? <Moon size={16} /> : <Sun size={16} />}
      </button>
    </nav>
  )
}