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
        class="absolute inset-0 bg-gradient-to-r from-tertiary-900/[.83] via-secondary-900/[.68] to-tertiary-900/[.83]"
      />
      <div class="relative z-10 w-full">
        <div class="lg:px-12 px-6 relative rounded-3xl">
          <div class="-mx-4 flex flex-wrap items-center justify-center space-y-6 lg:space-y-0">
            <div class="mx-auto px-4 w-full text-center md:w-11/12 xl:w-9/12">
              <p class="font-bold font-serif mb-1 !text-base md:!text-lg lg:!text-xl text-gray-300 uppercase">
                Setting the standard for Arkansas
              </p>
              <h1 class="capitalize leading-tight mb-10 !text-3xl md:!text-4xl lg:!text-5xl text-white">
                Professional Parking Lot Striping & Pavement Maintenance
              </h1>
              <div class="flex flex-wrap items-center justify-center gap-4">
                <BaseButton
                  size="xl"
                  color="cta"
                  label="Request a Quote"
                  to="/contact"
                  class="h-16"
                >
                  <div class="inline-block ml-1 p-1.5 text-lg">
                    Request a Quote
                  </div>
                </BaseButton>
                <NuxtLink
                  :to="`tel:${phone}`"
                  class="inline-flex items-center gap-2 h-16 rounded-full px-6 text-lg font-medium text-white ring-2 ring-inset ring-white/70 transition-colors hover:bg-white/10"
                >
                  <BaseIcon name="i-mdi-phone-outline" height="22px" />
                  {{ phoneDisplay }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImageWrapper>
  </section>
</template>
<style scoped></style>
