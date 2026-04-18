# Form Handling Best Practices

Comprehensive guide for building robust, user-friendly forms in Digital Applied.

## Current Implementation (Contact Form Reference)

Your Contact form demonstrates solid patterns. Here's how to extend and improve them.

### Form Structure
```tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type ContactForm = {
  name: string
  email: string
  phone: string
  businessType: string
  service: string
  budget: string
  message: string
}

const INITIAL_FORM: ContactForm = {
  name: '',
  email: '',
  phone: '',
  businessType: '',
  service: '',
  budget: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM)
  const [errors, setErrors] = useState<Partial<ContactForm>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Rest of implementation...
}
```

## Validation Rules

### Email Validation
```tsx
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validateEmail = (email: string): boolean => {
  return EMAIL_REGEX.test(email)
}
```

### Phone Validation
```tsx
const PHONE_REGEX = /^[\d\s\-\+\(\)]{10,}$/

const validatePhone = (phone: string): boolean => {
  return PHONE_REGEX.test(phone)
}
```

### Complete Validation
```tsx
interface FormErrors {
  name?: string
  email?: string
  phone?: string
  businessType?: string
  service?: string
  budget?: string
  message?: string
  submit?: string
}

const validateForm = (form: ContactForm): FormErrors => {
  const errors: FormErrors = {}

  // Required fields
  if (!form.name?.trim()) {
    errors.name = "Name is required"
  }

  if (!form.email?.trim()) {
    errors.email = "Email is required"
  } else if (!EMAIL_REGEX.test(form.email)) {
    errors.email = "Please enter a valid email"
  }

  if (!form.phone?.trim()) {
    errors.phone = "Phone number is required"
  } else if (!PHONE_REGEX.test(form.phone)) {
    errors.phone = "Please enter a valid phone number"
  }

  if (!form.businessType) {
    errors.businessType = "Please select a business type"
  }

  if (!form.service) {
    errors.service = "Please select a service"
  }

  if (!form.message?.trim()) {
    errors.message = "Please tell us more about your needs"
  } else if (form.message.trim().length < 10) {
    errors.message = "Please provide at least 10 characters"
  }

  return errors
}
```

## Form Change Handler

### Efficient State Updates
```tsx
const handleChange = (field: keyof ContactForm) => (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setForm(prev => ({
    ...prev,
    [field]: e.target.value
  }))
  
  // Clear error for this field as user types
  if (errors[field]) {
    setErrors(prev => ({
      ...prev,
      [field]: undefined
    }))
  }
}

// Usage
<Input
  value={form.name}
  onChange={handleChange('name')}
  placeholder="Your full name"
  aria-invalid={!!errors.name}
  aria-describedby={errors.name ? 'error-name' : undefined}
/>
{errors.name && (
  <p id="error-name" className="text-sm text-destructive mt-1">
    {errors.name}
  </p>
)}
```

## Select Field Pattern

```tsx
const handleSelectChange = (field: keyof ContactForm) => (value: string) => {
  setForm(prev => ({
    ...prev,
    [field]: value
  }))
  
  if (errors[field]) {
    setErrors(prev => ({
      ...prev,
      [field]: undefined
    }))
  }
}

// Usage
<Select value={form.businessType} onValueChange={handleSelectChange('businessType')}>
  <SelectTrigger aria-invalid={!!errors.businessType}>
    <SelectValue placeholder="Select your business type" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="coaching">Coaching Institute</SelectItem>
    <SelectItem value="clinic">Clinic / Hospital</SelectItem>
    <SelectItem value="real-estate">Real Estate</SelectItem>
    <SelectItem value="retail">Retail / Shop</SelectItem>
    <SelectItem value="service">Service Business</SelectItem>
    <SelectItem value="other">Other</SelectItem>
  </SelectContent>
</Select>
{errors.businessType && (
  <p className="text-sm text-destructive mt-1">{errors.businessType}</p>
)}
```

## Form Submit Handler

### Enhanced Submit with Error Handling
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsLoading(true)
  setErrors({})

  // Client-side validation
  const validationErrors = validateForm(form)
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors)
    setIsLoading(false)
    // Scroll to first error
    document.querySelector('[aria-invalid=true]')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
    return
  }

  try {
    // Submit to your API endpoint
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    })

    if (!response.ok) {
      throw new Error('Failed to submit form')
    }

    const data = await response.json()

    // Success
    setSubmitted(true)
    setForm(INITIAL_FORM)
    
    // Reset success state after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)

  } catch (error) {
    setErrors({
      submit: error instanceof Error 
        ? error.message 
        : 'An error occurred. Please try again or contact us via WhatsApp.'
    })
  } finally {
    setIsLoading(false)
  }
}
```

## Submission Methods

### Email Integration
```tsx
// Use nodemailer or SendGrid API
const sendViaEmail = async (formData: ContactForm) => {
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  return response.json()
}
```

### WhatsApp Messaging
```tsx
// Your existing pattern
const buildWhatsAppUrl = (formData: ContactForm): string => {
  const message = `
    Name: ${formData.name}
    Email: ${formData.email}
    Phone: ${formData.phone}
    Business: ${formData.businessType}
    Service: ${formData.service}
    Budget: ${formData.budget}
    
    Message: ${formData.message}
  `.replace(/\n\s+/g, '%0A')
  
  return `https://wa.me/${PHONE_NUMBER}?text=${message}`
}
```

### Database Storage
```tsx
// Store leads for CRM follow-up
const storeLead = async (formData: ContactForm) => {
  const response = await fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...formData,
      submittedAt: new Date().toISOString(),
      source: 'website_contact'
    })
  })
  return response.json()
}
```

## Success/Error States

### Success Message
```tsx
{submitted && (
  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
    <div className="flex items-center gap-3 text-green-400">
      <CheckCircle className="w-5 h-5" />
      <div>
        <p className="font-semibold">Message sent successfully!</p>
        <p className="text-sm mt-1">We'll contact you within 24 hours.</p>
      </div>
    </div>
  </div>
)}
```

### Error Message Display
```tsx
{errors.submit && (
  <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30">
    <div className="flex items-center gap-3 text-destructive">
      <AlertCircle className="w-5 h-5" />
      <p>{errors.submit}</p>
    </div>
  </div>
)}
```

### Field Error Display
```tsx
interface FormFieldProps {
  label: string
  error?: string
  required?: boolean
  children: React.ReactNode
}

export function FormField({ label, error, required, children }: FormFieldProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-light mb-2">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs text-destructive mt-1 flex items-center gap-1">
          <span>⚠</span> {error}
        </p>
      )}
    </div>
  )
}

// Usage
<FormField label="Email" error={errors.email} required>
  <Input
    type="email"
    value={form.email}
    onChange={handleChange('email')}
    placeholder="your@email.com"
    aria-invalid={!!errors.email}
  />
</FormField>
```

## Accessibility Best Practices

### ARIA Attributes
```tsx
<input
  id="email-input"
  type="email"
  aria-label="Email address"
  aria-invalid={!!errors.email}
  aria-describedby={errors.email ? 'email-error' : undefined}
  required
/>

{errors.email && (
  <span id="email-error" role="alert" className="text-destructive text-sm">
    {errors.email}
  </span>
)}
```

### Focus Management
```tsx
// Set focus to first error field
const firstErrorField = Object.keys(errors)[0] as keyof ContactForm
if (firstErrorField) {
  document.getElementById(`${firstErrorField}-input`)?.focus()
}
```

### Keyboard Navigation
```tsx
// Tab order matters - ensure logical flow
<input type="text" name="name" tabIndex={1} />
<input type="email" name="email" tabIndex={2} />
<textarea name="message" tabIndex={3} />
<Button type="submit" tabIndex={4}>Send</Button>
```

## Performance Tips

### Debounce Validation (Optional)
```tsx
const validateWithDebounce = useCallback(
  debounce((fieldName: keyof ContactForm, value: string) => {
    const error = validateField(fieldName, value)
    setErrors(prev => ({
      ...prev,
      [fieldName]: error
    }))
  }, 300),
  []
)
```

### Prevent Double Submission
```tsx
// Disable button during submission
<Button 
  type="submit" 
  disabled={isLoading || Object.keys(errors).length > 0}
>
  {isLoading ? (
    <>
      <Loader className="w-4 h-4 mr-2 animate-spin" />
      Sending...
    </>
  ) : (
    'Send Message'
  )}
</Button>
```

## Testing Checklist

- ✅ All required fields validated
- ✅ Email format validation works
- ✅ Error messages display correctly
- ✅ Success state shows after submission
- ✅ Form clears after successful submission
- ✅ Submit button disabled during loading
- ✅ Keyboard navigation works
- ✅ Screen reader announces errors
- ✅ Mobile responsive layout
- ✅ No double submissions possible
