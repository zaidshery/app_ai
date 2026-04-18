'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FaqItem { q: string; a: string }

export default function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <h2 className="mb-12 text-center font-medium text-3xl tracking-tight text-zinc-950 md:text-4xl">Frequently Asked Questions</h2>
        <div className="divide-y divide-zinc-200 border-y border-zinc-200">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left text-base font-medium text-zinc-950 hover:text-zinc-700"
              >
                {faq.q}
                <ChevronDown className={`ml-4 h-4 w-4 flex-shrink-0 text-zinc-400 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="pb-5 text-sm leading-relaxed text-zinc-500">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
