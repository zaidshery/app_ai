import { useEffect, useRef } from 'react'
import { ArrowRight, CheckCircle, Clock, MapPin, MessageCircle, Play, Zap } from 'lucide-react'
import { navigateToRoute } from '@/lib/routes'

const heroHighlights = [
  'AI-powered campaign optimization',
  'Expert-verified quality assurance',
  'Unit-based pricing from €2K/month',
]

const launchItems = [
  {
    title: 'AI Agents Handle Campaigns',
    description: 'Automated SEO audits, PPC bid optimization, and content workflows running 24/7.',
  },
  {
    title: 'Senior Strategist Verification',
    description: 'Every deliverable verified by experienced strategists before client delivery.',
  },
  {
    title: 'Flexible Unit-Based Pricing',
    description: 'Pay for what you get, not team overhead. Transparent pricing starting at €2K/month.',
  },
]

const heroStats = [
  { value: '128K+', label: 'Qualified Leads Generated' },
  { value: '45%', label: 'Avg. Cost Reduction' },
  { value: '217%', label: 'Organic Growth' },
]

const Hero = () => {
  const isLoaded = true
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const canvas = canvasRef.current

    if (!canvas || prefersReducedMotion) {
      return
    }

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      return
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
    }

    const particles: Particle[] = []
    const particleCount = window.innerWidth < 768 ? 28 : 50
    const particleSpeed = window.innerWidth < 768 ? 0.45 : 0.65
    const connectionDistance = window.innerWidth < 768 ? 90 : 120

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * particleSpeed,
        vy: (Math.random() - 0.5) * particleSpeed,
        radius: Math.random() * 2 + 1,
      })
    }

    let animationId = 0

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.12)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = '#5A2EFF'
        ctx.fill()

        if (index % 4 === 0) {
          particles.slice(index + 1).forEach((other) => {
            const dx = particle.x - other.x
            const dy = particle.y - other.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < connectionDistance) {
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(other.x, other.y)
              ctx.strokeStyle = `rgba(0, 229, 255, ${0.16 * (1 - distance / connectionDistance)})`
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          })
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-32 sm:pt-36 lg:pt-40">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(135deg, #0A0A0F 0%, #12121A 100%)' }}
      />

      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(90,46,255,0.16),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(0,229,255,0.09),transparent_20%)]" />
        <div
          className="absolute left-[4%] top-[6%] h-[500px] w-[500px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, #5A2EFF 0%, transparent 70%)',
            filter: 'blur(120px)',
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute right-[8%] top-[38%] h-[350px] w-[350px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #7B4DFF 0%, transparent 70%)',
            filter: 'blur(100px)',
            animation: 'float 6s ease-in-out infinite reverse',
          }}
        />
        <div
          className="absolute right-[18%] top-[16%] h-[250px] w-[250px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #00E5FF 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'float 10s ease-in-out infinite',
          }}
        />
      </div>

      <div className="relative z-20 w-full section-padding">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] lg:gap-16">
            <div className="text-center lg:text-left">
              <div
                className={`flex flex-wrap items-center justify-center gap-3 transition-all duration-700 lg:justify-start ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                <div className="eyebrow-chip">
                  <MapPin className="h-4 w-4" />
                  Indore, India
                </div>
                <div className="eyebrow-chip">
                  <Clock className="h-4 w-4" />
                  Replies within 24 hours
                </div>
              </div>

              <h1 className="mt-8 font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:max-w-3xl lg:text-7xl">
                <span
                  className={`block transition-all duration-700 delay-100 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                >
                  Experience liftoff with your
                </span>
                <span
                  className={`mt-2 block gradient-text transition-all duration-700 delay-200 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                >
                  agentic growth partner
                </span>
              </h1>

              <p
                className={`mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-light transition-all duration-700 delay-300 md:text-lg lg:mx-0 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                Full-service SEO, PPC, content, and development — delivered faster through
                agentic workflows. AI agent orchestration producing the output of a traditional
                agency, with expert-verified quality at every step.
              </p>

              <p
                className={`mt-4 text-base text-violet-lavender transition-all duration-700 delay-400 md:text-lg ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                Measurable results delivered in days, not weeks.
              </p>

              <div
                className={`mt-8 flex flex-col items-stretch justify-center gap-4 transition-all duration-700 delay-500 sm:flex-row lg:justify-start ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    navigateToRoute('contact')
                  }
                  className="group glow-button inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-8 py-4 font-semibold text-dark-bg transition-all duration-300 hover:scale-[1.02]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Start Your Free Consultation
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button
                  type="button"
                  onClick={() => navigateToRoute('services')}
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-violet-electric hover:bg-violet-deep/10"
                >
                  <Play className="h-5 w-5" />
                  Explore Services
                </button>
              </div>

              <div
                className={`mt-8 grid gap-3 sm:grid-cols-3 transition-all duration-700 delay-600 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                {heroStats.map((stat) => (
                  <div key={stat.label} className="surface-panel rounded-2xl p-4 text-left">
                    <div className="font-display text-2xl font-bold text-white">{stat.value}</div>
                    <div className="mt-1 text-sm text-gray-muted">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div
                className={`mt-8 flex flex-col gap-3 transition-all duration-700 delay-700 sm:grid sm:grid-cols-3 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                {heroHighlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-center gap-2 rounded-full border border-white/8 bg-white/5 px-4 py-3 text-sm text-gray-light lg:justify-start"
                  >
                    <CheckCircle className="h-4 w-4 text-cyan" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`relative mx-auto w-full max-w-xl transition-all duration-1000 lg:max-w-none ${
                isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
              }`}
            >
              <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-violet-deep/30 via-transparent to-cyan/20 blur-3xl" />

              <div className="surface-card relative overflow-hidden rounded-[32px] p-6 sm:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,229,255,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(90,46,255,0.16),transparent_32%)]" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="eyebrow-chip px-3 py-2 text-[11px]">Why Digital Applied</div>
                      <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
                        Agentic execution, expert-verified quality
                      </h2>
                      <p className="mt-3 max-w-md text-sm leading-7 text-gray-light sm:text-base">
                        AI agents run campaigns, audits, and builds around the clock. Every deliverable
                        verified by a senior strategist. Standard deliverables in days, not weeks.
                      </p>
                    </div>

                    <div className="hidden rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-center sm:block">
                      <div className="font-display text-2xl font-bold text-cyan">Days</div>
                      <div className="text-xs uppercase tracking-[0.2em] text-gray-muted">vs Weeks</div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-3">
                    {launchItems.map((item) => (
                      <div
                        key={item.title}
                        className="surface-panel flex items-start gap-3 rounded-2xl p-4"
                      >
                        <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-violet-deep/15 text-cyan">
                          <Zap className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-white">{item.title}</div>
                          <div className="mt-1 text-sm leading-6 text-gray-light">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-cyan/20 bg-cyan/10 p-4">
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
                        Pricing Model
                      </div>
                      <div className="mt-2 text-sm leading-6 text-gray-light">
                        Unit-based pricing from €2K/month. Pay for output, not headcount.
                      </div>
                    </div>
                    <div className="rounded-2xl border border-violet-deep/30 bg-violet-deep/10 p-4">
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-lavender">
                        What You Get
                      </div>
                      <div className="mt-2 text-sm text-gray-light">Live client dashboard with full project visibility</div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={() =>
                        navigateToRoute('contact')
                      }
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-cyan px-5 py-4 font-semibold text-dark-bg transition-all duration-300 hover:shadow-glow-cyan"
                    >
                      Get Free Growth Audit
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => navigateToRoute('services')}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-semibold text-white transition-all duration-300 hover:border-violet-electric hover:bg-violet-deep/10"
                    >
                      View All Services
                    </button>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="surface-panel rounded-2xl px-4 py-3">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-muted">
                        Verification
                      </div>
                      <div className="mt-1 text-sm font-semibold text-white">Expert-verified</div>
                    </div>
                    <div className="surface-panel rounded-2xl px-4 py-3">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-muted">
                        Timeline
                      </div>
                      <div className="mt-1 text-sm font-semibold text-white">
                        Days, not weeks
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-32 bg-gradient-to-t from-dark-bg to-transparent" />
    </section>
  )
}

export default Hero
