import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Fatih Arridho | Creative Developer',
  description:
    'Portfolio of Fatih Arridho, a creative developer crafting digital experiences with clean code and bold design.',
  icons: {
    icon: '/favicon.ico'
  },
  openGraph: {
    title: 'Fatih Arridho | Creative Developer',
    description:
      'Where code meets art. Modern portfolio of Fatih Arridho, creative developer and open source enthusiast.',
    type: 'website',
    url: 'https://fatih.katanya.dev',
    siteName: 'Fatih Arridho'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fatih Arridho | Creative Developer',
    description:
      'Where code meets art. Modern portfolio of Fatih Arridho.'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jetBrainsMono.variable}>
      <body>
        <div className="flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  )
}