<script setup lang="ts">
  definePageMeta({
    title: 'Our Work',
    description:
      'Photos of our recent line striping, sealcoating, and pavement maintenance projects.',
    navOrder: 3,
    type: 'primary',
    icon: 'i-mdi-image-multiple',
    tags: ['parking lot striping photos', 'before and after pavement work'],
  })

  const galleryImages = [
    {
      src: 'https://placehold.co/600x450/213386/ffffff?text=Freshly+Striped+Lot',
      alt: 'Freshly striped retail parking lot',
    },
    {
      src: 'https://placehold.co/600x450/213386/ffffff?text=Sealcoating',
      alt: 'Sealcoating in progress',
    },
    {
      src: 'https://placehold.co/600x450/213386/ffffff?text=ADA+Markings',
      alt: 'ADA-compliant accessible parking markings',
    },
    {
      src: 'https://placehold.co/600x450/213386/ffffff?text=New+Lot+Layout',
      alt: 'Striping crew laying out a new lot',
    },
    {
      src: 'https://placehold.co/600x450/213386/ffffff?text=Warehouse+Floor+Marking',
      alt: 'Marked warehouse floor with aisle lines and safety zones',
    },
    {
      src: 'https://placehold.co/600x450/213386/ffffff?text=Fire+Lane+Markings',
      alt: 'Fire lane and directional arrow markings',
    },
    {
      src: 'https://placehold.co/600x450/213386/ffffff?text=Sealcoated+Lot',
      alt: 'Freshly sealcoated commercial lot',
    },
    {
      src: 'https://placehold.co/600x450/213386/ffffff?text=Signage',
      alt: 'New parking lot signage installation',
    },
    {
      src: 'https://placehold.co/600x450/213386/ffffff?text=Safety+Markings',
      alt: 'Crosswalk and safety markings on a commercial lot',
    },
  ]
</script>
<template>
  <div
    class="bg-primary-100 text-primary-900 dark:bg-primary-700 dark:text-primary-100"
  >
    <section class="container mx-auto pb-12 px-4">
      <BackgroundImageWrapper
        class="rounded-3xl"
        alt="Recent parking lot line striping and pavement maintenance projects by Lot Standard Co"
      >
        <div class="lg:px-12 md:py-24 pb-6 pt-40 px-6 relative rounded-3xl">
          <h4
            class="font-bold font-serif mb-1 text-secondary-600 dark:text-secondary-200 uppercase text-center"
          >
            Our Work
          </h4>
          <h1 class="capitalize leading-tight mb-2 text-white text-center">
            Recent Striping & Pavement Projects
          </h1>
        </div>
      </BackgroundImageWrapper>
    </section>
    <div class="container mx-auto pb-16 px-4">
      <div class="-mx-2 flex flex-wrap">
        <div
          v-for="(image, index) in galleryImages"
          :key="index"
          class="p-2 w-1/2 sm:w-1/3 lg:w-1/4"
        >
          <div class="block hover:opacity-75 overflow-hidden rounded-xl">
            <NuxtLink :to="image.src" target="_blank">
              <NuxtImg
                :src="image.src"
                :alt="image.alt"
                class="aspect-[4/3] object-cover w-full"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
