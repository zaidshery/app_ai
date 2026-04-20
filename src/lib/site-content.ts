export type NavLink = {
  label: string
  href: string
}

export type LegalLink = {
  label: string
  href: string
}

export type PlatformEntry = {
  name: string
  viewBox: string
  path: string
}

export type ServiceFaq = {
  question: string
  answer: string
}

export type ServiceIconKey =
  | 'search'
  | 'trending-up'
  | 'users'
  | 'bar-chart-3'
  | 'edit-3'
  | 'code'
  | 'shopping-cart'
  | 'briefcase'
  | 'cpu'

export type ServiceEntry = {
  slug: string
  label: string
  name: string
  category: 'Visibility' | 'Acquisition' | 'Experience' | 'Operations'
  icon: ServiceIconKey
  summary: string
  description: string
  idealFor: string
  outcomes: string[]
  deliverables: string[]
  workflow: string[]
  faqs: ServiceFaq[]
}

export type EngagementModel = {
  name: string
  description: string
  points: string[]
}

export type ProofLogo = PlatformEntry & {
  group?: 'visibility' | 'acquisition' | 'experience' | 'operations'
}

export type TestimonialEntry = {
  id: string
  quote: string
  attribution: string
  role: string
  company?: string
  verified: boolean
}

export type TrustMetric = {
  value: string
  label: string
  detail: string
}

export type SectionCTA = {
  label: string
  href: string
  variant: 'primary' | 'secondary' | 'ghost'
}

export type PageHeroContent = {
  eyebrow: string
  title: string
  description: string
  note?: string
  chips?: string[]
  primaryCta?: SectionCTA
  secondaryCta?: SectionCTA
}

export type PageProofConfig = {
  eyebrow: string
  title: string
  description: string
  metrics: TrustMetric[]
  chips?: string[]
}

export const companyProfile = {
  name: 'ZaiferTech',
  shortName: 'ZT',
  tagline: 'Calm, exact digital systems for growth-minded teams.',
  description:
    'ZaiferTech helps businesses improve visibility, conversion, and operations through sharper search, websites, analytics, and automation systems.',
  location: 'Indore, Madhya Pradesh, India',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || null,
  whatsappNumber: '917477033131',
  phoneDisplay: '+91 74770 33131',
  serviceArea: 'Remote-friendly delivery for businesses across India and beyond.',
} as const

export const sectionCtas = {
  startProject: {
    label: 'Start a Project',
    href: '/get-started',
    variant: 'primary',
  },
  reviewServices: {
    label: 'Review Services',
    href: '/services',
    variant: 'secondary',
  },
  contact: {
    label: 'Contact',
    href: '/contact',
    variant: 'secondary',
  },
  getStarted: {
    label: 'Go to intake',
    href: '/get-started',
    variant: 'primary',
  },
} as const satisfies Record<string, SectionCTA>

export const pageHeroContent = {
  services: {
    eyebrow: 'Services',
    title: 'The right scope should be obvious fast.',
    description:
      'Start with the one bottleneck shaping visibility, conversion, or operations. Expand the scope only when the system genuinely needs it.',
    primaryCta: sectionCtas.startProject,
    secondaryCta: sectionCtas.contact,
  },
  about: {
    eyebrow: 'About',
    title: 'A lean studio model for sharper digital systems.',
    description:
      'ZaiferTech stays close to the real work: scope, messaging, page structure, tracking clarity, and the operating decisions that affect outcomes.',
    primaryCta: sectionCtas.startProject,
    secondaryCta: sectionCtas.reviewServices,
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Bring the friction. We will shape the next move.',
    description:
      'If the challenge is visibility, conversion, tracking, or workflow drag, start there. The first goal is to turn it into a clean recommendation.',
    primaryCta: sectionCtas.getStarted,
    secondaryCta: sectionCtas.reviewServices,
  },
  getStarted: {
    eyebrow: 'Guided intake',
    title: 'A clear brief beats a polished brief.',
    description:
      'Use this page when you want to describe the current situation properly before the conversation starts. Context makes the first recommendation stronger.',
    primaryCta: sectionCtas.reviewServices,
  },
  blog: {
    eyebrow: 'Insights',
    title: 'Publishing is being built with the same proof standard as the service work.',
    description:
      'This section stays quiet until the editorial workflow, proof references, and publishing rhythm are ready for real content.',
    primaryCta: sectionCtas.reviewServices,
    secondaryCta: sectionCtas.contact,
  },
  privacy: {
    eyebrow: 'Privacy Policy',
    title: 'How inquiry data and contact details are handled.',
    description:
      'This policy explains what information may be collected through the website and how it is used to respond to inquiries or improve the service experience.',
  },
  terms: {
    eyebrow: 'Terms of Service',
    title: 'General website and inquiry terms.',
    description:
      'These terms explain the baseline conditions for using the ZaiferTech website and contacting the business through its public channels.',
  },
} as const satisfies Record<string, PageHeroContent>

export const pageProofContent = {
  services: {
    eyebrow: 'Selection logic',
    title: 'Start with the cleanest lever.',
    description:
      'The recommendation should reduce friction first. Search, pages, tracking, and operations can connect after the first priority is clear.',
    metrics: [
      {
        value: '4',
        label: 'Capability lanes',
        detail: 'Visibility, acquisition, experience, and operations.',
      },
      {
        value: '3',
        label: 'Ways to work',
        detail: 'Focused sprint, ongoing execution, or wider systems buildout.',
      },
      {
        value: 'Human-reviewed',
        label: 'Delivery standard',
        detail: 'Automation can support speed, but final work still stays reviewed.',
      },
    ],
    chips: ['Search', 'Pages', 'Tracking', 'Automation'],
  },
  about: {
    eyebrow: 'Working model',
    title: 'Direct scope. Fewer layers. Cleaner decisions.',
    description:
      'The studio model is designed to reduce agency drag: shorter feedback loops, clearer ownership, and systems that still make sense after launch.',
    metrics: [
      {
        value: 'Truth-first',
        label: 'Scope discipline',
        detail: 'Promises stay narrower than the usual agency pitch.',
      },
      {
        value: 'Remote-friendly',
        label: 'Delivery model',
        detail: 'Indore-based execution for teams across India and beyond.',
      },
      {
        value: 'Implementation close',
        label: 'Working style',
        detail: 'Strategy and shipped work stay connected instead of drifting apart.',
      },
    ],
    chips: ['Search', 'UX', 'Analytics', 'Operations'],
  },
  contact: {
    eyebrow: 'Before you reach out',
    title: 'The clearer the context, the cleaner the first recommendation.',
    description:
      'You do not need a polished deck. A short brief that names the current friction is enough to start well.',
    metrics: [
      {
        value: 'Current friction',
        label: 'What feels slow',
        detail: 'Name the page, system, or workflow that is getting in the way.',
      },
      {
        value: 'What is live',
        label: 'Current stack',
        detail: 'Website, campaigns, analytics, CRM, or automation already in place.',
      },
      {
        value: 'Better outcome',
        label: 'What should change',
        detail: 'Describe what improvement should look like over the next few months.',
      },
    ],
    chips: ['Email', 'WhatsApp', 'Guided intake'],
  },
  getStarted: {
    eyebrow: 'What to include',
    title: 'Context beats polish every time.',
    description:
      'A stronger intake is usually a better description of the situation, not a longer brief. Keep it specific and grounded in the current bottleneck.',
    metrics: [
      {
        value: 'What is slow',
        label: 'Pain point',
        detail: 'The page, funnel, reporting setup, or internal process that needs attention.',
      },
      {
        value: 'What is live',
        label: 'Existing setup',
        detail: 'Anything already built, already running, or already partially fixed.',
      },
      {
        value: 'What better looks like',
        label: 'Desired outcome',
        detail: 'The practical improvement that would make the project worthwhile.',
      },
    ],
    chips: ['Focused scope', 'Clear brief', 'Human review'],
  },
  blog: {
    eyebrow: 'Proof standard',
    title: 'Nothing gets published here just to fill space.',
    description:
      'Insights will go live once the publishing system can support real editorial depth, useful examples, and claims that can be defended.',
    metrics: [
      {
        value: 'No placeholders',
        label: 'Editorial rule',
        detail: 'No fake article counts, empty search, or unfinished routes.',
      },
      {
        value: 'Proof-ready',
        label: 'Publishing standard',
        detail: 'Examples and claims will only appear when they are real and useful.',
      },
      {
        value: 'Cross-functional',
        label: 'Topic scope',
        detail: 'Search, web execution, analytics, and operating systems.',
      },
    ],
    chips: ['Search', 'Conversion', 'Automation'],
  },
} as const satisfies Record<string, PageProofConfig>

export const navigationLinks: NavLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export const legalLinks: LegalLink[] = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
]

export const homeHeroHighlights = [
  'Qualified search visibility',
  'Sharper conversion paths',
  'Cleaner operating flow',
]

export const homeHeroSignal = {
  eyebrow: 'ZaiferTech signal',
  title: 'Clear systems scale better.',
  description:
    'Find the page, path, or workflow that changes outcomes first. Then tighten that lever without adding extra layers.',
}

export const homeTrustMetrics: TrustMetric[] = [
  {
    value: '4',
    label: 'Capability lanes',
    detail: 'Visibility, acquisition, experience, and operations.',
  },
  {
    value: '3',
    label: 'Engagement models',
    detail: 'Focused sprint, ongoing execution, or systems buildout.',
  },
  {
    value: 'Human-reviewed',
    label: 'Delivery standard',
    detail: 'Automation supports speed, but final output still stays reviewed.',
  },
  {
    value: 'Remote-friendly',
    label: 'Delivery base',
    detail: 'Indore-based for businesses across India and beyond.',
  },
]

export const proofFallbackCards = [
  {
    eyebrow: 'Proof note',
    title: 'Verified stories are added only with permission.',
    description:
      'Case studies, testimonials, and outcome metrics will only go live once the details can be shared responsibly.',
  },
  {
    eyebrow: 'Working standard',
    title: 'Trust is built through the shipped work, not inflated claims.',
    description:
      'Until public case studies are ready, the site leans on real operating standards, a visible stack, and proof-ready structure rather than invented proof.',
  },
]

export const testimonialEntries: TestimonialEntry[] = []

export const homeProofPoints = [
  {
    title: 'Scope-first planning',
    description:
      'The first recommendation is designed to narrow the problem, not to expand the retainer.',
  },
  {
    title: 'Close execution',
    description:
      'Messaging, design, tracking, and implementation decisions stay close so the work ships with less drift.',
  },
  {
    title: 'Human review stays in',
    description:
      'Automation can speed up research and delivery, but final output still gets reviewed, edited, and owned.',
  },
]

export const operatingSteps = [
  {
    title: 'Review the bottleneck',
    description:
      'Look at the page, funnel, reporting setup, or internal flow that is actually slowing momentum.',
  },
  {
    title: 'Set the next scope',
    description:
      'Keep the recommendation tight: one sprint, one rebuild, or one connected system, depending on what the business needs.',
  },
  {
    title: 'Build and refine',
    description:
      'Ship with review, refinement, and cleanup so the result is easier to live with after launch.',
  },
]

export const aboutPrinciples = [
  {
    title: 'Useful Strategy',
    description:
      'The output should be practical enough to implement quickly, not just impressive enough to present.',
  },
  {
    title: 'Performance With Context',
    description:
      'Traffic, automation, and reporting only matter when they improve qualified demand and day-to-day clarity.',
  },
  {
    title: 'Honest Scope',
    description:
      'Clear deliverables, realistic timelines, and simple communication are part of the work, not an extra.',
  },
  {
    title: 'System Thinking',
    description:
      'Search, web, analytics, and operations perform better when they are designed as one connected stack.',
  },
]

export const contactExpectations = [
  'Name what is slow, unclear, or underperforming right now.',
  'Share what is already live: site, campaigns, analytics, CRM, or automation.',
  'Describe what a better result should look like over the next few months.',
]

export const engagementModels: EngagementModel[] = [
  {
    name: 'Focused Sprint',
    description:
      'A tightly scoped block of work for an audit, landing page, tracking fix, or automation cleanup.',
    points: ['Best for urgent fixes', 'Clear scope', 'Fast implementation window'],
  },
  {
    name: 'Ongoing Execution',
    description:
      'A recurring setup for teams that need steady improvement across search, pages, campaigns, or reporting.',
    points: ['Monthly momentum', 'Shared priorities', 'Review and refinement built in'],
  },
  {
    name: 'Systems Buildout',
    description:
      'A wider engagement for businesses improving acquisition, web experience, analytics, and internal operations together.',
    points: ['Cross-functional delivery', 'Technical and marketing alignment', 'Designed for scale'],
  },
]

export const blogPreviewTopics = [
  {
    title: 'Search Strategy Without Vanity Metrics',
    description:
      'How to decide which SEO work actually supports qualified demand instead of reporting noise.',
  },
  {
    title: 'Conversion-Focused Web Execution',
    description:
      'What changes matter most when a site needs to feel stronger and convert more clearly at the same time.',
  },
  {
    title: 'Workflow Automation for Lean Teams',
    description:
      'Where automation helps most in lead handling, reporting, and internal operations without creating fragile systems.',
  },
]

export const platforms: PlatformEntry[] = [
  {
    name: 'Google Ads',
    viewBox: '0 0 24 24',
    path: 'M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z',
  },
  {
    name: 'Meta',
    viewBox: '0 0 24 24',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    name: 'Shopify',
    viewBox: '0 0 24 24',
    path: 'M15.337 23.979l7.216-1.561s-2.6-17.574-2.621-17.691a.336.336 0 00-.33-.275c-.142 0-2.669-.053-2.669-.053s-1.774-1.72-1.963-1.907v21.487zm-1.8.39V3.085c-.19.188-1.965 1.908-1.965 1.908S9.04 5.046 8.9 5.046a.336.336 0 00-.331.275c-.021.117-2.62 17.691-2.62 17.691l7.588 1.356zm-2.138-9.117l1.036-3.18 1.035 3.18h-2.07zm1.034-14.374c-.404 0-.78.302-.98.765.39.12.78.39 1.094.765.314-.376.703-.645 1.094-.765-.2-.463-.576-.765-.98-.765l-.228.001z',
  },
  {
    name: 'HubSpot',
    viewBox: '0 0 24 24',
    path: 'M17.013 7.435V5.012a1.701 1.701 0 00.979-1.535V3.43a1.701 1.701 0 00-1.701-1.7h-.047a1.701 1.701 0 00-1.7 1.7v.046c0 .687.41 1.28.979 1.535v2.423A4.967 4.967 0 0013.4 8.317L7.086 3.459a1.97 1.97 0 00.064-.49 1.978 1.978 0 10-1.978 1.977c.29 0 .563-.064.812-.176l6.19 4.763a4.964 4.964 0 00-.786 2.663 4.974 4.974 0 001.733 3.756l-1.864 1.864a1.577 1.577 0 00-.456-.072 1.608 1.608 0 101.608 1.607 1.575 1.575 0 00-.072-.455l1.84-1.84a4.972 4.972 0 002.938.956 4.988 4.988 0 100-9.976 5.006 5.006 0 00-1.102.179zm1.1 7.355a2.369 2.369 0 110-4.738 2.369 2.369 0 010 4.738z',
  },
  {
    name: 'OpenAI',
    viewBox: '0 0 24 24',
    path: 'M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 004.981 4.18a5.985 5.985 0 00-3.998 2.9 6.046 6.046 0 00.743 7.097 5.98 5.98 0 00.51 4.911 6.051 6.051 0 006.515 2.9A5.985 5.985 0 0013.26 24a6.056 6.056 0 005.772-4.206 5.99 5.99 0 003.997-2.9 6.056 6.056 0 00-.747-7.073zM13.26 22.43a4.476 4.476 0 01-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 00.392-.681v-6.737l2.02 1.168a.071.071 0 01.038.052v5.583a4.504 4.504 0 01-4.494 4.494zM3.6 18.304a4.47 4.47 0 01-.535-3.014l.142.085 4.783 2.759a.771.771 0 00.78 0l5.843-3.369v2.332a.08.08 0 01-.032.067L9.76 19.923a4.5 4.5 0 01-6.16-1.62zm-1.187-10.86A4.485 4.485 0 014.76 5.795l-.016.15v5.516a.797.797 0 00.388.68l5.843 3.373-2.02 1.168a.076.076 0 01-.071 0L4.04 13.986a4.496 4.496 0 01-1.627-6.542zm16.612 3.87l-5.843-3.374 2.02-1.172a.076.076 0 01.071 0l4.844 2.798a4.5 4.5 0 01-.676 8.117v-5.666a.79.79 0 00-.416-.703zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 00-.785 0L9.492 9.423V7.101a.08.08 0 01.032-.067l4.824-2.788a4.496 4.496 0 016.168 4.657zm-12.64 4.135l-2.02-1.164a.08.08 0 01-.038-.057V6.075a4.496 4.496 0 017.375-3.453l-.142.08L8.786 5.46a.795.795 0 00-.393.681zm1.099-2.37l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z',
  },
  {
    name: 'LinkedIn',
    viewBox: '0 0 24 24',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    name: 'Vercel',
    viewBox: '0 0 24 24',
    path: 'M24 22.525H0l12-21.05 12 21.05z',
  },
  {
    name: 'n8n',
    viewBox: '0 0 24 24',
    path: 'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 110-16 8 8 0 010 16zm-2-8a2 2 0 104 0 2 2 0 00-4 0zm-4 0a6 6 0 1112 0 6 6 0 01-12 0z',
  },
]

export const proofLogos: ProofLogo[] = [
  { ...platforms[0], group: 'acquisition' },
  { ...platforms[1], group: 'acquisition' },
  { ...platforms[2], group: 'experience' },
  { ...platforms[3], group: 'operations' },
  { ...platforms[4], group: 'operations' },
  { ...platforms[5], group: 'operations' },
  { ...platforms[6], group: 'acquisition' },
  { ...platforms[7], group: 'experience' },
  { ...platforms[8], group: 'operations' },
]

export const services: ServiceEntry[] = [
  {
    slug: 'seo-optimization',
    label: 'SEO',
    name: 'SEO and Search Visibility',
    category: 'Visibility',
    icon: 'search',
    summary: 'Technical, local, and on-page SEO built to improve qualified search traffic.',
    description:
      'For businesses that need stronger discoverability without relying only on paid acquisition.',
    idealFor: 'Businesses with a website that exists but is not producing enough qualified inbound demand.',
    outcomes: [
      'Clearer keyword and page targeting',
      'Healthier technical SEO foundations',
      'More usable content priorities for future growth',
    ],
    deliverables: [
      'Technical audit with prioritized fixes',
      'Keyword and page opportunity map',
      'On-page updates for core landing pages',
      'Reporting focused on visibility and lead intent',
    ],
    workflow: [
      'Audit the current site structure, indexing, and search intent coverage.',
      'Prioritize quick wins and structural fixes that unblock future content growth.',
      'Implement and review changes against conversion paths, not rankings alone.',
    ],
    faqs: [
      {
        question: 'Do you only handle strategy, or implementation too?',
        answer:
          'Implementation is part of the offer. Audits are translated into page, content, and technical tasks that can actually ship.',
      },
      {
        question: 'Can this include local SEO?',
        answer:
          'Yes. Local search visibility, Google Business Profile improvements, and location landing page strategy can all be included.',
      },
      {
        question: 'Will SEO be separated from conversion work?',
        answer:
          'No. Search intent, landing page clarity, and lead capture are handled as part of the same system.',
      },
    ],
  },
  {
    slug: 'ppc-advertising',
    label: 'PPC',
    name: 'Performance Marketing',
    category: 'Acquisition',
    icon: 'trending-up',
    summary: 'Campaign structure, landing page thinking, and tracking clarity for paid acquisition.',
    description:
      'For teams that need a tighter loop between ad spend, message quality, and conversion outcomes.',
    idealFor: 'Businesses already spending on ads or preparing to launch campaigns with clearer commercial intent.',
    outcomes: [
      'Cleaner campaign structure and message alignment',
      'Better visibility into conversion quality',
      'More usable feedback loops between spend and landing pages',
    ],
    deliverables: [
      'Campaign structure review or setup',
      'Audience and keyword targeting adjustments',
      'Ad copy and landing page recommendations',
      'Conversion tracking review for decision-ready reporting',
    ],
    workflow: [
      'Review campaigns, audience fit, and current conversion definitions.',
      'Refine structure, messaging, and destination experience around intent.',
      'Use tracking and reporting to improve spend decisions continuously.',
    ],
    faqs: [
      {
        question: 'Do you manage only Google Ads?',
        answer:
          'Google Ads is a common focus, but Meta and LinkedIn campaign planning can also be part of the engagement where relevant.',
      },
      {
        question: 'Can you improve landing pages too?',
        answer:
          'Yes. Paid performance improves faster when the page experience is treated as part of the campaign system.',
      },
      {
        question: 'Is this suitable for first-time advertisers?',
        answer:
          'Yes, as long as the offer, budget, and conversion goals are clear enough to define a sensible launch path.',
      },
    ],
  },
  {
    slug: 'social-media-marketing',
    label: 'Social',
    name: 'Social Content Systems',
    category: 'Visibility',
    icon: 'users',
    summary: 'A cleaner operating system for consistent social presence, messaging, and campaign support.',
    description:
      'For brands that need a more disciplined content engine instead of ad hoc posting.',
    idealFor: 'Businesses that want social media to support positioning, launches, and demand generation with more consistency.',
    outcomes: [
      'More coherent channel messaging',
      'Faster planning and production cycles',
      'Better alignment between social content and business goals',
    ],
    deliverables: [
      'Channel and messaging review',
      'Content calendar structure and themes',
      'Post, campaign, and repurposing workflow support',
      'Reporting on engagement signals and conversion relevance',
    ],
    workflow: [
      'Clarify the role each social channel should play in the business.',
      'Build a repeatable planning framework for content and campaigns.',
      'Use performance feedback to adjust content direction and effort.',
    ],
    faqs: [
      {
        question: 'Is this community management or strategy?',
        answer:
          'It can include both, but the priority is building a repeatable system so content supports business outcomes rather than staying reactive.',
      },
      {
        question: 'Do you create every asset from scratch?',
        answer:
          'We can guide asset requirements, content structure, and publishing workflows, and scope production support based on what the business needs.',
      },
      {
        question: 'Can social work alongside paid campaigns?',
        answer:
          'Yes. Social content becomes more useful when it supports offer validation, remarketing, and campaign amplification.',
      },
    ],
  },
  {
    slug: 'content-marketing',
    label: 'Content',
    name: 'Content Marketing',
    category: 'Visibility',
    icon: 'edit-3',
    summary: 'Search-aware content systems that help businesses explain, rank, and convert more clearly.',
    description:
      'For businesses that need higher-quality content operations across landing pages, blogs, and lead-nurture assets.',
    idealFor: 'Teams that know content matters but need stronger structure, prioritization, and page quality.',
    outcomes: [
      'Stronger message-market clarity across key pages',
      'Content plans tied to search and conversion needs',
      'A better publishing rhythm without low-signal output',
    ],
    deliverables: [
      'Content planning and topic prioritization',
      'Landing page and core page copy support',
      'Search-informed article briefs or production',
      'Editorial guidance for repurposing across channels',
    ],
    workflow: [
      'Define the questions, offers, and buying stages content should address.',
      'Map the content to search demand and conversion paths.',
      'Ship content with stronger structure, review, and reuse potential.',
    ],
    faqs: [
      {
        question: 'Can you write service and landing pages too?',
        answer:
          'Yes. Core commercial pages are often the highest-leverage content asset because they support both traffic and conversion.',
      },
      {
        question: 'Will content decisions be tied to SEO?',
        answer:
          'Yes. Content planning is treated as part of discoverability and positioning, not as a separate publishing exercise.',
      },
      {
        question: 'Can you work from rough internal notes?',
        answer:
          'Yes. Existing documents, sales notes, and call insights are useful raw material for more accurate content execution.',
      },
    ],
  },
  {
    slug: 'web-development',
    label: 'Web',
    name: 'Web Design and Development',
    category: 'Experience',
    icon: 'code',
    summary: 'Marketing websites and landing pages built for speed, clarity, and conversion.',
    description:
      'For businesses that need a stronger web presence, sharper messaging, or cleaner technical foundations.',
    idealFor: 'Teams redesigning their site, improving landing pages, or fixing friction in a current web experience.',
    outcomes: [
      'Clearer page hierarchy and conversion flow',
      'Stronger performance and mobile usability',
      'A site foundation that supports search and campaign work',
    ],
    deliverables: [
      'UX and page structure planning',
      'Next.js website or landing page implementation',
      'Performance and responsive behavior tuning',
      'Analytics, forms, and conversion touchpoint setup',
    ],
    workflow: [
      'Review the current site against messaging, trust, and conversion goals.',
      'Design and build a sharper page system with cleaner hierarchy.',
      'Launch with tracking, performance checks, and QA in place.',
    ],
    faqs: [
      {
        question: 'Do you only build from scratch?',
        answer:
          'No. Existing sites can be improved incrementally, redesigned selectively, or rebuilt depending on what is most practical.',
      },
      {
        question: 'Can the website support SEO and ads together?',
        answer:
          'Yes. The build approach is designed to support organic visibility, campaign landing pages, and clearer reporting.',
      },
      {
        question: 'Do you handle mobile-first behavior carefully?',
        answer:
          'Yes. Mobile readability, tap targets, form friction, and loading behavior are part of the baseline QA process.',
      },
    ],
  },
  {
    slug: 'analytics-insights',
    label: 'Analytics',
    name: 'Analytics and Conversion Tracking',
    category: 'Acquisition',
    icon: 'bar-chart-3',
    summary: 'Measurement systems that make marketing decisions easier to trust.',
    description:
      'For businesses that need cleaner attribution, clearer dashboards, and fewer reporting blind spots.',
    idealFor: 'Teams unsure whether their analytics, event tracking, or campaign reporting is reliable enough to guide decisions.',
    outcomes: [
      'Better visibility into lead-generating activity',
      'Fewer tracking gaps between pages and campaigns',
      'Reporting that supports action, not just monitoring',
    ],
    deliverables: [
      'Tracking audit and event mapping',
      'Analytics and tag manager configuration support',
      'Dashboard or reporting structure guidance',
      'Conversion definitions aligned to business priorities',
    ],
    workflow: [
      'Audit the current analytics setup and identify tracking blind spots.',
      'Define the events, goals, and reporting views that matter most.',
      'Implement or refine the setup so teams can act on the data with more confidence.',
    ],
    faqs: [
      {
        question: 'Can you work with an existing analytics setup?',
        answer:
          'Yes. In many cases the work starts with cleaning up an incomplete or inconsistent setup instead of rebuilding from zero.',
      },
      {
        question: 'Do dashboards come with the setup?',
        answer:
          'They can. The scope depends on whether the priority is instrumentation, reporting, or both at the same time.',
      },
      {
        question: 'Why is this important before growth work?',
        answer:
          'Because better tracking reduces guesswork and makes SEO, paid, and site decisions easier to evaluate.',
      },
    ],
  },
  {
    slug: 'ecommerce-solutions',
    label: 'Commerce',
    name: 'Commerce and Funnel Builds',
    category: 'Experience',
    icon: 'shopping-cart',
    summary: 'Storefront and funnel improvements for product-driven businesses that need clearer conversion paths.',
    description:
      'For ecommerce businesses improving product pages, checkout flow, storefront clarity, and funnel experience.',
    idealFor: 'Brands selling online through Shopify, WooCommerce, or custom storefronts that need cleaner UX and sharper conversion support.',
    outcomes: [
      'Improved storefront clarity and product page structure',
      'Lower friction in the buying journey',
      'Better alignment between campaigns and destination pages',
    ],
    deliverables: [
      'Storefront or funnel review',
      'Page structure and UX improvements',
      'Technical implementation support for core buyer paths',
      'Tracking and conversion support for ecommerce events',
    ],
    workflow: [
      'Review where the buying journey loses momentum.',
      'Improve the store or funnel around clarity, trust, and speed.',
      'Connect the frontend experience back to measurable conversion behavior.',
    ],
    faqs: [
      {
        question: 'Can you improve an existing store instead of rebuilding it?',
        answer:
          'Yes. Many ecommerce wins come from improving page structure, product messaging, and funnel logic without replacing the full stack.',
      },
      {
        question: 'Do you work with Shopify and WooCommerce?',
        answer:
          'Yes. The exact implementation path depends on the current stack and how much change the business wants to absorb right now.',
      },
      {
        question: 'Is this design-only work?',
        answer:
          'No. The focus is on conversion flow and implementation, not visual polish in isolation.',
      },
    ],
  },
  {
    slug: 'crm-automation',
    label: 'CRM',
    name: 'CRM and Workflow Automation',
    category: 'Operations',
    icon: 'briefcase',
    summary: 'Lead handling, follow-up, and internal workflows that are easier to run consistently.',
    description:
      'For businesses where lead flow, team handoff, or repetitive operations are slowing response and visibility.',
    idealFor: 'Teams using spreadsheets, disconnected tools, or partial CRM setups that need a more reliable operating flow.',
    outcomes: [
      'Cleaner lead intake and follow-up processes',
      'Fewer manual handoffs and reporting gaps',
      'Better visibility into pipeline movement',
    ],
    deliverables: [
      'Current-state workflow review',
      'CRM structure and automation recommendations',
      'Lead routing or follow-up workflow implementation',
      'Documentation for the new operating flow',
    ],
    workflow: [
      'Map how leads currently move through the business.',
      'Remove avoidable friction between capture, qualification, and follow-up.',
      'Implement automation where it improves consistency without creating hidden complexity.',
    ],
    faqs: [
      {
        question: 'Do you work only with one CRM?',
        answer:
          'No. The approach is tool-aware rather than tool-exclusive, and can be adapted to the current stack where possible.',
      },
      {
        question: 'Can this include forms and website handoff?',
        answer:
          'Yes. Website forms, lead alerts, and CRM handoff are often part of the same workflow improvement.',
      },
      {
        question: 'Will the team still be able to manage it after setup?',
        answer:
          'That is the goal. The system should be understandable and maintainable, not dependent on fragile hidden logic.',
      },
    ],
  },
  {
    slug: 'ai-digital-transformation',
    label: 'AI & Automation',
    name: 'AI Systems & Workflow Automation',
    category: 'Operations',
    icon: 'cpu',
    summary: 'Practical AI integrations and automated systems that replace manual data entry and connect your tech stack.',
    description:
      'For teams wanting to integrate OpenAI/Anthropic into their CRMs, automate lead scoring, or build programmatic reporting systems.',
    idealFor: 'Businesses that want applied automation and AI support in operations, delivery, or decision-making rather than vague experimentation.',
    outcomes: [
      'Sharper understanding of where AI is actually useful',
      'Faster internal workflows with human review kept in the loop',
      'Less repetitive manual work across reporting and content operations',
    ],
    deliverables: [
      'Workflow audit and opportunity mapping',
      'AI-assisted operating playbooks or automations',
      'Integration support with existing tools where practical',
      'Review guidelines so speed does not compromise output quality',
    ],
    workflow: [
      'Identify the repetitive work where automation creates the most leverage.',
      'Design a workflow that keeps quality review at the right checkpoints.',
      'Implement the system with documentation so it stays usable after launch.',
    ],
    faqs: [
      {
        question: 'Is this only for advanced technical teams?',
        answer:
          'No. The work is often most useful for lean teams that need time savings and cleaner operating routines.',
      },
      {
        question: 'Will AI replace review and approval?',
        answer:
          'No. The implementation approach assumes automation should speed up the work while important decisions still stay human-owned.',
      },
      {
        question: 'Can this connect with CRM or reporting systems?',
        answer:
          'Yes. AI and automation are most useful when they are connected to existing workflows instead of operating as isolated experiments.',
      },
    ],
  },
  {
    slug: 'custom-software-development',
    label: 'Engineering',
    name: 'Custom Software & App Development',
    category: 'Experience',
    icon: 'code',
    summary: 'Bespoke internal tools, SaaS MVPs, and web applications built for scale.',
    description:
      'For businesses outgrowing off-the-shelf software that need custom logic, dashboards, or full-stack application builds.',
    idealFor: 'Teams that need robust, custom solutions using modern frameworks like Next.js and Node.',
    outcomes: [
      'A scalable, custom-built application tailored to your business logic',
      'Seamless integration with your existing databases and APIs',
      'A massive reduction in friction compared to forcing off-the-shelf tools to work',
    ],
    deliverables: [
      'Architecture planning and database design',
      'Full-stack Next.js or React application build',
      'API integrations and webhooks',
      'Post-launch support and documentation',
    ],
    workflow: [
      'Map the exact business requirements and technical constraints.',
      'Build the core logic and interface in iterative, reviewable sprints.',
      'Launch, test, and hand over the completed system.',
    ],
    faqs: [
      {
        question: 'Do you build native mobile apps?',
        answer:
          'We focus primarily on powerful web applications and Progressive Web Apps (PWAs) that work seamlessly across all devices.',
      },
      {
        question: 'What stack do you use?',
        answer:
          'We specialize in modern React ecosystems, specifically Next.js, Node, and TypeScript for robust type-safe codebases.',
      },
      {
        question: 'Can you rescue an existing codebase?',
        answer:
          'It depends on the quality of the existing code. We usually conduct a technical audit first to determine if a rescue or rewrite is more cost-effective.',
      },
    ],
  },
  {
    slug: 'b2b-demand-generation',
    label: 'Demand Gen',
    name: 'B2B Demand Generation',
    category: 'Acquisition',
    icon: 'trending-up',
    summary: 'Account-Based Marketing (ABM) and outbound systems designed to capture qualified high-ticket pipeline.',
    description:
      'For B2B companies that need to align their outbound sales efforts with inbound content to generate consistent, qualified enterprise leads.',
    idealFor: 'B2B service providers, SaaS companies, and consultancies aiming to increase their pipeline volume.',
    outcomes: [
      'A predictable outbound and inbound lead generation engine',
      'Higher reply rates and qualified meetings booked',
      'Stronger alignment between marketing spend and sales results',
    ],
    deliverables: [
      'Ideal Customer Profile (ICP) definition and list building',
      'Cold email infrastructure and deliverability setup',
      'Multi-channel outreach sequences (Email & LinkedIn)',
      'Account-Based Marketing playbooks',
    ],
    workflow: [
      'Define the exact target accounts and decision-makers.',
      'Set up the technical infrastructure to ensure high deliverability and tracking.',
      'Launch iterative campaigns, refining messaging based on reply data.',
    ],
    faqs: [
      {
        question: 'Is this just cold emailing?',
        answer:
          'No. While email is a component, true demand generation combines content, paid ads, and outbound outreach to surround the target account.',
      },
      {
        question: 'Do you guarantee leads?',
        answer:
          'We guarantee a robust system, excellent deliverability, and data-driven iterations. Lead volume depends on market fit and offer quality.',
      },
      {
        question: 'How fast can we launch?',
        answer:
          'Infrastructure setup and warming typically takes 2-3 weeks before full-volume outreach begins.',
      },
    ],
  },
]

export const serviceCategories = [
  {
    title: 'Visibility',
    description: 'Improve how the right audience discovers and understands the business.',
    slugs: ['seo-optimization', 'content-marketing', 'social-media-marketing'],
  },
  {
    title: 'Acquisition',
    description: 'Tighten the loop between spend, messaging, tracking, and pipeline growth.',
    slugs: ['ppc-advertising', 'analytics-insights', 'b2b-demand-generation'],
  },
  {
    title: 'Experience & Engineering',
    description: 'Make the website, storefront, and custom software easier to trust and easier to act on.',
    slugs: ['web-development', 'ecommerce-solutions', 'custom-software-development'],
  },
  {
    title: 'Operations & AI',
    description: 'Reduce internal friction with CRM structure, workflow automation, and applied AI systems.',
    slugs: ['crm-automation', 'ai-digital-transformation'],
  },
] as const

export const leadServiceOptions = services.map(service => ({
  value: service.slug,
  label: service.name,
}))

export function getServiceBySlug(slug: string) {
  return services.find(service => service.slug === slug)
}
