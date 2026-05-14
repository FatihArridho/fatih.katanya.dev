'use client'

import { useEffect, useRef } from 'react'

/**
 * Renders a matrix rain animation using the Canvas API. Characters fall
 * down the screen creating a subtle dynamic background reminiscent of
 * classic hacker movies. The animation runs only on the client.
 */
export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const fontSize = 14
    let columns = 0
    let drops: number[] = []
    // Characters used for the matrix rain. Kept on a single line to avoid
    // syntax errors caused by line breaks in the source code.
    const characters = '01<>/\\\\{};:[]()ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      columns = Math.floor(canvas.width / fontSize)
      drops = new Array(columns).fill(1)
    }
    function draw() {
      // Semi‑transparent black background to create trailing effect
      ctx.fillStyle = 'rgba(0,0,0,0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#00ff41'
      ctx.font = `${fontSize}px JetBrains Mono, monospace`
      for (let i = 0; i < drops.length; i++) {
        const char = characters.charAt(
          Math.floor(Math.random() * characters.length)
        )
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
      requestAnimationFrame(draw)
    }
    resize()
    window.addEventListener('resize', resize)
    draw()
    return () => window.removeEventListener('resize', resize)
  }, [])
  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-30" />
}