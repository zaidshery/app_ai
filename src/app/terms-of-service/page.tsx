import type { Metadata } from 'next'
import PageLayout from '@/components/ui/PageLayout'

export const metadata: Metadata = {
  title: 'Terms of Service | Digital Applied',
}

export default function TermsPage() {
  return (
    <PageLayout>
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h1 className="mb-4 font-medium text-4xl tracking-tight text-zinc-950">Terms of Service</h1>
          <p className="mb-8 text-sm text-zinc-500">Last updated: January 2025</p>
          <div className="space-y-8">
            {[
              { title: '1. Acceptance of Terms', body: 'By accessing and using the Digital Applied website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.' },
              { title: '2. Description of Services', body: 'Digital Applied provides digital marketing services including SEO, PPC advertising, social media marketing, content marketing, web development, analytics, eCommerce solutions, CRM implementation, and AI integration services.' },
              { title: '3. Unit-Based Pricing', body: 'Our services are priced on a unit-based model. Units represent defined deliverables with scoped work. Unused units may carry forward per your service agreement. Pricing is confirmed in writing before work commences.' },
              { title: '4. Client Responsibilities', body: 'Clients are responsible for providing timely access to required accounts, assets, and information. Delays in providing requested materials may affect delivery timelines and are not the responsibility of Digital Applied.' },
              { title: '5. Intellectual Property', body: 'Upon full payment, clients receive ownership of deliverables produced specifically for them. Digital Applied retains ownership of tools, frameworks, and methodologies used in delivery.' },
              { title: '6. Confidentiality', body: 'Both parties agree to keep each other\'s confidential information secure and not to disclose it to third parties without written consent, except as required by law.' },
              { title: '7. Limitation of Liability', body: 'Digital Applied\'s liability is limited to the fees paid in the preceding 30 days. We are not liable for indirect, incidental, or consequential damages arising from use of our services.' },
              { title: '8. Governing Law', body: 'These terms are governed by the laws of the Czech Republic. Digital Applied, s. r. o. is registered in the Czech Republic.' },
              { title: '9. Contact', body: 'For questions about these terms, contact us at hello@digitalapplied.com.' },
            ].map(section => (
              <div key={section.title}>
                <h2 className="mb-3 font-medium text-xl text-zinc-950">{section.title}</h2>
                <p className="text-sm leading-relaxed text-zinc-500">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
