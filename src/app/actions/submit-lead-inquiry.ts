'use server'

import { CONTACT_EMAIL, PHONE_DISPLAY } from '@/lib/contact'
import {
  leadFormInitialState,
  parseLeadFormData,
  type LeadFormState,
  validateLeadFormInput,
} from '@/lib/lead'
import { companyProfile, getServiceBySlug } from '@/lib/site-content'

export async function submitLeadInquiry(
  _prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const input = parseLeadFormData(formData)

  if (input.companySite) {
    return {
      status: 'success',
      message: 'Thanks. Your note has been received.',
      fieldErrors: {},
    }
  }

  const fieldErrors = validateLeadFormInput(input)

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: 'error',
      message: 'Please review the highlighted fields and try again.',
      fieldErrors,
    }
  }

  const resendApiKey = process.env.RESEND_API_KEY
  const resendFromEmail = process.env.RESEND_FROM_EMAIL
  const inquiryToEmail = process.env.INQUIRY_TO_EMAIL?.trim() || CONTACT_EMAIL
  const selectedService = getServiceBySlug(input.service)

  if (!resendApiKey || !resendFromEmail) {
    return {
      ...leadFormInitialState,
      status: 'error',
      message:
        'Inquiry delivery is not configured yet. Add RESEND_API_KEY and RESEND_FROM_EMAIL to enable the form.',
    }
  }

  if (!inquiryToEmail) {
    return {
      ...leadFormInitialState,
      status: 'error',
      message:
        'Inquiry delivery is not configured yet. Add INQUIRY_TO_EMAIL to route submissions to your inbox.',
    }
  }

  const subject = `New website inquiry from ${input.name}`
  const serviceName = selectedService?.name ?? input.service
  const plainText = [
    `New inquiry for ${companyProfile.name}`,
    '',
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Company: ${input.company || 'Not provided'}`,
    `Service: ${serviceName}`,
    `Preferred contact: ${input.preferredContactMethod}`,
    `Phone / WhatsApp: ${PHONE_DISPLAY}`,
    '',
    'Project brief:',
    input.projectBrief,
  ].join('\n')

  const html = `
    <div style="font-family: Arial, sans-serif; color: #171b22; line-height: 1.6;">
      <h2 style="margin: 0 0 16px;">New inquiry for ${companyProfile.name}</h2>
      <p><strong>Name:</strong> ${escapeHtml(input.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(input.email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(input.company || 'Not provided')}</p>
      <p><strong>Service:</strong> ${escapeHtml(serviceName)}</p>
      <p><strong>Preferred contact:</strong> ${escapeHtml(input.preferredContactMethod)}</p>
      <p><strong>Phone / WhatsApp:</strong> ${escapeHtml(PHONE_DISPLAY)}</p>
      <p><strong>Project brief:</strong></p>
      <p>${escapeHtml(input.projectBrief).replace(/\n/g, '<br />')}</p>
    </div>
  `

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: resendFromEmail,
      to: inquiryToEmail,
      reply_to: input.email,
      subject,
      text: plainText,
      html,
    }),
  })

  if (!response.ok) {
    return {
      ...leadFormInitialState,
      status: 'error',
      message:
        'Something went wrong while sending your inquiry. Please try again or use WhatsApp instead.',
    }
  }

  return {
    ...leadFormInitialState,
    status: 'success',
    message: 'Thanks for reaching out. Your inquiry has been sent successfully.',
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}
