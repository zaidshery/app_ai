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

export default function CtaBanner({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  note,
}: CtaBannerProps) {
  return (
    <section className="bg-[#101318] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-semibold text-white md:text-4xl">{title}</h2>
          <p className="mb-10 text-base leading-8 text-zinc-300">{description}</p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={primaryHref}
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-zinc-950 transition-all hover:bg-zinc-200 sm:w-auto"
            >
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/15 px-8 text-sm font-semibold text-white transition-all hover:bg-white/10 sm:w-auto"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
          {note && <p className="mt-8 text-sm text-zinc-500">{note}</p>}
        </div>
      </div>
    </section>
  )
}
