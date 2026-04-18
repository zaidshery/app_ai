'use client'
import { CircleCheckBig, X } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const traditionalModel = [
  'Manual processes that slow down every campaign',
  'Junior staff executing without senior oversight',
  'Rigid retainers regardless of actual work delivered',
  'Weeks-long timelines for routine deliverables',
  'Basic reporting without actionable insights',
]

const agenticModel = [
  'AI agents run campaigns, audits, and builds around the clock',
  'Every deliverable verified by a senior strategist',
  'Unit-based pricing from €2K/month — pay for output, not headcount',
  'Standard deliverables in days, not weeks',
  'Live client dashboard with full project visibility',
]

// diagonal-lines SVG
const diagBg = `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40 L40 0' stroke='%23e4e4e7' stroke-width='1' fill='none'/%3E%3C/svg%3E")`

export default function WhyChooseUs() {
  const { ref, visible } = useScrollReveal()

  return (
    <section ref={ref} className="relative overflow-hidden py-28 md:py-36 bg-zinc-950">
      {/* Diagonal-line grid pattern on dark bg */}
      <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: diagBg, backgroundSize: '40px 40px' }} />
      {/* Radial glow to center */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-transparent" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(59,130,246,0.12), transparent)' }} />

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">

        {/* Header */}
        <div className="mb-16 text-center">
          <span className={`inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/50 backdrop-blur-sm transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Why Choose Us
          </span>
          <h2 className={`mt-4 mb-3 font-semibold text-3xl tracking-tight text-white md:text-4xl transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            The Digital Applied Difference
          </h2>
          <p className={`text-sm text-zinc-400 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            A modern, agentic approach to digital marketing that delivers measurable results
          </p>
        </div>

        {/* Comparison cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:mx-auto lg:max-w-5xl">

          {/* Traditional */}
          <div className={`group rounded-2xl border border-white/8 bg-white/5 p-8 backdrop-blur-sm transition-all duration-700 delay-300 hover:bg-white/8 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-white/30">Traditional Agencies</div>
            <h3 className="mb-6 font-medium text-base text-white/70">The old agency model</h3>
            <ul className="space-y-4">
              {traditionalModel.map((item, i) => (
                <li key={i} className={`flex items-start gap-3 text-sm text-zinc-500 transition-all duration-500 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: `${400 + i * 55}ms` }}>
                  <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-zinc-800">
                    <X className="h-2.5 w-2.5 text-zinc-500" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Agentic — premium card */}
          <div className={`group relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-zinc-900 to-zinc-900 p-8 shadow-2xl transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {/* top shine */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
            {/* corner glow blobs */}
            <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-blue-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />
            {/* bottom shine */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-400/20 to-transparent" />

            <div className="absolute top-5 right-5">
              <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-[10px] font-bold text-blue-300 backdrop-blur-sm">
                Recommended
              </span>
            </div>

            <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-blue-400/60 relative">Digital Applied</div>
            <h3 className="mb-6 font-medium text-base text-white relative">Agentic execution, expert-verified quality</h3>

            <ul className="relative space-y-4">
              {agenticModel.map((item, i) => (
                <li key={i} className={`flex items-start gap-3 text-sm text-zinc-200 transition-all duration-500 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`} style={{ transitionDelay: `${500 + i * 55}ms` }}>
                  <CircleCheckBig className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
