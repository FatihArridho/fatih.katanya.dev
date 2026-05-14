import './globals.css'
import type { Metadata } from 'next'
import { JetBrains_Mono, Inter } from 'next/font/google'

// Configure the JetBrains Mono and Inter fonts. Using the `variable`
// option exposes a CSS custom property we can reference in Tailwind.
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Fatih Arridho | Developer',
  description: 'Personal landing page of Fatih Arridho: full‑stack developer, open source enthusiast and code artisan.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Fatih Arridho',
    description: 'Full‑Stack Developer, Open Source Enthusiast, Code Artisan',
    url: 'https://fatiharridho.vercel.app',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrains.variable} ${inter.variable}`}> 
      <body className="bg-background text-white">
        {children}
      </body>
    </html>
  )
}