import Navigation from '@/components/sections/Navigation'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import LatestUpdates from '@/components/sections/LatestUpdates'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import JsonLd from '@/components/seo/JsonLd'
import { getSiteUrl } from '@/lib/metadata'
import { companyProfile, services } from '@/lib/site-content'

const siteUrl = getSiteUrl()

const homeJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: companyProfile.name,
    description: companyProfile.description,
    url: siteUrl?.toString(),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.name,
      url: siteUrl ? new URL(`/services/${service.slug}`, siteUrl).toString() : undefined,
    })),
  },
]

export default function Home() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <Navigation />
      <main className="flex-1 w-full">
        <Hero />
        <WhyChooseUs />
        <Services />
        <LatestUpdates />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
