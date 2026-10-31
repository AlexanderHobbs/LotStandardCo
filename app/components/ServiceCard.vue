<script setup lang="ts">
  import type { Service } from '~~/types/services'
  // headingTag: h3 where the cards sit under a section h2 (home, town pages),
  // h2 on the services page where they sit directly under the h1.
  const { slug, name, shortDescription, image, imageAlt, icon, headingTag = 'h3' } =
    defineProps<Service & { headingTag?: 'h2' | 'h3' }>()
</script>
<template>
  <NuxtLink
    class="group flex w-full md:w-6/12 lg:w-4/12 focus-visible:outline-none"
    :to="`/services/${slug}`"
  >
    <!-- Image fills the whole card. Only the title shows until the card is
         hovered or focused; the text stays in the DOM (opacity, not display)
         so crawlers and screen readers still get it. Hover styles only apply
         on devices that can really hover, so touch screens keep the base view
         and a tap goes straight to the service page (no sticky-hover double tap). -->
    <div
      class="relative m-3 aspect-[4/5] w-full overflow-hidden rounded-3xl bg-neutral-900 text-center text-white shadow-xl group-focus-visible:ring-4 group-focus-visible:ring-secondary-400"
    >
      <NuxtImg
        class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 [@media(hover:hover)]:group-hover:scale-105"
        :alt="imageAlt || `${name} for commercial parking lots in Arkansas`"
        :src="image"
        width="800"
        height="1000"
        format="webp"
        fit="cover"
        loading="lazy"
      />
      <!-- Light gradient keeps the title readable; goes dark on hover -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-colors duration-300 [@media(hover:hover)]:group-hover:bg-black/80 group-focus-visible:bg-black/80"
      />
      <div class="absolute inset-0 flex flex-col items-center justify-end p-6">
        <BaseIcon
          v-if="icon"
          :name="icon"
          height="32px"
          class="mb-2 mx-auto !text-white"
        />
        <component
          :is="headingTag"
          class="font-bold !text-white !text-lg md:!text-xl lg:!text-2xl"
          >{{ name }}</component
        >
        <div
          class="grid grid-rows-[0fr] opacity-0 transition-all duration-300 [@media(hover:hover)]:group-hover:grid-rows-[1fr] [@media(hover:hover)]:group-hover:opacity-100 group-focus-visible:grid-rows-[1fr] group-focus-visible:opacity-100"
        >
          <div class="overflow-hidden">
            <p class="mt-3 mb-5 text-sm text-neutral-100">
              {{ shortDescription }}
            </p>
            <BaseButton size="lg"
              ><span>Learn More</span>
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
  </NuxtLink>
</template>
<style scoped></style>
