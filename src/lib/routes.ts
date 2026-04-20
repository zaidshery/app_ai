export const ROUTES = {
  home: '/',
  services: '/services',
  about: '/about',
  insights: '/blog',
  contact: '/contact',
  getStarted: '/get-started',
  privacyPolicy: '/privacy-policy',
  termsOfService: '/terms-of-service',
} as const

export type AppRoute = keyof typeof ROUTES

export function getRouteHref(route: AppRoute) {
  return ROUTES[route]
}

type RouterLike = {
  push: (href: string) => void
}

export function navigateToRoute(route: AppRoute, router?: RouterLike) {
  if (typeof window === 'undefined') {
    return
  }

  const nextPath = getRouteHref(route)

  if (router) {
    router.push(nextPath)
  } else {
    window.location.href = nextPath
  }

  setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, 100)
}
