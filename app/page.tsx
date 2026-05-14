import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Konami from '@/components/Konami'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Suspense fallback={<Projects.Skeleton />}>
          <Projects />
        </Suspense>
        <Contact />
      </main>
      <Footer />
      <Konami />
    </>
  )
}