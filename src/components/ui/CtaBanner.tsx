import Link from 'next/link'

interface CtaBannerProps {
  title: string
  description: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
  note?: string
}

export default function CtaBanner({ title, description, primaryLabel, primaryHref, secondaryLabel, secondaryHref, note }: CtaBannerProps) {
  return (
    <section className="py-24 md:py-32 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-medium text-3xl tracking-tight text-white md:text-4xl">{title}</h2>
          <p className="mb-10 text-base leading-relaxed text-zinc-400">{description}</p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={primaryHref} className="inline-flex h-12 items-center rounded-full bg-white px-8 text-sm font-medium text-zinc-950 hover:bg-zinc-200 transition-all">
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link href={secondaryHref} className="inline-flex h-12 items-center rounded-full border border-zinc-700 px-8 text-sm font-medium text-white hover:bg-zinc-800 transition-all">
                {secondaryLabel}
              </Link>
            )}
          </div>
          {note && <p className="mt-8 text-xs text-zinc-500">{note}</p>}
        </div>
      </div>
    </section>
  )
}
