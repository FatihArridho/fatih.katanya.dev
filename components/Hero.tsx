'use client'

import { TypeAnimation } from 'react-type-animation'
import MatrixRain from './MatrixRain'

/**
 * Hero section introducing the developer. This component uses the
 * react-type-animation library to render a typing cursor effect, a glitch
 * animation on the name, and matrix rain in the background. Two call to
 * action buttons provide smooth anchors to the projects and contact
 * sections. A command line hint below encourages exploration of the about
 * section.
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden"
    >
      {/* Background animation */}
      <MatrixRain />
      <h1 className="text-5xl md:text-7xl font-mono font-bold text-neon animate-glitch select-none">
        Fatih Arridho
      </h1>
      <div className="mt-4 font-mono text-lg md:text-2xl text-neon">
        <TypeAnimation
          sequence={["> Hello, world! I'm Fatih Arridho_", 2000, '']}
          speed={50}
          repeat={Infinity}
          cursor={false}
        />
      </div>
      <p className="mt-4 max-w-xl text-gray-400 font-sans">
        Full‑Stack Developer | Open Source Enthusiast | Code
        Artisan
      </p>
      <div className="mt-8 flex space-x-4">
        <a
          href="#projects"
          className="border border-neon text-neon px-5 py-2 rounded font-mono hover:bg-neon hover:text-background transition-colors"
        >
          [Lihat Projek]
        </a>
        <a
          href="#contact"
          className="border border-neon text-neon px-5 py-2 rounded font-mono hover:bg-neon hover:text-background transition-colors"
        >
          [Hubungi Saya]
        </a>
      </div>
      <div className="mt-6 font-mono text-neon text-sm select-none">$ cat about.txt</div>
    </section>
  )
}