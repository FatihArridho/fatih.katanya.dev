'use client'

import { Github, ArrowRight, Sparkles } from 'lucide-react'
import ParticleField from './MatrixRain'

function scrollToProjects() {
  document.getElementById('projects')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 md:px-8">
      <div className="absolute inset-0 opacity-70">
        <ParticleField />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-16 right-8 h-72 w-72 rounded-full bg-accent/10 blur-[130px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="reveal is-visible">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-soft-muted backdrop-blur-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            <code className="font-mono">Available for projects</code>
          </div>

          <h1 className="max-w-4xl text-6xl font-black leading-[0.92] tracking-[-0.06em] text-soft-white md:text-8xl lg:text-9xl">
            Fatih <span className="gradient-text">Arridho</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-soft-muted md:text-2xl md:leading-10">
            Crafting digital experiences with clean code, bold design, and a
            little bit of creative chaos.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-4 font-bold text-white shadow-glow transition duration-300 hover:scale-105"
            >
              Lihat Projek
              <ArrowRight className="transition group-hover:translate-x-1" size={20} />
            </button>

            <a
              href="https://github.com/fatiharridho"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/12 bg-white/[0.03] px-7 py-4 font-bold text-soft-white backdrop-blur-xl transition duration-300 hover:scale-105 hover:border-primary/60 hover:shadow-glow"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-3 gap-4">
            {[
              ['15+', 'Projects'],
              ['3+', 'Years Coding'],
              ['∞', 'Curiosity']
            ].map(([number, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl"
              >
                <div className="text-3xl font-black text-soft-white">{number}</div>
                <div className="mt-1 text-sm text-soft-muted">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden min-h-[540px] lg:block">
          <div className="absolute right-0 top-0 h-full w-full rounded-[3rem] border border-white/10 bg-white/[0.03] p-5 shadow-glass backdrop-blur-2xl">
            <div className="h-full rounded-[2.2rem] border border-white/10 bg-[#0f0f1a]/60 p-6">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
              </div>

              <div className="mt-10 font-mono text-sm text-soft-muted">
                <p className="text-accent">$ whoami</p>
                <p className="mt-3 text-soft-white">fatih_arridho</p>

                <p className="mt-8 text-accent">$ current_focus</p>
                <p className="mt-3 leading-7 text-soft-white">
                  building expressive interfaces
                  <br />
                  shipping open-source experiments
                  <br />
                  turning ideas into products
                </p>

                <p className="mt-8 text-accent">$ stack</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Next.js', 'TypeScript', 'React', 'Node.js', 'Tailwind'].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-soft-white"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="absolute bottom-10 right-10 flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-soft-muted">
                <Sparkles size={16} className="text-accent" />
                where code meets art
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="scroll-indicator absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-center text-xs uppercase tracking-[0.35em] text-soft-muted"
      >
        <span className="mx-auto mb-3 block h-10 w-px bg-gradient-to-b from-primary to-transparent" />
        Scroll
      </button>
    </section>
  )
}