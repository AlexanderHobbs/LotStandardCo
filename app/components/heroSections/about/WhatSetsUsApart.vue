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
        'Your lot is the first impression of your brand. We treat clean, consistent pavement and signage as part of how your business is seen, at every location.',
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
        class="mb-2 text-sm font-medium uppercase text-primary-600 dark:text-primary-200 md:text-base lg:text-lg"
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

    <!-- Mobile: swipeable cards, one point per screen -->
    <ul
      class="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      aria-label="What Lot Standard Co offers that others don't"
    >
      <li
        v-for="item in features"
        :key="item.title"
        class="w-[85%] shrink-0 snap-center rounded-3xl p-5 dark:bg-neutral-900/40"
        :class="onWhite ? 'bg-neutral-50/60' : 'bg-white/40'"
      >
        <BaseIcon
          :name="item.icon"
          height="32px"
          class="mb-3 !text-primary-600"
        />
        <h3 class="!mb-2 !text-lg font-bold">{{ item.title }}</h3>
        <p class="mb-4 text-sm">{{ item.description }}</p>
        <div
          class="flex gap-6 border-t border-neutral-500/15 pt-3 text-sm font-semibold"
        >
          <span class="flex items-center gap-1">
            <BaseIcon
              name="i-mdi-check-circle"
              height="24px"
              class="!text-green-600"
            />
            Lot Standard Co
          </span>
          <span class="flex items-center gap-1">
            <BaseIcon
              name="i-mdi-close-circle"
              height="24px"
              class="!text-red-500"
            />
            Others
          </span>
        </div>
      </li>
    </ul>

    <div
      class="mx-auto hidden overflow-hidden rounded-3xl dark:bg-neutral-900/40 md:block lg:w-10/12"
      :class="onWhite ? 'bg-neutral-50/60' : 'bg-white/40'"
    >
      <table class="w-full border-collapse text-left">
        <caption class="sr-only">
          What Lot Standard Co offers that others don't
        </caption>
        <thead>
          <tr class="text-sm font-bold md:text-base">
            <th scope="col" class="p-4 md:p-6">What We Offer That Others Don't</th>
            <th scope="col" class="w-20 p-2 text-center md:w-32">
              Lot Standard Co
            </th>
            <th scope="col" class="w-20 p-2 text-center md:w-32">Others</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in features"
            :key="item.title"
            class="border-t border-neutral-500/15"
          >
            <th scope="row" class="p-4 font-normal md:p-6">
              <div class="flex gap-4">
                <BaseIcon
                  :name="item.icon"
                  height="32px"
                  class="mt-1 shrink-0 !text-primary-600"
                />
                <div>
                  <h3 class="!mb-1 !text-lg font-bold">{{ item.title }}</h3>
                  <p class="text-sm md:text-base">{{ item.description }}</p>
                </div>
              </div>
            </th>
            <td class="p-2 text-center">
              <BaseIcon
                name="i-mdi-check-circle"
                height="32px"
                class="!text-green-600"
                aria-label="Yes"
              />
            </td>
            <td class="p-2 text-center">
              <BaseIcon
                name="i-mdi-close-circle"
                height="32px"
                class="!text-red-500"
                aria-label="No"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
