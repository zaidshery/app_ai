import { companyProfile } from '@/lib/site-content'

export const WHATSAPP_NUMBER = companyProfile.whatsappNumber
export const PHONE_DISPLAY = companyProfile.phoneDisplay
export const PHONE_TEL = `tel:+${WHATSAPP_NUMBER}`
export const CONTACT_EMAIL = companyProfile.email ?? ''
export const LOCATION_LABEL = companyProfile.location

export const DEFAULT_WHATSAPP_MESSAGE =
  'Hi, I saw your website and want to discuss a project with ZaiferTech.'

export const SERVICES_WHATSAPP_MESSAGE =
  'Hi, I want to know more about ZaiferTech services.'

export function buildWhatsAppUrl(message = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function openWhatsApp(message = DEFAULT_WHATSAPP_MESSAGE) {
  if (typeof window === 'undefined') {
    return
  }

  window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
}
