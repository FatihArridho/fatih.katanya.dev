'use client'

import { useEffect, useRef } from 'react'

type ShapeKind = 'cube' | 'diamond' | 'ring' | 'triangle'

interface Shape {
  x: number
  y: number
  size: number
  vx: number
  vy: number
  rotation: number
  speed: number
  kind: ShapeKind
  color: string
  depth: number
}

function createShape(width: number, height: number): Shape {
  const kinds: ShapeKind[] = ['cube', 'diamond', 'ring', 'triangle']
  const palette = [
    'hsla(250, 90%, 72%, 0.34)',
    'hsla(170, 80%, 60%, 0.30)',
    'hsla(280, 80%, 70%, 0.24)'
  ]

  return {
    x: Math.random() * width,
    y: Math.random() * height,
    size: 18 + Math.random() * 50,
    vx: -0.12 + Math.random() * 0.24,
    vy: -0.1 + Math.random() * 0.2,
    rotation: Math.random() * Math.PI * 2,
    speed: 0.002 + Math.random() * 0.006,
    kind: kinds[Math.floor(Math.random() * kinds.length)],
    color: palette[Math.floor(Math.random() * palette.length)],
    depth: 0.4 + Math.random() * 1.2
  }
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let shapes: Shape[] = []
    let animationId = 0

    const resize = () => {
      const ratio = window.devicePixelRatio || 1
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * ratio
      canvas.height = height * ratio
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)

      const count = width < 768 ? 16 : 28
      shapes = Array.from({ length: count }, () => createShape(width, height))
    }

    const drawShape = (shape: Shape, offsetX: number, offsetY: number) => {
      ctx.save()
      ctx.translate(shape.x + offsetX * shape.depth, shape.y + offsetY * shape.depth)
      ctx.rotate(shape.rotation)
      ctx.strokeStyle = shape.color
      ctx.lineWidth = 1.2
      ctx.shadowBlur = 18
      ctx.shadowColor = shape.color

      const s = shape.size

      if (shape.kind === 'cube') {
        ctx.strokeRect(-s / 2, -s / 2, s, s)
        ctx.beginPath()
        ctx.moveTo(-s / 2, -s / 2)
        ctx.lineTo(-s / 4, -s * 0.75)
        ctx.lineTo(s * 0.75, -s * 0.75)
        ctx.lineTo(s / 2, -s / 2)
        ctx.moveTo(s / 2, s / 2)
        ctx.lineTo(s * 0.75, s / 4)
        ctx.lineTo(s * 0.75, -s * 0.75)
        ctx.stroke()
      }

      if (shape.kind === 'diamond') {
        ctx.beginPath()
        ctx.moveTo(0, -s / 1.2)
        ctx.lineTo(s / 1.4, 0)
        ctx.lineTo(0, s / 1.2)
        ctx.lineTo(-s / 1.4, 0)
        ctx.closePath()
        ctx.stroke()
      }

      if (shape.kind === 'ring') {
        ctx.beginPath()
        ctx.ellipse(0, 0, s / 1.4, s / 2.4, 0, 0, Math.PI * 2)
        ctx.stroke()
        ctx.beginPath()
        ctx.ellipse(0, 0, s / 2.4, s / 1.4, 0, 0, Math.PI * 2)
        ctx.stroke()
      }

      if (shape.kind === 'triangle') {
        ctx.beginPath()
        ctx.moveTo(0, -s / 1.2)
        ctx.lineTo(s / 1.2, s / 1.4)
        ctx.lineTo(-s / 1.2, s / 1.4)
        ctx.closePath()
        ctx.stroke()
      }

      ctx.restore()
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      const offsetX = (mouse.current.x - 0.5) * 18
      const offsetY = (mouse.current.y - 0.5) * 18

      shapes.forEach((shape) => {
        shape.x += shape.vx
        shape.y += shape.vy
        shape.rotation += shape.speed

        if (shape.x < -80) shape.x = width + 80
        if (shape.x > width + 80) shape.x = -80
        if (shape.y < -80) shape.y = height + 80
        if (shape.y > height + 80) shape.y = -80

        drawShape(shape, offsetX, offsetY)
      })

      animationId = requestAnimationFrame(draw)
    }

    const onMouseMove = (event: MouseEvent) => {
      mouse.current = {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight
      }
    }

    resize()
    draw()

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-90"
    />
  )
}