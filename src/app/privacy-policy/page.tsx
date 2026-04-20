import PageLayout from '@/components/ui/PageLayout'
import PageIntro from '@/components/ui/PageIntro'
import Link from 'next/link'
import { CONTACT_EMAIL } from '@/lib/contact'
import { companyProfile } from '@/lib/site-content'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Privacy Policy',
  description: `Read how ${companyProfile.name} handles website inquiries and contact information.`,
  path: '/privacy-policy',
})

export default function PrivacyPolicyPage() {
  const hasContactEmail = Boolean(CONTACT_EMAIL)

  return (
    <PageLayout>
      <section className="page-section-tight">
        <div className="shell">
          <PageIntro
            eyebrow="Privacy Policy"
            title="How website inquiries and contact details are handled."
            description="This policy explains what information ZaiferTech may collect through this website and how it is used to respond to inquiries or improve the service experience."
            meta={<span>Last updated: April 19, 2026</span>}
          />
        </div>
      </section>

      <section className="page-section bg-white/55">
        <div className="shell">
          <div className="surface-card rounded-[2rem] p-6 md:p-8">
            <div className="page-prose max-w-3xl">
              <h2>1. Information collected</h2>
              <p>
                When you submit a form, email {companyProfile.name}, or start a WhatsApp
                conversation from this site, the information you provide may include your name,
                email address, company name, service interest, and project details.
              </p>

              <h2>2. How the information is used</h2>
              <p>
                The information is used to respond to inquiries, understand the project scope,
                follow up on requested conversations, and improve how the website and intake flow
                are structured.
              </p>

              <h2>3. Delivery services and tools</h2>
              <p>
                Inquiry submissions may be delivered through third-party email infrastructure used
                for transactional communication. Those tools process the submitted content only for
                the purpose of delivery and response handling.
              </p>

              <h2>4. Data retention</h2>
              <p>
                Inquiry records may be retained for as long as reasonably necessary to respond to
                the request, maintain business correspondence, or keep basic records of past
                conversations.
              </p>

              <h2>5. Cookies and analytics</h2>
              <p>
                Basic analytics or diagnostic tools may be used to understand website performance
                and user behavior. This policy should be updated if a more advanced analytics stack
                is introduced later.
              </p>

              <h2>6. Your choices</h2>
              <p>
                If you want your submitted information reviewed, corrected, or removed from active
                correspondence records, you can request that through the{' '}
                <Link
                  href="/contact"
                  className="underline decoration-[var(--line-strong)] underline-offset-4"
                >
                  contact page
                </Link>
                {hasContactEmail ? ` or by emailing ${CONTACT_EMAIL}.` : '.'}
              </p>

              <h2>7. Contact</h2>
              <p>
                Privacy-related questions can be sent through the public contact channels listed on
                the contact page
                {hasContactEmail ? `, including ${CONTACT_EMAIL},` : ''} and the business operates
                from {companyProfile.location}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
