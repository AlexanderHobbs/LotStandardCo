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
  // Links and the host use the trailing-slash form (/contact/), so compare
  // against the path with the slash trimmed.
  const isContact = computed(() => route.path.replace(/\/+$/, '') === '/contact')
  const showEndBanner = computed(
    () => !isContact.value && !route.path.startsWith('/blog/'),
  )
  const showStickyBar = computed(() => !isContact.value)

  // At the top of a page the navbar is solid and takes the colour of the page's
  // own background (white on the home page, the grey-blue on the pages with a
  // grey backdrop), with no divider, sitting just below the TheTopBar info
  // strip. Once the page scrolls the strip fades out, the navbar slides up to
  // the top and fades to the translucent, blurred bar, and the divider line
  // appears. Keep GREY_SECTIONS in step with the pages that have a grey
  // backdrop.
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
          'top-10 border-transparent',
        ]
      : [
          'top-0 bg-background/70',
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
      <!-- v-motion owns this wrapper's opacity/transform (same entrance as the
           navbar); the scroll fade-out lives on the bar inside it. -->
      <div
        v-motion
        :initial="{ y: -100, opacity: 0 }"
        :enter="{ y: 0, opacity: 1, transition: { delay: 100, duration: 600, ease: 'easeOut' } }"
        class="fixed inset-x-0 top-0 z-20 -translate-y-24 opacity-0"
        :class="{ 'pointer-events-none': !atTop }"
        :aria-hidden="!atTop"
      >
        <TheTopBar
          :white="hasGreyBackdrop"
          class="transition-opacity duration-300 ease-in-out"
          :class="atTop ? 'opacity-100' : 'opacity-0'"
        />
      </div>
      <NavBar
        v-motion
        :initial="{ y: -100, opacity: 0 }"
        :enter="{ y: 0, opacity: 1, transition: { delay: 100, duration: 600, ease: 'easeOut' } }"
        class="fixed z-20 -translate-y-24 opacity-0 border-b backdrop-blur-md transition-[background-color,border-color,top] duration-300 ease-in-out"
        :class="navClass"
        :quote-background="hasGreyBackdrop && atTop ? 'white' : 'default'"
      />
      <!-- Spacer under the fixed navbar. It takes the navbar's resting colour so,
           if the page is ever pulled down past the top (e.g. iOS bounce), the strip
           that opens up is the same colour as the navbar instead of white. -->
      <div
        class="h-[7.5rem] xl:h-[8.5rem]"
        :class="hasGreyBackdrop ? 'bg-primary-100' : 'bg-background'"
        aria-hidden="true"
      />
      <div>
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
