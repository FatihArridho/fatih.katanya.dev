'use client'

import { useEffect, useState } from 'react'

/**
 * Listens for the famous Konami Code. When the sequence is entered, the
 * component displays a playful terminal command. This easter egg does not
 * interfere with any other functionality and has no server‑side impact.
 */
export default function Konami() {
  const [show, setShow] = useState(false)
  useEffect(() => {
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
      'a',
    ]
    let index = 0
    function onKey(e: KeyboardEvent) {
      const key = e.key
      if (key === sequence[index]) {
        index++
        if (index === sequence.length) {
          index = 0
          setShow(true)
          // hide message after a few seconds
          setTimeout(() => setShow(false), 4000)
        }
      } else {
        index = 0
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
  return show ? (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-black border border-neon p-4 rounded-lg shadow-neon font-mono text-neon z-50">
      <p className="text-center">$ sudo make me a sandwich</p>
    </div>
  ) : null
}