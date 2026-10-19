<script setup lang="ts">
  definePageMeta({
    title: "Parking Lot Striping Services in Arkansas",
    description:
      'Professional line striping, sealcoating, ADA-compliant marking, warehouse floor marking, safety markings, and signage for commercial parking lots.',
    navOrder: 2,
    type: 'primary',
    icon: 'i-mdi-road-variant',
    tags: [
      'line striping',
      'sealcoating',
      'ADA compliance marking',
      'warehouse floor marking',
      'safety markings',
      'signage installation',
    ],
  })
</script>

<template>
  <div
    class="bg-primary-100 py-12 text-primary-900 dark:bg-primary-700 dark:text-primary-100"
  >
    <div class="flex flex-col items-center">
      <div class="w-full px-4 text-center lg:w-8/12">
        <p class="mb-2 text-sm font-medium md:text-base lg:text-lg uppercase">Our Services</p>
        <h1 class="text-2xl capitalize md:text-3xl lg:text-4xl">
          Professional Pavement Marking & Maintenance
        </h1>
        <p class="mb-4">
          From fresh line striping to sealcoating, ADA compliance, and warehouse
          floor marking, we keep commercial parking lots safe, sharp, and
          code-compliant. Every job is completed by licensed, insured crews
          using durable, fast-drying materials built to withstand daily traffic.
          Browse our full range of services below, or
          <NuxtLink to="/contact" class="underline"
            >request a free quote</NuxtLink
          >
          for your property.
        </p>
        <BaseButton size="xl" to="/contact" color="cta">
          Request a Quote
        </BaseButton>
      </div>
    </div>

    <div class="relative mx-auto px-4 pt-8">
      <div class="-mx-4 mb-4 flex flex-wrap items-center justify-center">
        <ServiceList />
      </div>
    </div>
  </div>
</template>
