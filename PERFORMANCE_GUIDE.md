# Performance Optimization Guide

Best practices for optimizing Next.js 16.x and React 19.x performance in Digital Applied.

## Next.js 16.x Specific Optimizations

### Image Optimization
```tsx
import Image from 'next/image'

// GOOD: Uses Next.js image optimization
<Image
  src="/hero-image.jpg"
  alt="Hero section"
  width={1200}
  height={600}
  priority={true}  // For above-the-fold images
  quality={75}     // Good balance
  className="w-full h-auto"
/>

// AVOID: Using regular img tag
<img src="/hero-image.jpg" alt="Hero" className="w-full" />
```

### Font Optimization
```tsx
// Already implemented in layout.tsx
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap'  // Prevent layout shift
})

// This preloads fonts and optimizes delivery
```

### Dynamic Imports for Code Splitting
```tsx
import dynamic from 'next/dynamic'

// Lazy load heavy components
const ContactForm = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <LoadingSpinner />,
  ssr: false  // If component uses browser APIs only
})

// Usage
<Suspense fallback={<Skeleton />}>
  <ContactForm />
</Suspense>
```

### Prefetching Links
```tsx
import Link from 'next/link'

// Links in Next.js 16 prefetch by default
<Link href="/services" prefetch={true}>
  Services
</Link>

// Disable prefetch for less common destinations
<Link href="/admin" prefetch={false}>
  Admin
</Link>
```

## React 19.x Performance Patterns

### useCallback for Stable References
```tsx
'use client'

import { useCallback, useState } from 'react'

export function ContactForm() {
  const [form, setForm] = useState({...})

  // Memoize handler to prevent unnecessary re-renders
  const handleChange = useCallback((field) => (e) => {
    setForm(prev => ({
      ...prev,
      [field]: e.target.value
    }))
  }, [])

  return (
    <Input
      onChange={handleChange('name')}
      // Component won't re-render unless handleChange changes
    />
  )
}
```

### useMemo for Expensive Calculations
```tsx
import { useMemo } from 'react'

export function Services() {
  const [filters, setFilters] = useState({})

  // Memoize filtered results
  const filteredServices = useMemo(() => {
    return SERVICES.filter(service => {
      // Expensive filtering logic
      return matchesFilters(service, filters)
    })
  }, [filters])

  return (
    <div>
      {filteredServices.map(service => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  )
}
```

### React.memo for Component Memoization
```tsx
import { memo } from 'react'

interface ServiceCardProps {
  id: string
  title: string
  description: string
  price: number
}

// Only re-render if props change
const ServiceCard = memo(function ServiceCard({
  id,
  title,
  description,
  price
}: ServiceCardProps) {
  return (
    <div className="bg-dark-card rounded-lg p-6">
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="text-lg font-semibold">${price}</p>
    </div>
  )
})

export { ServiceCard }
```

## Bundle Size Optimization

### Tree Shaking
```tsx
// GOOD: Named imports allow tree shaking
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

// AVOID: Default import of entire barrel
import * as UI from '@/components/ui'
```

### Check Bundle Size
```bash
npm install -D @next/bundle-analyzer

# Add to next.config.ts:
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // ... rest of config
})

# Run:
ANALYZE=true npm run build
```

### Icon Library (Lucide React)
```tsx
// GOOD: Direct import
import { Mail, Phone, MapPin } from 'lucide-react'

// This enables tree shaking of unused icons
export function ContactInfo() {
  return (
    <>
      <Mail className="w-5 h-5" />
      <Phone className="w-5 h-5" />
      <MapPin className="w-5 h-5" />
    </>
  )
}
```

## Rendering Performance

### Virtualization for Long Lists
```tsx
// For lists with 100+ items
import { VirtualScroller } from 'virtual-scroller'

export function ServicesList({ services }: { services: Service[] }) {
  return (
    <VirtualScroller
      items={services}
      renderItem={(service) => (
        <ServiceCard key={service.id} {...service} />
      )}
      itemHeight={300}
    />
  )
}
```

### Suspense Boundaries
```tsx
import { Suspense } from 'react'

export default function Page() {
  return (
    <>
      <Header />
      
      <Suspense fallback={<SectionSkeleton />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<CardSkeleton count={3} />}>
        <Services />
      </Suspense>

      <Suspense fallback={<FormSkeleton />}>
        <Contact />
      </Suspense>

      <Footer />
    </>
  )
}
```

### Scroll Performance
```tsx
// AVOID: Running expensive logic on scroll
window.addEventListener('scroll', expensiveFunction)

// GOOD: Throttle/debounce scroll handlers
import { throttle } from 'lodash'

const handleScroll = throttle(() => {
  const scrollY = window.scrollY
  updateNavigation(scrollY)
}, 100)

window.addEventListener('scroll', handleScroll)
```

## Data Fetching Optimization

### Caching Strategy
```tsx
// Next.js Data Cache (default - cached until revalidate)
export const revalidate = 3600 // Revalidate every hour

async function getServices() {
  const res = await fetch('https://api.example.com/services', {
    next: { revalidate: 3600 }  // Cache for 1 hour
  })
  return res.json()
}

// Streaming response
export const dynamic = 'force-dynamic'
```

### Parallel Data Fetching
```tsx
// Fetch multiple data in parallel
async function loadPageData() {
  const [services, testimonials, articles] = await Promise.all([
    fetch('/api/services'),
    fetch('/api/testimonials'),
    fetch('/api/articles')
  ])
  
  return {
    services: await services.json(),
    testimonials: await testimonials.json(),
    articles: await articles.json()
  }
}
```

### ISR (Incremental Static Regeneration)
```tsx
// Revalidate at request time or after 3600 seconds
export const revalidate = 3600

export default async function ServicesPage() {
  const services = await getServices()
  
  return (
    <div>
      {services.map(service => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  )
}
```

## CSS & Styling Performance

### CSS-in-JS Efficiency
```tsx
// Your Tailwind setup is already optimal
// Tailwind extracts unused CSS during build

// GOOD: Use utility classes
<button className="px-4 py-2 bg-primary text-white rounded-lg">
  Click
</button>

// AVOID: Inline styles
<button style={{ padding: '8px 16px', backgroundColor: '#5A2EFF' }}>
  Click
</button>
```

### Critical CSS
```tsx
// Next.js automatically handles this
// Only CSS for above-the-fold content loads first

// In globals.css:
@tailwind base;        // Inlines critical styles
@tailwind components;  // Component layer
@tailwind utilities;   // Utility layer (deferred)
```

## Third-Party Scripts

### Script Optimization
```tsx
import Script from 'next/script'

export default function RootLayout() {
  return (
    <>
      {/* Analytics - defer loading */}
      <Script
        src="https://cdn.example.com/analytics.js"
        strategy="lazyOnload"
        onLoad={() => {
          window.dataLayer = window.dataLayer || []
        }}
      />

      {/* Chat widget - load after interactive */}
      <Script
        src="https://cdn.example.com/chat.js"
        strategy="afterInteractive"
      />
    </>
  )
}
```

### Remove Unused Scripts
```tsx
// AVOID: Loading multiple analytics libraries
// GOOD: Use one comprehensive solution (e.g., Google Analytics)

// If using Mixpanel, Segment, etc., ensure no duplicates
```

## Monitoring Performance

### Web Vitals
```tsx
// Create lib/metrics.ts
export function reportWebVitals(metric: any) {
  if (metric.label === 'web-vital') {
    // Send to analytics
    console.log(`${metric.name}: ${metric.value}ms`)
  }
}

// Use in app layout
import { reportWebVitals } from '@/lib/metrics'

// Call after page renders
useEffect(() => {
  reportWebVitals({
    name: 'LCP',
    value: performance.now()
  })
}, [])
```

### Target Metrics
```
LCP (Largest Contentful Paint):  < 2.5s  ✅
FID (First Input Delay):         < 100ms ✅
CLS (Cumulative Layout Shift):   < 0.1   ✅
```

## Checklist

Before shipping:
- ✅ Run `npm run build` with no warnings
- ✅ Check Core Web Vitals on PageSpeed Insights
- ✅ Images optimized with Next.js Image component
- ✅ Heavy components lazy loaded
- ✅ Fonts preloaded (already done)
- ✅ No unused CSS in final bundle
- ✅ Third-party scripts deferred when possible
- ✅ Form submissions don't block rendering
- ✅ No memory leaks in useEffect hooks
- ✅ Event listeners cleaned up properly

## Common Pitfalls

- ❌ Importing entire libraries instead of specific functions
- ❌ Large inline SVGs instead of optimized images
- ❌ Running expensive calculations in render
- ❌ Missing key prop in lists
- ❌ Creating objects/arrays in render function
- ❌ Not cleaning up event listeners
- ❌ Loading all fonts when only subset needed
- ❌ Blocking main thread with synchronous operations
