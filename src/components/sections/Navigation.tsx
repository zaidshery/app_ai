import { useEffect, useState } from 'react'
import { ArrowRight, Menu, Sparkles, X } from 'lucide-react'
import { type AppRoute, navigateToRoute } from '@/lib/routes'

interface NavigationProps {
  scrollY: number
  currentRoute: AppRoute
}

const navLinks = [
  { name: 'Home', route: 'home' as const },
  { name: 'Services', route: 'services' as const },
  { name: 'About', route: 'home' as const },
  { name: 'Contact', route: 'contact' as const },
]

const Navigation = ({ scrollY, currentRoute }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const isScrolled = scrollY > 24

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleRouteChange = (route: AppRoute) => {
    navigateToRoute(route)
    setIsOpen(false)
  }

  const goHome = () => {
    handleRouteChange('home')
  }

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <nav
          className={`mx-auto max-w-7xl rounded-[28px] border transition-all duration-500 ${
            isScrolled
              ? 'glass border-dark-border/80 shadow-[0_20px_60px_rgba(0,0,0,0.35)]'
              : 'border-white/10 bg-dark-bg/40 backdrop-blur-md'
          }`}
        >
          <div
            className={`flex items-center justify-between gap-4 px-4 sm:px-5 ${
              isScrolled ? 'py-3' : 'py-4'
            }`}
          >
            <button
              type="button"
              onClick={goHome}
              className="group flex items-center gap-3 text-left"
              aria-label="Go to home page"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan to-violet-electric text-white font-semibold text-lg">
                DA
              </span>
              <span className="hidden min-w-0 min-[380px]:block">
                <span className="block font-display text-base font-semibold text-white">
                  Digital Applied
                </span>
                <span className="block max-w-[12rem] text-xs leading-tight text-gray-muted">
                  Agentic growth partner
                </span>
              </span>
            </button>

            <div className="hidden items-center gap-4 xl:gap-6 lg:flex">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleRouteChange(link.route)}
                  className={`group relative whitespace-nowrap text-[13px] xl:text-sm transition-colors duration-300 hover:text-white ${
                    currentRoute === link.route ? 'text-white' : 'text-gray-light'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-cyan transition-all duration-300 ${
                      currentRoute === link.route ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="hidden items-center gap-2 xl:gap-3 lg:flex">
              <div className="eyebrow-chip hidden whitespace-nowrap px-3 py-2 text-[11px] min-[1180px]:inline-flex">
                <Sparkles className="h-3.5 w-3.5" />
                Expert-verified quality
              </div>
              <button
                type="button"
                onClick={() => handleRouteChange('contact')}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-violet-deep px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-electric hover:shadow-glow xl:px-5"
              >
                Get Free Audit
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                onClick={() => setIsOpen((open) => !open)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-50 transition-all duration-300 lg:hidden ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <button
          type="button"
          className="absolute inset-0 bg-dark-bg/80 backdrop-blur-md"
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`absolute inset-x-4 bottom-4 top-4 flex flex-col rounded-[32px] border border-white/10 bg-dark-card/95 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 ${
            isOpen ? 'translate-y-0 scale-100' : '-translate-y-4 scale-95'
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="eyebrow-chip mb-3 px-3 py-2 text-[11px]">
                <Sparkles className="h-3.5 w-3.5" />
                Expert-verified quality
              </div>
              <h3 className="font-display text-2xl font-semibold text-white">Digital Applied</h3>
              <p className="mt-1 max-w-xs text-sm text-gray-light">
                Full-service digital marketing delivered faster through agentic workflows.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mt-8 min-h-0 flex-1 overflow-y-auto pr-1">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleRouteChange(link.route)}
                  className="flex w-full items-center justify-between rounded-2xl border border-white/8 bg-white/5 px-4 py-4 font-display text-left text-lg text-white transition-all duration-300 hover:border-violet-deep/40 hover:bg-violet-deep/10"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="h-4 w-4 text-cyan" />
                </button>
              ))}
            </div>

            <div className="mt-8 grid gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false)
                  handleRouteChange('contact')
                }}
                className="flex items-center justify-center gap-2 rounded-2xl bg-cyan px-5 py-4 font-semibold text-dark-bg transition-all duration-300 hover:shadow-glow-cyan"
              >
                Get Free Audit
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 surface-panel rounded-2xl p-4">
              <p className="text-sm text-gray-light">
                AI agents run campaigns and audits around the clock. Our senior strategists verify every deliverable for expert-verified quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation
