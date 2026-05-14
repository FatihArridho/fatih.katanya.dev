import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
  title: 'Fatih Arridho | Developer',
  description:
    'Personal landing page Fatih Arridho, full-stack developer, open source enthusiast, and code artisan.',
  icons: {
    icon: '/favicon.ico'
  },
  openGraph: {
    title: 'Fatih Arridho | Developer',
    description:
      'Full-Stack Developer | Open Source Enthusiast | Code Artisan',
    type: 'website'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetBrainsMono.variable}`}>
        {children}
      </body>
    </html>
  )
}