import { computed } from 'vue'
import site from '~~/site'

export const useNav = () => {
  const routes = useRouter().getRoutes()

  const navlinksFromRouter = routes
    // Remove hidden routes
    .filter((route) => route.meta.hidden !== true)
    // Filter out routes starting with upper-case, for eg, NotFoundInDev
    .filter(
      (route) => route.name && route.name[0] !== route.name[0].toUpperCase(),
    )
    // Remove dynamic routes
    // .filter((route) => !route.path.includes(':'))
    // Include only ones that has a title (which are defined via definePageMeta in pages)
    .filter((route) => route.meta.title)
    .filter((route) => route.path !== '/try-now')
    .sort((a, b) =>
      a.meta.navOrder && b.meta.navOrder && +a.meta.navOrder > +b.meta.navOrder
        ? 1
        : -1,
    )
    .map((route) => {
      return {
        text: route.meta.title,
        link: route.meta.name || route.path,
        icon: route.meta.icon,
        type: route.meta.type,
      }
    })

  const navlinksFromConfig = site.nav
  // const navlinks = computed(() => navlinksFromRouter || navlinksFromConfig)
  // TODO: Use navlinksFromConfig if using dynamic routes, or customized nav-links
  const navlinks = computed(() => navlinksFromConfig || navlinksFromRouter)

  const navlinksPrimary = computed(() => {
    return navlinks.value.filter(
      (navlink) => !navlink.type || navlink.type === 'primary',
    )
  })

  const navlinksSecondary = computed(() => {
    return navlinks.value.filter((navlink) => navlink.type === 'secondary')
  })

  const currentRoute = useRoute()
  const currentPath = computed(() => {
    return currentRoute.path
  })

  return {
    navlinks,
    navlinksPrimary,
    navlinksSecondary,
    currentPath,
  }
}

export const isCurrentRoute = (navlink, currentPath) => {
  if (!currentPath) {
    currentPath = useNav().currentPath.value
  }
  return navlink.link === '/'
    ? currentPath === navlink.link
    : currentPath.startsWith(navlink.link)
}
