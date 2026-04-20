import PageLayout from '@/components/ui/PageLayout'
import PageIntro from '@/components/ui/PageIntro'
import Link from 'next/link'
import { CONTACT_EMAIL } from '@/lib/contact'
import { companyProfile } from '@/lib/site-content'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Terms of Service',
  description: `Read the general website and inquiry terms for ${companyProfile.name}.`,
  path: '/terms-of-service',
})

const sections = [
  {
    title: '1. Website use',
    body: `By using the ${companyProfile.name} website, you agree to use it lawfully and not attempt to interfere with its operation, forms, or content delivery.`,
  },
  {
    title: '2. Service information',
    body: 'The website describes the kinds of services ZaiferTech may provide, but a website page alone does not create a binding service agreement. Final scope, timelines, deliverables, and commercial terms are confirmed separately in writing.',
  },
  {
    title: '3. Inquiry submissions',
    body: 'Submitting a form or sending a message does not guarantee availability, acceptance of work, or a specific response timeline. It starts a conversation so the scope can be reviewed.',
  },
  {
    title: '4. Intellectual property',
    body: 'Unless stated otherwise, website copy, design, and structure remain the property of ZaiferTech. Client-specific deliverables are governed by the written agreement for that work.',
  },
  {
    title: '5. Accuracy of information',
    body: 'ZaiferTech aims to keep website information clear and current, but the website should not be treated as a substitute for a project proposal, statement of work, or legal contract.',
  },
  {
    title: '6. Liability',
    body: 'Website content is provided on an as-is basis. ZaiferTech is not liable for indirect or consequential loss arising from reliance on general website information alone.',
  },
  {
    title: '7. Updates',
    body: 'These terms may be updated when the website, inquiry process, or service structure changes. Continued use of the website after updates means you accept the revised terms.',
  },
  {
    title: '8. Contact',
    body: `${companyProfile.name} operates from ${companyProfile.location}. Questions about these terms can be sent through the public contact channels listed on the contact page.`,
  },
]

export default function TermsPage() {
  const hasContactEmail = Boolean(CONTACT_EMAIL)

  return (
    <PageLayout>
      <section className="page-section-tight">
        <div className="shell">
          <PageIntro
            eyebrow="Terms of Service"
            title="General website and inquiry terms."
            description="These terms explain the baseline conditions for using the ZaiferTech website and contacting the business through its public channels."
            meta={<span>Last updated: April 19, 2026</span>}
          />
        </div>
      </section>

      <section className="page-section bg-white/55">
        <div className="shell">
          <div className="surface-card rounded-[2rem] p-6 md:p-8">
            <div className="page-prose max-w-3xl">
              {sections.map(section => (
                <div key={section.title}>
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                </div>
              ))}
              {hasContactEmail ? (
                <p>
                  Direct email contact is also available at {CONTACT_EMAIL}. You can also use the{' '}
                  <Link
                    href="/contact"
                    className="underline decoration-[var(--line-strong)] underline-offset-4"
                  >
                    contact page
                  </Link>
                  .
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
