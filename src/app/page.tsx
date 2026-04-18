'use client'
import Navigation from '@/components/sections/Navigation'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import LatestUpdates from '@/components/sections/LatestUpdates'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1 w-full">
        <Hero />
        <Services />
        <WhyChooseUs />
        <LatestUpdates />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
