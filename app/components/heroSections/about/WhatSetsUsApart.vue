<script setup lang="ts">
  // Shared by the About page and the home page. `onWhite` is for pages with a
  // white background, where the table needs a light grey fill.
  defineProps<{ onWhite?: boolean }>()

  const features = [
    {
      icon: 'i-mdi-file-document-check-outline',
      title: 'A Contract Model Built For You',
      description:
        'Annual lot care plans, one invoice across multiple properties, and automatic reminders and scheduling, so upkeep is planned instead of chased.',
    },
    {
      icon: 'i-mdi-shield-star-outline',
      title: 'Brand Presence & Importance',
      description:
        'Your lot is the first impression of your brand. We treat clean, consistent pavement and striping as part of how your business is seen, at every location.',
    },
    {
      icon: 'i-mdi-laser-pointer',
      title: 'Technological Innovation',
      description:
        'Digital site surveys, laser-guided layout, and photo documentation of every project bring precision and transparency to work that is usually eyeballed.',
    },
        {
      icon: 'i-mdi-medal-outline',
      title: 'Our Pledge',
      description:
        'We pledge to deliver the best work possible, and to make it right if we ever fall short of that.',
    },
  ]
</script>
<template>
  <section class="container mx-auto px-4 py-12">
    <div class="mx-auto mb-10 text-center lg:w-8/12">
      <p
        class="mb-2 text-sm font-medium uppercase text-primary-600 dark:text-primary-200 md:text-base lg:text-lg eyebrow-dash"
      >
        Why Lot Standard Co
      </p>
      <h2 class="capitalize mb-4 !text-2xl md:!text-3xl lg:!text-4xl">
        What Sets Us Apart
      </h2>
      <p>
        Anyone can paint lines. What separates us is how we think about the
        work and what we build around it.
      </p>
    </div>

    <!-- One list for every screen size, so the text is in the page once:
         phones get a swipeable row of cards (one point per screen); md and up
         get a table-like layout (text, then a "Lot Standard Co" and an "Others"
         column) built with a CSS grid. -->
    <div
      class="mx-auto md:overflow-hidden md:rounded-3xl lg:w-10/12"
      :class="
        onWhite
          ? 'md:bg-neutral-50/60 dark:md:bg-neutral-900/40'
          : 'md:bg-white/40 dark:md:bg-neutral-900/40'
      "
    >
      <!-- Column labels (desktop only); each row also says which column is which -->
      <div
        class="hidden grid-cols-[1fr_8rem_8rem] text-base font-bold md:grid"
        aria-hidden="true"
      >
        <span class="p-6">What We Offer That Others Don't</span>
        <span class="self-center p-2 text-center">Lot Standard Co</span>
        <span class="self-center p-2 text-center">Others</span>
      </div>
      <ul
        class="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-md:-mx-4 max-md:px-4 md:block md:overflow-visible md:pb-0"
        aria-label="What Lot Standard Co offers that others don't"
      >
        <li
          v-for="item in features"
          :key="item.title"
          class="max-md:w-[85%] max-md:shrink-0 max-md:snap-center max-md:rounded-3xl max-md:p-5 md:grid md:grid-cols-[1fr_8rem_8rem] md:items-center md:border-t md:border-neutral-500/15"
          :class="
            onWhite
              ? 'max-md:bg-neutral-50/60 dark:max-md:bg-neutral-900/40'
              : 'max-md:bg-white/40 dark:max-md:bg-neutral-900/40'
          "
        >
          <div class="flex flex-col md:flex-row md:gap-4 md:p-6">
            <BaseIcon
              :name="item.icon"
              height="32px"
              class="mb-3 shrink-0 !text-primary-600 md:mb-0 md:mt-1"
            />
            <div>
              <h3 class="!mb-2 !text-lg font-bold md:!mb-1">{{ item.title }}</h3>
              <p class="mb-4 text-sm md:mb-0 md:text-base">
                {{ item.description }}
              </p>
            </div>
          </div>
          <!-- Phones: a labelled yes/no footer on the card. md and up: the two
               cells of the "Lot Standard Co" and "Others" columns. -->
          <div
            class="flex gap-6 border-t border-neutral-500/15 pt-3 text-sm font-semibold md:contents"
          >
            <span class="flex items-center gap-1 md:justify-center md:p-2">
              <BaseIcon
                name="i-mdi-check-circle"
                height="28px"
                class="!text-green-600"
                aria-hidden="true"
              />
              <span class="md:sr-only">Lot Standard Co</span>
              <span class="sr-only">: yes</span>
            </span>
            <span class="flex items-center gap-1 md:justify-center md:p-2">
              <BaseIcon
                name="i-mdi-close-circle"
                height="28px"
                class="!text-red-500"
                aria-hidden="true"
              />
              <span class="md:sr-only">Others</span>
              <span class="sr-only">: no</span>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
