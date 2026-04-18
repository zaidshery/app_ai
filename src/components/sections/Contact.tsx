import { useEffect, useRef, useState } from 'react'
import { CheckCircle, Clock, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import {
  buildWhatsAppUrl,
  CONTACT_EMAIL,
  LOCATION_LABEL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from '@/lib/contact'
import { navigateToRoute } from '@/lib/routes'

type LeadForm = {
  name: string
  phone: string
  businessName: string
  businessType: string
  service: string
  budget: string
  message: string
}

const INITIAL_FORM: LeadForm = {
  name: '',
  phone: '',
  businessName: '',
  businessType: '',
  service: '',
  budget: '',
  message: '',
}

const BUSINESS_TYPES = [
  { value: 'coaching', label: 'Coaching Institute' },
  { value: 'clinic', label: 'Clinic / Hospital' },
  { value: 'real-estate', label: 'Real Estate' },
  { value: 'retail', label: 'Retail / Shop' },
  { value: 'service', label: 'Service Business' },
  { value: 'other', label: 'Other' },
]

const SERVICE_OPTIONS = [
  { value: 'seo', label: 'SEO Optimization' },
  { value: 'ppc', label: 'PPC Advertising' },
  { value: 'content', label: 'Content Marketing' },
  { value: 'dev', label: 'Web Development' },
  { value: 'ecommerce', label: 'eCommerce Solutions' },
  { value: 'crm', label: 'CRM & Automation' },
  { value: 'not-sure', label: 'Not Sure Yet' },
]

const BUDGET_OPTIONS = [
  { value: '2k-5k', label: '€2K - €5K' },
  { value: '5k-10k', label: '€5K - €10K' },
  { value: '10k-20k', label: '€10K - €20K' },
  { value: '20k+', label: '€20K+' },
  { value: 'not-sure', label: 'Not Sure Yet' },
]

const getLabel = (options: { value: string; label: string }[], value: string) =>
  options.find((option) => option.value === value)?.label ?? value

type ContactProps = {
  showHeader?: boolean
  compact?: boolean
}

const Contact = ({ showHeader = true, compact = false }: ContactProps) => {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [form, setForm] = useState(INITIAL_FORM)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formError, setFormError] = useState('')

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

  const updateField = (field: keyof LeadForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
    if (formError) {
      setFormError('')
    }
  }

  const buildLeadMessage = () => {
    const lines = [
      'Hi, I want to discuss digital marketing and growth strategies for my business.',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Company: ${form.businessName}`,
      `Industry: ${getLabel(BUSINESS_TYPES, form.businessType)}`,
      `Service interested in: ${getLabel(SERVICE_OPTIONS, form.service)}`,
    ]

    if (form.budget) {
      lines.push(`Budget: ${getLabel(BUDGET_OPTIONS, form.budget)}`)
    }

    if (form.message.trim()) {
      lines.push(`Details: ${form.message.trim()}`)
    }

    lines.push('', 'Please share your approach and next steps.')

    return lines.join('\n')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.name || !form.phone || !form.businessName || !form.businessType || !form.service) {
      setFormError('Please fill all required fields before continuing to WhatsApp.')
      return
    }

    setIsSubmitting(true)

    const whatsappUrl = buildWhatsAppUrl(buildLeadMessage())
    const popup = window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    if (!popup) {
      window.location.href = whatsappUrl
    }

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const resetForm = () => {
    setForm(INITIAL_FORM)
    setFormError('')
    setIsSubmitted(false)
  }

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: PHONE_DISPLAY,
      href: PHONE_TEL,
    },
    {
      icon: Mail,
      label: 'Email',
      value: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: LOCATION_LABEL,
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: 'Within 24 hours',
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`relative overflow-hidden ${
        compact ? 'pb-16 pt-6 md:pb-20 md:pt-8' : 'py-20 md:py-32'
      }`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute h-[500px] w-[500px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #5A2EFF 0%, transparent 70%)',
            filter: 'blur(150px)',
            top: '20%',
            left: '-20%',
          }}
        />
        <div
          className="absolute h-[400px] w-[400px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #00E5FF 0%, transparent 70%)',
            filter: 'blur(150px)',
            bottom: '10%',
            right: '-15%',
          }}
        />
      </div>

      <div className="section-padding relative z-10">
        <div className="container-wide">
          {showHeader ? (
            <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
              <span
                className={`text-sm font-semibold uppercase tracking-wider text-cyan transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                Get Started
              </span>
              <h2
                className={`mb-4 mt-3 font-display text-2xl font-bold text-white transition-all duration-700 delay-100 md:mb-6 md:mt-4 md:text-4xl lg:text-5xl ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                Ready to <span className="gradient-text">accelerate your growth?</span>
              </h2>
              <p
                className={`text-base text-gray-light transition-all duration-700 delay-200 md:text-lg ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                Get a free growth audit and custom roadmap. See how agentic workflows can deliver faster results for your business.
              </p>
            </div>
          ) : null}

          <div className="grid gap-8 lg:grid-cols-5 lg:gap-16">
            <div
              className={`lg:col-span-2 transition-all duration-700 delay-300 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
              }`}
            >
              <div className="space-y-6 lg:sticky lg:top-28">
                <div className="surface-card rounded-[28px] p-5 md:p-6">
                  <div className="eyebrow-chip px-3 py-2 text-[11px]">Free Audit Included</div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-white md:text-2xl">
                    Start your growth journey
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-light md:text-base">
                    Tell us about your business and goals. We'll analyze your current performance
                    and create a custom roadmap for growth with agentic workflows.
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                    {['Free growth audit', 'Custom roadmap', 'Expert strategy call'].map((item) => (
                      <div
                        key={item}
                        className="surface-panel rounded-2xl px-4 py-3 text-sm text-gray-light"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  {contactInfo.map((item) =>
                    item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        className="surface-panel group flex items-center gap-3 rounded-2xl p-3 transition-all duration-300 hover:border-violet-deep/50 hover:shadow-glow md:gap-4 md:p-4"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-violet-deep/10 transition-colors duration-300 group-hover:bg-violet-deep/20 md:h-12 md:w-12">
                          <item.icon className="h-4 w-4 text-cyan md:h-5 md:w-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs text-gray-muted md:text-sm">{item.label}</div>
                          <div className="truncate text-sm text-white transition-colors duration-300 group-hover:text-violet-lavender md:text-base">
                            {item.value}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div
                        key={item.label}
                        className="surface-panel flex items-center gap-3 rounded-2xl p-3 md:gap-4 md:p-4"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-violet-deep/10 md:h-12 md:w-12">
                          <item.icon className="h-4 w-4 text-cyan md:h-5 md:w-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs text-gray-muted md:text-sm">{item.label}</div>
                          <div className="truncate text-sm text-white md:text-base">
                            {item.value}
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    window.scrollTo({ top: 0 });
                    document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan px-4 py-3 font-semibold text-dark-bg transition-all duration-300 hover:shadow-glow-cyan md:px-6 md:py-4"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="text-sm md:text-base">Start Growth Audit</span>
                </button>

                <div className="rounded-[28px] border border-violet-deep/20 bg-gradient-to-r from-violet-deep/10 to-cyan/10 p-5 md:p-6">
                  <h4 className="mb-3 font-display text-sm font-semibold text-white md:text-base">
                    What happens next
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'You share your business details and goals.',
                      'We analyze your current performance and market.',
                      'You receive a free growth audit and custom roadmap.',
                      'Strategy call to discuss your agentic workflow plan.',
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-gray-light md:text-sm"
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div
              className={`lg:col-span-3 transition-all duration-700 delay-400 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
              }`}
            >
              <div className="surface-card rounded-[30px] p-5 md:p-8">
                {isSubmitted ? (
                  <div className="py-8 text-center md:py-12">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cyan/20 md:mb-6 md:h-16 md:w-16">
                      <Send className="h-6 w-6 text-cyan md:h-8 md:w-8" />
                    </div>
                    <h3 className="mb-3 font-display text-xl font-bold text-white md:mb-4 md:text-2xl">
                      WhatsApp draft is ready
                    </h3>
                    <p className="text-sm text-gray-light md:text-base">
                      Finish the enquiry by sending the message in WhatsApp. I&apos;ll review it
                      and reply within 24 hours.
                    </p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                      <Button
                        type="button"
                        onClick={() => setIsSubmitted(false)}
                        className="bg-cyan text-dark-bg hover:shadow-glow-cyan"
                      >
                        Submit Another
                      </Button>
                      <Button type="button" variant="outline" onClick={resetForm}>
                        Send Another Enquiry
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="flex flex-col gap-3 border-b border-dark-border/70 pb-5 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
                          Business Assessment
                        </p>
                        <h3 className="mt-2 font-display text-xl font-semibold text-white md:text-2xl">
                          Get your free growth audit
                        </h3>
                        <p className="mt-2 max-w-2xl text-sm leading-7 text-gray-light md:text-base">
                          Share some details about your business and we'll analyze your growth opportunities 
                          and create a custom roadmap.
                        </p>
                      </div>
                      <div className="surface-panel inline-flex items-center rounded-full px-4 py-2 text-xs font-medium text-gray-light">
                        Replies within 24 hours
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
                      <div>
                        <label className="mb-1.5 block text-xs text-gray-light md:mb-2 md:text-sm">
                          Name *
                        </label>
                        <Input
                          required
                          value={form.name}
                          onChange={(e) => updateField('name', e.target.value)}
                          placeholder="Your name"
                          className="h-10 border-dark-border bg-dark-bg text-sm text-white placeholder:text-gray-muted focus:border-violet-deep focus:ring-violet-deep/20 md:h-11 md:text-base"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs text-gray-light md:mb-2 md:text-sm">
                          Phone *
                        </label>
                        <Input
                          required
                          type="tel"
                          value={form.phone}
                          onChange={(e) => updateField('phone', e.target.value)}
                          placeholder="+91 74770 33131"
                          className="h-10 border-dark-border bg-dark-bg text-sm text-white placeholder:text-gray-muted focus:border-violet-deep focus:ring-violet-deep/20 md:h-11 md:text-base"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs text-gray-light md:mb-2 md:text-sm">
                        Business Name *
                      </label>
                      <Input
                        required
                        value={form.businessName}
                        onChange={(e) => updateField('businessName', e.target.value)}
                        placeholder="Your business name"
                        className="h-10 border-dark-border bg-dark-bg text-sm text-white placeholder:text-gray-muted focus:border-violet-deep focus:ring-violet-deep/20 md:h-11 md:text-base"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
                      <div>
                        <label className="mb-1.5 block text-xs text-gray-light md:mb-2 md:text-sm">
                          Business Type *
                        </label>
                        <Select
                          value={form.businessType}
                          onValueChange={(value) => updateField('businessType', value)}
                        >
                          <SelectTrigger className="h-10 border-dark-border bg-dark-bg text-sm text-white md:h-11 md:text-base">
                            <SelectValue placeholder="Select business type" />
                          </SelectTrigger>
                          <SelectContent className="border-dark-border bg-dark-card">
                            {BUSINESS_TYPES.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs text-gray-light md:mb-2 md:text-sm">
                          Service Needed *
                        </label>
                        <Select
                          value={form.service}
                          onValueChange={(value) => updateField('service', value)}
                        >
                          <SelectTrigger className="h-10 border-dark-border bg-dark-bg text-sm text-white md:h-11 md:text-base">
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent className="border-dark-border bg-dark-card">
                            {SERVICE_OPTIONS.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs text-gray-light md:mb-2 md:text-sm">
                        Budget Range (Optional)
                      </label>
                      <Select
                        value={form.budget}
                        onValueChange={(value) => updateField('budget', value)}
                      >
                        <SelectTrigger className="h-10 border-dark-border bg-dark-bg text-sm text-white md:h-11 md:text-base">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="border-dark-border bg-dark-card">
                          {BUDGET_OPTIONS.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs text-gray-light md:mb-2 md:text-sm">
                        Project Details
                      </label>
                      <Textarea
                        value={form.message}
                        onChange={(e) => updateField('message', e.target.value)}
                        placeholder="Tell me what you want to automate, improve, or build."
                        rows={4}
                        className="resize-none border-dark-border bg-dark-bg text-sm text-white placeholder:text-gray-muted focus:border-violet-deep focus:ring-violet-deep/20 md:text-base"
                      />
                    </div>

                    {formError ? <p className="text-sm text-rose-400">{formError}</p> : null}

                    <p className="text-xs text-gray-muted md:text-sm">
                      This does not submit to a hidden backend. It opens WhatsApp with your enquiry
                      so you can review it before sending.
                    </p>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-xl bg-violet-deep py-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-electric hover:shadow-glow disabled:opacity-50 md:py-6 md:text-base"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white md:h-5 md:w-5" />
                          Preparing WhatsApp...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Continue to WhatsApp
                          <Send className="h-4 w-4 md:h-5 md:w-5" />
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
