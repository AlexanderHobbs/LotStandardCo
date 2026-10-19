<script setup lang="ts">
// Service data lives in one place: app/data/services.json (via useServices).
const { allServices: services } = useServices()
</script>
<template>
  <div class="bg-primary-100 dark:bg-primary-700">
    <div class="pb-24 pt-12">
      <div class="container mx-auto px-4 relative">
        <div
          class="-mx-4 flex flex-col flex-wrap items-center justify-center mb-4"
        >
          <div class="px-4 text-center w-full">
            <p class="text-sm md:text-base lg:text-lg font-medium mb-2 text-primary-100 dark:text-primary-700 uppercase">
              Our Services
            </p>
            <h2 class="capitalize !text-2xl md:!text-3xl lg:!text-4xl">
              Everything Your Lot Needs. One Trusted Crew
            </h2>
            <p class="mb-4">
              From fresh line striping to sealcoating and ADA compliance, we
              keep your parking lot safe, sharp, and code-compliant.
            </p>
          </div>
          <div class="px-4 text-center w-full">
            <BaseButton size="xl" to="/services"
              ><span>View All Services</span>
              <BaseIcon
                name="i-mdi-arrow-right"
                height="20px"
                class="!text-white md:ml-1.5"
              />
            </BaseButton>
          </div>
        </div>
        <div class="flex flex-wrap -mx-4 justify-center">
          <ServiceCard
            v-for="(service, index) in services"
            :key="index"
            v-bind="service"
          />
        </div>
        <div class="mt-8 text-center">
          <BaseButton size="xl" color="cta" to="/contact">Request a Quote</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
