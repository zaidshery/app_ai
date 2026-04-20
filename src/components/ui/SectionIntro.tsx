import { cn } from '@/lib/utils'

type SectionIntroProps = {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionIntro({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionIntroProps) {
  return (
    <div
      className={cn(
        'max-w-[44rem]',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      <span className="section-kicker">{eyebrow}</span>
      <h2 className={cn('section-heading mt-4', align === 'center' && 'mx-auto')}>{title}</h2>
      <p className={cn('section-copy mt-4', align === 'center' && 'mx-auto')}>
        {description}
      </p>
    </div>
  )
}
