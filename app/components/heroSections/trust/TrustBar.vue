<script setup lang="ts">
// Shown on the home page and all 12 town pages.
const google = {
  // MOCK: placeholder rating, not from the Google Business Profile. Replace
  // with the real rating, or hide the rating block below until there are
  // reviews. The template always draws 5 full stars, whatever this value is.
  rating: 5.0,
};

// CONFIRM: these are real offers only if every one is in your contracts
// (same claims as "What Sets Us Apart" on the About page).
const USP = [
  { name: "Annual Lot Care Plan" },
  { name: "Multi-property coverage and single invoice" },
  { name: "Automatic reminders and scheduling" },
  { name: "Direct Owner Communication" },
];
</script>
<template>
  <section class="container mx-auto mt-2 px-4 pb-8">
    <!-- Hairlines fade to transparent at both ends so they melt into the page -->
    <div
      class="h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700"
      aria-hidden="true"
    />
    <div
      class="flex flex-col items-center justify-center gap-x-10 gap-y-3 py-4 text-sm lg:flex-row lg:flex-nowrap lg:gap-x-5 lg:text-xs xl:gap-x-10 xl:text-sm"
    >
      <!-- Google rating -->
      <div class="flex shrink-0 items-center gap-2 whitespace-nowrap">
        <BaseIcon name="i-mdi-google" height="18px" />
        <div
          class="flex items-center"
          role="img"
          :aria-label="`${google.rating} out of 5 stars`"
        >
          <BaseIcon
            v-for="n in 5"
            :key="n"
            name="i-mdi-star"
            height="16px"
            class="!text-yellow-400"
          />
        </div>
        <span>
          <strong>{{ google.rating.toFixed(1) }}</strong>
        </span>
      </div>

      <span
        class="hidden h-6 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent dark:via-neutral-700 lg:block"
        aria-hidden="true"
      />

      <!-- Trusted by -->
      <div
        class="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-neutral-500 lg:flex-nowrap lg:gap-x-4 xl:gap-x-6 dark:text-neutral-400"
      >
        <span
          v-for="usp in USP"
          :key="usp.name"
          class="flex items-center gap-1.5 whitespace-nowrap font-medium"
        >
          <BaseIcon
            name="i-mdi-check-bold"
            height="16px"
            class="!text-success-600"
          />
          {{ usp.name }}
        </span>
      </div>
    </div>
    <div
      class="h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700"
      aria-hidden="true"
    />
  </section>
</template>
<style scoped></style>
