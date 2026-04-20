'use client'

import { useActionState, useEffect, useRef } from 'react'
import { ArrowRight, MessageCircleMore } from 'lucide-react'
import { submitLeadInquiry } from '@/app/actions/submit-lead-inquiry'
import BrandMark from '@/components/brand/BrandMark'
import { buildWhatsAppUrl } from '@/lib/contact'
import { leadFormInitialState, preferredContactOptions } from '@/lib/lead'
import { leadServiceOptions } from '@/lib/site-content'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

type LeadInquiryFormProps = {
  defaultService?: string
  heading?: string
  description?: string
}

export default function LeadInquiryForm({
  defaultService,
  heading = 'Tell us what needs attention.',
  description = 'Share the current situation, the main bottleneck, and the result you want to move toward. That is enough to start the conversation well.',
}: LeadInquiryFormProps) {
  const [state, formAction, pending] = useActionState(
    submitLeadInquiry,
    leadFormInitialState
  )
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset()
    }
  }, [state.status])

  const intakeSignals = ['Clear brief', 'Focused scope', 'Human review'] as const

  return (
    <div className="surface-panel rounded-[2rem] p-6 md:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <BrandMark size={50} className="mb-6" markClassName="rounded-[1.05rem]" />
          <span className="section-kicker">Project intake</span>
          <h2 className="mt-5 max-w-[11ch] font-display text-[2.4rem] text-[var(--text-strong)] md:text-[3rem]">
            {heading}
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-[var(--text-body)] md:text-base">
            {description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {intakeSignals.map(signal => (
              <span
                key={signal}
                className="rounded-full border border-[var(--line-soft)] bg-white/78 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]"
              >
                {signal}
              </span>
            ))}
          </div>

          <form ref={formRef} action={formAction} className="mt-8 grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="lead-name" className="field-label">
                  Name
                </label>
                <Input
                  id="lead-name"
                  name="name"
                  placeholder="Your full name"
                  required
                  aria-invalid={!!state.fieldErrors.name}
                  aria-describedby={state.fieldErrors.name ? 'lead-name-error' : undefined}
                />
                {state.fieldErrors.name ? (
                  <p id="lead-name-error" className="mt-2 text-sm text-red-700">
                    {state.fieldErrors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="lead-email" className="field-label">
                  Email
                </label>
                <Input
                  id="lead-email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  aria-invalid={!!state.fieldErrors.email}
                  aria-describedby={state.fieldErrors.email ? 'lead-email-error' : undefined}
                />
                {state.fieldErrors.email ? (
                  <p id="lead-email-error" className="mt-2 text-sm text-red-700">
                    {state.fieldErrors.email}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="lead-company" className="field-label">
                  Company
                </label>
                <Input
                  id="lead-company"
                  name="company"
                  placeholder="Company or brand name"
                />
              </div>

              <div>
                <label htmlFor="lead-service" className="field-label">
                  Service area
                </label>
                <select
                  id="lead-service"
                  name="service"
                  defaultValue={defaultService ?? ''}
                  required
                  aria-invalid={!!state.fieldErrors.service}
                  aria-describedby={state.fieldErrors.service ? 'lead-service-error' : undefined}
                  className="h-12 w-full rounded-[1rem] border border-[var(--line-soft)] bg-white/80 px-4 text-sm text-[var(--text-strong)] shadow-[0_10px_24px_rgba(18,23,33,0.04)] outline-none transition-[border-color,box-shadow,background-color] focus:border-[rgba(154,106,47,0.34)] focus:bg-white focus:ring-[3px] focus:ring-[rgba(154,106,47,0.16)]"
                >
                  <option value="">Select the area you want help with</option>
                  {leadServiceOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {state.fieldErrors.service ? (
                  <p id="lead-service-error" className="mt-2 text-sm text-red-700">
                    {state.fieldErrors.service}
                  </p>
                ) : null}
              </div>
            </div>

            <div>
              <label htmlFor="lead-preferred-contact" className="field-label">
                Preferred reply method
              </label>
              <select
                id="lead-preferred-contact"
                name="preferredContactMethod"
                defaultValue="email"
                required
                aria-invalid={!!state.fieldErrors.preferredContactMethod}
                aria-describedby={
                  state.fieldErrors.preferredContactMethod
                    ? 'lead-preferred-contact-error'
                    : undefined
                }
                className="h-12 w-full rounded-[1rem] border border-[var(--line-soft)] bg-white/80 px-4 text-sm text-[var(--text-strong)] shadow-[0_10px_24px_rgba(18,23,33,0.04)] outline-none transition-[border-color,box-shadow,background-color] focus:border-[rgba(154,106,47,0.34)] focus:bg-white focus:ring-[3px] focus:ring-[rgba(154,106,47,0.16)]"
              >
                {preferredContactOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {state.fieldErrors.preferredContactMethod ? (
                <p id="lead-preferred-contact-error" className="mt-2 text-sm text-red-700">
                  {state.fieldErrors.preferredContactMethod}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="lead-project-brief" className="field-label">
                Project brief
              </label>
              <Textarea
                id="lead-project-brief"
                name="projectBrief"
                placeholder="What are you trying to improve, fix, or build? Share as much context as you can."
                required
                aria-invalid={!!state.fieldErrors.projectBrief}
                aria-describedby={
                  state.fieldErrors.projectBrief ? 'lead-project-brief-error' : undefined
                }
              />
              {state.fieldErrors.projectBrief ? (
                <p id="lead-project-brief-error" className="mt-2 text-sm text-red-700">
                  {state.fieldErrors.projectBrief}
                </p>
              ) : null}
            </div>

            <div className="hidden">
              <label htmlFor="lead-company-site">Company site</label>
              <Input
                id="lead-company-site"
                name="companySite"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="action-row pt-1">
              <Button type="submit" size="lg" disabled={pending}>
                {pending ? 'Sending your inquiry...' : 'Send Inquiry'}
                {!pending ? <ArrowRight className="h-4 w-4" /> : null}
              </Button>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                <MessageCircleMore className="h-4 w-4" />
                Use WhatsApp instead
              </a>
            </div>

            <p
              className={`text-sm ${
                state.status === 'success' ? 'text-emerald-800' : 'text-[var(--text-muted)]'
              }`}
              aria-live="polite"
            >
              {state.message ||
                'You can also switch to WhatsApp if that is the faster way to begin.'}
            </p>
          </form>
        </div>

        <aside className="rounded-[1.8rem] border border-[var(--line-soft)] bg-white/72 p-5 md:p-6 lg:sticky lg:top-24">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
            Helpful context
          </p>
          <h3 className="mt-4 text-[1.75rem] text-[var(--text-strong)]">
            The more specific the friction, the cleaner the recommendation.
          </h3>
          <ul className="detail-list mt-5">
            <li>What is the main business outcome you want this work to support?</li>
            <li>What has already been tried, and where is the current friction?</li>
            <li>What needs to happen first if the project starts in a small, focused way?</li>
          </ul>

          <div className="mt-8 rounded-[1.5rem] border border-[var(--line-soft)] bg-[rgba(154,106,47,0.08)] p-5">
            <p className="text-sm font-semibold text-[var(--text-strong)]">
              Better inquiries create better scope.
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--text-body)]">
              If you already know the service area, choose it. If not, describe the current
              problem as clearly as possible and we can help narrow it down.
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
