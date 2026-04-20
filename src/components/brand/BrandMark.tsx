import { companyProfile } from '@/lib/site-content'
import { cn } from '@/lib/utils'

type BrandTheme = 'light' | 'dark'

type BrandMarkProps = {
  className?: string
  markClassName?: string
  theme?: BrandTheme
  size?: number
  showWordmark?: boolean
  subtitle?: string
  nameClassName?: string
  subtitleClassName?: string
}

const toneMap = {
  light: {
    background: 'linear-gradient(160deg, rgba(255,255,255,0.96) 0%, rgba(244,244,245,0.96) 100%)',
    border: 'rgba(9, 9, 11, 0.12)',
    innerBorder: 'rgba(9, 9, 11, 0.08)',
    innerBackground: 'rgba(255,255,255,0.72)',
    primary: '#09090b',
    accent: '#71717a',
    dot: '#a1a1aa',
    glowA: 'rgba(113,113,122,0.20)',
    glowB: 'rgba(161,161,170,0.18)',
    shadow: '0 18px 40px rgba(9, 9, 11, 0.08)',
  },
  dark: {
    background: 'linear-gradient(160deg, rgba(9,9,11,0.96) 0%, rgba(0,0,0,0.96) 100%)',
    border: 'rgba(255,255,255,0.12)',
    innerBorder: 'rgba(255,255,255,0.08)',
    innerBackground: 'rgba(255,255,255,0.03)',
    primary: '#ffffff',
    accent: '#a1a1aa',
    dot: '#d4d4d8',
    glowA: 'rgba(161,161,170,0.28)',
    glowB: 'rgba(212,212,216,0.32)',
    shadow: '0 20px 44px rgba(0, 0, 0, 0.26)',
  },
} as const

export default function BrandMark({
  className,
  markClassName,
  theme = 'light',
  size = 48,
  showWordmark = false,
  subtitle = companyProfile.tagline,
  nameClassName,
  subtitleClassName,
}: BrandMarkProps) {
  const tone = toneMap[theme]

  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <span
        className={cn(
          'relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[1.35rem] border',
          markClassName
        )}
        style={{
          width: size,
          height: size,
          background: tone.background,
          borderColor: tone.border,
          boxShadow: tone.shadow,
        }}
      >
        <span
          className="absolute inset-[5px] rounded-[1rem] border"
          style={{
            borderColor: tone.innerBorder,
            background: tone.innerBackground,
          }}
        />
        <span
          className="absolute -left-2 bottom-2 h-8 w-8 rounded-full blur-[18px]"
          style={{ background: tone.glowA }}
        />
        <span
          className="absolute right-0 top-0 h-10 w-10 rounded-full blur-[20px]"
          style={{ background: tone.glowB }}
        />

        <svg
          viewBox="0 0 72 72"
          fill="none"
          className="relative z-10 h-[70%] w-[70%]"
          aria-label={`${companyProfile.name} brand mark`}
        >
          <path
            d="M14 18H58L22 54H58"
            stroke={tone.primary}
            strokeWidth="6.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M38 18H58"
            stroke={tone.accent}
            strokeWidth="6.5"
            strokeLinecap="round"
          />
          <path
            d="M38 18V54"
            stroke={tone.accent}
            strokeWidth="6.5"
            strokeLinecap="round"
          />
          <circle cx="58" cy="18" r="3.75" fill={tone.dot} />
        </svg>
      </span>

      {showWordmark ? (
        <span className="min-w-0">
          <span
            className={cn(
              'block truncate font-display text-[1.35rem] text-[var(--text-strong)]',
              nameClassName
            )}
          >
            {companyProfile.name}
          </span>
          <span
            className={cn(
              'block truncate text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]',
              subtitleClassName
            )}
          >
            {subtitle}
          </span>
        </span>
      ) : null}
    </span>
  )
}
