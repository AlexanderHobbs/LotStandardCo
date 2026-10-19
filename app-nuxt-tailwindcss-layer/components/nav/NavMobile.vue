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

  // Emitted when a link is tapped, so the parent can close the menu even when
  // the link points at the page that's already open (no route change).
  const emit = defineEmits<{ navigate: [] }>()

  // A parent only gets a dropdown when it has pages other than itself
  // (e.g. "About" whose only child is "About" is just a link here).
  const hasDropdown = (nav: NavItem) =>
    !!nav.children?.some((child) => child.to !== nav.to)

  const isActive = (nav: NavItem) =>
    nav.to === props.currentPath ||
    !!nav.children?.some((child) => child.to === props.currentPath)

  // One section open at a time. Each time the page changes it resets to the
  // section holding the current page, so visitors can see where they are.
  const currentSection = () =>
    props.navs.find((nav) => hasDropdown(nav) && isActive(nav))?.to ?? null
  const expanded = ref<string | null>(currentSection())
  watch(
    () => props.currentPath,
    () => {
      expanded.value = currentSection()
    },
  )
  const toggle = (nav: NavItem) => {
    expanded.value = expanded.value === nav.to ? null : nav.to
  }

  const subMenuId = (nav: NavItem) => `mobile-nav${nav.to.replace(/\//g, '-')}`

  const linkClass = (active: boolean) =>
    active
      ? 'text-primary-600 dark:text-primary-400'
      : 'text-neutral-800 dark:text-neutral-100'
</script>

<template>
  <div
    class="h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain border-t border-neutral-200 bg-background dark:border-neutral-800 dark:bg-neutral-950"
  >
    <div class="container mx-auto px-4 pb-10 pt-2 sm:px-6">
      <ul class="divide-y divide-neutral-200 dark:divide-neutral-800">
        <li v-for="nav in navs" :key="nav.to">
          <template v-if="hasDropdown(nav)">
            <button
              type="button"
              class="flex w-full items-center justify-between py-4 text-left text-lg font-semibold"
              :class="linkClass(isActive(nav))"
              :aria-expanded="expanded === nav.to"
              :aria-controls="subMenuId(nav)"
              @click="toggle(nav)"
            >
              {{ nav.title }}
              <BaseIcon
                name="i-mdi-chevron-down"
                height="24px"
                class="transition-transform duration-200"
                :class="{ 'rotate-180': expanded === nav.to }"
              />
            </button>
            <ul v-show="expanded === nav.to" :id="subMenuId(nav)" class="pb-3">
              <li v-for="child in nav.children" :key="child.to">
                <NuxtLink
                  :to="child.to"
                  class="block rounded-lg px-4 py-3 font-medium transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900"
                  :class="linkClass(child.to === currentPath)"
                  :aria-current="child.to === currentPath ? 'page' : undefined"
                  @click="emit('navigate')"
                >
                  {{ child.title }}
                </NuxtLink>
              </li>
              <li v-if="!nav.children?.some((child) => child.to === nav.to)">
                <NuxtLink
                  :to="nav.to"
                  class="block rounded-lg px-4 py-3 font-semibold text-primary-600 hover:bg-neutral-100 dark:text-primary-400 dark:hover:bg-neutral-900"
                  :aria-current="nav.to === currentPath ? 'page' : undefined"
                  @click="emit('navigate')"
                >
                  View all {{ nav.title.toLowerCase() }} &rarr;
                </NuxtLink>
              </li>
            </ul>
          </template>
          <NuxtLink
            v-else
            :to="nav.to"
            class="block py-4 text-lg font-semibold"
            :class="linkClass(isActive(nav))"
            :aria-current="nav.to === currentPath ? 'page' : undefined"
            @click="emit('navigate')"
          >
            {{ nav.title }}
          </NuxtLink>
        </li>
      </ul>
      <BaseButton
        to="/contact"
        color="cta"
        size="xl"
        class="mt-6 w-full justify-center"
        @click="emit('navigate')"
      >
        Get in Contact
      </BaseButton>
    </div>
  </div>
</template>

<style scoped></style>
