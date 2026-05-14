/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Konami from '../components/Konami'

/**
 * The root page composes all sections of the landing page. It includes a
 * booting screen that displays an ASCII banner before revealing the main
 * content. Because the boot screen uses client‑side state to fade away
 * automatically after a short delay, this component must be a client
 * component.
 */
export default function Page() {
  const [booting, setBooting] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (booting) {
    return (
      <div className="boot-screen text-neon text-center">
        <pre className="text-3xl md:text-5xl leading-none">
{String.raw`  _____      _   _ _     _     _   _       _     _  
 |  ___|    | | | (_)   (_)   | | | |     | |   | | 
 | |_ _ __  | |_| |_ ___ _  __| | | | ___ | |__ | | 
 |  _| '_ \ |  _  | / __| |/ _\` | | |/ _ \| '_ \| | 
 | | | | | || | | | \__ \ | (_| | | | (_) | |_) |_| 
 \_| |_| |_\_\_| |_/_|___/_|\__,_| |_|\___/|_.__/(_) 

       FATIH ARRIDHO OS v1.0 booting...`}
        </pre>
      </div>
    )
  }

  return (
    <>
      {/* Konami code listener is globally mounted */}
      <Konami />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
