import Link from 'next/link'
import PageSignalPanel from '@/components/brand/PageSignalPanel'
import PageLayout from '@/components/ui/PageLayout'
import PageIntro from '@/components/ui/PageIntro'
import LeadInquiryForm from '@/components/forms/LeadInquiryForm'
import { contactExpectations, getServiceBySlug } from '@/lib/site-content'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Get Started',
  description:
    'Start a guided project intake with ZaiferTech for SEO, web development, analytics, CRM automation, ecommerce, or AI workflow implementation.',
  path: '/get-started',
  keywords: ['project intake', 'ZaiferTech inquiry', 'start digital project'],
})

export default async function GetStartedPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>
}) {
  const resolvedSearchParams = await searchParams
  const selectedService =
    resolvedSearchParams.service && getServiceBySlug(resolvedSearchParams.service)
      ? resolvedSearchParams.service
      : undefined

  return (
    <PageLayout>
      <section className="page-section-tight">
        <div className="shell">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_28rem] lg:items-center">
            <PageIntro
              eyebrow="Guided intake"
              title="Start with the current bottleneck."
              description="Use this page when you want to give more context before the conversation begins. A stronger brief makes the first scope easier to recommend."
              actions={
                <Link href="/services" className="button-secondary">
                  Review services first
                </Link>
              }
            />

            <PageSignalPanel
              eyebrow="What to include"
              title="Context beats polish."
              description="You do not need a polished brief. A clear description of the current situation is usually enough to shape the right next scope."
            >
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {['What feels slow', 'What is already live', 'What a better result looks like'].map(item => (
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
          <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="snap-strip md:grid-cols-2 lg:grid-cols-1">
              <article className="snap-card surface-card rounded-[1.9rem] p-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  What helps most
                </p>
                <ul className="detail-list mt-5">
                  {contactExpectations.map(expectation => (
                    <li key={expectation}>{expectation}</li>
                  ))}
                </ul>
              </article>

              <article className="snap-card surface-card rounded-[1.9rem] p-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  Good inputs
                </p>
                <p className="mt-4 text-sm leading-8 text-[var(--text-body)]">
                  Share what is already live, what feels slow or unclear, and what a better result
                  should look like over the next few months.
                </p>
              </article>

              <article className="snap-card surface-card rounded-[1.9rem] p-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  If you prefer direct contact
                </p>
                <p className="mt-4 text-sm leading-8 text-[var(--text-body)]">
                  You can switch to the standard contact page at any time if you would rather use
                  direct email or WhatsApp without completing the full intake.
                </p>
                <Link href="/contact" className="button-ghost mt-4 px-0">
                  Go to contact options
                </Link>
              </article>
            </div>

            <LeadInquiryForm
              defaultService={selectedService}
              heading={
                selectedService
                  ? 'You already picked a direction. Now add the context around it.'
                  : 'Describe the current situation and the project can take shape from there.'
              }
            />
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
