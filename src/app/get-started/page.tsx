'use client'
import { useState } from 'react'
import Link from 'next/link'
import PageLayout from '@/components/ui/PageLayout'
import { ArrowRight, ArrowLeft, Rocket, Globe, TrendingUp, ShoppingCart, Cpu, Megaphone, Zap } from 'lucide-react'

const options = [
  { icon: Rocket, title: "I'm launching a business", desc: 'Need everything from branding to web presence', href: '/contact' },
  { icon: Globe, title: 'I need a website redesign', desc: 'Modernize my existing online presence', href: '/services/web-development' },
  { icon: TrendingUp, title: 'I want to grow my business', desc: 'Scale up with marketing and optimization', href: '/services' },
  { icon: ShoppingCart, title: "I'm building an online store", desc: 'Create or improve my e-commerce presence', href: '/services/ecommerce-solutions' },
  { icon: Cpu, title: 'I want to integrate AI', desc: 'Integrate AI into my existing systems', href: '/services/ai-digital-transformation' },
  { icon: Megaphone, title: 'I need marketing help', desc: 'Boost visibility and reach more customers', href: '/services' },
  { icon: Zap, title: 'I want to automate my workflows', desc: 'Streamline operations and eliminate manual processes', href: '/services/crm-automation' },
]

export default function GetStartedPage() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <PageLayout>
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-3xl px-4 md:px-8 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">Begin Your Transformation</p>
          <h1 className="mb-4 font-medium text-4xl tracking-tight text-zinc-950 md:text-5xl">Build for the Agent-First Era</h1>
          <p className="mb-12 text-base leading-relaxed text-zinc-500">Tell us about your vision. We combine agentic development with strategic design to build future-proof digital solutions.</p>

          <p className="mb-6 text-sm font-medium text-zinc-700">What brings you here?</p>
          <p className="mb-8 text-xs text-zinc-500">Select the option that best matches your current situation.</p>

          <div className="grid gap-3 text-left">
            {options.map((opt, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`flex items-center gap-4 rounded-xl border p-5 text-left transition-all ${selected === i ? 'border-zinc-950 bg-zinc-950 text-white' : 'border-zinc-200 bg-white hover:border-zinc-400'}`}
              >
                <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${selected === i ? 'bg-white/10' : 'bg-zinc-100'}`}>
                  <opt.icon className={`h-5 w-5 ${selected === i ? 'text-white' : 'text-zinc-950'}`} />
                </div>
                <div>
                  <div className={`font-medium text-sm ${selected === i ? 'text-white' : 'text-zinc-950'}`}>{opt.title}</div>
                  <div className={`text-xs mt-0.5 ${selected === i ? 'text-zinc-300' : 'text-zinc-500'}`}>{opt.desc}</div>
                </div>
                <ArrowRight className={`ml-auto h-4 w-4 flex-shrink-0 ${selected === i ? 'text-white' : 'text-zinc-300'}`} />
              </button>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-950 transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back
            </Link>
            {selected !== null ? (
              <Link href={options[selected].href} className="inline-flex h-10 items-center gap-2 rounded-full bg-zinc-950 px-6 text-sm font-medium text-white hover:bg-zinc-800 transition-colors">
                Next Step <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <button disabled className="inline-flex h-10 items-center gap-2 rounded-full bg-zinc-200 px-6 text-sm font-medium text-zinc-400 cursor-not-allowed">
                Next Step <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
