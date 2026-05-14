'use client'

import { useEffect, useState } from 'react'

const sequence = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a'
]

export default function Konami() {
  const [position, setPosition] = useState(0)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key
      const expected = sequence[position]

      if (key === expected) {
        const next = position + 1

        if (next === sequence.length) {
          setActive(true)
          setPosition(0)

          window.setTimeout(() => setActive(false), 4200)
        } else {
          setPosition(next)
        }
      } else {
        setPosition(0)
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => window.removeEventListener('keydown', onKeyDown)
  }, [position])

  if (!active) return null

  return (
    <div className="fixed bottom-6 right-6 z-[90] max-w-sm rounded-3xl border border-white/10 bg-[#0f0f1a]/90 p-5 text-soft-white shadow-glow backdrop-blur-xl animate-fadeInUp">
      <p className="font-bold">🕹️ Cheat activated</p>
      <p className="mt-1 text-sm text-soft-muted">
        Infinite creativity mode ON.
      </p>
    </div>
  )
}