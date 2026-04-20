import { ImageResponse } from 'next/og'
import { PHONE_DISPLAY } from '@/lib/contact'
import { companyProfile } from '@/lib/site-content'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          position: 'relative',
          overflow: 'hidden',
          background:
            'radial-gradient(circle at top right, rgba(51,80,109,0.16), transparent 34%), radial-gradient(circle at 18% 12%, rgba(154,106,47,0.18), transparent 24%), linear-gradient(180deg, #fcf8f0 0%, #f4eee2 100%)',
          color: '#171b22',
        }}
      >
        <svg
          viewBox="0 0 1200 630"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <path
            d="M720 138C804 146 862 174 924 220C992 270 1060 334 1142 360"
            stroke="rgba(51,80,109,0.28)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M690 206C780 214 846 242 920 292C998 345 1078 394 1152 414"
            stroke="rgba(154,106,47,0.28)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="688" cy="206" r="10" fill="rgba(154,106,47,0.8)" />
          <circle cx="924" cy="220" r="10" fill="rgba(51,80,109,0.78)" />
          <circle cx="1152" cy="414" r="10" fill="rgba(51,80,109,0.72)" />
          <circle cx="1142" cy="360" r="10" fill="rgba(154,106,47,0.72)" />
        </svg>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: '-0.03em',
          }}
        >
          <div
            style={{
              width: 62,
              height: 62,
              borderRadius: 24,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(16,22,34,0.12)',
              background:
                'linear-gradient(160deg, rgba(255,255,255,0.96) 0%, rgba(244,238,226,0.96) 100%)',
              boxShadow: '0 18px 40px rgba(18, 23, 33, 0.12)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 5,
                borderRadius: 18,
                border: '1px solid rgba(16,22,34,0.08)',
                background: 'rgba(255,255,255,0.72)',
              }}
            />
            <svg
              viewBox="0 0 72 72"
              style={{
                width: 40,
                height: 40,
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
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>{companyProfile.name}</span>
            <span style={{ fontSize: 16, color: '#636b76', letterSpacing: '0.18em' }}>
              CALM, DIRECT DIGITAL SYSTEMS
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '860px' }}>
          <div style={{ fontSize: 88, fontWeight: 600, lineHeight: 0.95, letterSpacing: '-0.06em' }}>
            Search, websites, and automation built for serious growth.
          </div>
          <div style={{ fontSize: 26, lineHeight: 1.5, color: '#36414d', maxWidth: '760px' }}>
            ZaiferTech helps businesses turn scattered digital work into a calmer system for
            traffic, leads, and operations.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 22,
            color: '#555f6b',
          }}
        >
          <span>{companyProfile.location}</span>
          <span>{PHONE_DISPLAY}</span>
        </div>
      </div>
    ),
    size
  )
}
