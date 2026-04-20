import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import BrandSignal from '@/components/brand/BrandSignal'
import SectionIntro from '@/components/ui/SectionIntro'
import { platforms } from '@/lib/site-content'

export default function About() {
  return (
    <section className="page-section bg-[linear-gradient(180deg,#f4eee2_0%,#fcf8f0_100%)]">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <SectionIntro
            eyebrow="Selected stack"
            title="Built on tools teams already trust."
            description="Search, websites, reporting, CRM, and automation are easier to improve when the stack stays familiar and maintainable."
          />

          <div className="surface-panel rounded-[2rem] p-6 md:p-7">
            <h3 className="text-[2rem] text-[var(--text-strong)]">No mystery stack.</h3>
            <p className="mt-4 text-sm leading-8 text-[var(--text-body)]">
              The goal is not novelty for its own sake. It is to use stable tools, sharper
              implementation, and reporting the team can keep living with after launch.
            </p>
            <BrandSignal className="mt-6 h-[210px]" />
            <Link href="/about" className="button-ghost mt-6 px-0">
              About the studio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="snap-strip mt-12 md:grid-cols-3 xl:grid-cols-8">
          {platforms.map(platform => (
            <article
              key={platform.name}
              className="surface-card snap-card min-w-[8.5rem] flex flex-col items-center gap-3 rounded-[1.5rem] p-4 text-center sm:min-w-[9.5rem] sm:p-5 md:min-w-0"
            >
              <svg
                viewBox={platform.viewBox}
                fill="currentColor"
                className="h-7 w-7 text-[var(--text-muted)]"
                aria-label={platform.name}
              >
                <path d={platform.path} />
              </svg>
              <p className="text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-[var(--text-body)]">
                {platform.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
