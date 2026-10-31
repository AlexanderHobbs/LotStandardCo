<script setup lang="ts">
  const serviceCounties = [
    { slug: 'logan', name: 'Logan County' },
    { slug: 'franklin', name: 'Franklin County' },
    { slug: 'sebastian', name: 'Sebastian County' },
    { slug: 'crawford', name: 'Crawford County' },
    { slug: 'washington', name: 'Washington County' },
    { slug: 'benton', name: 'Benton County' },
  ]

  const townList = [
    {
      slug: 'booneville',
      name: 'Booneville',
      countySlug: 'logan',
      blurb:
        'Our southern-most service town. Fresh striping, sealcoating and ADA markings for Booneville businesses, churches and municipal lots.',
      focus: ['Retail plazas', 'Churches', 'Municipal lots'],
    },
    {
      slug: 'paris',
      name: 'Paris',
      countySlug: 'logan',
      blurb:
        'Logan County seat. We keep bank branches, downtown shops and community lots safe, sharp and code-compliant.',
      focus: ['Banks', 'Downtown shops', 'Community lots'],
    },
    {
      slug: 'charleston',
      name: 'Charleston',
      countySlug: 'franklin',
      blurb:
        'Reliable pavement and floor marking for Charleston clinics, schools and small businesses.',
      focus: ['Medical offices', 'Schools', 'Small businesses'],
    },
    {
      slug: 'ozark',
      name: 'Ozark',
      countySlug: 'franklin',
      blurb:
        'Franklin County seat. Courthouse-square parking, signage and striping done with minimal disruption.',
      focus: ['Municipal lots', 'Signage', 'Downtown parking'],
    },
    {
      slug: 'greenwood',
      name: 'Greenwood',
      countySlug: 'sebastian',
      blurb:
        'Line striping and ADA compliance for Greenwood churches, schools and growing retail corridors.',
      focus: ['Churches', 'Schools', 'Retail corridors'],
    },
    {
      slug: 'fort-smith',
      name: 'Fort Smith',
      countySlug: 'sebastian',
      blurb:
        'Our largest western hub. Striping, sealcoating and safety markings for shopping centers, apartments and industrial sites.',
      focus: ['Shopping centers', 'Apartments', 'Industrial sites'],
    },
    {
      slug: 'van-buren',
      name: 'Van Buren',
      countySlug: 'crawford',
      blurb:
        'Fast, professional lot maintenance for Van Buren grocery stores, restaurants and main street businesses.',
      focus: ['Grocery stores', 'Restaurants', 'Main street'],
    },
    {
      slug: 'alma',
      name: 'Alma',
      countySlug: 'crawford',
      blurb:
        'Heavy-duty striping and signage for Alma warehouses, distribution yards and commercial lots.',
      focus: ['Warehouses', 'Distribution yards', 'Signage'],
    },
    {
      slug: 'fayetteville',
      name: 'Fayetteville',
      countySlug: 'washington',
      blurb:
        'Striping, sealcoating and repair for Fayetteville apartment communities, offices and campus-area properties.',
      focus: ['Apartment communities', 'Offices', 'Campus-area lots'],
    },
    {
      slug: 'springdale',
      name: 'Springdale',
      countySlug: 'washington',
      blurb:
        'ADA-compliant marking and full lot maintenance for Springdale business parks and industrial properties.',
      focus: ['Business parks', 'Industrial', 'ADA marking'],
    },
    {
      slug: 'rogers',
      name: 'Rogers',
      countySlug: 'benton',
      blurb:
        'Medical plazas, retail centers and multi-tenant properties in Rogers, striped on your schedule.',
      focus: ['Medical plazas', 'Retail centers', 'Multi-tenant'],
    },
    {
      slug: 'bentonville',
      name: 'Bentonville',
      countySlug: 'benton',
      blurb:
        'Our northern-most service town and Benton County seat. Sharp lines and safe lots for downtown and corporate-area properties.',
      focus: ['Retail centers', 'Corporate campuses', 'Downtown'],
    },
  ]

  // Priority towns come first, in this order; any town not listed keeps its
  // position in the list above.
  const TOWN_ORDER = [
    'fort-smith',
    'fayetteville',
    'bentonville',
    'rogers',
    'springdale',
    'van-buren',
    'alma',
  ]
  const townRank = (slug: string) => {
    const index = TOWN_ORDER.indexOf(slug)
    return index === -1 ? TOWN_ORDER.length : index
  }
  const serviceTowns = [...townList].sort(
    (a, b) => townRank(a.slug) - townRank(b.slug),
  )

  definePageMeta({
    title: 'Areas We Cover',
    description:
      'Parking lot striping, sealcoating and pavement maintenance from Booneville to Bentonville, Arkansas. See the towns and counties we serve.',
    navOrder: 4,
    type: 'primary',
    icon: 'i-mdi-map-marker-radius-outline',
    tags: [
      'parking lot striping Arkansas',
      'Bentonville parking lot striping',
      'Fort Smith sealcoating',
      'Fayetteville line striping',
    ],
  })

  const countyName = (slug: string) =>
    serviceCounties.find((c) => c.slug === slug)?.name ?? ''

  const lotCountByTown: Record<string, number> = {
    Booneville: 1,
    Paris: 1,
    Charleston: 1,
    Ozark: 1,
    Greenwood: 1,
    'Fort Smith': 1,
    'Van Buren': 1,
    Alma: 1,
    Fayetteville: 1,
    Springdale: 1,
    Rogers: 1,
    Bentonville: 1,
  }
  const lotCount = (town: string) => lotCountByTown[town] ?? 0
</script>

<template>
  <div
    class="bg-primary-100 text-primary-900 dark:bg-primary-700 dark:text-primary-100"
  >
    <section class="container mx-auto px-4 pt-12 pb-8 text-center">
      <div class="mx-auto lg:w-8/12">
        <p class="mb-2 text-sm font-medium md:text-base lg:text-lg text-primary-600 uppercase dark:text-primary-200">
          Areas We Cover
        </p>
        <h1 class="capitalize text-2xl md:text-3xl lg:text-4xl">
          Parking Lot Striping From Booneville To Bentonville
        </h1>
        <p class="mt-4">
          We serve {{ serviceTowns.length }} towns across
          {{ serviceCounties.length }} Arkansas counties. Find your town below.
        </p>
      </div>
    </section>

    <section class="container mx-auto px-4 pb-16">
      <div class="-mx-3 flex flex-wrap">
        <div
          v-for="town in serviceTowns"
          :id="town.slug"
          :key="town.slug"
          class="flex w-full scroll-mt-28 p-3 md:w-1/2 lg:w-1/3"
        >
          <!-- The whole card is clickable: an invisible link covers the card, and
               the quote button sits above it (z-10) so it still goes to the
               contact page. The "View page" button remains the keyboard and
               screen-reader link, so the overlay is hidden from both. -->
          <article
            class="relative flex w-full cursor-pointer flex-col rounded-3xl bg-white/80 p-6 shadow-xl transition-transform duration-300 ease-in-out hover:z-10 hover:scale-[1.03] dark:bg-neutral-900/80"
          >
            <NuxtLink
              :to="`/areas/${town.slug}`"
              class="absolute inset-0 rounded-3xl"
              tabindex="-1"
              aria-hidden="true"
            />
            <div class="mb-3 flex items-center justify-between gap-2">
              <span
                class="inline-flex items-center gap-1 rounded-full bg-primary-600/10 px-3 py-1 text-xs font-semibold text-primary-600 dark:text-primary-200"
              >
                <BaseIcon name="i-mdi-map-marker-outline" height="14px" />
                {{ countyName(town.countySlug) }}, AR
              </span>
              <span
                v-if="lotCount(town.name)"
                class="text-xs text-neutral-500 dark:text-neutral-400"
              >
                {{ lotCount(town.name) }} lot{{
                  lotCount(town.name) > 1 ? 's' : ''
                }}
                completed
              </span>
            </div>

            <h2 class="mb-2 !text-xl md:!text-2xl">
              Parking Lot Striping in {{ town.name }}
            </h2>
            <p class="mb-4 text-sm">{{ town.blurb }}</p>

            <ul class="mb-6 flex flex-wrap gap-2">
              <li
                v-for="item in town.focus"
                :key="item"
                class="rounded-full bg-white px-3 py-1 text-xs font-medium ring-1 ring-neutral-200 dark:bg-neutral-950 dark:ring-neutral-800"
              >
                {{ item }}
              </li>
            </ul>

            <div class="mt-auto space-y-3">
              <BaseButton
                size="lg"
                color="white"
                :to="`/areas/${town.slug}`"
                block
              >
                View {{ town.name }} Page
              </BaseButton>
              <QuoteButton size="lg" block class="relative z-10">Request a Quote in {{ town.name }}</QuoteButton>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
