import type { Metadata } from 'next'
import Link from 'next/link'
import PageLayout from '@/components/ui/PageLayout'
import CtaBanner from '@/components/ui/CtaBanner'
import { Search, TrendingUp, Users, BarChart3, Edit3, Code, ShoppingCart, Briefcase, Cpu } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Digital Marketing Services | Digital Applied',
  description: 'Full-service digital marketing with AI-powered execution — SEO, PPC, content, and development delivered faster through agentic workflows.',
}

const services = [
  { icon: Search, title: 'SEO Optimization', slug: 'seo-optimization', desc: 'Technical audits, keyword strategy, and on-page optimization that boost rankings and drive organic traffic.', items: ['Comprehensive SEO audits', 'Data-driven keyword strategy', 'On-page optimization at scale', 'Technical SEO improvements'] },
  { icon: TrendingUp, title: 'PPC Advertising', slug: 'ppc-advertising', desc: 'Smarter bid management and campaign optimization across Google Ads and social platforms for maximum ROAS.', items: ['Google Ads management', 'Facebook & Instagram ads', 'LinkedIn advertising', 'Display advertising'] },
  { icon: Users, title: 'Social Media Marketing', slug: 'social-media-marketing', desc: 'Build authentic connections and grow your community with strategic social media management and creative campaigns.', items: ['Social media strategy', 'Strategic content creation', 'Community management', 'Paid social advertising'] },
  { icon: BarChart3, title: 'Analytics & Insights', slug: 'analytics-insights', desc: 'Automated reporting and real-time dashboards that reveal opportunities and guide strategic decisions.', items: ['Google Analytics setup', 'Custom dashboard creation', 'Conversion tracking', 'User behavior analysis'] },
  { icon: Edit3, title: 'Content Marketing', slug: 'content-marketing', desc: 'Strategic content that ranks, engages, and converts your target audience at every stage of the funnel.', items: ['Content strategy development', 'Blog production at scale', 'Video content creation', 'Infographic design'] },
  { icon: Code, title: 'Web Development', slug: 'web-development', desc: 'High-performance websites built on modern frameworks for speed, conversion, and SEO.', items: ['Next.js & React development', 'Performance optimization', 'Responsive design', 'CMS integration'] },
  { icon: ShoppingCart, title: 'eCommerce Solutions', slug: 'ecommerce-solutions', desc: 'High-converting Shopify & WooCommerce stores with seamless checkout and payment integration.', items: ['Shopify & WooCommerce', 'Payment gateway integration', 'Inventory management', 'Mobile-first design'] },
  { icon: Briefcase, title: 'CRM & Automation', slug: 'crm-automation', desc: 'Streamline sales and marketing with HubSpot & Zoho CRM plus automated workflows that save hours weekly.', items: ['HubSpot & Zoho setup', 'Workflow automation', 'Lead nurturing', 'Data migration'] },
  { icon: Cpu, title: 'AI & Digital Transformation', slug: 'ai-digital-transformation', desc: 'Integrate agentic AI into your operations — process automation, predictive analytics, intelligent workflows.', items: ['AI strategy & readiness', 'Chatbot & AI assistants', 'Process automation', 'Predictive analytics'] },
]

export default function ServicesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-8 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">Full-Service Marketing</p>
          <h1 className="mb-4 font-medium text-4xl tracking-tight text-zinc-950 md:text-5xl">Digital Marketing Services<br />That Drive Results</h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-500">
            Full-service digital marketing with AI-powered execution. We deliver SEO, PPC, content, and development faster through automated workflows — with every deliverable verified by an expert.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/get-started" className="inline-flex h-12 items-center rounded-full bg-zinc-950 px-8 text-sm font-medium text-white hover:bg-zinc-800 transition-colors">Get Started</Link>
            <Link href="/contact" className="inline-flex h-12 items-center rounded-full border border-zinc-200 px-8 text-sm font-medium text-zinc-950 hover:bg-zinc-50 transition-colors">Schedule Consultation</Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-zinc-50/50 border-y border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(service => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group block h-full rounded-xl border border-zinc-200 bg-white p-6 hover:border-zinc-400 hover:shadow-md transition-all">
                <div className="mb-4 text-zinc-950"><service.icon className="h-5 w-5" /></div>
                <h3 className="mb-2 font-medium text-base text-zinc-950 group-hover:text-zinc-700">{service.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-zinc-500">{service.desc}</p>
                <ul className="space-y-1.5">
                  {service.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-xs text-zinc-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Accelerate Your Growth?"
        description="Let's discuss how our services can help you achieve your business goals faster."
        primaryLabel="Get Started"
        primaryHref="/get-started"
        secondaryLabel="Schedule Consultation"
        secondaryHref="/contact"
      />
    </PageLayout>
  )
}
