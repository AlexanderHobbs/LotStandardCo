<script setup lang="ts">
  import siteMeta from '@/site'

  // Reusable "Request a Quote" call to action.
  //  band    - full-width strip (used above the footer)
  //  card    - rounded panel for the end of an article / content column
  //  compact - small card for sidebars
  withDefaults(
    defineProps<{
      title?: string
      text?: string
      variant?: 'band' | 'card' | 'compact'
    }>(),
    {
      title: 'Ready For A Fresh, Safe Parking Lot?',
      text: 'Get a free, no-obligation quote. Licensed & insured crews, and we reply within one business day.',
      variant: 'band',
    },
  )

  const { phone, phoneDisplay } = siteMeta.business
</script>

<template>
  <section
    v-if="variant === 'band'"
    class="bg-primary-600 px-4 py-14 text-center text-white dark:bg-primary-200 dark:text-primary-800"
  >
    <div class="container mx-auto lg:w-8/12">
      <h2 class="mb-3 !text-2xl text-white dark:text-primary-800 md:!text-3xl lg:!text-4xl">
        {{ title }}
      </h2>
      <p class="mb-8 text-primary-100 dark:text-primary-700">{{ text }}</p>
      <div class="flex flex-wrap items-center justify-center gap-4">
        <QuoteButton size="xl" />
        <NuxtLink
          :to="`tel:${phone}`"
          class="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium ring-2 ring-inset ring-white/70 transition-colors duration-300 ease-in-out hover:bg-white/10 dark:ring-primary-800/70 dark:hover:bg-primary-800/10"
        >
          <BaseIcon name="i-mdi-phone-outline" height="20px" />
          Call {{ phoneDisplay }}
        </NuxtLink>
      </div>
    </div>
  </section>

  <div
    v-else-if="variant === 'card'"
    class="my-10 rounded-3xl bg-primary-600 p-8 text-center text-white dark:bg-primary-200 dark:text-primary-800"
  >
    <h2 class="mb-2 !text-xl text-white dark:text-primary-800 md:!text-2xl">{{ title }}</h2>
    <p class="mb-6 text-primary-100 dark:text-primary-700">{{ text }}</p>
    <div class="flex flex-wrap items-center justify-center gap-3">
      <QuoteButton size="lg" />
      <NuxtLink
        :to="`tel:${phone}`"
        class="inline-flex items-center gap-2 rounded-full px-4 py-2 font-medium ring-2 ring-inset ring-white/70 transition-colors duration-300 ease-in-out hover:bg-white/10 dark:ring-primary-800/70 dark:hover:bg-primary-800/10"
      >
        <BaseIcon name="i-mdi-phone-outline" height="18px" />
        {{ phoneDisplay }}
      </NuxtLink>
    </div>
  </div>

  <div v-else class="rounded-2xl bg-primary-600 p-5 text-center text-white dark:bg-primary-200 dark:text-primary-800">
    <p class="mb-3 font-bold">{{ title }}</p>
    <QuoteButton size="md" block />
  </div>
</template>
