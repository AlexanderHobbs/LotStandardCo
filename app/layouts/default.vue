<script setup lang="ts">
  const route = useRoute()

  const pageMeta = computed(() => {
    return {
      title: route.meta.title,
      description: route.meta.description,
      ogImage: route.meta.ogImage,
      canonicalUrl: route.meta.canonicalUrl || route.fullPath,
      tags: route.meta.tags,
    }
  })

  // Quote CTAs: the contact page is the destination itself, and blog posts
  // carry their own in-article CTA.
  const showEndBanner = computed(
    () => route.path !== '/contact' && !route.path.startsWith('/blog/'),
  )
  const showStickyBar = computed(() => route.path !== '/contact')

  // At the top of a page the navbar is solid and takes the colour of the page's
  // own background (white on the home page, the grey-blue on the pages with a
  // grey backdrop), with no divider. Once the page scrolls it fades to the
  // translucent, blurred bar and the divider line appears. Keep GREY_SECTIONS in step with the pages
  // that have a grey backdrop.
  const GREY_SECTIONS = ['/services', '/areas', '/about']
  const hasGreyBackdrop = computed(() =>
    GREY_SECTIONS.some(
      (base) => route.path === base || route.path.startsWith(`${base}/`),
    ),
  )

  const { y: scrollY } = useWindowScroll()
  const atTop = computed(() => scrollY.value <= 8)
  const navClass = computed(() =>
    atTop.value
      ? [
          hasGreyBackdrop.value ? 'bg-primary-100' : 'bg-background',
          'border-transparent',
        ]
      : [
          'bg-background/70',
          'border-neutral-200/60 dark:border-neutral-800/60',
        ],
  )

  useHeadAndMeta(pageMeta)
  useOgImage()
</script>

<template>
  <div>
    <div
      class="min-h-screen flex flex-col pb-20 lg:pb-0 bg-background dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
    >
      <NavBar
        v-motion
        :initial="{ y: -100, opacity: 0 }"
        :enter="{ y: 0, opacity: 1, transition: { delay: 100, duration: 600, ease: 'easeOut' } }"
        class="fixed z-20 -translate-y-24 opacity-0 border-b backdrop-blur-md transition-colors duration-300 ease-in-out"
        :class="navClass"
        :quote-background="hasGreyBackdrop && atTop ? 'white' : 'default'"
      />
      <div class="mt-20 xl:mt-24">
        <main class="shadow">
          <slot />
        </main>
      </div>
      <QuoteBanner v-if="showEndBanner" />
      <TheFooter />
      <StickyQuoteBar v-if="showStickyBar" />
    </div>
  </div>
</template>

<style></style>
