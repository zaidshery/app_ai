import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type PageIntroProps = {
  eyebrow: string
  title: string
  description: string
  actions?: ReactNode
  meta?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export default function PageIntro({
  eyebrow,
  title,
  description,
  actions,
  meta,
  align = 'left',
  className,
}: PageIntroProps) {
  return (
    <div
      className={cn(
        'max-w-[50rem]',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      <span className="section-kicker">{eyebrow}</span>
      <h1 className={cn('section-title mt-5', align === 'center' && 'mx-auto')}>{title}</h1>
      <p className={cn('section-copy mt-5', align === 'center' && 'mx-auto')}>{description}</p>
      {actions ? (
        <div
          className={cn(
            'action-row mt-8',
            align === 'center' && 'justify-center'
          )}
        >
          {actions}
        </div>
      ) : null}
      {meta ? (
        <div
          className={cn(
            'mt-6 text-sm text-[var(--text-muted)]',
            align === 'center' && 'flex justify-center'
          )}
        >
          {meta}
        </div>
      ) : null}
    </div>
  )
}
