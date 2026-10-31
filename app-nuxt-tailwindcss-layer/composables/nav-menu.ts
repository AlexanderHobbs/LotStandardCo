import siteMeta from '@/site'

export const useNavMenu = () => {
  const navs = siteMeta.navs

  const allNavs = Object.values(navs).reduce((acc, navMenu) => {
    return [...acc, ...navMenu]
  }, [])

  const currentRoute = useRoute()
  const currentPath = computed(() => {
    // Nav links have no trailing slash, but the host serves pages at /page/,
    // so drop it here and the active-link highlight works either way.
    const path = currentRoute.path
    return path.length > 1 ? path.replace(/\/+$/, '') : path
  })

  return {
    allNavs,
    navsPrimary: navs.primary,
    navsSecondary: navs.secondary,
    currentPath,
  }
}
