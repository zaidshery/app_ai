import type { Metadata } from 'next'
import Link from 'next/link'
import PageLayout from '@/components/ui/PageLayout'

export const metadata: Metadata = {
  title: 'Blog | Digital Applied — Digital Transformation in the Agent-First Era',
  description: 'Deep dives into Agentic Development, Frontier AI models, and data-driven strategies. Explore how AI is reshaping marketing and development.',
}

const categories = [
  'All Posts', 'AI & Business', 'AI & Development', 'Analytics', 'Automation & Productivity',
  'Content Marketing', 'CRM & Automation', 'Development', 'PPC Advertising', 'SEO', 'Social Media', 'eCommerce',
]

const posts = [
  { title: 'How Agentic AI is Transforming Digital Marketing in 2025', date: 'Apr 12, 2025', category: 'AI & Business', slug: 'agentic-ai-transforming-digital-marketing', desc: 'Explore how autonomous AI agents are replacing manual marketing tasks across SEO, PPC, and content production — and what this means for agencies.' },
  { title: 'SEO in the Age of AI: What Actually Works Now', date: 'Apr 5, 2025', category: 'SEO', slug: 'seo-age-of-ai', desc: 'With AI-generated content flooding search, what separates rankings that stick from those that collapse? A practical guide for 2025.' },
  { title: 'Unit-Based Pricing vs Retainers: A Better Model for Clients', date: 'Mar 28, 2025', category: 'AI & Business', slug: 'unit-based-pricing-vs-retainers', desc: 'Why the traditional agency retainer is broken — and how outcome-based unit pricing changes the incentive structure for everyone.' },
  { title: 'Building n8n Workflows for Automated PPC Monitoring', date: 'Mar 20, 2025', category: 'Automation & Productivity', slug: 'n8n-workflows-ppc-monitoring', desc: 'A step-by-step guide to building automated Google Ads monitoring workflows using n8n that alert you when campaigns underperform.' },
  { title: 'Next.js 15 for Marketers: Performance That Actually Ranks', date: 'Mar 14, 2025', category: 'Development', slug: 'nextjs-15-for-marketers', desc: 'How the latest Next.js features — Server Components, partial prerendering, and improved caching — directly impact SEO and Core Web Vitals.' },
  { title: 'HubSpot vs Zoho CRM in 2025: Full Comparison', date: 'Mar 7, 2025', category: 'CRM & Automation', slug: 'hubspot-vs-zoho-crm-2025', desc: 'After implementing both platforms across dozens of clients, we break down exactly when to choose HubSpot and when Zoho makes more sense.' },
  { title: 'Content at Scale Without Sacrificing Quality', date: 'Feb 28, 2025', category: 'Content Marketing', slug: 'content-at-scale-without-sacrificing-quality', desc: 'Our workflow for producing 20+ quality articles per month using AI agents, human editors, and systematic quality checks.' },
  { title: 'Google Analytics 4 Setup Checklist for 2025', date: 'Feb 20, 2025', category: 'Analytics', slug: 'ga4-setup-checklist-2025', desc: 'The complete GA4 configuration checklist covering events, conversions, channel groupings, and Looker Studio dashboards.' },
]

export default function BlogPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 md:px-8 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">Articles & Insights</p>
          <h1 className="mb-4 font-medium text-4xl tracking-tight text-zinc-950 md:text-5xl">
            Digital Transformation in the<br />Agent-First Era
          </h1>
          <p className="text-base leading-relaxed text-zinc-500">
            Deep dives into Agentic Development, Frontier AI models, and data-driven strategies. Explore how AI is reshaping marketing and development.
          </p>
          <p className="mt-3 text-xs text-zinc-400">824 articles published · 1 featured · Instant search enabled</p>
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-zinc-200 bg-zinc-50/50 py-4">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <button key={i} className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${i === 0 ? 'border-zinc-950 bg-zinc-950 text-white' : 'border-zinc-200 bg-white text-zinc-500 hover:border-zinc-400 hover:text-zinc-950'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <h2 className="mb-8 font-medium text-xl text-zinc-950">Latest Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block rounded-xl border border-zinc-200 bg-white p-6 hover:border-zinc-400 hover:shadow-md transition-all">
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600">{post.category}</span>
                  <span className="text-xs text-zinc-400">{post.date}</span>
                </div>
                <h3 className="mb-2 font-medium text-base text-zinc-950 group-hover:text-zinc-700 leading-snug">{post.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-500">{post.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-20 bg-zinc-50/50 border-t border-zinc-200">
        <div className="mx-auto max-w-xl px-4 md:px-8 text-center">
          <h2 className="mb-3 font-medium text-2xl tracking-tight text-zinc-950">Marketing Insights Straight to Your Inbox</h2>
          <p className="mb-6 text-sm text-zinc-500">Join a community of forward-thinking marketers. Unsubscribe at any time.</p>
          <form className="flex flex-col gap-3 sm:flex-row">
            <input type="email" placeholder="your@email.com" className="flex-1 rounded-full border border-zinc-200 px-5 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-zinc-950 focus:outline-none" />
            <button type="submit" className="rounded-full bg-zinc-950 px-6 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </PageLayout>
  )
}
