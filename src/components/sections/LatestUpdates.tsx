'use client'
import { Search, Activity, CircleDollarSign, Zap } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const updates = [
  { icon: Search,           title: 'SEO Audits in Days',           description: 'Complete site audits in days, not weeks. AI agents handle technical analysis while experts verify every result.',                                                              gradient: 'from-blue-500/10 to-sky-500/10',      ring: 'group-hover:ring-blue-100',    iconBg: 'group-hover:bg-blue-50 group-hover:text-blue-600' },
  { icon: Activity,         title: 'Smarter Campaign Management',   description: 'Real-time bid optimization and ad copy testing across Google Ads and social platforms with continuous performance verification.',                                           gradient: 'from-violet-500/10 to-purple-500/10', ring: 'group-hover:ring-violet-100',  iconBg: 'group-hover:bg-violet-50 group-hover:text-violet-600' },
  { icon: CircleDollarSign, title: 'Unit-Based Pricing',            description: 'Transparent, flexible pricing starting at €2,000/month. Pay for work delivered, not team overhead or agency bloat.',                                                        gradient: 'from-emerald-500/10 to-teal-500/10',  ring: 'group-hover:ring-emerald-100', iconBg: 'group-hover:bg-emerald-50 group-hover:text-emerald-600' },
  { icon: Zap,              title: 'Faster Delivery',               description: 'Agentic workflows compress timelines across SEO, PPC, content, and development. Standard deliverables ship in days.',                                                        gradient: 'from-amber-500/10 to-orange-500/10',  ring: 'group-hover:ring-amber-100',   iconBg: 'group-hover:bg-amber-50 group-hover:text-amber-600' },
]

// Square grid
const gridBg = `url("data:image/svg+xml,%3Csvg width='44' height='44' viewBox='0 0 44 44' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='44' height='44' fill='none' stroke='%23e4e4e7' stroke-width='0.5'/%3E%3C/svg%3E")`

export default function LatestUpdates() {
  const { ref, visible } = useScrollReveal()

  return (
    <section ref={ref} className="relative overflow-hidden py-28 md:py-36 bg-white">
      {/* Square grid lines */}
      <div className="pointer-events-none absolute inset-0 opacity-60" style={{ backgroundImage: gridBg, backgroundSize: '44px 44px' }} />
      {/* Soft fade at edges */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">

        {/* Header */}
        <div className="mb-16 text-center">
          <span className={`inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-zinc-500 shadow-sm transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Latest Updates
          </span>
          <h2 className={`mt-4 mb-3 font-semibold text-3xl tracking-tight text-zinc-950 md:text-4xl transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            What's New at Digital Applied
          </h2>
          <p className={`text-sm text-zinc-500 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Stay ahead with our latest capabilities and workflow improvements
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {updates.map((u, i) => (
            <div
              key={i}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm ring-1 ring-transparent transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:border-zinc-300 ${u.ring} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + i * 90}ms` }}
            >
              {/* gradient blob reveal */}
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${u.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl`} />

              <div className="relative">
                <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md ${u.iconBg}`}>
                  <u.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-semibold text-[14px] text-zinc-950">{u.title}</h3>
                <p className="text-[13px] leading-relaxed text-zinc-500">{u.description}</p>
              </div>

              {/* Animated bottom bar */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-violet-400 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
