<script setup lang="ts">
 const steps = [
    {
      icon: 'i-mdi-clipboard-text-outline',
      title: 'We Get On The Same Page',
      description:
        "Tell us about your property and what you need. You'll get a free, no-obligation price range on your first call.",
    },
    {
      icon: 'i-mdi-paper',
      title: 'We Assess And Quote',
      description:
        "We survey your lot in person or from above and send a digital quote with a clear written scope and no hidden fees, so you know the plan and the price before work begins.",
    },
    {
      icon: 'i-mdi-calendar-check-outline',
      title: 'We Schedule Around You',
      description:
        'We work early mornings, evenings, or weekends to minimize disruption to your business or residents.',
    },
    {
      icon: 'i-mdi-road-variant',
      title: 'We Get It Done',
      description:
        'Our team follows the Lot Standard Playbook to prep, repair, seal, or stripe your lot, and keeps you updated until it is back in service.',
    },
    {
      icon: 'i-mdi-check-decagram-outline',
      title: 'Final Walkthrough & Warranty',
      description:
        'We walk the finished lot with you, document the results, and back the work with a written warranty and satisfaction guarantee.',
    },
  ]

  // 'white' for pages with a grey backdrop (the town pages): white cards and a
  // white quote button instead of the default off-white / light grey.
  defineProps<{ background?: 'default' | 'white' }>()
</script>
<template>
  <section class="container mx-auto px-4 pb-10 pt-4 md:pb-14 md:pt-6">
    <div class="mx-auto text-center w-full lg:w-7/12">
      <p class="text-sm md:text-base lg:text-lg font-medium mb-2 text-primary-600 dark:text-primary-200 uppercase eyebrow-dash">
        How It Works
      </p>
      <h2 class="capitalize mt-3 !text-2xl md:!text-3xl lg:!text-4xl">From Quote To Completion</h2>
    </div>
    <!-- Below lg: 1-2 columns. From lg: a 6-column grid with three steps on the
         first row and two (centred) on the second. -->
    <div class="-mx-4 flex flex-wrap mt-10 lg:grid lg:grid-cols-6">
      <div
        v-for="(step, index) in steps"
        :key="index"
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { duration: 600, delay: index * 200, ease: 'easeOut' },
        }"
        class="p-4 pt-10 w-full sm:w-1/2 lg:w-auto lg:col-span-2"
        :class="index === 3 ? 'lg:col-start-2' : ''"
      >
        <div
          class="relative h-full rounded-3xl p-8 text-center dark:bg-neutral-900"
          :class="background === 'white' ? 'bg-white' : 'bg-neutral-50'"
        >
          <!-- Number badge on the card's top edge, halfway between the left corner and the centre, with a soft drop shadow. -->
          <div
            class="absolute left-1/4 top-0 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary-600 text-white shadow-[0_10px_16px_-2px_rgba(0,0,0,0.3)]"
          >
            <span class="font-bold">{{ index + 1 }}</span>
          </div>
          <BaseIcon
            :name="step.icon"
            height="32px"
            class="mb-3 mx-auto !text-primary-600"
          />
          <h3 class="font-bold mb-2 !text-base md:!text-lg lg:!text-xl">{{ step.title }}</h3>
          <p class="text-sm">{{ step.description }}</p>
        </div>
      </div>
    </div>
    <div class="mt-12 text-center">
      <QuoteButton size="xl" :background="background" />
    </div>
  </section>
</template>
<style scoped></style>
