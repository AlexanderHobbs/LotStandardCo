<script setup lang="ts">
  import CallToActionCard from './CallToActionCard.vue'

  const callToActions = [
    {
      img: 'https://placehold.co/900x1000/1f2124/1f2124',
      action: 'Our Services',
      to: '/services',
    },
    {
      img: 'https://placehold.co/900x1000/2f3033/2f3033',
      action: 'View Our Work',
      to: '/our-work',
    },
    {
      img: 'https://placehold.co/900x1000/213386/213386',
      action: 'Get a Quote',
      to: '/contact',
    },
  ]
</script>
<template>
  <section class="container mx-auto px-4 py-12">
    <div>
      <p class="text-sm md:text-base lg:text-lg font-medium mb-2 text-primary-600 dark:text-primary-200 text-center uppercase">
        Get Started
      </p>
      <h2 class="capitalize mt-3 text-center !text-2xl md:!text-3xl lg:!text-4xl">
        Everything Your Parking Lot Needs
      </h2>
      <p class="mt-4 text-center">
        From fresh striping to a free on-site quote, we make it easy to keep
        your lot safe and looking sharp.
      </p>
    </div>
    <div class="-mx-4 flex flex-wrap justify-center mt-12">
      <CallToActionCard
        v-for="(callToAction, index) in callToActions"
        :key="index"
        :action="callToAction.action"
        :img="callToAction.img"
        :to="callToAction.to"
      />
    </div>
  </section>
</template>
<style scoped></style>
