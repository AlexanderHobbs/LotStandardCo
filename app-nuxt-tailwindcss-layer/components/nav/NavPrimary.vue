<script setup lang="ts">
  import type { PropType } from 'vue'

  type NavItem = {
    title: string
    to: string
    children?: NavItem[]
  }

  const props = defineProps({
    navs: {
      type: Array as PropType<NavItem[]>,
      default: () => [],
    },
    currentPath: {
      type: String,
      default: '/',
    },
  })

  // Which dropdown is open (by parent path). It opens on hover/focus (or a
  // first tap on touch screens) and closes when one of its options is
  // clicked, on route change, Escape, a tap outside, or when the
  // pointer/focus leaves it.
  const openMenu = ref<string | null>(null)
  const open = (nav: NavItem) => {
    if (nav.children?.length) openMenu.value = nav.to
  }
  const close = () => {
    openMenu.value = null
  }
  const onFocusOut = (event: FocusEvent) => {
    const group = event.currentTarget as HTMLElement
    if (!group.contains(event.relatedTarget as Node | null)) close()
  }
  watch(() => props.currentPath, close)

  // Touch screens at desktop width (e.g. a large touchscreen laptop) have no hover, so
  // there the first tap on a parent opens its dropdown and a second tap
  // follows the link. Hover/focus opening is skipped for touch so it doesn't
  // open the menu just before the tap's click arrives.
  let lastPointer = ''
  const onPointerDown = (event: PointerEvent) => {
    lastPointer = event.pointerType
  }
  const onHover = (event: PointerEvent, nav: NavItem) => {
    if (event.pointerType !== 'touch') open(nav)
  }
  const onHoverEnd = (event: PointerEvent) => {
    if (event.pointerType !== 'touch') close()
  }
  const onFocusIn = (nav: NavItem) => {
    if (lastPointer !== 'touch') open(nav)
  }
  // Runs in the capture phase so preventDefault lands before NuxtLink's own
  // click handler decides whether to navigate.
  const onParentClick = (event: MouseEvent, nav: NavItem) => {
    if (lastPointer === 'touch' && nav.children?.length && openMenu.value !== nav.to) {
      event.preventDefault()
      openMenu.value = nav.to
      return
    }
    close()
  }

  // A tap anywhere else closes an open dropdown.
  const root = ref<HTMLElement | null>(null)
  onClickOutside(root, close)

  // A parent stays highlighted while one of its child pages is open.
  const isActive = (nav: NavItem) =>
    nav.to === props.currentPath ||
    !!nav.children?.some((child) => child.to === props.currentPath)

  const linkClass = (active: boolean) =>
    active
      ? 'text-primary-600 dark:text-primary-400'
      : 'text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400'

</script>

<template>
  <div ref="root" class="h-full items-center" @pointerdown="onPointerDown" @keydown="lastPointer = ''">
    <div
      class="flex h-full flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:gap-x-8"
    >
      <div
        v-for="nav in navs"
        :key="nav.to"
        class="relative"
        @pointerenter="onHover($event, nav)"
        @pointerleave="onHoverEnd"
        @focusin="onFocusIn(nav)"
        @focusout="onFocusOut"
        @keydown.esc="close"
      >
        <NuxtLink
          :to="nav.to"
          class="inline-flex items-center gap-1 font-medium text-base whitespace-nowrap transition-colors"
          :class="linkClass(isActive(nav))"
          :aria-haspopup="nav.children?.length ? 'true' : undefined"
          :aria-expanded="nav.children?.length ? openMenu === nav.to : undefined"
          @click.capture="onParentClick($event, nav)"
        >
          {{ nav.title }}
          <BaseIcon
            v-if="nav.children?.length"
            name="i-mdi-chevron-down"
            height="18px"
            class="transition-transform"
            :class="{ 'rotate-180': openMenu === nav.to }"
          />
        </NuxtLink>

        <!-- Dropdown: desktop only (xl+), directly under its parent link. The
             pt-2 wrapper bridges the gap so hover isn't lost between the link
             and the panel. Below xl the hamburger menu (NavMobile) is used
             instead. -->
        <div
          v-if="nav.children?.length"
          v-show="openMenu === nav.to"
          class="absolute left-0 top-full z-30 hidden pt-2 xl:block"
        >
          <ul
            class="min-w-[14rem] overflow-hidden rounded-xl border border-neutral-200 bg-white py-2 shadow-xl dark:border-neutral-800 dark:bg-neutral-950"
          >
            <li v-for="child in nav.children" :key="child.to">
              <NuxtLink
                :to="child.to"
                class="block whitespace-nowrap px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900"
                :class="linkClass(child.to === currentPath)"
                @click="close"
              >
                {{ child.title }}
              </NuxtLink>
            </li>
            <li
              v-if="!nav.children.some((child) => child.to === nav.to)"
              class="mt-1 border-t border-neutral-200 dark:border-neutral-800"
            >
              <NuxtLink
                :to="nav.to"
                class="block whitespace-nowrap px-4 py-2 text-sm font-semibold text-primary-600 hover:bg-neutral-100 dark:text-primary-400 dark:hover:bg-neutral-900"
                @click="close"
              >
                View all {{ nav.title.toLowerCase() }} &rarr;
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
