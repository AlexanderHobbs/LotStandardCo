<script setup lang="ts">
  // Service data lives in one place: app/data/services.json (via useServices).
  const { allServices: services } = useServices()
</script>
<template>
  <div>
    <div class="container mx-auto px-4 relative">
      <div class="flex flex-wrap -mx-4 justify-center">
        <ServiceCard
          v-for="(service, index) in services"
          v-bind="service"
          :key="index"
          heading-tag="h2"
        />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
