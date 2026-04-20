import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PageSignalPanel from '@/components/brand/PageSignalPanel'
import PageLayout from '@/components/ui/PageLayout'
import PageIntro from '@/components/ui/PageIntro'
import SectionIntro from '@/components/ui/SectionIntro'
import JsonLd from '@/components/seo/JsonLd'
import { serviceIconMap } from '@/components/ui/service-icons'
import { createPageMetadata, getSiteUrl } from '@/lib/metadata'
import { companyProfile, engagementModels, getServiceBySlug, serviceCategories } from '@/lib/site-content'

export const metadata = createPageMetadata({
  title: 'Services',
  description:
    'Explore ZaiferTech services across SEO, web development, analytics, CRM automation, ecommerce, AI workflow automation, custom software, and B2B demand generation.',
  path: '/services',
  keywords: [
    'SEO services',
    'web development',
    'analytics setup',
    'CRM automation',
    'AI workflows',
    'custom software development',
    'B2B demand generation',
    'SaaS development',
  ],
})

const siteUrl = getSiteUrl()

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: `${companyProfile.name} services`,
  itemListElement: serviceCategories.flatMap(category =>
    category.slugs.map((slug, index) => {
      const service = getServiceBySlug(slug)

      return {
        '@type': 'ListItem',
        position: index + 1,
        name: service?.name,
        url: service && siteUrl ? new URL(`/services/${service.slug}`, siteUrl).toString() : undefined,
      }
    })
  ),
}

const serviceToneClasses = [
  'from-[rgba(9,9,11,0.06)] via-transparent to-transparent',
  'from-[rgba(161,161,170,0.14)] via-transparent to-transparent',
  'from-[rgba(9,9,11,0.04)] via-transparent to-transparent',
] as const

export default function ServicesPage() {
  return (
    <PageLayout>
      <JsonLd data={servicesJsonLd} />

      <section className="page-section-tight">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_28rem] lg:items-center">
            <PageIntro
              eyebrow="Services"
              title="Offers shaped around the real bottleneck."
              description="ZaiferTech focuses on discoverability, conversion quality, tracking clarity, and operational efficiency. The work can start with one priority or connect several of them into a stronger system."
              actions={
                <>
                  <Link href="/get-started" className="button-primary">
                    Start a Project
                  </Link>
                  <Link href="/contact" className="button-secondary">
                    Contact
                  </Link>
                </>
              }
            />

            <PageSignalPanel
              eyebrow="How offers are chosen"
              title="Start with the cleanest lever."
              description="The scope should follow the real bottleneck. Search, pages, tracking, and operations can connect after the first priority is clear."
            >
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {[
                  `${serviceCategories.length} service groups`,
                  `${engagementModels.length} ways to work`,
                  'One clear next scope',
                ].map(item => (
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
        <div className="shell space-y-12">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <SectionIntro
                eyebrow={category.title}
                title={category.title}
                description={category.description}
              />

              <div className="snap-strip mt-8 md:grid-cols-2 xl:grid-cols-3">
                {category.slugs.map((slug, cardIndex) => {
                  const service = getServiceBySlug(slug)

                  if (!service) {
                    return null
                  }

                  const Icon = serviceIconMap[service.icon]
                  const toneClass =
                    serviceToneClasses[(categoryIndex + cardIndex) % serviceToneClasses.length]

                  return (
                    <article
                      key={service.slug}
                      className="snap-card surface-card relative overflow-hidden rounded-[1.9rem] p-6"
                    >
                      <div
                        className={`absolute inset-x-0 top-0 h-20 bg-gradient-to-br ${toneClass}`}
                      />
                      <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] border border-[var(--line-soft)] bg-[var(--accent-cool-soft)] text-[var(--surface-ink)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="relative">
                        <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                          {service.label}
                        </p>
                        <h2 className="mt-2 text-[1.95rem] text-[var(--text-strong)]">{service.name}</h2>
                        <p className="mt-4 text-sm leading-8 text-[var(--text-body)]">{service.summary}</p>
                      </div>
                      <div className="mt-5 rounded-[1.2rem] border border-[var(--line-soft)] bg-white/72 p-4">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                          Best fit
                        </p>
                        <p className="mt-2 text-sm leading-7 text-[var(--text-body)]">{service.idealFor}</p>
                      </div>
                      <div className="action-row mt-6">
                        <Link href={`/services/${service.slug}`} className="button-secondary">
                          Service details
                        </Link>
                        <Link
                          href={`/get-started?service=${service.slug}`}
                          className="button-ghost px-0"
                        >
                          Start with this
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="shell">
          <SectionIntro
            eyebrow="How work can be scoped"
            title="The offer can start narrow without losing the bigger picture."
            description="If a single landing page, audit, automation, or analytics cleanup is the real need, the engagement should start there. Broader work can build from that foundation."
          />

          <div className="snap-strip mt-10 md:grid-cols-3">
            {engagementModels.map((model, index) => (
              <article
                key={model.name}
                className="snap-card surface-card relative overflow-hidden rounded-[1.8rem] p-6"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-20 bg-gradient-to-br ${serviceToneClasses[index % serviceToneClasses.length]}`}
                />
                <div className="relative">
                  <h2 className="text-[1.9rem] text-[var(--text-strong)]">{model.name}</h2>
                  <p className="mt-4 text-sm leading-8 text-[var(--text-body)]">
                    {model.description}
                  </p>
                  <ul className="detail-list mt-6">
                    {model.points.map(point => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
