import type { Metadata } from 'next'
import Link from 'next/link'
import PageLayout from '@/components/ui/PageLayout'
import CtaBanner from '@/components/ui/CtaBanner'
import { Target, Eye, TrendingUp, Users, Lightbulb, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Digital Applied',
  description: 'A boutique digital marketing consultancy passionate about driving growth through innovative strategies and data-driven solutions. Founded 2019.',
}

const values = [
  { icon: Lightbulb, title: 'Innovation First', desc: 'We stay ahead of digital trends and continuously evolve our strategies to keep our clients at the forefront.' },
  { icon: Eye, title: 'Transparency', desc: 'No hidden fees, no confusing jargon. We believe in clear communication and honest partnerships.' },
  { icon: TrendingUp, title: 'Results-Driven', desc: 'Every strategy we implement is designed with measurable outcomes and your business growth in mind.' },
  { icon: Users, title: 'Data-Driven Approach', desc: 'Every decision is backed by comprehensive data analysis and market research. Strategies tested, measured, and optimized.' },
  { icon: Target, title: 'Industry Expertise', desc: 'Our team consists of certified professionals with expertise across various industries. We understand your unique challenges.' },
  { icon: Award, title: 'Personalized Solutions', desc: 'We don\'t do one-size-fits-all. Every strategy is crafted specifically for your business, goals, and audience.' },
]

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 md:px-8 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">About Us</p>
          <h1 className="mb-6 font-medium text-4xl tracking-tight text-zinc-950 md:text-5xl">We're Digital Applied</h1>
          <p className="text-lg leading-relaxed text-zinc-500">
            A boutique digital marketing consultancy passionate about driving growth through innovative strategies and data-driven solutions.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-zinc-200 bg-zinc-50/50 py-8">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 text-center">
            <div><div className="font-semibold text-2xl text-zinc-950">2019</div><div className="mt-1 text-xs text-zinc-500">Founded</div></div>
            <div><div className="font-semibold text-2xl text-zinc-950">10+</div><div className="mt-1 text-xs text-zinc-500">Years Combined Experience</div></div>
            <div className="col-span-2 md:col-span-1"><div className="font-semibold text-2xl text-zinc-950">Boutique</div><div className="mt-1 text-xs text-zinc-500">Personalised Service</div></div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">Our Mission</p>
              <h2 className="mb-6 font-medium text-3xl tracking-tight text-zinc-950 md:text-4xl">Bridging the gap between traditional business and modern digital</h2>
              <p className="mb-4 text-base leading-relaxed text-zinc-500">
                At Digital Applied, we believe every business deserves a powerful digital presence. Our mission is to bridge the gap between traditional business models and modern digital opportunities.
              </p>
              <p className="text-base leading-relaxed text-zinc-500">
                We combine creativity with analytics, strategy with execution, and innovation with proven methodologies to deliver marketing solutions that not only look great but drive real business results.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">Founded in 2019</p>
              <p className="text-base leading-relaxed text-zinc-600">
                Digital Applied has been helping businesses navigate the digital landscape with personalized attention and dedicated service that larger agencies can't match.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { v: '128K+', l: 'Leads Generated' },
                  { v: '45%', l: 'Avg Cost Reduction' },
                  { v: '217%', l: 'Organic Growth' },
                  { v: '€72M+', l: 'Revenue Generated' },
                ].map(stat => (
                  <div key={stat.l} className="text-center rounded-xl border border-zinc-200 bg-white p-4">
                    <div className="font-semibold text-xl text-zinc-950">{stat.v}</div>
                    <div className="mt-1 text-xs text-zinc-500">{stat.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-zinc-50/50 border-y border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">Our Core Values</p>
            <h2 className="font-medium text-3xl tracking-tight text-zinc-950 md:text-4xl">These principles guide everything we do</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <div key={i} className="rounded-xl border border-zinc-200 bg-white p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100"><v.icon className="h-5 w-5 text-zinc-950" /></div>
                <h3 className="mb-2 font-medium text-base text-zinc-950">{v.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">Meet the Founder</p>
            <h2 className="font-medium text-3xl tracking-tight text-zinc-950 md:text-4xl">The person behind Digital Applied</h2>
          </div>
          <div className="mx-auto max-w-2xl rounded-2xl border border-zinc-200 bg-zinc-50 p-8 text-center">
            <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-zinc-200 flex items-center justify-center">
              <span className="text-2xl font-semibold text-zinc-500">RG</span>
            </div>
            <h3 className="mb-1 font-semibold text-xl text-zinc-950">Richard Gibbons</h3>
            <p className="mb-4 text-sm text-zinc-500">Founder & Lead Strategist</p>
            <p className="text-sm leading-relaxed text-zinc-600">
              With 10+ years of experience in digital marketing, Richard founded Digital Applied to bring enterprise-level strategy and AI-powered execution to businesses of all sizes. His background spans SEO, PPC, content strategy, and full-stack web development.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Transform Your Digital Presence?"
        description="Work with a team that brings expertise, innovation, and dedication to every project."
        primaryLabel="Get Started"
        primaryHref="/get-started"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </PageLayout>
  )
}
