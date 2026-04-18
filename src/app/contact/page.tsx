import type { Metadata } from 'next'
import Link from 'next/link'
import PageLayout from '@/components/ui/PageLayout'

export const metadata: Metadata = {
  title: 'Contact Us | Digital Applied',
  description: 'Get in touch with Digital Applied. Let\'s discuss how we can help transform your digital marketing strategy.',
}

export default function ContactPage() {
  return (
    <PageLayout>
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">Get in Touch</p>
            <h1 className="mb-4 font-medium text-4xl tracking-tight text-zinc-950 md:text-5xl">Get in Touch</h1>
            <p className="text-base text-zinc-500">Let's discuss how we can help transform your digital marketing strategy.</p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Form */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
              <form className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-zinc-700">First Name</label>
                    <input type="text" placeholder="John" className="w-full rounded-lg border border-zinc-200 px-4 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-zinc-950 focus:outline-none" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-zinc-700">Last Name</label>
                    <input type="text" placeholder="Doe" className="w-full rounded-lg border border-zinc-200 px-4 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-zinc-950 focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-zinc-700">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full rounded-lg border border-zinc-200 px-4 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-zinc-950 focus:outline-none" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-zinc-700">Message</label>
                  <textarea rows={5} placeholder="Tell us about your project..." className="w-full resize-none rounded-lg border border-zinc-200 px-4 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-zinc-950 focus:outline-none" />
                </div>
                <button type="submit" className="w-full rounded-full bg-zinc-950 py-3 text-sm font-medium text-white hover:bg-zinc-800 transition-colors">
                  Send Message
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <h2 className="mb-4 font-medium text-xl text-zinc-950">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">Email</p>
                    <a href="mailto:hello@digitalapplied.com" className="text-sm text-zinc-950 hover:underline">hello@digitalapplied.com</a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">Social</p>
                    <div className="flex gap-4">
                      {[
                        { label: 'Facebook', href: 'https://www.facebook.com/digitalapplied' },
                        { label: 'Instagram', href: 'https://www.instagram.com/digital_applied' },
                        { label: 'LinkedIn', href: 'https://www.linkedin.com/company/digitalapplied' },
                      ].map(s => (
                        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 hover:text-zinc-950 transition-colors">{s.label}</a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
                <h3 className="mb-2 font-medium text-base text-zinc-950">Let's Start a Conversation</h3>
                <p className="mb-4 text-sm leading-relaxed text-zinc-500">
                  We're here to help you grow your business with effective digital marketing strategies. Whether you need help with SEO, social media, or a complete digital transformation, our team is ready to create a custom solution for your needs.
                </p>
                <Link href="/get-started" className="inline-flex h-9 items-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-white hover:bg-zinc-800 transition-colors">
                  Get Started Free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
