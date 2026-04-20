import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionIntro from '@/components/ui/SectionIntro'
import { serviceIconMap } from '@/components/ui/service-icons'
import { services } from '@/lib/site-content'

const featuredSlugs = [
  'web-development',
  'ai-digital-transformation',
  'custom-software-development',
  'b2b-demand-generation',
  'seo-optimization',
  'ppc-advertising',
]
const featuredServices = featuredSlugs
  .map(slug => services.find(s => s.slug === slug)!)
  .filter(Boolean)

const serviceToneClasses = [
  'from-[rgba(9,9,11,0.06)] via-transparent to-transparent',
  'from-[rgba(161,161,170,0.14)] via-transparent to-transparent',
  'from-[rgba(9,9,11,0.04)] via-transparent to-transparent',
  'from-[rgba(212,212,216,0.16)] via-transparent to-transparent',
  'from-[rgba(9,9,11,0.08)] via-transparent to-transparent',
  'from-[rgba(161,161,170,0.10)] via-transparent to-transparent',
] as const

export default function Services() {
  return (
    <section id="services" className="page-section bg-[var(--surface-soft)]">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionIntro
            eyebrow="Services"
            title="The right scope, not a pile of services."
            description="Most projects start with one bottleneck. The stack only widens when the system actually needs it."
          />

          <p className="section-copy max-w-2xl lg:ml-auto lg:text-right">
            Pick the problem that matters first. Search, pages, tracking, and operations can
            connect after the first win is clear.
          </p>
        </div>

        <div className="snap-strip mt-12 md:grid-cols-2 xl:grid-cols-3">
          {featuredServices.map((service, index) => {
            const Icon = serviceIconMap[service.icon]
            const toneClass = serviceToneClasses[index % serviceToneClasses.length]

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="snap-card surface-card group relative overflow-hidden rounded-[1.8rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(18,23,33,0.1)]"
              >
                <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-br ${toneClass}`} />
                <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] border border-[var(--line-soft)] bg-[var(--accent-cool-soft)] text-[var(--surface-ink)] transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="relative mt-6">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    {service.label}
                  </p>
                  <h3 className="mt-2 text-[1.85rem] text-[var(--text-strong)]">
                    {service.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--text-body)]">
                    {service.summary}
                  </p>
                </div>
                <div className="mt-5 rounded-[1.15rem] border border-[var(--line-soft)] bg-[var(--surface-panel)] p-4">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    Typical outcome
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-body)]">
                    {service.outcomes[0]}
                  </p>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-strong)]">
                  View service
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/services" className="button-secondary">
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
