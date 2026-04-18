import { type ReactNode } from 'react'
const Instagram = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const Linkedin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const Twitter = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
import {
  CONTACT_EMAIL,
  LOCATION_LABEL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from '@/lib/contact'
import { type AppRoute, navigateToRoute } from '@/lib/routes'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

type LegalDialogProps = {
  title: string
  summary: string
  children: ReactNode
}

const LegalDialog = ({ title, summary, children }: LegalDialogProps) => (
  <Dialog>
    <DialogTrigger asChild>
      <button
        type="button"
        className="text-xs text-gray-muted transition-colors duration-300 hover:text-white md:text-sm"
      >
        {title}
      </button>
    </DialogTrigger>
    <DialogContent className="max-h-[85vh] overflow-y-auto border-dark-border bg-dark-card text-white sm:max-w-2xl">
      <DialogHeader className="text-left">
        <DialogTitle className="font-display text-xl text-white">{title}</DialogTitle>
        <DialogDescription className="text-sm text-gray-light">{summary}</DialogDescription>
      </DialogHeader>
      <div className="space-y-4 text-sm leading-relaxed text-gray-light">{children}</div>
    </DialogContent>
  </Dialog>
)

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Services', route: 'services' as AppRoute },
    { name: 'About', route: 'home' as AppRoute },
    { name: 'Contact', route: 'contact' as AppRoute },
  ]

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/digitalapplied/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/digitalapplied', label: 'X' },
    { icon: Instagram, href: 'https://www.instagram.com/digital_applied/', label: 'Instagram' },
  ]

  const goToRoute = (route: AppRoute) => {
    navigateToRoute(route)
  }

  return (
    <footer className="relative border-t border-dark-border py-12 md:py-16">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-dark-bg to-dark-card" />

      <div className="section-padding relative z-10">
        <div className="container-wide">
          <div className="mb-10 grid gap-8 md:mb-12 md:grid-cols-4 md:gap-12">
            <div className="md:col-span-2">
              <a
                href="#/"
                onClick={(event) => {
                  event.preventDefault()
                  goToRoute('home')
                }}
                className="mb-3 inline-block font-display text-xl font-bold text-white transition-colors duration-300 hover:text-violet-lavender md:mb-4 md:text-2xl"
              >
                Digital Applied
              </a>
              <p className="mb-4 max-w-md text-sm text-gray-light md:mb-6 md:text-base">
                Full-service digital marketing delivered faster through agentic workflows. AI agent orchestration with expert-verified quality.
              </p>

              <div className="flex items-center gap-3 md:gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-dark-border bg-dark-card text-gray-light transition-all duration-300 hover:border-cyan hover:text-cyan md:h-10 md:w-10"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 md:h-5 md:w-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-3 font-display text-sm font-semibold text-white md:mb-4 md:text-base">
                Quick Links
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      type="button"
                      onClick={() => goToRoute(link.route)}
                      className="inline-block text-sm text-gray-light transition-all duration-300 hover:translate-x-1 hover:text-white md:text-base"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-display text-sm font-semibold text-white md:mb-4 md:text-base">
                Get in Touch
              </h4>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a
                    href={PHONE_TEL}
                    className="text-sm text-gray-light transition-colors duration-300 hover:text-cyan md:text-base"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-sm text-gray-light transition-colors duration-300 hover:text-cyan md:text-base"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li className="text-sm text-gray-light md:text-base">{LOCATION_LABEL}</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-3 border-t border-dark-border pt-6 md:flex-row md:gap-4 md:pt-8">
            <p className="text-center text-xs text-gray-muted md:text-left md:text-sm">
              © {currentYear} Digital Applied. All rights reserved.
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <LegalDialog
                title="Privacy Policy"
                summary="How enquiry details shared through this website are handled."
              >
                <p>
                  This website is used to introduce services and help you contact Zaid Shery. When
                  you reach out by WhatsApp, email, phone, or the enquiry form, you may share your
                  name, phone number, business name, and project requirements.
                </p>
                <p>
                  That information is used only to reply to your enquiry, prepare proposals,
                  discuss project scope, and support active client work. Personal information is
                  not sold to third parties.
                </p>
                <p>
                  Communication may happen through third-party platforms such as WhatsApp or your
                  email provider, and those services follow their own privacy policies.
                </p>
                <p>
                  For updates or deletion requests, contact{' '}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-cyan transition-colors duration-300 hover:text-violet-lavender"
                  >
                    {CONTACT_EMAIL}
                  </a>{' '}
                  or call{' '}
                  <a
                    href={PHONE_TEL}
                    className="text-cyan transition-colors duration-300 hover:text-violet-lavender"
                  >
                    {PHONE_DISPLAY}
                  </a>
                  .
                </p>
              </LegalDialog>
              <LegalDialog
                title="Terms of Service"
                summary="Basic terms for using this website and requesting services."
              >
                <p>
                  By using this website or contacting Zaid Shery, you agree to use the site for
                  lawful business enquiries and to provide accurate information when requesting a
                  quote, consultation, or project discussion.
                </p>
                <p>
                  Any timelines, pricing, or deliverables mentioned on the website are general
                  examples until they are confirmed in a project-specific proposal or written
                  agreement.
                </p>
                <p>
                  Services may depend on third-party tools such as WhatsApp, automation platforms,
                  hosting services, and AI providers. Their availability and terms are outside the
                  control of this website.
                </p>
                <p>
                  Final project scope, payment terms, revisions, confidentiality, and ownership
                  details should be agreed in writing before paid work begins.
                </p>
              </LegalDialog>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
