import { cn } from '@/lib/utils'

type HeroAmbientProps = {
  className?: string
}

export default function HeroAmbient({ className }: HeroAmbientProps) {
  return (
    <div aria-hidden="true" className={cn('hero-ambient', className)}>
      <div className="hero-ambient-wash" />
      <div className="hero-ambient-mesh" />
      <div className="hero-band hero-band-one" />
      <div className="hero-band hero-band-two" />
      <div className="hero-band hero-band-three" />

      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="hero-orb hero-orb-three" />
    </div>
  )
}
