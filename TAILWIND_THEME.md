# Tailwind CSS Theme Guide

Your project uses a **custom dark theme** with vibrant accent colors. This guide standardizes color usage and spacing for consistency.

## Color System

### Primary Brand Colors
```
--violet-deep:      #5A2EFF (primary CTA, focus states)
--violet-electric:  #7B4DFF (hover states, secondary emphasis)
--violet-lavender:  #B8A8FF (lighter accents, disabled states)
--cyan:             #00E5FF (accent highlights, badges)
```

### Semantic Colors
```
--dark-bg:          #0A0A0F (page background)
--dark-card:        #12121A (card/section backgrounds)
--dark-border:      #2A2A3A (borders, dividers)
--gray-light:       #B0B0C0 (secondary text, labels)
--gray-muted:       #6B6B7B (muted text, metadata)
```

### CSS Variables (HSL format)
```
--primary:           258 100% 59%  (violet-deep)
--primary-foreground: 0 0% 100%    (white text)
--secondary:         240 10% 12%   (dark gray)
--accent:            187 100% 50%  (cyan)
--destructive:       0 84.2% 60.2% (red for errors)
--border:            240 10% 18%   (subtle dividers)
--input:             240 10% 18%   (form field background)
--muted:             240 10% 15%   (disabled, tertiary)
--radius:            0.625rem      (8px - standard border radius)
```

## Usage Patterns

### Buttons
```tsx
// Primary (main CTA) - violet-deep background
<Button variant="default">Get Started</Button>

// Secondary (alternative action)
<Button variant="secondary">Learn More</Button>

// Ghost (minimal, link-like)
<Button variant="ghost">View Details</Button>

// Outline (medium emphasis)
<Button variant="outline">See Pricing</Button>
```

### Text Hierarchy
```tsx
// Headings
<h1 className="text-4xl font-bold text-foreground">Main Title</h1>
<h2 className="text-2xl font-semibold text-foreground">Subheading</h2>
<h3 className="text-xl font-semibold text-gray-light">Section Title</h3>

// Body text
<p className="text-base text-foreground">Primary content</p>
<p className="text-sm text-gray-light">Secondary content</p>
<p className="text-xs text-gray-muted">Metadata, timestamps</p>
```

### Cards & Sections
```tsx
// Card with proper contrast
<div className="bg-dark-card border border-dark-border rounded-lg p-6">
  <h3 className="text-lg font-semibold text-foreground mb-2">Title</h3>
  <p className="text-sm text-gray-light">Description</p>
</div>

// Section with accent border
<section className="border-l-4 border-violet-deep pl-4">
  <h2 className="text-2xl font-bold">Featured Content</h2>
</section>
```

### Form Elements
```tsx
// Input with focus state
<Input 
  className="bg-input/30 border-dark-border text-foreground placeholder:text-gray-muted"
  placeholder="Your name"
/>

// Label styling
<label className="block text-sm font-medium text-gray-light mb-2">
  Full Name
</label>
```

### Accent Usage
```tsx
// Cyan accent for highlights
<span className="text-cyan font-semibold">Featured</span>

// Gradient overlay (advanced)
<div className="bg-gradient-to-r from-violet-deep to-violet-electric">
  Premium content
</div>

// Badge with accent
<span className="inline-block bg-accent/20 text-cyan px-3 py-1 rounded text-sm">
  New
</span>
```

## Responsive Design

```tsx
// Mobile-first approach
<div className="text-base md:text-lg lg:text-xl">
  Responsive text
</div>

// Common breakpoints
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px

// Grid patterns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards */}
</div>
```

## Spacing Scale

```
2px  → 0.5  (gap-0.5)
4px  → 1    (gap-1, p-1)
8px  → 2    (gap-2, p-2)
12px → 3    (gap-3, p-3)
16px → 4    (gap-4, p-4)
24px → 6    (gap-6, p-6)
32px → 8    (gap-8, p-8)
48px → 12   (gap-12, p-12)
64px → 16   (gap-16, p-16)
```

## Transitions & Animations

```tsx
// Hover transitions
<div className="transition-all hover:bg-primary/90">
  Smooth change
</div>

// Transform effects
<div className="transition-transform hover:scale-105">
  Scale on hover
</div>

// Opacity fading
<div className="transition-opacity hover:opacity-80">
  Fade effect
</div>
```

## Accessibility Notes

- ✅ Always use semantic color variables (--primary, --accent)
- ✅ Maintain contrast ratio: text on dark-bg (luminance 1:8+)
- ✅ Use `focus-visible` for keyboard navigation
- ✅ Include `aria-invalid` for form validation errors
- ✅ Don't rely on color alone for information (use icons, text)
