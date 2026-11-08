<script setup lang="ts">
  // Visible breadcrumb trail. The last item is the current page (no link). The
  // matching BreadcrumbList structured data is added by each page.
  defineProps<{ items: { name: string; to?: string }[] }>()
</script>
<template>
  <nav aria-label="Breadcrumb" class="mb-6 text-sm">
    <template v-for="(item, i) in items" :key="item.name">
      <span v-if="i > 0" class="mx-2" aria-hidden="true">/</span>
      <NuxtLink v-if="item.to" :to="item.to">{{ item.name }}</NuxtLink>
      <span v-else aria-current="page">{{ item.name }}</span>
    </template>
  </nav>
</template>
