# Component Pattern Library

Standardized patterns for building consistent, reusable components across Digital Applied.

## Component Architecture

### Folder Structure
```
src/components/
├── ui/              # Atomic components (button, input, select, dialog)
├── sections/        # Page sections (Hero, Services, Contact, Footer)
├── forms/           # Form compounds (ContactForm, etc.)
├── layout/          # Layout wrappers (if needed)
└── shared/          # Cross-cutting (Navigation, shared containers)
```

## UI Component Pattern

### Base Component Template
```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const componentVariants = cva(
  "base styles shared across all variants",
  {
    variants: {
      variant: {
        default: "default styles",
        secondary: "secondary styles",
      },
      size: {
        default: "h-9 px-4",
        sm: "h-8 px-3",
        lg: "h-10 px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant, size, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="component"
      data-variant={variant}
      data-size={size}
      className={cn(componentVariants({ variant, size, className }))}
      {...props}
    />
  )
)
Component.displayName = "Component"

export { Component, type ComponentProps }
```

### Button Variants (Reference)
```tsx
// Primary - Main CTA
<Button variant="default">Primary Action</Button>

// Outline - Secondary action
<Button variant="outline">Secondary Action</Button>

// Ghost - Minimal, link-like
<Button variant="ghost">Tertiary Action</Button>

// Link - Unstyled link
<Button variant="link">Learn more</Button>

// Destructive - Danger action
<Button variant="destructive">Delete</Button>
```

## Form Component Pattern

### Form State Management
```tsx
type FormData = {
  field1: string
  field2: string
  field3: string
}

const INITIAL_STATE: FormData = {
  field1: '',
  field2: '',
  field3: '',
}

interface FormErrors {
  field1?: string
  field2?: string
  field3?: string
}

const [form, setForm] = useState<FormData>(INITIAL_STATE)
const [errors, setErrors] = useState<FormErrors>({})
const [isLoading, setIsLoading] = useState(false)
const [submitted, setSubmitted] = useState(false)
```

### Validation Pattern
```tsx
const validateForm = (data: FormData): FormErrors => {
  const newErrors: FormErrors = {}

  if (!data.field1?.trim()) {
    newErrors.field1 = "Field is required"
  }

  if (!data.field2?.trim()) {
    newErrors.field2 = "Field is required"
  }

  if (!/^\S+@\S+$/.test(data.email)) {
    newErrors.email = "Invalid email format"
  }

  return newErrors
}
```

### Form Submit Pattern
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsLoading(true)
  setErrors({})

  // Validate
  const newErrors = validateForm(form)
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors)
    setIsLoading(false)
    return
  }

  try {
    // Submit to API or service
    const response = await submitForm(form)
    
    if (response.ok) {
      setSubmitted(true)
      setForm(INITIAL_STATE)
      // Show success message
    } else {
      setErrors({ submit: "Failed to submit. Please try again." })
    }
  } catch (error) {
    setErrors({ submit: "An error occurred. Please try again." })
  } finally {
    setIsLoading(false)
  }
}
```

## Section Component Pattern

### Layout Structure
```tsx
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export default function Section({ children, className, id }: SectionProps) {
  return (
    <section 
      id={id}
      className={`relative w-full py-12 md:py-16 lg:py-20 ${className || ''}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}
```

### Responsive Grid Pattern
```tsx
// 3-column on desktop, 2 on tablet, 1 on mobile
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item) => (
    <Card key={item.id} {...item} />
  ))}
</div>
```

## Shared Patterns

### Data Display with Icons
```tsx
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex gap-4 p-4 rounded-lg bg-dark-card border border-dark-border">
      <Icon className="w-6 h-6 text-cyan flex-shrink-0 mt-1" />
      <div className="flex-1">
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-gray-light mt-1">{description}</p>
      </div>
    </div>
  )
}
```

### Conditional Rendering Pattern
```tsx
// Show/hide based on state
{submitted ? (
  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded text-green-400">
    ✓ Message sent successfully!
  </div>
) : (
  <form onSubmit={handleSubmit}>
    {/* form fields */}
  </form>
)}
```

### Loading State Pattern
```tsx
// Disable interactions during loading
<Button disabled={isLoading}>
  {isLoading ? 'Sending...' : 'Send'}
</Button>

// Skeleton/spinner
{isLoading && <Spinner />}
{!isLoading && <Content />}
```

## Styling Conventions

### Class Naming Order
1. Layout (flex, grid, w-, h-)
2. Spacing (gap, p, m)
3. Borders (border, border-, rounded)
4. Background (bg-)
5. Text (text-, font-)
6. Interactivity (hover:, focus:, disabled:)
7. Responsive (sm:, md:, lg:)

### Example
```tsx
<button className="
  flex items-center justify-center gap-2
  px-4 py-2
  border border-dark-border rounded-lg
  bg-violet-deep text-white
  hover:bg-violet-electric
  focus:ring-2 focus:ring-violet-deep/50
  disabled:opacity-50 disabled:cursor-not-allowed
  transition-all
  md:px-6 md:py-3
">
  Click me
</button>
```

## Type Safety

### Component Props Interface
```tsx
interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  children: React.ReactNode
}
```

### Enum for Options
```tsx
enum ButtonVariant {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DESTRUCTIVE = 'destructive',
  GHOST = 'ghost',
  LINK = 'link',
}

// Usage
const variantMap: Record<ButtonVariant, string> = {
  [ButtonVariant.DEFAULT]: "...",
  [ButtonVariant.PRIMARY]: "...",
  // ...
}
```

## Testing Checklist

Before considering a component "done":
- ✅ Props are properly typed
- ✅ Variants work as expected
- ✅ Responsive on mobile/tablet/desktop
- ✅ Keyboard accessible (focus states visible)
- ✅ Color contrast meets WCAG standards
- ✅ Consistent with design system
