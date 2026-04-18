'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const partners = [
  { name: 'Google',   viewBox: '0 0 24 24', path: 'M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z' },
  { name: 'Meta',     viewBox: '0 0 24 24', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { name: 'Shopify',  viewBox: '0 0 24 24', path: 'M15.337 23.979l7.216-1.561s-2.6-17.574-2.621-17.691a.336.336 0 00-.33-.275c-.142 0-2.669-.053-2.669-.053s-1.774-1.72-1.963-1.907v21.487zm-1.8.39V3.085c-.19.188-1.965 1.908-1.965 1.908S9.04 5.046 8.9 5.046a.336.336 0 00-.331.275c-.021.117-2.62 17.691-2.62 17.691l7.588 1.356zm-2.138-9.117l1.036-3.18 1.035 3.18h-2.07zm1.034-14.374c-.404 0-.78.302-.98.765.39.12.78.39 1.094.765.314-.376.703-.645 1.094-.765-.2-.463-.576-.765-.98-.765l-.228.001z' },
  { name: 'HubSpot',  viewBox: '0 0 24 24', path: 'M17.013 7.435V5.012a1.701 1.701 0 00.979-1.535V3.43a1.701 1.701 0 00-1.701-1.7h-.047a1.701 1.701 0 00-1.7 1.7v.046c0 .687.41 1.28.979 1.535v2.423A4.967 4.967 0 0013.4 8.317L7.086 3.459a1.97 1.97 0 00.064-.49 1.978 1.978 0 10-1.978 1.977c.29 0 .563-.064.812-.176l6.19 4.763a4.964 4.964 0 00-.786 2.663 4.974 4.974 0 001.733 3.756l-1.864 1.864a1.577 1.577 0 00-.456-.072 1.608 1.608 0 101.608 1.607 1.575 1.575 0 00-.072-.455l1.84-1.84a4.972 4.972 0 002.938.956 4.988 4.988 0 100-9.976 5.006 5.006 0 00-1.102.179zm1.1 7.355a2.369 2.369 0 110-4.738 2.369 2.369 0 010 4.738z' },
  { name: 'OpenAI',   viewBox: '0 0 24 24', path: 'M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 004.981 4.18a5.985 5.985 0 00-3.998 2.9 6.046 6.046 0 00.743 7.097 5.98 5.98 0 00.51 4.911 6.051 6.051 0 006.515 2.9A5.985 5.985 0 0013.26 24a6.056 6.056 0 005.772-4.206 5.99 5.99 0 003.997-2.9 6.056 6.056 0 00-.747-7.073zM13.26 22.43a4.476 4.476 0 01-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 00.392-.681v-6.737l2.02 1.168a.071.071 0 01.038.052v5.583a4.504 4.504 0 01-4.494 4.494zM3.6 18.304a4.47 4.47 0 01-.535-3.014l.142.085 4.783 2.759a.771.771 0 00.78 0l5.843-3.369v2.332a.08.08 0 01-.032.067L9.76 19.923a4.5 4.5 0 01-6.16-1.62zm-1.187-10.86A4.485 4.485 0 014.76 5.795l-.016.15v5.516a.797.797 0 00.388.68l5.843 3.373-2.02 1.168a.076.076 0 01-.071 0L4.04 13.986a4.496 4.496 0 01-1.627-6.542zm16.612 3.87l-5.843-3.374 2.02-1.172a.076.076 0 01.071 0l4.844 2.798a4.5 4.5 0 01-.676 8.117v-5.666a.79.79 0 00-.416-.703zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 00-.785 0L9.492 9.423V7.101a.08.08 0 01.032-.067l4.824-2.788a4.496 4.496 0 016.168 4.657zm-12.64 4.135l-2.02-1.164a.08.08 0 01-.038-.057V6.075a4.496 4.496 0 017.375-3.453l-.142.08L8.786 5.46a.795.795 0 00-.393.681zm1.099-2.37l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z' },
  { name: 'LinkedIn', viewBox: '0 0 24 24', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { name: 'Vercel',   viewBox: '0 0 24 24', path: 'M24 22.525H0l12-21.05 12 21.05z' },
  { name: 'n8n',      viewBox: '0 0 24 24', path: 'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 110-16 8 8 0 010 16zm-2-8a2 2 0 104 0 2 2 0 00-4 0zm-4 0a6 6 0 1112 0 6 6 0 01-12 0z' },
]

// wavy/noise-ish subtle SVG tile
const noiseBg = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4d4d8' fill-opacity='0.25'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`

export default function About() {
  const { ref, visible } = useScrollReveal()

  return (
    <section ref={ref} id="about" className="relative overflow-hidden py-28 md:py-36 bg-zinc-50">
      {/* Plus-pattern noise */}
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: noiseBg, backgroundSize: '60px 60px' }} />
      {/* Radial spotlight from centre */}
      <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(255,255,255,0.9), transparent)' }} />

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">

        {/* Header */}
        <div className="mb-16 text-center">
          <span className={`inline-flex items-center gap-1.5 rounded-full border border-zinc-300 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-zinc-500 shadow-sm transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Technology Partners
          </span>
          <h2 className={`mt-4 mb-3 font-semibold text-3xl tracking-tight text-zinc-950 md:text-4xl transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Enterprise-Grade Technology Stack
          </h2>
          <p className={`mx-auto max-w-xl text-sm leading-relaxed text-zinc-500 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Leveraging industry-leading platforms to deliver reliable, scalable solutions.
          </p>
        </div>

        {/* Partners grid — premium card treatment */}
        <div className="grid grid-cols-4 gap-4 md:grid-cols-8">
          {partners.map((p, i) => (
            <div
              key={p.name}
              className={`group flex flex-col items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-400 hover:-translate-y-1.5 hover:border-zinc-300 hover:shadow-lg ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${250 + i * 55}ms` }}
            >
              <svg viewBox={p.viewBox} fill="currentColor" className="h-7 w-7 text-zinc-300 transition-all duration-300 group-hover:scale-110 group-hover:text-zinc-700" aria-label={p.name}>
                <path d={p.path} />
              </svg>
              <span className="text-[10px] font-semibold text-zinc-400 transition-colors group-hover:text-zinc-700">{p.name}</span>
            </div>
          ))}
        </div>

        {/* Divider stats row */}
        <div className={`mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 md:grid-cols-4 shadow-sm transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { v: '128K+', l: 'Leads Generated' },
            { v: '45%',   l: 'Avg Cost Reduction' },
            { v: '217%',  l: 'Organic Growth' },
            { v: '€72M+', l: 'Revenue Generated' },
          ].map(s => (
            <div key={s.l} className="bg-white px-6 py-7 text-center">
              <div className="font-semibold text-2xl text-zinc-950 tracking-tight">{s.v}</div>
              <div className="mt-1 text-[11px] font-medium text-zinc-400">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
