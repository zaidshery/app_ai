import { useEffect, useRef, useState } from 'react'

type UseScrollRevealOptions = {
  threshold?: number
  rootMargin?: string
}

export function useScrollReveal(options: number | UseScrollRevealOptions = 0.12) {
  const { threshold, rootMargin } =
    typeof options === 'number'
      ? { threshold: options, rootMargin: '0px 0px -10% 0px' }
      : {
          threshold: options.threshold ?? 0.12,
          rootMargin: options.rootMargin ?? '0px 0px -10% 0px',
        }

  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false
    return (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
  })

  useEffect(() => {
    if (typeof window === 'undefined' || visible) return

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [rootMargin, threshold, visible])

  return { ref, visible }
}
