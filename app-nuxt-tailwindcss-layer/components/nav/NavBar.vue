<script setup lang="ts">
  const { allNavs, currentPath } = useNavMenu()

  // Phones and tablets, including iPads in landscape (below xl / 1280px), get
  // a hamburger menu. Desktop gets the inline links with hover dropdowns
  // (NavPrimary), which don't fit on one line any narrower.
  const menuOpen = ref(false)
  const closeMenu = () => {
    menuOpen.value = false
  }
  watch(currentPath, closeMenu)

  // Close it if the window is resized up to desktop while it's open.
  const isDesktop = useMediaQuery('(min-width: 1280px)')
  watch(isDesktop, (desktop) => desktop && closeMenu())

  // Stop the page behind the open menu from scrolling.
  const pageScrollLocked = useScrollLock(
    import.meta.client ? document.body : null,
  )
  watch(menuOpen, (open) => {
    pageScrollLocked.value = open
  })
</script>
<template>
  <!-- Raised above the mobile sticky quote bar while the menu is open. -->
  <div class="w-full" :class="{ '!z-30': menuOpen }">
    <nav aria-label="Main" @keydown.esc="closeMenu">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="flex h-20 items-center justify-between gap-x-6 xl:h-24">
          <div class="flex flex-shrink-0 items-center">
            <TheLogo />
          </div>
          <NavPrimary
            :navs="allNavs"
            :current-path="currentPath"
            class="hidden xl:ml-auto xl:block"
          />
          <div class="hidden xl:block">
            <BaseButton
              to="/contact"
              color="cta"
              class="whitespace-nowrap"
              label="Get in Contact"
            >
              Get in Contact
            </BaseButton>
          </div>
          <button
            type="button"
            class="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-lg text-neutral-800 transition-colors hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-900 xl:hidden"
            :aria-expanded="menuOpen"
            aria-controls="mobile-nav"
            :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
            @click="menuOpen = !menuOpen"
          >
            <BaseIcon v-if="menuOpen" name="i-mdi-close" height="28px" />
            <BaseIcon v-else name="i-mdi-menu" height="28px" />
          </button>
        </div>
      </div>
      <NavMobile
        v-show="menuOpen"
        id="mobile-nav"
        :navs="allNavs"
        :current-path="currentPath"
        class="xl:hidden"
        @navigate="closeMenu"
      />
    </nav>
  </div>
</template>
<style scoped></style>
