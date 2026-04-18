import { type LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export default function ServiceFeatureGrid({ title, features }: { title: string; features: Feature[] }) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="mb-4 text-center font-medium text-3xl tracking-tight text-zinc-950 md:text-4xl">{title}</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border border-zinc-200 bg-white p-6 hover:border-zinc-400 hover:shadow-md transition-all">
              <div className="mb-4 text-zinc-950"><f.icon className="h-5 w-5" /></div>
              <h3 className="mb-2 font-medium text-base text-zinc-950">{f.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-500">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
