'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Konami from '@/components/Konami'

export default function HomePage() {
  const [booting, setBooting] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setBooting(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (booting) {
    return (
      <main className="boot-screen">
        <pre className="boot-text">
{`███████╗ █████╗ ████████╗██╗██╗  ██╗
██╔════╝██╔══██╗╚══██╔══╝██║██║  ██║
█████╗  ███████║   ██║   ██║███████║
██╔══╝  ██╔══██║   ██║   ██║██╔══██║
██║     ██║  ██║   ██║   ██║██║  ██║
╚═╝     ╚═╝  ╚═╝   ╚═╝   ╚═╝╚═╝  ╚═╝

FATIH ARRIDHO OS v1.0
Booting terminal interface...
Loading open-source modules...
Status: OK`}
        </pre>
      </main>
    )
  }

  return (
    <>
      <Konami />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}