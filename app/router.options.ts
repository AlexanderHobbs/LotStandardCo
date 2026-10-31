import type { RouterConfig } from '@nuxt/schema'

// Every page opens at the top (including back/forward), except #hash links,
// which scroll to their anchor. Instant, so it never fights Lenis' easing.
export default <RouterConfig>{
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, top: 90, behavior: 'instant' }
    return { top: 0, left: 0, behavior: 'instant' }
  },
}
