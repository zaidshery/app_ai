import Navigation from '@/components/sections/Navigation'
import Footer from '@/components/sections/Footer'

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="flex-1 w-full pt-24">{children}</main>
      <Footer />
    </>
  )
}
