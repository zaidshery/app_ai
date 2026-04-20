import Link from 'next/link'
import { ArrowRight, MessageCircleMore } from 'lucide-react'
import BrandMark from '@/components/brand/BrandMark'
import HeroAmbient from '@/components/brand/HeroAmbient'
import BrandSignal from '@/components/brand/BrandSignal'
import { buildWhatsAppUrl } from '@/lib/contact'
import { companyProfile, homeHeroHighlights } from '@/lib/site-content'

const heroPainPoints = [
  {
    title: 'Search is underperforming',
    description: 'Visibility exists, but it is not turning into qualified demand.',
  },
  {
    title: 'The website feels unclear',
    description: 'Messaging, hierarchy, or page flow is making conversion harder than it should be.',
  },
  {
    title: 'Tracking or operations are messy',
    description: 'Reporting, lead handling, or automation needs a cleaner system behind the scenes.',
  },
]

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-3 pt-28 pb-16 sm:px-4 md:pt-32 md:pb-24">
      <div className="shell relative z-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_28rem] lg:items-center xl:grid-cols-[minmax(0,1fr)_31rem]">
          <div className="relative isolate max-w-3xl">
            <HeroAmbient className="hero-ambient-local" />

            <span className="section-kicker">
              Indore based
              <span className="hidden h-1 w-1 rounded-full bg-[rgba(9,9,11,0.18)] sm:inline-flex" />
              remote-friendly delivery
            </span>

            <h1 className="section-title mt-6 max-w-[13ch]">
              Search, websites, and automation built for serious growth.
            </h1>

            <p className="section-copy mt-6 max-w-2xl">
              ZaiferTech helps businesses turn scattered digital work into a sharper system for
              traffic, leads, and operations. Calm strategy, direct execution, and cleaner
              delivery stay at the center.
            </p>

            <div className="action-row mt-8">
              <Link href="/get-started" className="button-primary">
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                <MessageCircleMore className="h-4 w-4" />
                WhatsApp
              </a>
            </div>

            <p className="mt-4 text-sm text-[var(--text-muted)]">
              Tell us the bottleneck. We will shape the next sensible scope from there.
            </p>

            <ul className="mt-8 flex flex-wrap gap-3 text-sm text-[var(--text-body)]">
              {homeHeroHighlights.map(highlight => (
                <li
                  key={highlight}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--line-soft)] bg-[var(--surface-panel)] px-4 py-2.5 font-semibold shadow-[0_10px_24px_rgba(9,9,11,0.04)]"
                >
                  <span className="h-2 w-2 rounded-full bg-[var(--accent-warm)]" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-panel rounded-[2.2rem] p-4 sm:p-6">
            <div className="rounded-[1.65rem] border border-[var(--line-soft)] bg-[var(--surface-panel-strong)] p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    ZaiferTech signal
                  </p>
                  <h2 className="mt-3 max-w-[10ch] text-[1.8rem] text-[var(--text-strong)]">
                    Clear systems move better.
                  </h2>
                </div>
                <BrandMark size={54} />
              </div>

              <BrandSignal className="mt-5 h-[165px] sm:h-[220px]" />

              <div className="mt-5 overflow-hidden rounded-[1.35rem] border border-[var(--line-soft)] bg-[var(--surface-panel)]">
                {heroPainPoints.map((item, index) => (
                  <div
                    key={item.title}
                    className={`flex gap-4 px-4 py-4 ${index > 0 ? 'border-t border-[var(--line-soft)]' : ''}`}
                  >
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent-cool-soft)] text-[0.7rem] font-bold text-[var(--surface-ink)]">
                      0{index + 1}
                    </span>
                    <div>
                      <h2 className="text-[1.02rem] text-[var(--text-strong)]">{item.title}</h2>
                      <p className="mt-1 text-sm leading-6 text-[var(--text-body)]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="metric-card">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  Base
                </p>
                <p className="mt-3 text-base text-[var(--text-strong)]">{companyProfile.location}</p>
              </div>
              <div className="metric-card">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  Typical first move
                </p>
                <p className="mt-3 text-base text-[var(--text-strong)]">
                  Audit, page overhaul, tracking reset, or workflow cleanup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
