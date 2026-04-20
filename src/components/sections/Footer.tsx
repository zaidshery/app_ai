import Link from 'next/link'
import { ArrowUpRight, Mail, MapPin, MessageCircleMore, Phone } from 'lucide-react'
import BrandMark from '@/components/brand/BrandMark'
import { CONTACT_EMAIL, PHONE_DISPLAY, PHONE_TEL, buildWhatsAppUrl } from '@/lib/contact'
import { companyProfile, legalLinks, navigationLinks } from '@/lib/site-content'

export default function Footer() {
  const hasContactEmail = Boolean(CONTACT_EMAIL)

  return (
    <footer className="mt-auto border-t border-[var(--line-soft)] bg-[var(--surface-soft)] text-[var(--text-strong)]">
      <div className="shell py-14 md:py-18">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Link href="/" className="inline-flex items-center">
              <BrandMark
                size={48}
                showWordmark
                subtitle="Calm, direct digital systems"
                nameClassName="block font-display text-[1.55rem] text-[var(--text-strong)]"
                subtitleClassName="block text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]"
              />
            </Link>

            <p className="mt-5 max-w-xl text-sm leading-8 text-[var(--text-body)] md:text-base">
              {companyProfile.description} The focus stays on useful execution: clearer
              positioning, healthier lead flow, better websites, and less internal friction.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {hasContactEmail ? (
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="surface-card-strong rounded-[1.35rem] p-4 transition-transform hover:-translate-y-0.5"
                >
                  <Mail className="h-4 w-4 text-[var(--text-muted)]" />
                  <p className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    Email
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-strong)]">{CONTACT_EMAIL}</p>
                </a>
              ) : null}

              <a
                href={PHONE_TEL}
                className="surface-card-strong rounded-[1.35rem] p-4 transition-transform hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4 text-[var(--text-muted)]" />
                <p className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  Phone
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--text-strong)]">{PHONE_DISPLAY}</p>
              </a>

              <div className="surface-card-strong rounded-[1.35rem] p-4">
                <MapPin className="h-4 w-4 text-[var(--text-muted)]" />
                <p className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  Location
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--text-strong)]">{companyProfile.location}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                Explore
              </p>
              <ul className="mt-4 space-y-3">
                {navigationLinks.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-2 text-sm text-[var(--text-body)] transition-colors hover:text-[var(--text-strong)]"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                Stay Grounded
              </p>
              <ul className="mt-4 space-y-3">
                {legalLinks.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-body)] transition-colors hover:text-[var(--text-strong)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-[1.5rem] border border-[var(--line-soft)] bg-[var(--surface-panel)] p-5">
                <p className="text-sm leading-7 text-[var(--text-body)]">
                  Prefer a faster conversation? Send a quick project note on WhatsApp and we
                  will continue from there.
                </p>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--line-soft)] bg-[var(--surface-base)] px-4 py-2 text-sm font-semibold text-[var(--text-strong)] transition-colors hover:bg-[var(--surface-panel-strong)]"
                >
                  <MessageCircleMore className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--line-soft)] pt-6 text-sm text-[var(--text-muted)] md:flex-row md:items-center md:justify-between">
          <p>{new Date().getFullYear()} {companyProfile.name}. All rights reserved.</p>
          <p>{companyProfile.serviceArea}</p>
        </div>
      </div>
    </footer>
  )
}
