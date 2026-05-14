import {
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Rocket,
  Server,
  Terminal
} from 'lucide-react'
import TerminalWindow from './TerminalWindow'

const skills = [
  { label: 'React', icon: Layers },
  { label: 'Next.js', icon: Rocket },
  { label: 'TypeScript', icon: Code2 },
  { label: 'Node.js', icon: Server },
  { label: 'Tailwind', icon: Cpu },
  { label: 'PostgreSQL', icon: Database },
  { label: 'Git', icon: GitBranch },
  { label: 'CLI Tools', icon: Terminal }
]

export default function About() {
  return (
    <section id="about" className="relative px-5 py-28 md:px-8">
      <div className="absolute left-10 top-32 h-56 w-56 rounded-full bg-primary/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-accent">
            01 / About
          </p>
          <h2 className="text-5xl font-black tracking-[-0.04em] text-soft-white md:text-7xl">
            About Me
          </h2>
          <div className="gradient-line mt-5" />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-br from-primary to-accent opacity-60 blur-xl" />
            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.035] p-5 shadow-glass backdrop-blur-2xl">
              <div className="grid aspect-square place-items-center rounded-[2rem] bg-gradient-to-br from-primary/35 via-white/[0.04] to-accent/25">
                <div className="grid h-44 w-44 place-items-center rounded-full border border-white/20 bg-[#0f0f1a]/70 shadow-glow">
                  <span className="text-6xl font-black tracking-[-0.08em] text-soft-white">
                    FA
                  </span>
                </div>
              </div>
            </div>
          </div>

          <TerminalWindow title="profile.ts">
            <div className="space-y-6">
              <p className="text-lg leading-8 text-soft-muted md:text-xl md:leading-9">
                Fatih Arridho is a passionate developer who loves building
                thoughtful web experiences, polished interfaces, and open-source
                experiments. He treats code as both engineering and expression:
                precise enough to scale, beautiful enough to remember.
              </p>

              <p className="text-lg leading-8 text-soft-muted md:text-xl md:leading-9">
                His work lives around modern web technologies, clean component
                architecture, delightful motion, and the belief that great
                software should feel alive.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {skills.map((skill) => {
                  const Icon = skill.icon

                  return (
                    <span
                      key={skill.label}
                      className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-soft-white transition duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow"
                    >
                      <Icon
                        size={16}
                        className="text-accent transition group-hover:rotate-6"
                      />
                      {skill.label}
                    </span>
                  )
                })}
              </div>

              <blockquote className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-lg italic leading-8 text-soft-muted">
                <span className="absolute -top-5 left-5 text-6xl font-black text-primary/30">
                  “
                </span>
                I don’t just want software to work. I want it to feel intentional,
                memorable, and human.
              </blockquote>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  )
}