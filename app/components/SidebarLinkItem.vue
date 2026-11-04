<script setup lang="ts">
  import type { SideBarItem } from '~~/types'

  const props = defineProps<{
    item: SideBarItem
    header?: boolean
    table?: boolean
    // Forced highlight (e.g. scroll-spy in the table of contents)
    highlight?: boolean
  }>()

  const link = computed(() => {
    const hash = props.item.link && joinUrl(`#`, props.item.link)
    return {
      path: '',
      hash,
    }
  })

  const active = computed(() => {
    // In the table of contents the scroll position drives the highlight, so a
    // clicked hash doesn't stay lit after the reader scrolls on.
    if (props.table) return !!props.highlight
    return useRoute().hash === link.value.hash
  })
</script>
<template>
  <NuxtLink
    v-if="link.hash"
    :to="link"
    :class="[
      active ? 'font-semibold' : 'font-normal',
      highlight ? 'underline underline-offset-4' : '',
    ]"
    class="mt-2 text-primary-600 dark:text-primary-200 pl-1 text-base"
    >{{ item.text }}
  </NuxtLink>
  <span v-else class="text-primary-600 dark:text-primary-200">
    {{ item.text }}
  </span>
</template>
<style scoped></style>
