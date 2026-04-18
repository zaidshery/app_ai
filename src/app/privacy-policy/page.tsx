import type { Metadata } from 'next'
import PageLayout from '@/components/ui/PageLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy | Digital Applied',
}

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h1 className="mb-4 font-medium text-4xl tracking-tight text-zinc-950">Privacy Policy</h1>
          <p className="mb-8 text-sm text-zinc-500">Last updated: January 2025</p>
          <div className="prose prose-zinc max-w-none">
            <h2 className="text-xl font-medium text-zinc-950 mb-3">1. Information We Collect</h2>
            <p className="text-sm leading-relaxed text-zinc-500 mb-6">We collect information you provide directly to us, such as when you fill out a contact form, subscribe to our newsletter, or request a consultation. This may include your name, email address, company name, and project details.</p>

            <h2 className="text-xl font-medium text-zinc-950 mb-3">2. How We Use Your Information</h2>
            <p className="text-sm leading-relaxed text-zinc-500 mb-6">We use the information we collect to provide, maintain, and improve our services, respond to your inquiries, send marketing communications where permitted, and comply with legal obligations.</p>

            <h2 className="text-xl font-medium text-zinc-950 mb-3">3. Cookies</h2>
            <p className="text-sm leading-relaxed text-zinc-500 mb-6">We use cookies and similar tracking technologies to improve your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can control cookie settings through your browser.</p>

            <h2 className="text-xl font-medium text-zinc-950 mb-3">4. Third-Party Services</h2>
            <p className="text-sm leading-relaxed text-zinc-500 mb-6">We may use third-party analytics, advertising, and CRM platforms. These services have their own privacy policies and may collect information about your online activities.</p>

            <h2 className="text-xl font-medium text-zinc-950 mb-3">5. Data Retention</h2>
            <p className="text-sm leading-relaxed text-zinc-500 mb-6">We retain personal data for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required by law.</p>

            <h2 className="text-xl font-medium text-zinc-950 mb-3">6. Your Rights</h2>
            <p className="text-sm leading-relaxed text-zinc-500 mb-6">Under GDPR and applicable data protection laws, you have the right to access, correct, or delete your personal data. To exercise these rights, contact us at hello@digitalapplied.com.</p>

            <h2 className="text-xl font-medium text-zinc-950 mb-3">7. Contact Us</h2>
            <p className="text-sm leading-relaxed text-zinc-500">For privacy-related questions, contact Digital Applied, s. r. o. at hello@digitalapplied.com.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
