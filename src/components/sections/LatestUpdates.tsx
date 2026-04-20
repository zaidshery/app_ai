import SectionIntro from '@/components/ui/SectionIntro'
import { engagementModels } from '@/lib/site-content'

const engagementToneClasses = [
  'from-[rgba(154,106,47,0.14)] via-transparent to-transparent',
  'from-[rgba(51,80,109,0.16)] via-transparent to-transparent',
  'from-[rgba(23,27,34,0.1)] via-transparent to-transparent',
] as const

export default function LatestUpdates() {
  return (
    <section className="page-section bg-[var(--surface-base)]">
      <div className="shell">
        <SectionIntro
          eyebrow="Ways to work"
          title="Three ways to start without overcommitting."
          description="You do not need a bloated retainer to begin. Start with the scope that matches the current problem."
        />

        <div className="snap-strip mt-12 md:grid-cols-3">
          {engagementModels.map((model, index) => (
            <article
              key={model.name}
              className="snap-card surface-card relative overflow-hidden rounded-[1.9rem] p-6 md:p-7"
            >
              <div
                className={`absolute inset-x-0 top-0 h-20 bg-gradient-to-br ${engagementToneClasses[index % engagementToneClasses.length]}`}
              />
              <div className="relative">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  Engagement model
                </p>
                <h3 className="mt-4 text-[2rem] text-[var(--text-strong)]">{model.name}</h3>
                <p className="mt-4 text-sm leading-8 text-[var(--text-body)]">
                  {model.description}
                </p>
                <ul className="detail-list mt-6">
                  {model.points.map(point => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
