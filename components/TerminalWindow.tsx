'use client'

import { useEffect, useRef, useState } from 'react'

interface TerminalWindowProps {
  title?: string
  children: React.ReactNode
  className?: string
}

export default function TerminalWindow({
  title = 'window.dev',
  children,
  className = ''
}: TerminalWindowProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`glass overflow-hidden rounded-3xl transition duration-700 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.025] px-5 py-4">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56] shadow-[0_0_12px_rgba(255,95,86,0.5)]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-[0_0_12px_rgba(255,189,46,0.5)]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f] shadow-[0_0_12px_rgba(39,201,63,0.5)]" />
        </div>
        <span className="font-mono text-xs text-soft-muted">{title}</span>
      </div>

      <div className="p-6">{children}</div>
    </div>
  )
}