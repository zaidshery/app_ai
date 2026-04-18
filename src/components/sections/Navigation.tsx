'use client'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-zinc-200 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-950 text-white font-bold text-sm">DA</span>
          <span className="font-semibold text-zinc-950 text-base hidden sm:block">Digital Applied</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link key={link.name} href={link.href} className="text-sm text-zinc-500 hover:text-zinc-950 transition-colors font-medium">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact" className="text-sm text-zinc-500 hover:text-zinc-950 transition-colors font-medium">
            Contact
          </Link>
          <Link href="/get-started" className="inline-flex h-9 items-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-white hover:bg-zinc-800 transition-colors">
            Get Started
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-zinc-500 hover:text-zinc-950 p-2">
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white px-4 pb-4">
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map(link => (
              <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="py-2 text-base text-zinc-600 hover:text-zinc-950 font-medium">
                {link.name}
              </Link>
            ))}
            <Link href="/get-started" onClick={() => setIsOpen(false)} className="mt-3 flex items-center justify-center rounded-full bg-zinc-950 px-4 py-2.5 text-sm font-medium text-white">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
