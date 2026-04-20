import { cn } from '@/lib/utils'

type BrandSignalProps = {
  className?: string
  theme?: 'light' | 'dark'
}

const toneMap = {
  light: {
    background:
      'radial-gradient(circle at 16% 14%, rgba(154,106,47,0.18), transparent 24%), radial-gradient(circle at 82% 18%, rgba(51,80,109,0.18), transparent 28%), linear-gradient(180deg, rgba(255,255,255,0.86) 0%, rgba(247,241,230,0.92) 100%)',
    border: 'rgba(16,22,34,0.10)',
    shell: 'rgba(255,255,255,0.66)',
    shellBorder: 'rgba(16,22,34,0.08)',
    lineA: '#9a6a2f',
    lineB: '#33506d',
    lineSoft: 'rgba(23,27,34,0.16)',
    text: '#171b22',
    muted: '#5d6772',
    glow: 'rgba(16,22,34,0.06)',
  },
  dark: {
    background:
      'radial-gradient(circle at 16% 14%, rgba(154,106,47,0.24), transparent 24%), radial-gradient(circle at 82% 18%, rgba(51,80,109,0.28), transparent 28%), linear-gradient(180deg, rgba(17,22,30,0.94) 0%, rgba(10,14,19,0.98) 100%)',
    border: 'rgba(255,255,255,0.10)',
    shell: 'rgba(255,255,255,0.04)',
    shellBorder: 'rgba(255,255,255,0.08)',
    lineA: '#d0a565',
    lineB: '#9ab5d3',
    lineSoft: 'rgba(255,255,255,0.20)',
    text: '#ffffff',
    muted: 'rgba(255,255,255,0.66)',
    glow: 'rgba(0,0,0,0.24)',
  },
} as const

export default function BrandSignal({ className, theme = 'light' }: BrandSignalProps) {
  const tone = toneMap[theme]

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[1.9rem] border shadow-[0_24px_60px_rgba(18,23,33,0.08)]',
        className
      )}
      style={{
        background: tone.background,
        borderColor: tone.border,
      }}
    >
      <div
        className="absolute inset-[14px] rounded-[1.5rem] border backdrop-blur-[2px]"
        style={{
          borderColor: tone.shellBorder,
          background: tone.shell,
          boxShadow: `inset 0 1px 0 ${tone.glow}`,
        }}
      />

      <svg
        viewBox="0 0 620 460"
        fill="none"
        className="relative z-10 h-full w-full"
        aria-label="ZaiferTech signature illustration"
      >
        <rect x="34" y="58" width="148" height="98" rx="30" fill={tone.shell} />
        <rect x="438" y="86" width="134" height="92" rx="28" fill={tone.shell} />
        <rect x="146" y="298" width="146" height="92" rx="28" fill={tone.shell} />

        <path d="M78 342C140 316 192 270 250 226C304 186 370 162 518 162" stroke={tone.lineA} strokeWidth="3.5" strokeLinecap="round" />
        <path d="M92 390C176 364 242 318 308 276C374 234 452 220 560 226" stroke={tone.lineB} strokeWidth="3.5" strokeLinecap="round" />
        <path d="M110 208C170 206 230 182 286 144C338 108 398 84 486 78" stroke={tone.lineSoft} strokeWidth="2.4" strokeLinecap="round" />
        <path d="M212 126C248 150 286 176 334 212C382 248 438 282 520 298" stroke={tone.lineSoft} strokeWidth="2.4" strokeLinecap="round" />
        <path d="M158 112H282" stroke={tone.lineSoft} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M336 330H500" stroke={tone.lineSoft} strokeWidth="1.6" strokeLinecap="round" />

        <circle cx="76" cy="342" r="8" fill={tone.lineA} />
        <circle cx="250" cy="226" r="8" fill={tone.lineB} />
        <circle cx="518" cy="162" r="8" fill={tone.lineA} />
        <circle cx="560" cy="226" r="8" fill={tone.lineB} />
        <circle cx="486" cy="78" r="8" fill={tone.lineB} />
        <circle cx="520" cy="298" r="8" fill={tone.lineA} />

        <rect x="68" y="86" width="78" height="10" rx="5" fill={tone.text} fillOpacity="0.18" />
        <rect x="68" y="108" width="52" height="8" rx="4" fill={tone.text} fillOpacity="0.1" />
        <rect x="458" y="112" width="70" height="10" rx="5" fill={tone.text} fillOpacity="0.18" />
        <rect x="458" y="134" width="44" height="8" rx="4" fill={tone.text} fillOpacity="0.1" />
        <rect x="168" y="322" width="76" height="10" rx="5" fill={tone.text} fillOpacity="0.18" />
        <rect x="168" y="344" width="52" height="8" rx="4" fill={tone.text} fillOpacity="0.1" />

        <g transform="translate(332 248)">
          <circle cx="0" cy="0" r="82" stroke={tone.lineSoft} strokeWidth="1.5" />
          <circle cx="0" cy="0" r="52" stroke={tone.lineSoft} strokeWidth="1.5" />
          <path d="M-42 0H42" stroke={tone.lineA} strokeWidth="3" strokeLinecap="round" />
          <path d="M0 -42V42" stroke={tone.lineB} strokeWidth="3" strokeLinecap="round" />
          <circle cx="0" cy="0" r="10" fill={tone.text} fillOpacity="0.16" />
        </g>
      </svg>
    </div>
  )
}
