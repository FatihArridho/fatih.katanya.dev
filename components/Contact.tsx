'use client'

import { useState } from 'react'
import { Github, Linkedin, Mail, Send, Twitter } from 'lucide-react'
import TerminalWindow from './TerminalWindow'

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/fatiharridho',
    icon: Github,
    glow: 'hover:shadow-glow'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/fatiharridho/',
    icon: Linkedin,
    glow: 'hover:shadow-glow'
  },
  {
    label: 'Twitter / X',
    href: 'https://x.com/fatiharridho',
    icon: Twitter,
    glow: 'hover:shadow-teal'
  },
  {
    label: 'Email',
    href: 'mailto:fatiharridho@example.com',
    icon: Mail,
    glow: 'hover:shadow-teal'
  }
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()

    window.setTimeout(() => setSent(false), 4200)
  }

  return (
    <section id="contact" className="relative px-5 py-28 md:px-8">
      <div className="absolute left-16 top-20 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-accent">
            03 / Contact
          </p>
          <h2 className="text-5xl font-black tracking-[-0.04em] text-soft-white md:text-7xl">
            Let&apos;s Connect
          </h2>
          <div className="gradient-line mt-5" />

          <p className="mt-8 max-w-xl text-lg leading-8 text-soft-muted md:text-xl md:leading-9">
            Have an idea, collaboration, or a project that deserves a sharp
            interface? Send a message and let&apos;s craft something memorable.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {socials.map((social) => {
              const Icon = social.icon

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className={`grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-soft-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:rotate-3 hover:border-primary/60 ${social.glow}`}
                >
                  <Icon size={24} />
                </a>
              )
            })}
          </div>
        </div>

        <TerminalWindow title="send-message.ts">
          <form onSubmit={onSubmit} className="space-y-8">
            <div className="group relative">
              <input
                required
                name="name"
                id="name"
                className="peer w-full border-b border-white/12 bg-transparent px-0 pb-3 pt-6 text-soft-white outline-none transition focus:border-accent"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="pointer-events-none absolute left-0 top-5 text-soft-muted transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Nama
              </label>
            </div>

            <div className="group relative">
              <input
                required
                type="email"
                name="email"
                id="email"
                className="peer w-full border-b border-white/12 bg-transparent px-0 pb-3 pt-6 text-soft-white outline-none transition focus:border-accent"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="pointer-events-none absolute left-0 top-5 text-soft-muted transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Email
              </label>
            </div>

            <div className="group relative">
              <textarea
                required
                name="message"
                id="message"
                rows={5}
                className="peer w-full resize-none border-b border-white/12 bg-transparent px-0 pb-3 pt-6 text-soft-white outline-none transition focus:border-accent"
                placeholder=" "
              />
              <label
                htmlFor="message"
                className="pointer-events-none absolute left-0 top-5 text-soft-muted transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Pesan
              </label>
            </div>

            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-4 font-bold text-white shadow-glow transition duration-300 hover:scale-[1.02]"
            >
              Send Message
              <Send size={18} className="transition group-hover:translate-x-1" />
            </button>
          </form>
        </TerminalWindow>
      </div>

      {sent && (
        <div className="fixed left-1/2 top-8 z-[80] -translate-x-1/2 rounded-full border border-white/10 bg-[#0f0f1a]/90 px-5 py-3 text-sm font-bold text-soft-white shadow-glow backdrop-blur-xl animate-fadeInUp">
          Message sent! I&apos;ll get back to you soon. 🚀
        </div>
      )}
    </section>
  )
}