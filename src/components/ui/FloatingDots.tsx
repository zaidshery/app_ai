'use client'
import { useEffect, useRef } from 'react'

export default function FloatingDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resize()
    window.addEventListener('resize', resize)

    // Create dots matching the live site
    const dots = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2.5 + 1,          // radius 1–3.5px
      opacity: Math.random() * 0.5 + 0.2,   // 0.2–0.7 opacity
      vx: (Math.random() - 0.5) * 0.25,     // slow horizontal drift
      vy: (Math.random() - 0.5) * 0.25,     // slow vertical drift
      // pulse phase
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.005 + 0.003,
    }))

    let frame = 0

    const draw = () => {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      frame++

      dots.forEach(dot => {
        // drift
        dot.x += dot.vx
        dot.y += dot.vy

        // wrap around edges
        if (dot.x < -10) dot.x = canvas.width + 10
        if (dot.x > canvas.width + 10) dot.x = -10
        if (dot.y < -10) dot.y = canvas.height + 10
        if (dot.y > canvas.height + 10) dot.y = -10

        // pulsing opacity
        dot.phase += dot.speed
        const pulse = Math.sin(dot.phase) * 0.15
        const alpha = Math.max(0.05, Math.min(0.8, dot.opacity + pulse))

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(96, 165, 250, ${alpha})`   // blue-400
        ctx.fill()
      })

      animationId = requestAnimationFrame(draw)
    }

    draw()

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
