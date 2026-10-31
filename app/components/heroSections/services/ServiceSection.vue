<script setup lang="ts">
import ServiceListLite from '~/components/heroSections/services/ServiceListLite.vue'

// plain: no branded image, overlays or streaks; the section takes the page's own
// grey backdrop and text colours instead (town pages).
defineProps<{ plain?: boolean }>()
</script>
<template>
  <div
    class="relative isolate overflow-hidden"
    :class="plain && 'bg-primary-100 dark:bg-primary-700'"
  >
    <NuxtImg
      v-if="!plain"
      src="/images/brand-palette-background.png"
      width="1368"
      height="2688"
      format="webp"
      sizes="100vw"
      loading="lazy"
      class="absolute inset-0 -z-30 h-full w-full object-fill"
      alt=""
      aria-hidden="true"
    />
    <div
      v-if="!plain"
      class="absolute inset-0 -z-20 bg-gradient-to-r from-primary-950/30 via-primary-950/15 to-transparent"
      aria-hidden="true"
    />
    <!-- Tints the bright bottom-right corner of the image back to the brand colour -->
    <div
      v-if="!plain"
      class="absolute inset-0 -z-20 bg-gradient-to-tl from-primary-600/50 via-primary-600/15 to-transparent"
      aria-hidden="true"
    />
    <!-- Diagonal streaks, visible at every breakpoint -->
    <div v-if="!plain" class="absolute inset-0 -z-10" aria-hidden="true">
      <div
        class="absolute -left-24 top-0 h-full w-40 -skew-x-12 bg-gradient-to-b from-primary-400/50 to-primary-400/0 md:w-56"
      />
      <div
        class="absolute left-32 top-0 h-full w-6 -skew-x-12 bg-white/15 md:left-52"
      />
      <div
        class="absolute left-44 top-0 h-full w-2 -skew-x-12 bg-white/25 md:left-64"
      />
    </div>
    <div class="pb-24 pt-12">
      <div class="container mx-auto px-4 relative">
        <div
          class="-mx-4 flex flex-col flex-wrap items-center justify-center mb-4"
        >
          <div
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
            class="pb-4 text-center w-full"
          >
            <p
              class="text-sm md:text-base lg:text-lg font-medium mb-2 uppercase"
              :class="plain ? 'text-primary-600 dark:text-primary-200' : 'text-primary-100'"
            >
              Our Services
            </p>
            <h2
              class="capitalize !text-2xl md:!text-3xl lg:!text-4xl"
              :class="!plain && '!text-white'"
            >
              Everything Your Lot Needs. One Trusted Crew
            </h2>
            <p class="mb-4" :class="!plain && 'text-white'">
              From fresh line striping to sealcoating and ADA compliance, we
              keep your parking lot safe, sharp, and code-compliant.
            </p>
          </div>
        </div>
        <ServiceListLite />
        <div
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300, ease: 'easeOut' } }"
          class="mt-8 flex justify-center"
        >
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
    </div>
  </div>
</template>
<style scoped></style>
