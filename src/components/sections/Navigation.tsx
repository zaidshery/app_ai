'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MessageCircleMore, Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import BrandMark from '@/components/brand/BrandMark'
import { CONTACT_EMAIL, buildWhatsAppUrl } from '@/lib/contact'
import { companyProfile, navigationLinks } from '@/lib/site-content'

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(() =>
    typeof window !== 'undefined' ? window.scrollY > 18 : false
  )

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18)

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = ''
      return
    }

    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <div
        className={`mx-auto max-w-6xl rounded-[1.65rem] border transition-[background-color,border-color,box-shadow,transform] duration-300 ${
          isScrolled || isOpen
            ? 'border-[var(--line-soft)] bg-[var(--surface-panel-strong)] shadow-[0_18px_60px_rgba(9,9,11,0.12)] backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <nav className="flex items-center justify-between px-4 py-3 md:px-5">
          <Link href="/" className="flex min-w-0 items-center" onClick={closeMenu}>
            <BrandMark
              size={44}
              showWordmark
              subtitle="Calm, direct digital systems"
              subtitleClassName="hidden truncate text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)] sm:block"
            />
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navigationLinks.map(link => {
              const active =
                link.href === '/'
                  ? pathname === link.href
                  : pathname === link.href || pathname.startsWith(`${link.href}/`)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors ${
                    active ? 'text-[var(--text-strong)]' : 'text-[var(--text-muted)] hover:text-[var(--text-strong)]'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              <MessageCircleMore className="h-4 w-4" />
              WhatsApp
            </a>
            <Link href="/get-started" className="button-primary">
              Start a Project
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(open => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line-soft)] bg-white/80 text-[var(--text-strong)] shadow-[0_10px_22px_rgba(9,9,11,0.08)] transition-colors hover:bg-white lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      <div className={`lg:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <button
          type="button"
          aria-label="Close mobile navigation"
          onClick={closeMenu}
          className={`fixed inset-0 top-[5.5rem] bg-[rgba(18,23,33,0.2)] backdrop-blur-[2px] transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div
          id="mobile-navigation"
          className={`fixed inset-x-3 top-[5.8rem] overflow-hidden rounded-[1.85rem] border border-[var(--line-soft)] bg-[var(--surface-panel-strong)] backdrop-blur-xl shadow-[0_28px_80px_rgba(9,9,11,0.18)] transition-all duration-300 ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="border-b border-[var(--line-soft)] px-5 py-5">
            <p className="max-w-sm text-sm leading-7 text-[var(--text-body)]">
              Search, websites, analytics, and automation shaped into a calmer operating system.
            </p>
          </div>

          <div className="px-3 py-3">
            {navigationLinks.map(link => {
              const active =
                link.href === '/'
                  ? pathname === link.href
                  : pathname === link.href || pathname.startsWith(`${link.href}/`)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`flex items-center justify-between rounded-[1.15rem] px-4 py-3 text-base font-semibold transition-colors ${
                    active
                      ? 'bg-[var(--accent-warm-soft)] text-[var(--text-strong)]'
                      : 'text-[var(--text-body)] hover:bg-[var(--surface-panel)] hover:text-[var(--text-strong)]'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="border-t border-[var(--line-soft)] px-5 py-5">
            <div className="mb-4 space-y-1 text-sm text-[var(--text-muted)]">
              <p>{companyProfile.location}</p>
              {CONTACT_EMAIL ? (
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-[var(--text-body)]">
                  {CONTACT_EMAIL}
                </a>
              ) : null}
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary w-full"
                onClick={closeMenu}
              >
                <MessageCircleMore className="h-4 w-4" />
                WhatsApp
              </a>
              <Link href="/get-started" onClick={closeMenu} className="button-primary w-full">
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
