'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' }
]

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/10 bg-[#0f0f1a]/70 shadow-glass backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-3"
          aria-label="Back to top"
        >
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] transition group-hover:border-primary/60 group-hover:shadow-glow">
            <span className="h-3 w-3 rounded-full bg-gradient-to-br from-primary to-accent" />
          </span>
          <span className="text-sm font-black tracking-[0.35em] text-soft-white">
            FATIH
          </span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="group relative text-sm font-medium text-soft-muted transition hover:text-soft-white"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        <button
          onClick={() => setOpen((value) => !value)}
          className="relative z-50 grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] text-soft-white backdrop-blur-xl transition hover:border-primary/60 md:hidden"
          aria-label="Open mobile menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        className={`fixed right-0 top-0 z-40 h-screen w-[78%] max-w-sm border-l border-white/10 bg-[#0f0f1a]/88 p-8 pt-28 backdrop-blur-2xl transition-transform duration-500 md:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setOpen(false)
                setTimeout(() => scrollToSection(link.id), 120)
              }}
              className="group flex items-center justify-between border-b border-white/10 pb-4 text-left text-2xl font-bold text-soft-white"
            >
              {link.label}
              <span className="text-primary transition group-hover:translate-x-2">
                →
              </span>
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}