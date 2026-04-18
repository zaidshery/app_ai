import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Search, TrendingUp, Users, BarChart3, Edit3, Code, ShoppingCart, Briefcase, Cpu, Clock, CheckCircle2 } from 'lucide-react'
import PageLayout from '@/components/ui/PageLayout'
import ServiceFeatureGrid from '@/components/ui/ServiceFeatureGrid'
import ProcessSteps from '@/components/ui/ProcessSteps'
import PricingSection from '@/components/ui/PricingSection'
import FaqSection from '@/components/ui/FaqSection'
import CtaBanner from '@/components/ui/CtaBanner'

const serviceData: Record<string, {
  label: string
  title: string
  subtitle: string
  stats: { value: string; label: string }[]
  featureTitle: string
  features: { icon: any; title: string; description: string }[]
  faqs: { q: string; a: string }[]
  ctaTitle: string
  ctaDesc: string
}> = {
  'seo-optimization': {
    label: 'SEO',
    title: 'SEO Optimization That Drives Real Results',
    subtitle: 'Technical audits, keyword strategy, and on-page optimization that boost rankings and drive organic traffic. Results in days, not weeks.',
    stats: [{ value: 'Days', label: 'Not Weeks for Results' }, { value: '100%', label: 'Expert Verified' }, { value: '24/7', label: 'AI Monitoring' }, { value: '10x', label: 'Faster Audits' }],
    featureTitle: 'Comprehensive SEO Services',
    features: [
      { icon: Search, title: 'Technical SEO Audits', description: 'AI agents scan and analyze your entire site for technical issues — crawl errors, Core Web Vitals, schema markup — verified by our team.' },
      { icon: BarChart3, title: 'Keyword Strategy', description: 'Data-driven keyword research identifying high-intent opportunities across your market, analyzed faster through agentic workflows.' },
      { icon: Edit3, title: 'On-Page Optimization', description: 'Systematic optimization of titles, meta descriptions, headers, and content at scale with human quality verification.' },
      { icon: Code, title: 'Technical Improvements', description: 'Implementation of structured data, site speed improvements, mobile optimization, and crawlability enhancements.' },
      { icon: TrendingUp, title: 'Strategic Link Building', description: 'Authority-building outreach and link acquisition strategies that improve domain strength and search rankings.' },
      { icon: CheckCircle2, title: 'Monthly Reporting', description: 'Automated dashboards updated in real time, showing rankings, traffic, and conversion performance across all targets.' },
    ],
    faqs: [
      { q: 'How quickly can I expect to see SEO results?', a: 'Most clients see measurable improvements in rankings and traffic within 60–90 days. Technical fixes and on-page changes often show results within weeks.' },
      { q: 'What makes your SEO approach different?', a: 'We combine AI-powered analysis and execution with expert strategist oversight. Audits that take traditional agencies weeks are completed in days.' },
      { q: 'Do you work with local businesses?', a: 'Yes. We provide local SEO optimization including Google Business Profile management, local citations, and geo-targeted keyword strategies.' },
      { q: 'What does unit-based pricing mean for SEO?', a: 'Instead of fixed retainers, you buy units of work. Each unit represents a defined deliverable — audit, content, optimization. Unused units carry forward.' },
    ],
    ctaTitle: 'Ready to Dominate Search Results?',
    ctaDesc: 'Get a free SEO audit and see exactly where you stand — and where you can gain ground.',
  },
  'ppc-advertising': {
    label: 'PPC',
    title: 'PPC Campaigns That Deliver Smarter Results',
    subtitle: 'Smarter bid management and campaign optimization across Google Ads and social platforms for maximum return on ad spend.',
    stats: [{ value: 'Days', label: 'To Campaign Launch' }, { value: 'Multi', label: 'Platform Reach' }, { value: '24/7', label: 'Bid Optimization' }, { value: '100%', label: 'Expert Verified' }],
    featureTitle: 'Why Choose Our PPC Management',
    features: [
      { icon: TrendingUp, title: 'Google Ads Management', description: 'Search, Shopping, Display, and YouTube campaigns set up and optimized by AI agents, reviewed by certified Google Ads experts.' },
      { icon: Users, title: 'Meta Advertising', description: 'Facebook and Instagram campaigns with advanced audience targeting, creative testing, and automated performance optimization.' },
      { icon: Briefcase, title: 'LinkedIn Advertising', description: 'B2B-focused campaigns targeting decision makers with precise job title, industry, and company size filtering.' },
      { icon: BarChart3, title: 'Bid Strategy Optimization', description: 'Automated bidding strategies continuously adjusted by AI recommendations, ensuring maximum return at target CPAs.' },
      { icon: Edit3, title: 'Ad Copy Testing', description: 'Systematic creative testing across headlines, descriptions, and visuals. Winning combinations scaled, losers paused automatically.' },
      { icon: CheckCircle2, title: 'Performance Reporting', description: "Live dashboards showing spend, conversions, ROAS, and recommendations updated in real time so you always know what's working." },
    ],
    faqs: [
      { q: 'How quickly can campaigns go live?', a: 'New campaigns typically launch within 3–5 business days including strategy, creative, and tracking setup.' },
      { q: 'What ad platforms do you manage?', a: 'Google Ads (Search, Shopping, Display, YouTube), Meta (Facebook & Instagram), LinkedIn, and Microsoft Advertising.' },
      { q: 'Do you handle ad creative?', a: 'Yes — we produce ad copy and creative briefs. For image/video assets, we work with your existing materials or recommend creative partners.' },
      { q: 'What minimum budget do you recommend?', a: 'We recommend a minimum ad spend of €1,500/month for meaningful data. Our unit-based management fee is separate from ad spend.' },
    ],
    ctaTitle: 'Ready to Maximize Your Ad Spend?',
    ctaDesc: 'Get a free PPC audit and see where your budget can go further.',
  },
  'social-media-marketing': {
    label: 'Social Media',
    title: 'Social Media That Builds Real Community',
    subtitle: 'Build authentic connections and grow your community with strategic social media management and creative campaigns.',
    stats: [{ value: 'Daily', label: 'Content Publishing' }, { value: 'Multi', label: 'Platform Management' }, { value: '24/7', label: 'Community Monitoring' }, { value: '100%', label: 'Brand Aligned' }],
    featureTitle: 'Complete Social Media Services',
    features: [
      { icon: Edit3, title: 'Strategy Development', description: 'Platform-specific strategy built around your audience, goals, and competitive landscape — updated quarterly.' },
      { icon: Users, title: 'Content Creation', description: 'AI-assisted content production for captions, graphics briefs, and video scripts — human-reviewed before posting.' },
      { icon: CheckCircle2, title: 'Community Management', description: 'Response management and community engagement handled daily, keeping your followers active and satisfied.' },
      { icon: TrendingUp, title: 'Paid Social Advertising', description: 'Targeted paid campaigns on Facebook, Instagram, LinkedIn, and TikTok driving awareness, leads, and sales.' },
      { icon: BarChart3, title: 'Performance Analytics', description: 'Monthly reporting on reach, engagement, follower growth, and paid performance with actionable recommendations.' },
      { icon: Briefcase, title: 'Influencer Outreach', description: 'Identify and coordinate with micro and macro influencers aligned to your brand for authentic reach expansion.' },
    ],
    faqs: [
      { q: 'Which platforms do you manage?', a: 'We manage Instagram, Facebook, LinkedIn, TikTok, X (Twitter), and Pinterest. We recommend focusing on 2–3 platforms where your audience is most active.' },
      { q: 'Who creates the content?', a: 'Our AI agents draft content calendars and captions, which our strategists review and refine before scheduling.' },
      { q: 'How many posts per week?', a: 'Frequency depends on your package — typically 3–7 posts per platform per week, plus Stories and Reels.' },
      { q: 'Will my brand voice be maintained?', a: 'Yes. We begin with a brand voice document and all content is reviewed against it before publishing.' },
    ],
    ctaTitle: 'Ready to Grow Your Social Presence?',
    ctaDesc: 'Get a free social media audit and content strategy session.',
  },
  'content-marketing': {
    label: 'Content',
    title: 'Content Marketing That Ranks and Converts',
    subtitle: 'Strategic content that ranks, engages, and converts your target audience at every stage of the funnel.',
    stats: [{ value: 'Scale', label: 'Content Production' }, { value: 'SEO', label: 'Optimized Output' }, { value: '24/7', label: 'Distribution' }, { value: '100%', label: 'Expert Reviewed' }],
    featureTitle: 'Complete Content Marketing Services',
    features: [
      { icon: Edit3, title: 'Content Strategy', description: 'Research-backed content plans aligned to buyer journey stages, keyword opportunities, and competitive gaps.' },
      { icon: Search, title: 'SEO-Driven Blog Posts', description: 'Long-form articles optimized for target keywords with proper structure, internal linking, and semantic coverage.' },
      { icon: Code, title: 'Landing Pages', description: 'Conversion-focused landing page copy written to drive specific actions — sign-ups, demos, and purchases.' },
      { icon: BarChart3, title: 'Content Analytics', description: 'Tracking of rankings, organic traffic, and goal completions for every piece of content produced.' },
      { icon: Users, title: 'Video & Multimedia Briefs', description: 'Script outlines and creative briefs for video content, podcasts, and infographics to expand your content mix.' },
      { icon: TrendingUp, title: 'Content Distribution', description: 'Systematic distribution of content across owned channels, social platforms, and email newsletters.' },
    ],
    faqs: [
      { q: 'How many articles per month?', a: 'Depends on your package — typically 4–12 blog posts per month, plus additional assets like landing pages and social copy.' },
      { q: 'Do you handle publishing?', a: 'Yes — we can publish directly to WordPress, Webflow, or your CMS of choice with proper SEO settings applied.' },
      { q: 'How do you maintain quality at scale?', a: 'AI agents handle research and first drafts. Every piece goes through human editing and SEO review before delivery.' },
      { q: 'Can you match our existing brand voice?', a: 'Yes — we create a tone-of-voice guide in the onboarding phase. All content is matched to it before delivery.' },
    ],
    ctaTitle: 'Ready to Build Content That Converts?',
    ctaDesc: 'Get a free content audit and keyword opportunity report.',
  },
  'web-development': {
    label: 'Web Dev',
    title: 'Web Development Built for Performance',
    subtitle: 'High-performance websites built on modern frameworks. Faster development and deployment for speed and conversion.',
    stats: [{ value: 'Days', label: 'Faster Delivery' }, { value: '100+', label: 'PageSpeed Score Target' }, { value: 'Next.js', label: 'Modern Stack' }, { value: '100%', label: 'Expert Reviewed' }],
    featureTitle: 'Complete Web Development Services',
    features: [
      { icon: Code, title: 'Next.js & React', description: 'Modern SSR/SSG applications built on Next.js for blazing performance, SEO, and scalability.' },
      { icon: TrendingUp, title: 'Performance Optimization', description: 'Core Web Vitals tuning, image optimization, caching strategies, and CDN configuration for top PageSpeed scores.' },
      { icon: Users, title: 'Responsive Design', description: 'Mobile-first layouts tested across all screen sizes and devices for flawless user experience.' },
      { icon: Search, title: 'SEO Architecture', description: 'Technical SEO built into every project — structured data, sitemaps, canonical tags, and meta management.' },
      { icon: BarChart3, title: 'Analytics Integration', description: 'Google Analytics 4, Tag Manager, and conversion tracking configured and tested before launch.' },
      { icon: Briefcase, title: 'CMS Integration', description: 'Headless CMS connections to Contentful, Sanity, or WordPress for easy content management by your team.' },
    ],
    faqs: [
      { q: 'What is your typical project timeline?', a: 'Most websites are delivered in 3–6 weeks depending on scope. Agentic workflows compress development phases vs traditional agencies.' },
      { q: 'Which frameworks do you use?', a: 'Our primary stack is Next.js with TypeScript. We also work with Astro, Remix, and vanilla React depending on project needs.' },
      { q: 'Do you offer ongoing maintenance?', a: 'Yes — we offer monthly maintenance retainers covering updates, security patches, performance monitoring, and feature additions.' },
      { q: 'Can you redesign an existing website?', a: 'Yes — we regularly modernize existing sites, migrating to performant frameworks while preserving SEO equity.' },
    ],
    ctaTitle: 'Ready to Build Something Fast?',
    ctaDesc: 'Get a free technical audit and development plan for your project.',
  },
  'analytics-insights': {
    label: 'Analytics',
    title: 'Analytics & Insights That Drive Decisions',
    subtitle: 'Automated reporting and real-time dashboards that reveal opportunities and guide strategic decisions.',
    stats: [{ value: 'Live', label: 'Real-Time Dashboards' }, { value: 'GA4', label: 'Certified Setup' }, { value: '24/7', label: 'Data Monitoring' }, { value: '100%', label: 'Verified Accuracy' }],
    featureTitle: 'Complete Analytics Services',
    features: [
      { icon: BarChart3, title: 'Google Analytics 4 Setup', description: 'Full GA4 configuration including enhanced measurement, custom events, and goal tracking for every conversion.' },
      { icon: Code, title: 'Tag Manager Implementation', description: 'Google Tag Manager setup to centralize tracking scripts and enable rapid deployment of new tracking without dev changes.' },
      { icon: TrendingUp, title: 'Custom Dashboards', description: 'Looker Studio and GA4 dashboards built to your KPIs — updated automatically with live data.' },
      { icon: Search, title: 'Conversion Tracking', description: 'Precise tracking of leads, purchases, phone calls, and micro-conversions across all marketing channels.' },
      { icon: Users, title: 'User Behavior Analysis', description: 'Heatmaps, session recordings, and funnel analysis to identify where users drop off and opportunities to improve.' },
      { icon: CheckCircle2, title: 'Monthly Reporting', description: 'Executive-ready reports with insights, trends, and recommendations delivered on a regular cadence.' },
    ],
    faqs: [
      { q: 'What analytics platforms do you work with?', a: 'Google Analytics 4, Adobe Analytics, Mixpanel, Amplitude, and Plausible. We can also connect data to BI tools like Looker and Tableau.' },
      { q: 'How long does setup take?', a: 'Basic GA4 and Tag Manager setup typically takes 2–5 days. Full dashboard and event tracking setup takes 1–2 weeks.' },
      { q: 'Do you audit existing setups?', a: 'Yes — we regularly audit existing analytics implementations for tracking gaps, duplicate events, and data quality issues.' },
      { q: 'What if I already have GA4 installed?', a: 'We do a full audit of your existing setup, fixing any configuration issues and adding missing tracking before building dashboards.' },
    ],
    ctaTitle: 'Ready for Clear, Actionable Data?',
    ctaDesc: 'Get a free analytics audit and see where your tracking has gaps.',
  },
  'ecommerce-solutions': {
    label: 'eCommerce',
    title: 'Build Powerful Online Stores That Sell',
    subtitle: 'Launch and optimize your Shopify or WooCommerce store. Product catalog setup, checkout optimization, and payment integration — faster than traditional agencies.',
    stats: [{ value: 'Days', label: 'Not Weeks to Launch' }, { value: 'Bulk', label: 'Product Catalog Setup' }, { value: '24/7', label: 'Automated Testing' }, { value: '100%', label: 'Expert Verified' }],
    featureTitle: 'Complete eCommerce Solutions',
    features: [
      { icon: ShoppingCart, title: 'Custom Store Development', description: 'Shopify and WooCommerce stores tailored to your brand — configured and tested faster through agentic workflows.' },
      { icon: Briefcase, title: 'Payment Gateway Integration', description: 'Secure payment processing with multiple gateway options, integrated and tested for faster go-live.' },
      { icon: BarChart3, title: 'Inventory Management', description: 'Automated inventory tracking and catalog management that processes bulk product data at scale.' },
      { icon: Code, title: 'Shipping & Fulfillment', description: 'Integrated shipping solutions with real-time rates and tracking, configured and verified before launch.' },
      { icon: TrendingUp, title: 'Conversion Optimization', description: 'Systematic improvements to checkout flow, product pages, and cart abandonment recovery to increase revenue.' },
      { icon: Users, title: 'Mobile-First Design', description: 'Responsive designs optimized for mobile shopping, with AI-assisted testing across devices.' },
    ],
    faqs: [
      { q: 'Shopify or WooCommerce — which should I choose?', a: 'Shopify is ideal for rapid deployment and ease of management. WooCommerce suits complex needs and businesses already on WordPress.' },
      { q: 'Can you migrate my existing store?', a: 'Yes — we handle full store migrations including products, customers, and order history with automated data integrity checks.' },
      { q: 'Do you integrate with ERP or inventory systems?', a: 'Yes — we can integrate with most major ERP and inventory systems via direct API or middleware platforms like Zapier.' },
      { q: 'How long does a new store take to launch?', a: 'A standard store launches in 7–14 days. Large catalogs or complex integrations may take 3–4 weeks.' },
    ],
    ctaTitle: 'Ready to Start Selling Online?',
    ctaDesc: 'Get a free eCommerce strategy session and store audit.',
  },
  'crm-automation': {
    label: 'CRM & Automation',
    title: 'Transform Your Sales & Marketing with Smart Automation',
    subtitle: 'Streamline sales and marketing with HubSpot or Zoho CRM. Pipeline design, workflow automation, and lead nurturing setup — operational in days, not weeks.',
    stats: [{ value: 'Days', label: 'Not Weeks to Deploy' }, { value: 'End-to-End', label: 'Implementation' }, { value: '24/7', label: 'Workflow Execution' }, { value: '100%', label: 'Expert Verified' }],
    featureTitle: 'Complete CRM & Automation Solutions',
    features: [
      { icon: Users, title: 'Contact Management', description: 'AI agents centralize and deduplicate customer data, building comprehensive contact profiles at scale.' },
      { icon: TrendingUp, title: 'Sales Pipeline Automation', description: 'Custom pipelines, deal stages, and automated triggers — designed and configured, reviewed by our team.' },
      { icon: Edit3, title: 'Email Marketing Automation', description: 'Targeted email campaigns with personalization, sequencing, and follow-ups across your entire funnel.' },
      { icon: BarChart3, title: 'Analytics & Reporting', description: 'Real-time dashboards and custom reports giving you data-driven insights without manual configuration.' },
      { icon: Code, title: 'Third-Party Integrations', description: 'Connect your CRM with existing tools — API mappings, data sync, and error handling built automatically.' },
      { icon: CheckCircle2, title: 'Data Migration & Cleanup', description: 'Agent-driven migration with automated deduplication, standardization, and validation — human-verified before cutover.' },
    ],
    faqs: [
      { q: 'HubSpot or Zoho — which is better for my business?', a: 'HubSpot is ideal for inbound marketing and all-in-one platforms. Zoho offers more flexibility for complex sales processes at a lower cost.' },
      { q: 'How long does CRM implementation take?', a: 'Basic CRM setup takes 5–10 days. Complex implementations with integrations and data migration take 2–4 weeks.' },
      { q: 'Can you migrate our data from another CRM?', a: 'Yes — we migrate from Salesforce, Pipedrive, ActiveCampaign, and most other platforms with full data integrity checks.' },
      { q: 'Do you provide training for our team?', a: 'Yes — we provide documentation, video walkthroughs, and live training sessions for your team after implementation.' },
    ],
    ctaTitle: 'Ready to Transform Your Business?',
    ctaDesc: 'Get a free CRM audit and workflow automation assessment.',
  },
  'ai-digital-transformation': {
    label: 'AI Solutions',
    title: 'Build Agentic Workflows That Run Your Operations',
    subtitle: 'Integrate agentic AI into your business operations. Process automation, predictive analytics, and intelligent workflows that reduce manual effort and accelerate decisions.',
    stats: [{ value: 'Days', label: 'Not Weeks to Deploy' }, { value: '10+', label: 'AI Tools Integrated' }, { value: '24/7', label: 'Continuous Operation' }, { value: '100%', label: 'Human Verified' }],
    featureTitle: 'Agentic AI Solutions',
    features: [
      { icon: Cpu, title: 'AI Strategy & Readiness', description: 'Assess your AI readiness, identify high-impact use cases, and build a roadmap tailored to your business goals.' },
      { icon: Users, title: 'Chatbot & AI Assistants', description: 'Custom chatbot and AI assistant implementation — agentic workflows handle setup and testing, we verify quality.' },
      { icon: Code, title: 'Process Automation', description: 'Workflow automation that eliminates repetitive tasks, reduces errors, and frees your team for strategic work.' },
      { icon: BarChart3, title: 'Predictive Analytics', description: 'Machine learning models that forecast trends, customer behavior, and business outcomes — built by AI agents, verified by humans.' },
      { icon: Briefcase, title: 'AI Tool Integration', description: 'Integrate AI tools into your existing tech stack — CRM enrichment, content generation pipelines, and automated data processing.' },
      { icon: TrendingUp, title: 'Performance Intelligence', description: 'Real-time dashboards and automated reporting that surface actionable insights around the clock.' },
    ],
    faqs: [
      { q: 'Do I need technical expertise to implement AI workflows?', a: 'No — our team handles all technical aspects from strategy to deployment. You focus on business outcomes, not technology.' },
      { q: 'Which AI tools and platforms do you work with?', a: 'We work with OpenAI, Anthropic, Google AI, n8n, Make, Zapier, and custom LLM integrations depending on your use case.' },
      { q: 'How do you ensure AI outputs are accurate?', a: 'Every AI-generated output goes through human verification before reaching clients or customers. We maintain quality control at every step.' },
      { q: 'Can AI automation work with our existing software?', a: 'Yes — we connect AI workflows to your existing CRM, ERP, e-commerce platform, and communication tools via API or middleware.' },
    ],
    ctaTitle: 'Ready to Transform with AI?',
    ctaDesc: 'Get a free AI readiness assessment and transformation roadmap.',
  },
}

const pricingTiers = [
  { name: 'Starter', price: '€2,000', units: '/month · 20 units', description: 'For businesses starting their digital marketing journey.', features: ['20 service units/month', '1 primary service focus', 'Monthly strategy call', 'Live dashboard access', 'Email support'], cta: 'Get Started' },
  { name: 'Growth', price: '€4,000', units: '/month · 45 units', description: 'For businesses ready to scale marketing across channels.', features: ['45 service units/month', 'Multi-service execution', 'Bi-weekly strategy calls', 'Priority support', 'Custom reporting', 'A/B testing included'], cta: 'Get Started', highlighted: true },
  { name: 'Scale', price: '€8,000', units: '/month · 100 units', description: 'For high-growth companies needing full-service execution.', features: ['100 service units/month', 'All services included', 'Weekly strategy calls', 'Dedicated account lead', 'Advanced analytics', 'Custom integrations'], cta: 'Contact Us' },
]

export async function generateStaticParams() {
  return Object.keys(serviceData).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const data = serviceData[slug]
  if (!data) return { title: 'Service Not Found' }
  return {
    title: `${data.title} | Digital Applied`,
    description: data.subtitle,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = serviceData[slug]
  if (!data) notFound()

  return (
    <PageLayout>
      {/* Breadcrumb + Hero */}
      <section className="py-20 md:py-28 bg-white text-center">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
            <Link href="/services" className="hover:text-zinc-950 transition-colors">Services</Link>
            {' / '}{data.label}
          </p>
          <h1 className="mb-4 font-medium text-4xl tracking-tight text-zinc-950 md:text-5xl">{data.title}</h1>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-zinc-500">{data.subtitle}</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/get-started" className="inline-flex h-12 items-center rounded-full bg-zinc-950 px-8 text-sm font-medium text-white hover:bg-zinc-800 transition-colors">Get Started</Link>
            <Link href="/contact" className="inline-flex h-12 items-center rounded-full border border-zinc-200 px-8 text-sm font-medium text-zinc-950 hover:bg-zinc-50 transition-colors">Schedule Consultation</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-zinc-200 bg-zinc-50/50 py-8">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 text-center">
            {data.stats.map(stat => (
              <div key={stat.label}>
                <div className="font-semibold text-2xl text-zinc-950">{stat.value}</div>
                <div className="mt-1 text-xs text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceFeatureGrid title={data.featureTitle} features={data.features} />
      <ProcessSteps />
      <PricingSection tiers={pricingTiers} />
      <FaqSection faqs={data.faqs} />
      <CtaBanner title={data.ctaTitle} description={data.ctaDesc} primaryLabel="Get Started" primaryHref="/get-started" secondaryLabel="Schedule Consultation" secondaryHref="/contact" />
    </PageLayout>
  )
}
