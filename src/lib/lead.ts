export type PreferredContactMethod = 'email' | 'whatsapp' | 'phone'

export type LeadFormInput = {
  name: string
  email: string
  company: string
  service: string
  projectBrief: string
  preferredContactMethod: PreferredContactMethod
  companySite: string
}

export type LeadFormFieldErrors = Partial<
  Record<keyof Omit<LeadFormInput, 'companySite'>, string>
>

export type LeadFormState = {
  status: 'idle' | 'success' | 'error'
  message: string
  fieldErrors: LeadFormFieldErrors
}

export const leadFormInitialState: LeadFormState = {
  status: 'idle',
  message: '',
  fieldErrors: {},
}

export const preferredContactOptions: Array<{
  value: PreferredContactMethod
  label: string
}> = [
  { value: 'email', label: 'Email me back' },
  { value: 'whatsapp', label: 'Reply on WhatsApp' },
  { value: 'phone', label: 'Call me back' },
]

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function parseLeadFormData(formData: FormData): LeadFormInput {
  return {
    name: String(formData.get('name') ?? '').trim(),
    email: String(formData.get('email') ?? '').trim(),
    company: String(formData.get('company') ?? '').trim(),
    service: String(formData.get('service') ?? '').trim(),
    projectBrief: String(formData.get('projectBrief') ?? '').trim(),
    preferredContactMethod: String(
      formData.get('preferredContactMethod') ?? 'email'
    ).trim() as PreferredContactMethod,
    companySite: String(formData.get('companySite') ?? '').trim(),
  }
}

export function validateLeadFormInput(input: LeadFormInput): LeadFormFieldErrors {
  const errors: LeadFormFieldErrors = {}

  if (input.name.length < 2) {
    errors.name = 'Please enter your name.'
  }

  if (!emailRegex.test(input.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!input.service) {
    errors.service = 'Please choose the service area you want help with.'
  }

  if (!input.projectBrief || input.projectBrief.length < 24) {
    errors.projectBrief = 'Please share a little more context about the project.'
  }

  if (!['email', 'whatsapp', 'phone'].includes(input.preferredContactMethod)) {
    errors.preferredContactMethod = 'Please choose how you want us to reply.'
  }

  return errors
}
