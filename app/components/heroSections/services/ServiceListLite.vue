<script setup lang="ts">
// Just the list of service cards. Service data lives in one place:
// app/data/services.json (via useServices). The section title, backdrop and
// "View All Services" button live in ServiceSection.vue.
// headingTag: h3 where the cards sit under a section h2 (home page); the
// /services/ page has no h2 above them, so it passes h2.
defineProps<{ headingTag?: 'h2' | 'h3' }>()
const { allServices: services } = useServices()
</script>
<template>
  <!-- Mobile: one swipeable row of cards. md and up: the wrapping grid. -->
  <div
    v-motion
    :initial="{ opacity: 0, y: 40 }"
    :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 150, ease: 'easeOut' } }"
    class="-mx-4 flex snap-x snap-mandatory flex-nowrap overflow-x-auto px-4 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:snap-none md:flex-wrap md:justify-center md:overflow-visible md:py-0"
  >
    <ServiceCard
      v-for="(service, index) in services"
      :key="index"
      v-bind="service"
      :heading-tag="headingTag"
      class="max-md:w-[80%] max-md:shrink-0 max-md:snap-center"
    />
  </div>
</template>
<style scoped></style>
