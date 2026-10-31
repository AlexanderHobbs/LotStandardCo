import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

// Smooth, eased wheel/trackpad scrolling. Skipped for visitors who ask for reduced motion.
export default defineNuxtPlugin((nuxtApp) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const lenis = new Lenis({ anchors: true })

  const raf = (time: number) => {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  // Lenis keeps its own scroll target and momentum. Without this, a new page
  // starts at the top but Lenis eases back towards the old page's position (or
  // keeps gliding). Snap it to the top, with no momentum, once the new page is in.
  // Pages reached through a #hash link are left to scroll to their anchor.
  nuxtApp.hook('page:finish', () => {
    if (useRoute().hash) return
    lenis.scrollTo(0, { immediate: true, force: true })
  })
})
