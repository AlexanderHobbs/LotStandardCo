<script setup lang="ts">
  // Not a page visitors reach: the build renders it, copies the HTML to
  // 404.html (see the prerender:done hook in nuxt.config.ts) and removes this
  // route's own folder, so unknown URLs get a real, noindex 404 page.
  definePageMeta({ title: 'Page Not Found', hidden: true })
  useSeoMeta({ robots: 'noindex, nofollow' })
</script>
<template>
  <ErrorMessage :is404="true" />
</template>
