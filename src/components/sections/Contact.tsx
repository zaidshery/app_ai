import Link from 'next/link'
import { ArrowRight, Mail, MapPin, MessageCircleMore, Phone } from 'lucide-react'
import BrandMark from '@/components/brand/BrandMark'
import { CONTACT_EMAIL, PHONE_DISPLAY, buildWhatsAppUrl } from '@/lib/contact'
import { companyProfile } from '@/lib/site-content'

export default function Contact() {
  const hasContactEmail = Boolean(CONTACT_EMAIL)

  return (
    <section className="page-section bg-[var(--surface-soft)]">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <span className="section-kicker border-[var(--line-soft)] bg-[var(--surface-base)] text-[var(--text-muted)]">
              Start the conversation
            </span>
            <BrandMark
              size={46}
              className="mt-5"
              markClassName="rounded-[1rem]"
            />
            <h2 className="mt-6 max-w-[11ch] font-display text-[clamp(2.4rem,5vw,4.6rem)] leading-none text-[var(--text-strong)]">
              Tell us the bottleneck. We will shape the next move.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-body)] md:text-lg">
              If the issue is visibility, conversion, tracking, or workflow friction, start there.
              The first job is to turn it into a sensible project scope.
            </p>

            <div className="action-row mt-8">
              <Link href="/get-started" className="button-primary">
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                <MessageCircleMore className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="surface-card-strong rounded-[2rem] p-6 md:p-7">
            <div className="snap-strip sm:grid-cols-2">
              {hasContactEmail ? (
                <div className="snap-card rounded-[1.4rem] border border-[var(--line-soft)] bg-[var(--surface-panel)] p-5">
                  <Mail className="h-4 w-4 text-[var(--text-muted)]" />
                  <p className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    Email
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-strong)]">{CONTACT_EMAIL}</p>
                </div>
              ) : (
                <div className="snap-card rounded-[1.4rem] border border-[var(--line-soft)] bg-[var(--surface-panel)] p-5">
                  <Phone className="h-4 w-4 text-[var(--text-muted)]" />
                  <p className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    Best first step
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-strong)]">
                    Use WhatsApp or the intake form for the fastest route into the project
                    conversation.
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-body)]">{PHONE_DISPLAY}</p>
                </div>
              )}
              <div className="snap-card rounded-[1.4rem] border border-[var(--line-soft)] bg-[var(--surface-panel)] p-5">
                <MapPin className="h-4 w-4 text-[var(--text-muted)]" />
                <p className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  Base
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--text-strong)]">{companyProfile.location}</p>
              </div>
            </div>

            <div className="mt-5 rounded-[1.4rem] border border-[var(--line-soft)] bg-[var(--surface-panel)] p-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                What happens next
              </p>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-[var(--text-body)]">
                <li>You share the bottleneck and the current context.</li>
                <li>We review what is live, what is missing, and what matters first.</li>
                <li>We recommend the next sensible scope instead of inflating the brief.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
