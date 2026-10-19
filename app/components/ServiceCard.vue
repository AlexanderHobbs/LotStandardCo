<script setup lang="ts">
  import type { Service } from '~~/types/services'
  // headingTag: h3 where the cards sit under a section h2 (home, town pages),
  // h2 on the services page where they sit directly under the h1.
  const { slug, name, shortDescription, image, imageAlt, icon, headingTag = 'h3' } =
    defineProps<Service & { headingTag?: 'h2' | 'h3' }>()
</script>
<template>
  <NuxtLink class="flex w-full md:w-6/12 lg:w-4/12" :to="`/services/${slug}`">
    <div
      class="m-3 flex w-full flex-col items-center text-neutral-900 dark:text-neutral-100 bg-neutral-50 dark:bg-neutral-900 px-6 py-12 rounded-3xl shadow-xl text-center"
    >
      <NuxtImg
        class="aspect-[4/3] mb-4 mx-auto object-cover rounded-xl w-full sm:w-9/12"
        :alt="imageAlt || `${name} for commercial parking lots in Arkansas`"
        :src="image"
        width="800"
        height="600"
        format="webp"
        fit="outside"
        loading="lazy"
      />
      <BaseIcon
        v-if="icon"
        :name="icon"
        height="32px"
        class="mb-2 mx-auto !text-secondary-600"
      />
      <component :is="headingTag" class="font-bold mb-2 !text-base md:!text-lg lg:!text-xl">{{ name }}</component>
      <p class="mb-6 text-secondary-600 dark:text-secondary-200 text-sm">
        {{ shortDescription }}
      </p>
      <BaseButton size="lg" class="mt-auto"
        ><span>Learn More</span>
        <BaseIcon
          name="i-mdi-arrow-right"
          height="20px"
          class="!text-white md:ml-1.5"
        />
      </BaseButton>
    </div>
  </NuxtLink>
</template>
<style scoped></style>
