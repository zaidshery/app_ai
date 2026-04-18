import Link from 'next/link'
import { Check } from 'lucide-react'

interface PricingTier {
  name: string
  price: string
  units: string
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
}

export default function PricingSection({ tiers }: { tiers: PricingTier[] }) {
  return (
    <section className="py-20 md:py-28 bg-zinc-50/50">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="mb-4 text-center font-medium text-3xl tracking-tight text-zinc-950 md:text-4xl">Pricing Packages</h2>
        <p className="mb-12 text-center text-sm text-zinc-500">Flexible unit-based pricing that scales with your needs</p>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <div key={i} className={`relative rounded-2xl border p-8 ${tier.highlighted ? 'border-zinc-950 bg-zinc-950 text-white shadow-xl' : 'border-zinc-200 bg-white'}`}>
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-950 shadow">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className={`mb-1 font-medium text-lg ${tier.highlighted ? 'text-white' : 'text-zinc-950'}`}>{tier.name}</h3>
                <div className={`text-3xl font-semibold tracking-tight ${tier.highlighted ? 'text-white' : 'text-zinc-950'}`}>{tier.price}</div>
                <div className={`mt-1 text-xs ${tier.highlighted ? 'text-zinc-400' : 'text-zinc-500'}`}>{tier.units}</div>
                <p className={`mt-3 text-sm ${tier.highlighted ? 'text-zinc-300' : 'text-zinc-500'}`}>{tier.description}</p>
              </div>
              <ul className="mb-8 space-y-3">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${tier.highlighted ? 'text-white' : 'text-zinc-950'}`} />
                    <span className={`text-sm ${tier.highlighted ? 'text-zinc-200' : 'text-zinc-600'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/get-started" className={`block w-full rounded-full py-2.5 text-center text-sm font-medium transition-colors ${tier.highlighted ? 'bg-white text-zinc-950 hover:bg-zinc-100' : 'bg-zinc-950 text-white hover:bg-zinc-800'}`}>
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
