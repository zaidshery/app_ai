import Link from 'next/link'
import PageSignalPanel from '@/components/brand/PageSignalPanel'
import BrandMark from '@/components/brand/BrandMark'
import PageLayout from '@/components/ui/PageLayout'
import PageIntro from '@/components/ui/PageIntro'
import JsonLd from '@/components/seo/JsonLd'
import { aboutPrinciples, companyProfile, operatingSteps, serviceCategories } from '@/lib/site-content'
import { createPageMetadata, getSiteUrl } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'About',
  description:
    'Learn how ZaiferTech approaches search visibility, websites, analytics, and workflow automation with a practical, truth-first operating model.',
  path: '/about',
  keywords: ['about ZaiferTech', 'digital systems approach', 'growth operations'],
})

const siteUrl = getSiteUrl()

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: `${companyProfile.name} about`,
  description: companyProfile.description,
  url: siteUrl ? new URL('/about', siteUrl).toString() : undefined,
}

export default function AboutPage() {
  return (
    <PageLayout>
      <JsonLd data={aboutJsonLd} />

      <section className="page-section-tight">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_28rem] lg:items-center">
            <PageIntro
              eyebrow="About"
              title="A practical studio model for useful digital systems."
              description="ZaiferTech helps businesses improve discoverability, conversion quality, tracking clarity, and operating flow. The emphasis is on work that can be understood, implemented, and improved over time."
            />

            <PageSignalPanel
              eyebrow="Studio model"
              title="Direct scope, fewer layers."
              description="The aim is to reduce agency drag: clearer priorities, closer execution, and systems that still make sense after launch."
            >
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {['Truth-first copy', 'Implementation close to strategy', 'Remote-friendly delivery'].map(item => (
                  <div
                    key={item}
                    className="rounded-[1.1rem] border border-[var(--line-soft)] bg-white/74 px-4 py-3 text-sm font-semibold text-[var(--text-strong)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </PageSignalPanel>
          </div>
        </div>
      </section>

      <section className="page-section bg-white/55">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <article className="surface-card rounded-[2rem] p-6 md:p-7">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Positioning
              </p>
              <h2 className="mt-4 text-[2.1rem] text-[var(--text-strong)]">
                Strategy matters more when it reaches implementation.
              </h2>
              <p className="mt-5 text-sm leading-8 text-[var(--text-body)] md:text-base">
                ZaiferTech is built around practical improvement work rather than oversized agency
                process. That means direct attention to the pages, systems, and reporting that are
                influencing real business outcomes right now.
              </p>
              <p className="mt-4 text-sm leading-8 text-[var(--text-body)] md:text-base">
                The business is based in {companyProfile.location} and works in a remote-friendly
                way, making it easier to support clients who need focused help without extra
                operational drag.
              </p>
            </article>

            <article className="surface-card rounded-[2rem] p-6 md:p-7">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                What the work tends to connect
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {serviceCategories.map(category => (
                  <div
                    key={category.title}
                    className="rounded-[1.35rem] border border-[var(--line-soft)] bg-white/84 p-4"
                  >
                    <h2 className="text-[1.5rem] text-[var(--text-strong)]">{category.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-body)]">
                      {category.description}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="shell">
          <div className="max-w-3xl">
            <span className="section-kicker">Principles</span>
            <h2 className="section-heading mt-5 max-w-[12ch]">
              The rules that keep the work grounded.
            </h2>
          </div>

          <div className="snap-strip mt-10 md:grid-cols-2 xl:grid-cols-4">
            {aboutPrinciples.map(principle => (
              <article key={principle.title} className="snap-card surface-card rounded-[1.8rem] p-6">
                <h3 className="text-[1.75rem] text-[var(--text-strong)]">{principle.title}</h3>
                <p className="mt-4 text-sm leading-8 text-[var(--text-body)]">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-white/55">
        <div className="shell">
          <div className="max-w-3xl">
            <span className="section-kicker">How work moves</span>
            <h2 className="section-heading mt-5 max-w-[12ch]">
              A simple operating rhythm from first review to implementation.
            </h2>
          </div>

          <div className="snap-strip mt-10 md:grid-cols-3">
            {operatingSteps.map((step, index) => (
              <article key={step.title} className="snap-card surface-card rounded-[1.8rem] p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface-ink)] text-sm font-bold text-white">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-[1.75rem] text-[var(--text-strong)]">{step.title}</h3>
                <p className="mt-4 text-sm leading-8 text-[var(--text-body)]">{step.description}</p>
              </article>
            ))}
          </div>

          <div className="surface-card-strong mt-8 rounded-[2rem] p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <BrandMark size={48} theme="dark" className="mb-5" markClassName="rounded-[1.1rem]" />
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/42">
                  Next step
                </p>
                <h2 className="mt-4 max-w-[11ch] font-display text-[2.5rem] text-white">
                  If the approach sounds right, the intake is the best place to continue.
                </h2>
              </div>

              <div className="action-row">
                <Link href="/get-started" className="button-primary bg-white text-[var(--surface-ink)] hover:bg-[#f2ebe1]">
                  Start a Project
                </Link>
                <Link
                  href="/services"
                  className="button-secondary border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                >
                  Review Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
