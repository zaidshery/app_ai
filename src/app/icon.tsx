import { ImageResponse } from 'next/og'

export const size = {
  width: 64,
  height: 64,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(160deg, rgba(255,255,255,0.98) 0%, rgba(244,238,226,1) 100%)',
          borderRadius: 18,
          border: '1px solid rgba(16,22,34,0.10)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 5,
            borderRadius: 14,
            border: '1px solid rgba(16,22,34,0.08)',
            background: 'rgba(255,255,255,0.72)',
          }}
        />
        <svg
          viewBox="0 0 72 72"
          style={{
            width: 38,
            height: 38,
          }}
        >
          <path
            d="M14 18H58L22 54H58"
            stroke="#171b22"
            strokeWidth="6.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path d="M38 18H58" stroke="#9a6a2f" strokeWidth="6.5" strokeLinecap="round" />
          <path d="M38 18V54" stroke="#9a6a2f" strokeWidth="6.5" strokeLinecap="round" />
          <circle cx="58" cy="18" r="3.75" fill="#33506d" />
        </svg>
      </div>
    ),
    size
  )
}
