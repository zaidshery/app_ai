import type { ReactNode } from 'react'
import BrandMark from '@/components/brand/BrandMark'
import BrandSignal from '@/components/brand/BrandSignal'
import { cn } from '@/lib/utils'

type PageSignalPanelProps = {
  eyebrow: string
  title: string
  description: string
  children?: ReactNode
  className?: string
  signalClassName?: string
  theme?: 'light' | 'dark'
}

export default function PageSignalPanel({
  eyebrow,
  title,
  description,
  children,
  className,
  signalClassName,
  theme = 'light',
}: PageSignalPanelProps) {
  const dark = theme === 'dark'

  return (
    <aside
      className={cn(
        dark ? 'surface-card-strong' : 'surface-panel',
        'rounded-[2rem] p-5 sm:p-6',
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p
            className={cn(
              'text-[0.72rem] font-semibold uppercase tracking-[0.18em]',
              dark ? 'text-white/45' : 'text-[var(--text-muted)]'
            )}
          >
            {eyebrow}
          </p>
          <h2
            className={cn(
              'mt-3 max-w-[10ch] text-[1.8rem]',
              dark ? 'text-white' : 'text-[var(--text-strong)]'
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              'mt-4 max-w-md text-sm leading-7',
              dark ? 'text-white/72' : 'text-[var(--text-body)]'
            )}
          >
            {description}
          </p>
        </div>
        <BrandMark size={50} theme={theme} />
      </div>

      <BrandSignal
        theme={theme}
        className={cn('mt-5 h-[160px] sm:h-[200px]', signalClassName)}
      />

      {children ? <div className="mt-5">{children}</div> : null}
    </aside>
  )
}
