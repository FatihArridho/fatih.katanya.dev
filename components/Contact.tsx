'use client'

import { useState } from 'react'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

/**
 * Contact section providing a simple form that simulates email sending.
 * Upon submission a status message appears as a terminal prompt. Social
 * icons beneath the form offer quick links to various profiles. Update
 * the URLs to match your own accounts or pull them from environment
 * variables.
 */
export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<string | null>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // In a real app you'd send this data to a backend or API route.
    setStatus('> Message sent successfully!')
    setName('')
    setEmail('')
    setMessage('')
    setTimeout(() => setStatus(null), 5000)
  }

  const social = {
    github: 'https://github.com/fatiharridho',
    linkedin: 'https://www.linkedin.com/in/fatiharridho/',
    twitter: 'https://x.com/fatiharridho',
    email: 'mailto:fatiharridho@example.com',
  }

  return (
    <section id="contact" className="py-20 px-4 max-w-3xl mx-auto">
      <div className="terminal-divider">
        <span>{String.raw`/* —————————————— */`}</span>
      </div>
      <h2 className="text-3xl font-mono text-neon mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-mono mb-1 text-neon" htmlFor="name">
            Nama
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded border border-gray-700 bg-gray-800 p-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block font-mono mb-1 text-neon" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded border border-gray-700 bg-gray-800 p-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block font-mono mb-1 text-neon" htmlFor="message">
            Pesan
          </label>
          <textarea
            id="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full rounded border border-gray-700 bg-gray-800 p-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon"
            placeholder="Your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="border border-neon text-neon px-6 py-2 rounded font-mono hover:bg-neon hover:text-background transition-colors"
        >
          [Kirim Pesan]
        </button>
        {status && (
          <div className="mt-2 text-neon font-mono">{status}</div>
        )}
      </form>
      <div className="mt-8 flex justify-center space-x-6">
        <a
          href={social.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-neon hover:text-white transition-colors"
        >
          <Github size={28} />
        </a>
        <a
          href={social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-neon hover:text-white transition-colors"
        >
          <Linkedin size={28} />
        </a>
        <a
          href={social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-neon hover:text-white transition-colors"
        >
          <Twitter size={28} />
        </a>
        <a
          href={social.email}
          aria-label="Email"
          className="text-neon hover:text-white transition-colors"
        >
          <Mail size={28} />
        </a>
      </div>
    </section>
  )
}