'use client'
import { useEffect, useRef } from 'react'

type Dot = {
  x: number
  y: number
  r: number
  opacity: number
  vx: number
  vy: number
  phase: number
  speed: number
}

export default function FloatingDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId = 0
    let dots: Dot[] = []
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const createDots = (width: number, height: number) => {
      const dotCount = width < 640 ? 34 : width < 1024 ? 52 : 72

      return Array.from({ length: dotCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 0.9,
        opacity: Math.random() * 0.45 + 0.18,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.005 + 0.0025,
      }))
    }

    const resize = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 2)

      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      dots = createDots(width, height)
    }

    const draw = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight
      ctx.clearRect(0, 0, width, height)

      dots.forEach(dot => {
        if (!prefersReducedMotion) {
          dot.x += dot.vx
          dot.y += dot.vy
          dot.phase += dot.speed
        }

        if (dot.x < -10) dot.x = width + 10
        if (dot.x > width + 10) dot.x = -10
        if (dot.y < -10) dot.y = height + 10
        if (dot.y > height + 10) dot.y = -10

        const pulse = prefersReducedMotion ? 0 : Math.sin(dot.phase) * 0.14
        const alpha = Math.max(0.05, Math.min(0.8, dot.opacity + pulse))

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${alpha})`
        ctx.fill()
      })

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(draw)
      }
    }

    resize()
    draw()

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}
