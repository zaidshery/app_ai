import SectionIntro from '@/components/ui/SectionIntro'
import BrandMark from '@/components/brand/BrandMark'
import { homeProofPoints, operatingSteps } from '@/lib/site-content'

export default function WhyChooseUs() {
  return (
    <section className="page-section bg-[var(--surface-soft)]">
      <div className="shell">
        <SectionIntro
          eyebrow="Why ZaiferTech"
          title="Calm systems beat noisy marketing."
          description="The work is designed to stay useful after launch: clear scope, close execution, and decisions that still make sense inside the real business."
          align="center"
        />

        <div className="snap-strip mt-12 md:grid-cols-3">
          {homeProofPoints.map((point, index) => (
            <article
              key={point.title}
              className={`snap-card surface-card relative overflow-hidden rounded-[1.8rem] p-6 md:p-7 ${
                index === 1 ? 'bg-[var(--surface-base)]' : ''
              }`}
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r to-transparent ${
                  index === 0
                    ? 'from-[var(--accent-warm)] opacity-60'
                    : index === 1
                      ? 'from-[var(--accent-cool)] opacity-60'
                      : 'from-[var(--surface-ink)] opacity-40'
                }`}
              />
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Principle
              </p>
              <h3 className="mt-4 text-[1.8rem] text-[var(--text-strong)]">{point.title}</h3>
              <p className="mt-4 text-sm leading-8 text-[var(--text-body)]">
                {point.description}
              </p>
            </article>
          ))}
        </div>

        <div className="surface-card-strong mt-8 overflow-hidden rounded-[2rem] p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <BrandMark
                size={48}
                className="mb-5"
                markClassName="rounded-[1.1rem]"
              />
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                What happens next
              </p>
              <h3 className="mt-4 max-w-[10ch] font-display text-[2.4rem] leading-none text-[var(--text-strong)] md:text-[3rem]">
                A simple path from first message to shipped work.
              </h3>
              <p className="mt-5 max-w-md text-sm leading-8 text-[var(--text-body)]">
                Bring the bottleneck. We review it, set the next scope, and build from there.
              </p>
            </div>

            <div className="snap-strip md:grid-cols-3">
              {operatingSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="snap-card rounded-[1.55rem] border border-[var(--line-soft)] bg-[var(--surface-panel)] p-5"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface-ink)] text-sm font-bold text-white">
                    0{index + 1}
                  </span>
                  <h4 className="mt-5 text-[1.5rem] leading-none text-[var(--text-strong)]">{step.title}</h4>
                  <p className="mt-4 text-sm leading-7 text-[var(--text-body)]">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
