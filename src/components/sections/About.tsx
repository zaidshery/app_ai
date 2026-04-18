import { useEffect, useRef, useState } from 'react'
import { ArrowRight, CheckCircle, Zap, BarChart3, Users } from 'lucide-react'
import { navigateToRoute } from '@/lib/routes'

const valueProps = [
  {
    title: 'AI Agents Run Campaigns',
    body: 'Automated optimization and execution around the clock, not just during business hours.',
  },
  {
    title: 'Expert Verification',
    body: 'Senior strategists review every deliverable before client handoff for quality assurance.',
  },
  {
    title: 'Unit-Based Pricing',
    body: 'Transparent pricing starting at €2K/month. Pay for output, not team overhead.',
  },
  {
    title: 'Fast Delivery',
    body: 'Standard deliverables ship in days, not weeks. Agentic workflows compress timelines.',
  },
]

const About = () => {
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
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const capabilities = [
    { icon: Zap, text: 'AI agent orchestration for campaigns' },
    { icon: Users, text: 'Expert strategist verification' },
    { icon: BarChart3, text: 'Real-time performance dashboards' },
  ]

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute h-[400px] w-[400px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #5A2EFF 0%, transparent 70%)',
            filter: 'blur(150px)',
            top: '20%',
            right: '-10%',
          }}
        />
      </div>

      <div className="section-padding relative z-10">
        <div className="container-wide">
          <div className="grid items-center gap-10 md:gap-16 lg:grid-cols-2">
            <div>
              <div
                className={`transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                <span className="text-sm font-semibold tracking-wider text-cyan uppercase">
                  Why Choose Digital Applied
                </span>
              </div>

              <h2
                className={`mb-4 mt-3 font-display text-2xl font-bold text-white transition-all duration-700 delay-100 md:mb-6 md:mt-4 md:text-4xl lg:text-5xl ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                The <span className="gradient-text">Modern Approach</span> to Digital{' '}
                <span className="text-violet-lavender">Marketing</span>
              </h2>

              <div
                className={`space-y-3 text-sm text-gray-light transition-all duration-700 delay-200 md:space-y-4 md:text-base ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <p>
                  We deliver the output of a traditional agency with AI agent automation and expert
                  strategist oversight at every step.
                </p>
                <p className="text-sm text-violet-lavender md:text-base">
                  Your campaigns are optimized 24/7 by AI agents while our senior strategists verify
                  quality and keep you informed with live dashboards showing exactly what's working.
                </p>
              </div>

              <div
                className={`mt-6 grid grid-cols-1 gap-3 transition-all duration-700 delay-300 sm:grid-cols-2 md:mt-8 md:gap-4 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                {capabilities.map((capability, index) => (
                  <div
                    key={capability.text}
                    className="surface-panel flex items-center gap-2 rounded-2xl p-3 md:gap-3 md:p-4"
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <capability.icon className="h-4 w-4 flex-shrink-0 text-cyan md:h-5 md:w-5" />
                    <span className="text-xs text-gray-light md:text-sm">{capability.text}</span>
                  </div>
                ))}
              </div>

              <div
                className={`mt-6 rounded-xl border border-violet-deep/20 bg-gradient-to-r from-violet-deep/10 to-cyan/10 p-4 transition-all duration-700 delay-400 md:mt-8 md:p-6 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <h4 className="mb-3 font-display text-sm font-semibold text-white md:text-base">
                  Why Work With Me
                </h4>
                <ul className="space-y-2">
                  {valueProps.map((item) => (
                    <li
                      key={item.title}
                      className="flex items-start gap-2 text-xs text-gray-light md:text-sm"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan" />
                      <span>
                        <strong>{item.title}:</strong> {item.body}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`mt-6 transition-all duration-700 delay-500 md:mt-8 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <button
                  onClick={() =>
                    navigateToRoute('contact')
                  }
                  className="inline-flex items-center gap-2 rounded-full bg-cyan px-5 py-2.5 text-sm font-semibold text-dark-bg transition-all duration-300 hover:shadow-glow-cyan md:px-6 md:py-3 md:text-base"
                >
                  Get Free Audit
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
              }`}
            >
              <div className="relative">
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-violet-deep to-violet-electric opacity-20 blur-2xl md:-inset-4" />

                <div className="surface-card relative overflow-hidden rounded-[28px] p-6 md:p-8">
                  <div className="mb-6 md:mb-8">
                    <h3 className="font-display text-lg font-bold text-white md:text-xl">
                      Measurable Impact
                    </h3>
                    <p className="mt-1 text-xs text-gray-muted md:text-sm">Proven results across industries</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    {[
                      { value: '128K+', label: 'Leads Generated' },
                      { value: '45%', label: 'Avg Cost Reduction' },
                      { value: '217%', label: 'Organic Growth' },
                      { value: '€72M+', label: 'Revenue Generated' },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="surface-panel rounded-2xl p-3 text-center md:p-4"
                      >
                        <div className="mb-1 font-display text-lg font-bold text-cyan md:text-2xl">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-muted">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-dark-border pt-6 md:mt-8 md:pt-8">
                    <h4 className="mb-4 font-display text-sm font-semibold text-white md:text-base">
                      How We Deliver
                    </h4>
                    <ul className="space-y-3">
                      {valueProps.slice(0, 3).map((item) => (
                        <li
                          key={item.title}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan" />
                          <span className="text-xs text-gray-light md:text-sm">
                            <strong>{item.title}:</strong> {item.body}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() =>
                      navigateToRoute('contact')
                    }
                    className="mt-6 w-full rounded-xl bg-cyan py-3 text-sm font-semibold text-dark-bg transition-all duration-300 hover:shadow-glow-cyan md:mt-8 md:py-4 md:text-base"
                  >
                    Start Free Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
