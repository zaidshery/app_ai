'use client'
import Link from 'next/link'
import { Search, TrendingUp, Users, BarChart3, Edit3, Code, ShoppingCart, Briefcase, Cpu, ArrowRight } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const coreServices = [
  { icon: Search,     title: 'SEO Optimization',        description: 'Technical audits, keyword strategy, and on-page optimization that boost rankings and drive organic traffic. Results in days, not weeks.',  href: '/services/seo-optimization',          color: 'from-blue-50 to-sky-50',    accent: 'bg-blue-500' },
  { icon: TrendingUp, title: 'PPC Advertising',          description: 'Smarter bid management and campaign optimization across Google Ads and social platforms for maximum return on ad spend.',                   href: '/services/ppc-advertising',           color: 'from-violet-50 to-purple-50', accent: 'bg-violet-500' },
  { icon: Users,      title: 'Social Media Marketing',   description: 'Build authentic connections and grow your community with strategic social media management and creative campaigns.',                         href: '/services/social-media-marketing',    color: 'from-pink-50 to-rose-50',   accent: 'bg-pink-500' },
  { icon: BarChart3,  title: 'Analytics & Insights',     description: 'Automated reporting and real-time dashboards that reveal opportunities and guide strategic decisions.',                                      href: '/services/analytics-insights',        color: 'from-emerald-50 to-teal-50',accent: 'bg-emerald-500' },
  { icon: Edit3,      title: 'Content Marketing',        description: 'Strategic content that ranks, engages, and converts your target audience at every stage of the funnel.',                                    href: '/services/content-marketing',         color: 'from-amber-50 to-yellow-50',accent: 'bg-amber-500' },
  { icon: Code,       title: 'Web Development',          description: 'High-performance websites built on modern frameworks. Faster development and deployment for speed and conversion.',                        href: '/services/web-development',           color: 'from-slate-50 to-zinc-100', accent: 'bg-slate-600' },
]

const specializedSolutions = [
  { icon: ShoppingCart, title: 'eCommerce Solutions',         description: 'High-converting Shopify & WooCommerce stores with seamless checkout and payment integration.',  bullets: ['Shopify & WooCommerce', 'Payment integrations', 'Conversion optimization'], href: '/services/ecommerce-solutions',        gradient: 'from-orange-500/10 to-red-500/10',      border: 'hover:border-orange-200' },
  { icon: Briefcase,    title: 'CRM & Automation',            description: 'Streamline sales with HubSpot & Zoho CRM plus automated workflows that save hours weekly.',      bullets: ['HubSpot & Zoho setup', 'Workflow automation', 'Custom integrations'],     href: '/services/crm-automation',            gradient: 'from-blue-500/10 to-cyan-500/10',       border: 'hover:border-blue-200' },
  { icon: Cpu,          title: 'AI & Digital Transformation', description: 'AI-powered content, predictive analytics, and intelligent automation using proven tools.',        bullets: ['AI agent orchestration', 'Predictive analytics', 'Process automation'],  href: '/services/ai-digital-transformation', gradient: 'from-violet-500/10 to-purple-500/10',   border: 'hover:border-violet-200' },
]

// Dot-grid SVG background (data-uri)
const dotGridBg = `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23d4d4d8' fill-opacity='0.5'/%3E%3C/svg%3E")`

export default function Services() {
  const { ref, visible } = useScrollReveal()

  return (
    <section
      ref={ref}
      id="services"
      className="relative py-28 md:py-36 overflow-hidden bg-white"
    >
      {/* Dot-grid pattern */}
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: dotGridBg, backgroundSize: '32px 32px' }} />
      {/* fade out at edges */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">

        {/* ── Section header ── */}
        <div className="mb-16 text-center">
          <span className={`inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-zinc-500 shadow-sm transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Core Services
          </span>
          <h2 className={`mt-4 mb-3 font-semibold text-3xl tracking-tight text-zinc-950 md:text-4xl transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Full-Service Digital Marketing
          </h2>
          <p className={`mx-auto max-w-xl text-sm leading-relaxed text-zinc-500 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Expert execution across SEO, PPC, Content & Development — with AI-powered workflows that cut delivery timelines and reduce costs.
          </p>
        </div>

        {/* ── Core service cards ── */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {coreServices.map((s, i) => (
            <Link
              key={s.title}
              href={s.href}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-150 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${150 + i * 70}ms` }}
            >
              {/* Gradient tint on hover */}
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

              {/* Accent bar */}
              <div className={`absolute left-0 top-0 h-full w-0.5 ${s.accent} opacity-0 transition-all duration-500 group-hover:opacity-100`} />

              <div className="relative">
                <div className={`mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-150 bg-zinc-50 text-zinc-700 shadow-sm transition-all duration-300 group-hover:border-zinc-200 group-hover:bg-white group-hover:shadow-md`}>
                  <s.icon className="h-[18px] w-[18px]" />
                </div>
                <h3 className="mb-2 font-semibold text-[15px] text-zinc-950">{s.title}</h3>
                <p className="text-[13px] leading-relaxed text-zinc-500 flex-1">{s.description}</p>
                <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-zinc-400 transition-colors duration-300 group-hover:text-zinc-900">
                  Learn more <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Specialized header ── */}
        <div className="mb-10 text-center">
          <span className={`inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-zinc-500 shadow-sm transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Specialized Focus
          </span>
          <h2 className={`mt-4 mb-3 font-semibold text-3xl tracking-tight text-zinc-950 md:text-4xl transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Beyond Traditional Marketing
          </h2>
        </div>

        {/* ── Specialized cards ── */}
        <div className="grid gap-4 md:grid-cols-3">
          {specializedSolutions.map((s, i) => (
            <Link
              key={s.title}
              href={s.href}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl ${s.border} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${450 + i * 100}ms` }}
            >
              {/* Gradient blob */}
              <div className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${s.gradient} blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

              <div className={`mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-150 bg-zinc-50 text-zinc-700 shadow-sm transition-all duration-300 group-hover:bg-white group-hover:shadow-md`}>
                <s.icon className="h-[18px] w-[18px]" />
              </div>
              <h3 className="mb-2 font-semibold text-[15px] text-zinc-950">{s.title}</h3>
              <p className="mb-5 text-[13px] leading-relaxed text-zinc-500 flex-1">{s.description}</p>
              <ul className="border-t border-zinc-100 pt-4 space-y-2">
                {s.bullets.map(b => (
                  <li key={b} className="flex items-center gap-2 text-[11px] font-medium text-zinc-400">
                    <span className="h-1 w-1 rounded-full bg-zinc-300 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>

        {/* All services CTA */}
        <div className={`mt-12 text-center transition-all duration-700 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link href="/services" className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm hover:border-zinc-300 hover:shadow-md transition-all">
            View all services <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
