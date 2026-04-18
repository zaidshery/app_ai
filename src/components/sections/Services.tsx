import { useEffect, useRef, useState } from 'react'
import { ArrowRight, CheckCircle, Code, Megaphone, MessageCircle, Zap, TrendingUp, ShoppingCart, BarChart3 } from 'lucide-react'
import { navigateToRoute } from '@/lib/routes'

const services = [
  {
    icon: TrendingUp,
    title: 'SEO Optimization',
    description:
      'Technical audits, keyword strategy, and on-page optimization that boost rankings and drive organic traffic. Results in days, not weeks.',
    features: ['Technical audits', 'Keyword strategy', 'On-page optimization', 'Organic growth'],
    pricing: 'From €2K/month',
    gradient: 'from-violet-deep to-violet-electric',
  },
  {
    icon: Megaphone,
    title: 'PPC Advertising',
    description:
      'Smarter bid management and campaign optimization across Google Ads and social platforms for maximum return on ad spend.',
    features: ['Bid optimization', 'Campaign setup', 'Ad copy testing', 'Performance tracking'],
    pricing: 'From €2K/month',
    gradient: 'from-cyan to-violet-electric',
  },
  {
    icon: MessageCircle,
    title: 'Content Marketing',
    description:
      'Strategic content that ranks, engages, and converts your target audience at every stage of the funnel.',
    features: ['Content strategy', 'Blog posts', 'Content calendars', 'Distribution'],
    pricing: 'From €2K/month',
    gradient: 'from-violet-electric to-cyan',
  },
  {
    icon: Code,
    title: 'Web Development',
    description:
      'High-performance websites built on modern frameworks. Faster development and deployment for speed and conversion.',
    features: ['Modern frameworks', 'Performance', 'Responsive design', 'SEO optimized'],
    pricing: 'From €2K/month',
    gradient: 'from-violet-lavender to-violet-deep',
  },
  {
    icon: ShoppingCart,
    title: 'eCommerce Solutions',
    description:
      'High-converting Shopify & WooCommerce stores optimized for growth with seamless checkout and payment integrations.',
    features: ['Shopify setup', 'WooCommerce', 'Payment integration', 'Conversion optimization'],
    pricing: 'From €2K/month',
    gradient: 'from-cyan to-violet-lavender',
  },
  {
    icon: BarChart3,
    title: 'CRM & Automation',
    description:
      'Streamline sales and marketing with HubSpot & Zoho CRM implementation plus automated workflows that save hours weekly.',
    features: ['CRM setup', 'Workflow automation', 'Lead management', 'Integration'],
    pricing: 'From €2K/month',
    gradient: 'from-violet-electric to-violet-lavender',
  },
]

type ServicesProps = {
  showHeader?: boolean
  showBottomCta?: boolean
  compact?: boolean
}

const Services = ({ showHeader = true, showBottomCta = true, compact = false }: ServicesProps) => {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleServiceInquiry = (serviceTitle: string) => {
    navigateToRoute('contact')
  }

  return (
    <section
      ref={sectionRef}
      id="services"
      className={`relative overflow-hidden ${
        compact ? 'pb-14 pt-6 md:pb-16 md:pt-8' : 'py-20 md:py-32'
      }`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute h-[500px] w-[500px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #7B4DFF 0%, transparent 70%)',
            filter: 'blur(150px)',
            top: '30%',
            left: '-20%',
          }}
        />
      </div>

      <div className="section-padding relative z-10">
        <div className="container-wide">
          {showHeader ? (
            <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
              <span
                className={`text-sm font-semibold tracking-wider text-cyan uppercase transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                Full-Service Solutions
              </span>
              <h2
                className={`mb-4 mt-3 font-display text-2xl font-bold text-white transition-all duration-700 delay-100 md:mb-6 md:mt-4 md:text-4xl lg:text-5xl ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                Expert Execution <span className="gradient-text">Meets AI Efficiency</span>
              </h2>
              <p
                className={`text-base text-gray-light transition-all duration-700 delay-200 md:text-lg ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                AI agents optimize campaigns, audits, and builds around the clock. Senior strategists verify every deliverable. Unit-based pricing from €2K/month.
              </p>
            </div>
          ) : null}

          <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="relative h-full overflow-hidden rounded-2xl border border-dark-border bg-dark-card p-5 transition-all duration-500 group-hover:border-violet-deep/50 group-hover:shadow-glow md:p-8">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
                  />

                  <div
                    className={`relative mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} transition-transform duration-500 group-hover:scale-110 md:mb-6 md:h-14 md:w-14`}
                  >
                    <service.icon className="h-6 w-6 text-white md:h-7 md:w-7" />
                  </div>

                  <h3 className="relative mb-2 font-display text-lg font-bold text-white transition-colors duration-300 group-hover:text-violet-lavender md:mb-3 md:text-xl">
                    {service.title}
                  </h3>
                  <p className="relative mb-4 text-sm leading-relaxed text-gray-light md:mb-6 md:text-base">
                    {service.description}
                  </p>

                  <div className="relative mb-4 flex flex-wrap gap-2 md:mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="flex items-center gap-1 rounded-full border border-dark-border bg-dark-bg px-2 py-1 text-xs text-gray-light md:px-3"
                      >
                        <CheckCircle className="h-3 w-3 text-cyan" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="relative flex flex-col justify-between gap-3 border-t border-dark-border pt-4 sm:flex-row sm:items-center">
                    <span className="text-sm font-semibold text-cyan md:text-base">
                      {service.pricing}
                    </span>
                    <button
                      onClick={() => handleServiceInquiry(service.title)}
                      className="group/btn flex items-center justify-center gap-1 text-sm text-violet-lavender transition-colors duration-300 hover:text-cyan"
                    >
                      Get Quote
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>

                  <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-r from-violet-deep to-cyan opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20" />
                </div>
              </div>
            ))}
          </div>

          {showBottomCta ? (
            <div className="mt-12 text-center md:mt-16">
              <p className="mb-6 text-base text-gray-light md:mb-8 md:text-lg">
                Ready to get started with agentic workflows?
              </p>
              <button
                onClick={() => navigateToRoute('contact')}
                className="group inline-flex items-center gap-2 rounded-full bg-cyan px-8 py-4 font-semibold text-dark-bg transition-all duration-300 hover:shadow-glow-cyan"
              >
                Get Free Audit
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default Services
