'use client'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

// Hexagonal grid pattern for the CTA background
const hexBg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V16L28 0l28 16v34L28 66zm0-5.1l24.3-14V21.1L28 7.1 3.7 21.1v25.8L28 60.9z' fill='%23ffffff' fill-opacity='0.03'/%3E%3C/svg%3E")`

export default function Contact() {
  const { ref, visible } = useScrollReveal()

  return (
    <section ref={ref} id="contact" className="relative overflow-hidden py-32 md:py-44 bg-zinc-950">
      {/* Hex pattern */}
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: hexBg, backgroundSize: '56px 100px' }} />

      {/* Multi-layer glow orbs */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/15 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/4 h-64 w-64 -translate-y-1/2 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 right-1/4 h-64 w-64 -translate-y-1/2 rounded-full bg-cyan-600/10 blur-3xl" />
      {/* top + bottom edge fades */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-zinc-950 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent" />

      <div className="relative mx-auto max-w-3xl px-4 md:px-8 text-center">

        {/* Animated badge */}
        <div className={`mb-6 flex justify-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/50 backdrop-blur-sm">
            <Sparkles className="h-3 w-3 text-blue-400" />
            Free Consultation Included
          </span>
        </div>

        <h2 className={`mb-5 font-semibold text-3xl tracking-tight text-white md:text-4xl lg:text-5xl transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Ready to Accelerate<br className="hidden sm:block" /> Your Growth?
        </h2>
        <p className={`mb-10 text-base leading-relaxed text-zinc-400 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Get a free growth audit and custom roadmap. See how agentic workflows can deliver faster results — with every deliverable verified by an expert.
        </p>

        {/* Buttons */}
        <div className={`flex flex-col items-center justify-center gap-3 sm:flex-row transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link
            href="/get-started"
            className="group relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-full bg-white px-8 text-sm font-semibold text-zinc-950 shadow-lg transition-all hover:shadow-xl hover:shadow-white/10 hover:scale-[1.02]"
          >
            {/* shimmer sweep */}
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-zinc-200/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            Start Your Free Consultation
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex h-12 items-center rounded-full border border-white/15 px-8 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/8 hover:text-white"
          >
            Talk to a Strategist
          </Link>
        </div>

        {/* Trust line */}
        <p className={`mt-10 text-xs text-zinc-600 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Free growth audit included · Custom roadmap delivered · Flexible unit-based pricing from €2K/month
        </p>
      </div>
    </section>
  )
}
