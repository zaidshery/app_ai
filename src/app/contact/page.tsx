import Link from 'next/link'
import { Mail, MapPin, MessageCircleMore, Phone } from 'lucide-react'
import PageSignalPanel from '@/components/brand/PageSignalPanel'
import PageLayout from '@/components/ui/PageLayout'
import PageIntro from '@/components/ui/PageIntro'
import LeadInquiryForm from '@/components/forms/LeadInquiryForm'
import JsonLd from '@/components/seo/JsonLd'
import { CONTACT_EMAIL, PHONE_DISPLAY, PHONE_TEL, buildWhatsAppUrl } from '@/lib/contact'
import { companyProfile } from '@/lib/site-content'
import { createPageMetadata, getSiteUrl } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Contact',
  description:
    'Get in touch with ZaiferTech to discuss SEO, web development, analytics, CRM automation, or AI workflow implementation.',
  path: '/contact',
  keywords: ['contact ZaiferTech', 'digital systems consultation', 'website inquiry'],
})

const siteUrl = getSiteUrl()

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: `${companyProfile.name} contact`,
  description: 'Contact ZaiferTech to discuss your project scope.',
  url: siteUrl ? new URL('/contact', siteUrl).toString() : undefined,
}

export default function ContactPage() {
  const hasContactEmail = Boolean(CONTACT_EMAIL)

  return (
    <PageLayout>
      <JsonLd data={contactJsonLd} />

      <section className="page-section-tight">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_28rem] lg:items-center">
            <PageIntro
              eyebrow="Contact"
              title="Bring the current challenge. We will help shape the next step."
              description="Use the form for a fuller brief, or switch to direct contact if you already know the conversation should move faster."
            />

            <PageSignalPanel
              eyebrow="Before you reach out"
              title="Context speeds up the first scope."
              description="A short, clear brief is enough. Tell us what feels slow, unclear, or underperforming and we can shape the next move from there."
            >
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {['Current bottleneck', 'What is already live', 'What success should look like'].map(item => (
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
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="snap-strip md:grid-cols-2 lg:grid-cols-1">
              {hasContactEmail ? (
                <article className="snap-card surface-card rounded-[1.9rem] p-6">
                  <Mail className="h-5 w-5 text-[var(--surface-ink)]" />
                  <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    Email
                  </p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-3 block text-lg text-[var(--text-strong)] hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </article>
              ) : null}

              <article className="snap-card surface-card rounded-[1.9rem] p-6">
                <Phone className="h-5 w-5 text-[var(--surface-ink)]" />
                <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  Phone / WhatsApp
                </p>
                <a href={PHONE_TEL} className="mt-3 block text-lg text-[var(--text-strong)] hover:underline">
                  {PHONE_DISPLAY}
                </a>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary mt-5"
                >
                  <MessageCircleMore className="h-4 w-4" />
                  WhatsApp
                </a>
              </article>

              <article className="snap-card surface-card rounded-[1.9rem] p-6">
                <MapPin className="h-5 w-5 text-[var(--surface-ink)]" />
                <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  Base
                </p>
                <p className="mt-3 text-lg text-[var(--text-strong)]">{companyProfile.location}</p>
                <p className="mt-4 text-sm leading-8 text-[var(--text-body)]">
                  {companyProfile.serviceArea}
                </p>
              </article>

              <article className="snap-card surface-card rounded-[1.9rem] p-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  Not sure where to start?
                </p>
                <p className="mt-4 text-sm leading-8 text-[var(--text-body)]">
                  If you are still deciding between services, the intake form is the best place to
                  start. If you already know the scope, use the direct options above.
                </p>
                <Link href="/get-started" className="button-ghost mt-4 px-0">
                  Start a Project
                </Link>
              </article>
            </div>

            <LeadInquiryForm />
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
