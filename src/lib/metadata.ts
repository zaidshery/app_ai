import type { Metadata } from 'next'
import { companyProfile } from '@/lib/site-content'

type PageMetadataOptions = {
  title: string
  description: string
  path?: string
  keywords?: string[]
  noIndex?: boolean
}

export function getSiteUrl() {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()

  if (!rawUrl) {
    return new URL('http://localhost:3000')
  }

  try {
    return new URL(rawUrl)
  } catch {
    return new URL('http://localhost:3000')
  }
}

export function createPageMetadata({
  title,
  description,
  path = '/',
  keywords = [],
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const siteUrl = getSiteUrl()
  const canonicalUrl = siteUrl ? new URL(path, siteUrl).toString() : undefined

  return {
    title,
    description,
    keywords,
    alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
    openGraph: {
      title,
      description,
      type: 'website',
      siteName: companyProfile.name,
      locale: 'en_IN',
      url: canonicalUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  }
}
