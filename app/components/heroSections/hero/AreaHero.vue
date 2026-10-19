<script setup lang="ts">
import { heroImageUrl } from "@/utils/hero";
import siteMeta from "@/site";

// A smaller version of the home page hero for the town pages: same image,
// overlay and buttons, but shorter and with the town's own heading.
defineProps<{
  eyebrow: string;
  title: string;
}>();

const { phone, phoneDisplay } = siteMeta.business;
</script>
<template>
  <BackgroundImageWrapper
    :image-url="heroImageUrl"
    :alt="`Freshly striped commercial parking lot with crisp white lines, a Lot Standard Co project in ${eyebrow.replace('Parking Lot Striping in ', '')}, Arkansas`"
    class="relative mb-10 flex min-h-[22rem] items-center overflow-hidden rounded-3xl md:min-h-[26rem]"
  >
    <div
      class="absolute inset-0 bg-gradient-to-r from-tertiary-900/[.83] via-secondary-900/[.68] to-tertiary-900/[.83]"
    />
    <div class="relative z-10 w-full px-6 py-12 text-center lg:px-12">
      <div class="mx-auto md:w-10/12">
        <p
          class="mb-1 font-serif !text-sm font-bold uppercase text-gray-300 md:!text-base lg:!text-lg"
        >
          {{ eyebrow }}
        </p>
        <h1
          class="mb-8 capitalize leading-tight text-white !text-2xl md:!text-3xl lg:!text-4xl"
        >
          {{ title }}
        </h1>
        <div class="flex flex-wrap items-center justify-center gap-4">
          <BaseButton size="lg" color="cta" to="/contact">
            Request a Quote
          </BaseButton>
          <NuxtLink
            :to="`tel:${phone}`"
            class="inline-flex items-center gap-2 rounded-full px-5 py-3 font-medium text-white ring-2 ring-inset ring-white/70 transition-colors hover:bg-white/10"
          >
            <BaseIcon name="i-mdi-phone-outline" height="20px" />
            {{ phoneDisplay }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </BackgroundImageWrapper>
</template>
