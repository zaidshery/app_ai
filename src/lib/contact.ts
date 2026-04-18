export const WHATSAPP_NUMBER = '917477033131'
export const PHONE_DISPLAY = '+91 74770 33131'
export const PHONE_TEL = `tel:+${WHATSAPP_NUMBER}`
export const CONTACT_EMAIL = 'hello@zaidshery.com'
export const LOCATION_LABEL = 'Indore, Madhya Pradesh'

export const DEFAULT_WHATSAPP_MESSAGE =
  'Hi, I saw your website and want to discuss digital marketing solutions.'

export const SERVICES_WHATSAPP_MESSAGE =
  'Hi, I want to know more about your digital marketing services.'

export function buildWhatsAppUrl(message = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function openWhatsApp(message = DEFAULT_WHATSAPP_MESSAGE) {
  if (typeof window === 'undefined') {
    return
  }

  window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
}
