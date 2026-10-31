<script setup lang="ts">
  // Navbar contact button: the same light grey as the quote buttons (white on
  // grey page backdrops), with the striping yellow along its rounded left edge.
  withDefaults(
    defineProps<{ to?: string; background?: 'default' | 'white' }>(),
    { to: '/contact', background: 'default' },
  )
</script>
<template>
  <NuxtLink
    :to="to"
    class="inline-flex h-9 select-none items-center whitespace-nowrap rounded-xl border-l-[6px] border-accent-400 pl-4 pr-5 text-sm font-bold text-tertiary-900 transition-[filter] duration-300 hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
    :class="background === 'white' ? 'bg-white' : 'bg-[#e9edf1]'"
  >
    <slot>Get in Contact</slot>
  </NuxtLink>
</template>
