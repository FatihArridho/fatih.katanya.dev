'use client'

import Link from 'next/link'
import { Code2, Moon } from 'lucide-react'

const navItems = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Projects',
    href: '#projects'
  },
  {
    label: 'Contact',
    href: '#contact'
  }
]

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#00ff41]/10 bg-[#0a0a0a]/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="#home"
          className="font-code flex items-center gap-2 text-sm font-bold text-[#00ff41] md:text-base"
        >
          <Code2 size={22} />
          <span>Fatih Arridho</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-code text-sm text-zinc-400 transition hover:text-[#00ff41]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label="Dark mode forced"
          className="rounded-md border border-[#00ff41]/40 p-2 text-[#00ff41] transition hover:border-[#00ff41] hover:bg-[#00ff41] hover:text-black"
        >
          <Moon size={18} />
        </button>
      </nav>
    </header>
  )
}