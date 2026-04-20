import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import JsonLd from '@/components/seo/JsonLd'
import { CONTACT_EMAIL, PHONE_DISPLAY } from '@/lib/contact'
import { getSiteUrl } from '@/lib/metadata'
import { companyProfile } from '@/lib/site-content'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: companyProfile.name,
  title: {
    default: `${companyProfile.name} | Search, Web, and Automation Systems`,
    template: `%s | ${companyProfile.name}`,
  },
  description: companyProfile.description,
  openGraph: {
    title: `${companyProfile.name} | Search, Web, and Automation Systems`,
    description: companyProfile.description,
    type: 'website',
    locale: 'en_IN',
    siteName: companyProfile.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${companyProfile.name} | Search, Web, and Automation Systems`,
    description: companyProfile.description,
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: companyProfile.name,
  description: companyProfile.description,
  email: CONTACT_EMAIL || undefined,
  telephone: PHONE_DISPLAY,
  areaServed: 'India',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Indore',
    addressRegion: 'Madhya Pradesh',
    addressCountry: 'IN',
  },
}

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${outfit.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[var(--surface-base)] text-[var(--text-strong)]">
        <JsonLd data={organizationJsonLd} />
        {children}
      </body>
    </html>
  )
}
