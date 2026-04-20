import Link from 'next/link'
import PageLayout from '@/components/ui/PageLayout'
import PageIntro from '@/components/ui/PageIntro'
import { blogPreviewTopics } from '@/lib/site-content'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Insights',
  description:
    'The ZaiferTech insights section is being prepared with real publishing plans around search strategy, web execution, analytics, and workflow automation.',
  path: '/blog',
  noIndex: true,
})

export default function BlogPage() {
  return (
    <PageLayout>
      <section className="page-section-tight">
        <div className="shell">
          <PageIntro
            eyebrow="Insights"
            title="The publishing system is being prepared before articles go live."
            description="Rather than shipping placeholder posts and empty promises, this section is parked until the editorial workflow is ready for real content."
          />
        </div>
      </section>

      <section className="page-section bg-white/55">
        <div className="shell">
          <div className="grid gap-5 md:grid-cols-3">
            {blogPreviewTopics.map(topic => (
              <article key={topic.title} className="surface-card rounded-[1.9rem] p-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  Planned topic
                </p>
                <h2 className="mt-4 text-[1.9rem] text-[var(--text-strong)]">{topic.title}</h2>
                <p className="mt-4 text-sm leading-8 text-[var(--text-body)]">
                  {topic.description}
                </p>
              </article>
            ))}
          </div>

          <div className="surface-card mt-8 rounded-[2rem] p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  Until then
                </p>
                <h2 className="mt-4 max-w-[11ch] text-[2.4rem] text-[var(--text-strong)]">
                  The best way to learn more is to review services or start a conversation.
                </h2>
              </div>

              <div className="action-row">
                <Link href="/services" className="button-secondary">
                  Review services
                </Link>
                <Link href="/contact" className="button-primary">
                  Contact ZaiferTech
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
