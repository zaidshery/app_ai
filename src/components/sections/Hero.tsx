'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import FloatingDots from '@/components/ui/FloatingDots'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Small delay so animation triggers after mount
    const t = setTimeout(() => setIsVisible(true), 50)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative flex min-h-[92vh] flex-col overflow-hidden bg-white pt-16">

      {/* Animated floating dots — full height & width */}
      <div className="absolute inset-0 z-0">
        <FloatingDots />
        {/* Subtle radial fade so dots are softer at edges */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, rgba(255,255,255,0.6) 70%, rgba(255,255,255,1) 100%)',
          }}
        />
      </div>

      {/* Main hero content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 py-20 text-center md:px-8">
        <h1
          className={`mb-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <span className="block font-medium text-6xl tracking-tight text-zinc-950 md:text-7xl">
            Experience liftoff
          </span>
          <span className="mt-4 block font-light text-2xl text-zinc-500 md:text-3xl">
            with your agentic{' '}
            <span className="font-semibold text-zinc-950">growth partner</span>
          </span>
        </h1>

        <div
          className={`mb-12 flex flex-col items-center gap-4 sm:flex-row transition-all duration-1000 delay-150 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <Link
            href="/get-started"
            className="inline-flex h-12 items-center rounded-full bg-zinc-950 px-8 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 transition-colors"
          >
            Start your journey
          </Link>
          <Link
            href="/services"
            className="inline-flex h-12 items-center rounded-full border border-zinc-200 bg-white px-8 text-sm font-medium text-zinc-950 shadow-sm hover:bg-zinc-50 transition-colors"
          >
            Explore solutions
          </Link>
        </div>

        <p
          className={`mx-auto max-w-xl text-base leading-relaxed text-zinc-500 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          Full-service SEO, PPC, content, and development — delivered faster through agentic
          workflows. AI agent orchestration producing the output of a traditional agency, with
          expert-verified quality at every step.
        </p>
      </div>

      {/* Stats bar at the bottom of hero */}
      <div
        className={`relative z-10 pb-10 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      >
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-2xl border border-zinc-200/80 bg-white/80 px-8 py-5 shadow-sm backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { value: '128K+', label: 'Qualified Leads' },
                { value: '45%', label: 'Avg. Cost Reduction' },
                { value: '217%', label: 'Organic Growth' },
                { value: '€72M+', label: 'Revenue Generated' },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="font-semibold text-zinc-950 text-lg">{stat.value}</div>
                  <div className="mt-0.5 text-xs text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
