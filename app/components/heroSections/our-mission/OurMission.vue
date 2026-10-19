<script setup lang="ts">
  import LogoBullet from '@/components/LogoBullet.vue'
  const points = [
    'Free, no-obligation quotes with a reply within one business day',
    'Licensed and insured crews on every job',
    'Every project documented, so you always know what was done',
    'Flexible scheduling, including off-hours, to keep your business open',
  ]
</script>
<template>
  <div class="container mx-auto px-4 py-12 relative">
    <div class="-mx-4 flex flex-wrap items-center">
      <div class="p-4 w-full lg:w-4/12">
        <NuxtImg
          src="/images/mission.jpg"
          width="800"
          height="1000"
          format="webp"
          fit="outside"
          loading="lazy"
          class="aspect-[4/5] rounded-3xl w-full object-cover"
          alt="Aerial view of a freshly sealcoated and striped commercial parking lot with crisp white stall lines"
        />
      </div>
      <div class="mx-auto p-4 w-full lg:w-6/12">
        <p class="text-sm md:text-base lg:text-lg font-medium mb-2 mb-2 text-primary-600 dark:text-primary-200 uppercase">
          Why Choose Lot Standard Co
        </p>
        <h2 class="capitalize mb-2 !text-2xl md:!text-3xl lg:!text-4xl">We aim for Perfection</h2>
        <p class="mb-6">
          At Lot Standard Co understand how important prestige work paired with excellent communication is.
          So we operate with a focus on building relationships, not getting one time jobs. <br><br>
          We pride ourselves on open communication, dependable scheduling, and quality work.
          Through the use frontier technology we keep every project documented and every one informed, and we aim to
          serve as a long-term partner for the properties you manage. Licensed, insured, and locally owned.
        </p>
        <ul class="mb-8 space-y-3 text-neutral-700 dark:text-neutral-200">
          <li v-for="point in points" :key="point">
            <LogoBullet>{{ point }}</LogoBullet>
          </li>
        </ul>
        <BaseButton size="xl" to="/about"> Learn More </BaseButton>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
