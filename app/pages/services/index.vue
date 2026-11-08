<script setup lang="ts">
import ServiceListLite from "~/components/heroSections/services/ServiceListLite.vue";

definePageMeta({
  title: "Parking Lot Services in Arkansas",
  description:
    "Sealcoating, crack filling, pothole repair, restriping, new layouts and ADA striping, and full repair-seal-stripe packages for lots and driveways.",
  navOrder: 2,
  type: "primary",
  icon: "i-mdi-road-variant",
  tags: [
    "sealcoating",
    "crack filling",
    "patching and potholes",
    "restriping",
    "new layout and ADA striping",
    "full package",
    "residential driveway",
  ],
});
</script>

<template>
  <div
    class="bg-primary-100 py-12 text-primary-900 dark:bg-primary-700 dark:text-primary-100"
  >
    <div class="flex flex-col items-center">
      <div class="w-full px-4 text-center lg:w-8/12">
        <p class="mb-3 text-sm font-medium md:text-base lg:text-lg uppercase eyebrow-dash">
          Our Services
        </p>
        <h1 class="mb-6 text-2xl capitalize md:text-3xl lg:text-4xl">
          Parking Lot Services in Arkansas
        </h1>
        <p class="mx-auto mb-8 max-w-3xl leading-relaxed">
          From crack filling and pothole repair to sealcoating, restriping, and
          ADA-compliant layouts, we keep parking lots safe, sharp, and
          code-compliant, and we handle residential driveways too. Every job is
          completed by licensed, insured crews using durable materials built to
          withstand daily traffic. Browse our full range of services below, or
          <NuxtLink to="/contact/"
            >request a free quote</NuxtLink
          >
          for your property.
        </p>
        <QuoteButton size="xl" background="white" />
      </div>
    </div>

    <div class="container mx-auto px-4 pt-14">
      <ServiceListLite heading-tag="h2" />
    </div>
  </div>
</template>
