export default function ProcessSteps() {
  const steps = [
    {
      num: '1',
      title: 'Strategy & Planning',
      desc: 'We discuss your goals, define scope, and allocate units to your highest-impact services. Data and competitive analysis inform the strategy.',
    },
    {
      num: '2',
      title: 'Automated Execution',
      desc: 'AI agents execute the work — analysis, content, optimizations, and configurations. Automated quality checks run on every output.',
    },
    {
      num: '3',
      title: 'Human-Verified Delivery',
      desc: 'Every deliverable is reviewed by a senior strategist for accuracy and strategic alignment before reaching you.',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-zinc-50/50 border-y border-zinc-200">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="mb-4 text-center font-medium text-3xl tracking-tight text-zinc-950 md:text-4xl">How We Work</h2>
        <p className="mb-12 text-center text-sm text-zinc-500">Expert strategy with streamlined, automated execution</p>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map(step => (
            <div key={step.num} className="relative text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-950 text-white font-semibold text-lg">{step.num}</div>
              <h3 className="mb-2 font-medium text-base text-zinc-950">{step.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
