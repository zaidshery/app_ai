import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import PageSignalPanel from '@/components/brand/PageSignalPanel'
import BrandMark from '@/components/brand/BrandMark'
import PageLayout from '@/components/ui/PageLayout'
import PageIntro from '@/components/ui/PageIntro'
import FaqSection from '@/components/ui/FaqSection'
import JsonLd from '@/components/seo/JsonLd'
import { serviceIconMap } from '@/components/ui/service-icons'
import { createPageMetadata, getSiteUrl } from '@/lib/metadata'
import { companyProfile, getServiceBySlug, services } from '@/lib/site-content'

export async function generateStaticParams() {
  return services.map(service => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return createPageMetadata({
      title: 'Service not found',
      description: 'The requested service page could not be found.',
      noIndex: true,
    })
  }

  return createPageMetadata({
    title: service.name,
    description: service.summary,
    path: `/services/${service.slug}`,
    keywords: [service.name, service.category, companyProfile.name],
  })
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const Icon = serviceIconMap[service.icon]
  const siteUrl = getSiteUrl()
  const relatedServices = services
    .filter(candidate => candidate.slug !== service.slug)
    .filter(candidate => candidate.category === service.category)
    .slice(0, 3)

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.summary,
    serviceType: service.name,
    areaServed: 'India',
    provider: {
      '@type': 'Organization',
      name: companyProfile.name,
    },
    url: siteUrl ? new URL(`/services/${service.slug}`, siteUrl).toString() : undefined,
  }

  return (
    <PageLayout>
      <JsonLd data={serviceJsonLd} />

      <section className="page-section-tight">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_28rem] lg:items-center">
            <PageIntro
              eyebrow={`${service.category} service`}
              title={service.name}
              description={`${service.summary} ${service.description}`}
              actions={
                <>
                  <Link href={`/get-started?service=${service.slug}`} className="button-primary">
                    Start a Project
                  </Link>
                  <Link href="/contact" className="button-secondary">
                    Contact
                  </Link>
                </>
              }
              meta={
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-[var(--line-soft)] bg-white/70 px-3 py-1">
                    {service.label}
                  </span>
                  <span className="rounded-full border border-[var(--line-soft)] bg-white/70 px-3 py-1">
                    {service.category}
                  </span>
                </div>
              }
            />

            <PageSignalPanel
              eyebrow="Service lens"
              title="What this work should change first."
              description={service.outcomes[0]}
            >
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="rounded-[1.1rem] border border-[var(--line-soft)] bg-white/74 px-4 py-3">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    Category
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[var(--text-strong)]">{service.category}</p>
                </div>
                <div className="rounded-[1.1rem] border border-[var(--line-soft)] bg-white/74 px-4 py-3">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    Entry point
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[var(--text-strong)]">
                    Audit, rebuild, or scoped implementation
                  </p>
                </div>
              </div>
            </PageSignalPanel>
          </div>
        </div>
      </section>

      <section className="page-section bg-white/58">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <article className="surface-card rounded-[2rem] p-6 md:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] border border-[var(--line-soft)] bg-[var(--accent-cool-soft)] text-[var(--surface-ink)]">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Best fit
              </p>
              <h2 className="mt-3 text-[2rem] text-[var(--text-strong)]">
                Where this service helps most
              </h2>
              <p className="mt-4 text-sm leading-8 text-[var(--text-body)]">{service.idealFor}</p>
            </article>

            <div className="snap-strip md:grid-cols-2">
              <article className="snap-card surface-card rounded-[2rem] p-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  Outcomes
                </p>
                <h2 className="mt-4 text-[1.9rem] text-[var(--text-strong)]">
                  What should improve
                </h2>
                <ul className="detail-list mt-6">
                  {service.outcomes.map(outcome => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </article>

              <article className="snap-card surface-card rounded-[2rem] p-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  Deliverables
                </p>
                <h2 className="mt-4 text-[1.9rem] text-[var(--text-strong)]">
                  What the work can include
                </h2>
                <ul className="detail-list mt-6">
                  {service.deliverables.map(deliverable => (
                    <li key={deliverable}>{deliverable}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="shell">
          <div className="max-w-3xl">
            <span className="section-kicker">Workflow</span>
            <h2 className="section-heading mt-5 max-w-[12ch]">
              A consistent path from diagnosis to implementation.
            </h2>
          </div>

          <div className="snap-strip mt-10 md:grid-cols-3">
            {service.workflow.map((step, index) => (
              <article key={step} className="snap-card surface-card rounded-[1.9rem] p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface-ink)] text-sm font-bold text-white">
                  0{index + 1}
                </span>
                <p className="mt-5 text-sm leading-8 text-[var(--text-body)]">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={service.faqs} />

      <section className="page-section">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <span className="section-kicker">Related services</span>
              <h2 className="section-heading mt-5 max-w-[11ch]">
                Other offers often scoped alongside this one.
              </h2>
            </div>

            <div className="snap-strip md:grid-cols-3">
              {relatedServices.map(related => {
                const RelatedIcon = serviceIconMap[related.icon]

                return (
                  <Link
                    key={related.slug}
                    href={`/services/${related.slug}`}
                    className="snap-card surface-card rounded-[1.75rem] p-5 transition-transform hover:-translate-y-0.5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-[0.95rem] border border-[var(--line-soft)] bg-[var(--accent-warm-soft)] text-[var(--surface-ink)]">
                      <RelatedIcon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-[1.45rem] text-[var(--text-strong)]">{related.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-body)]">{related.summary}</p>
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="surface-card-strong mt-8 rounded-[2rem] p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <BrandMark size={48} theme="dark" className="mb-5" markClassName="rounded-[1.1rem]" />
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/42">
                  Next step
                </p>
                <h2 className="mt-4 max-w-[11ch] font-display text-[2.5rem] text-white">
                  Bring the current scope, and we will map the cleanest starting point.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-8 text-white/72">
                  If this service is part of a broader need, the intake can capture that too. The
                  first step is not to overcomplicate it.
                </p>
              </div>

              <div className="action-row">
                <Link href={`/get-started?service=${service.slug}`} className="button-primary bg-white text-[var(--surface-ink)] hover:bg-[#f2ebe1]">
                  Start a Project
                </Link>
                <Link
                  href="/services"
                  className="button-secondary border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                >
                  Back to Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
