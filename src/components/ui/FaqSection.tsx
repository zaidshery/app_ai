'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FaqItem {
  question: string
  answer: string
}

export default function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="page-section bg-white/45">
      <div className="shell">
        <div className="mx-auto max-w-3xl">
          <span className="section-kicker">Questions</span>
          <h2 className="section-heading mt-5 max-w-[12ch]">What clients usually want to clarify.</h2>
          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = open === index

              return (
                <article
                  key={faq.question}
                  className="surface-card overflow-hidden rounded-[1.4rem]"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left md:px-6"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg text-[var(--text-strong)]">{faq.question}</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line-soft)] bg-white/70">
                      <ChevronDown
                        className={`h-4 w-4 text-[var(--text-muted)] transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
                  </button>
                  {isOpen ? (
                    <div className="px-5 pb-5 text-sm leading-8 text-[var(--text-body)] md:px-6">
                      {faq.answer}
                    </div>
                  ) : null}
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
