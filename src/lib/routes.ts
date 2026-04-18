'use client'

export const ROUTES = {
  home: '/',
  services: '/services',
  caseStudies: '/case-studies',
  process: '/process',
  contact: '/contact',
} as const

export type AppRoute = keyof typeof ROUTES

export function getRouteHref(route: AppRoute) {
  return ROUTES[route]
}

export function navigateToRoute(route: AppRoute, router?: any) {
  if (typeof window === 'undefined') {
    return
  }

  const nextPath = getRouteHref(route)
  
  if (router) {
    router.push(nextPath)
  } else {
    // Fallback to window.location if router not available
    window.location.href = nextPath
  }
  
  // Scroll to top
  setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, 100)
}
