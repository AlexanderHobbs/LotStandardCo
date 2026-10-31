<script setup lang="ts">
  // Navbar contact button: the site's QuoteButton (grey body, dot-matrix arrow
  // tab) at its small size, so it matches the "Request a Quote" CTAs.
  withDefaults(
    defineProps<{ to?: string; background?: 'default' | 'white' }>(),
    { to: '/contact', background: 'default' },
  )
</script>
<template>
  <QuoteButton :to="to" size="sm" :background="background">
    <slot>Get in Contact</slot>
  </QuoteButton>
</template>
