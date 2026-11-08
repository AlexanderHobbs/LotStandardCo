<script setup lang="ts">
import { heroImageUrl, heroImageModifiers } from "@/utils/hero";
import siteMeta from "@/site";

const { phone, phoneDisplay } = siteMeta.business;

// The hero is the largest contentful paint element, so ask the browser to fetch
// it right away instead of waiting for the CSS background to be discovered.
const heroImageSrc = useImage()(heroImageUrl, heroImageModifiers);
useHead({
  link: [
    { rel: "preload", as: "image", href: heroImageSrc, fetchpriority: "high" },
  ],
});
</script>
<template>
  <section
    class="container mx-auto flex min-h-[calc(100svh-6rem)] flex-col px-4"
  >
    <BackgroundImageWrapper
      :image-url="heroImageUrl"
      alt="Freshly striped commercial parking lot with crisp white lines, a Lot Standard Co project in Arkansas"
      class="relative my-3 flex flex-1 items-center overflow-hidden rounded-3xl"
    >
      <div
        class="absolute inset-0 bg-gradient-to-r from-tertiary-900/[.9] via-tertiary-900/[.7] to-secondary-900/[.5]"
      />
      <div class="relative z-10 w-full px-6 py-12 lg:px-12 lg:py-16">
        <div class="mx-auto max-w-4xl text-center">
          <p
            class="mx-auto mb-6 flex w-fit items-center gap-3 rounded-full bg-white/10 px-5 py-2.5 font-bold font-serif text-sm tracking-widest text-gray-200 uppercase ring-1 ring-inset ring-white/25 backdrop-blur-sm md:text-base"
          >
            Setting the standard for Arkansas
          </p>
          <h1
            class="capitalize leading-tight mb-8 !text-3xl md:!text-4xl lg:!text-5xl text-white"
          >
            Parking Lot Striping &amp; Maintenance in the River Valley &amp; Northwest Arkansas
          </h1>
          <!-- zoom: both buttons 5% smaller, padding and text included -->
          <div class="flex flex-wrap items-center justify-center gap-4 [zoom:0.95]">
            <QuoteButton size="xl" class="![--h:4rem]" />
            <NuxtLink
              :to="`tel:${phone}`"
              class="inline-flex items-center gap-2 h-16 rounded-full bg-white/10 px-6 text-lg font-medium text-white ring-2 ring-inset ring-white/70 backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <BaseIcon name="i-mdi-phone-outline" height="22px" />
              {{ phoneDisplay }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </BackgroundImageWrapper>
  </section>
</template>
<style scoped></style>
