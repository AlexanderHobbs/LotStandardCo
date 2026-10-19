<script setup lang="ts">
  import siteMeta from '@/site'
  import NearbyAreas from '~/components/heroSections/areas/NearbyAreas.vue'
  import AreaHero from '~/components/heroSections/hero/AreaHero.vue'
import TrustBar from "~/components/heroSections/trust/TrustBar.vue";
  import ServiceListLite from '~/components/heroSections/services/ServiceListLite.vue'
  import ProcessSection from '~/components/heroSections/process/ProcessSection.vue'

  const town = {
    slug: 'van-buren',
    name: 'Van Buren',
    countySlug: 'crawford',
    countyName: 'Crawford County',
    blurb:
      'Fast, professional lot maintenance for Van Buren grocery stores, restaurants and main street businesses.',
    focus: ['Grocery stores', 'Restaurants', 'Main street'],
  }
  const county = { name: town.countyName }

  usePageSeo({
    title: 'Parking Lot Striping in Van Buren',
    description:
      "Parking lot striping in Van Buren, AR. Line striping, ADA markings and sealcoating for Crawford County restaurants, grocery stores and Main Street.",
    keywords:
      "Van Buren AR parking lot striping, Van Buren sealcoating, Van Buren ADA parking, Crawford County line striping, Van Buren Main Street parking lot, restaurant parking lot striping Van Buren",
  })

  useSchemaOrg([
    {
      // This page describes the service in one town. The business itself is the
      // site-wide LocalBusiness (#identity), referenced as the provider, so Google
      // sees one business serving many towns rather than a business per town.
      '@type': 'Service',
      name: `Parking Lot Striping in ${town.name}, AR`,
      serviceType: 'Parking lot striping and pavement maintenance',
      url: `${siteMeta.url}/areas/van-buren`,
      provider: { '@id': `${siteMeta.url}/#identity` },
      areaServed: {
        '@type': 'City',
        name: town.name,
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: `${town.countyName}, AR`,
        },
      },
    },
    defineBreadcrumb({
      itemListElement: [
        { name: 'Home', item: '/' },
        { name: 'Areas We Cover', item: '/areas' },
        { name: 'Van Buren' },
      ],
    }),
  ])
</script>

<template>
  <div class="py-12 bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100">
    <div class="container mx-auto px-4">
      <AreaHero
        eyebrow="Parking Lot Striping in Van Buren, Crawford County"
        title="Professional Pavement Marking & Maintenance in Van Buren, AR"
      />

      <div class="-mx-4">
        <TrustBar />
      </div>

      <div
        class="grid items-center gap-8 py-12 lg:grid-cols-2 lg:gap-12"
      >
        <div>
          <p
            class="mb-2 text-sm font-medium uppercase text-primary-600 dark:text-primary-200 md:text-base"
          >
            Crawford County pavement solutions
          </p>
          <h2 class="mb-4 text-2xl font-bold md:!text-3xl">
            Your Trusted Pavement Expert in {{ town.name }}
          </h2>
          <p class="mb-6">
            We serve Van Buren and Crawford County businesses with <NuxtLink to="/services/line-striping" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">line striping</NuxtLink> that keeps customers parking where they should. From restaurant and grocery lots to downtown spaces, we measure the lot, propose the best stall layout, and restripe with durable paint.
          </p>
          <p class="mb-6">
            We also bring each lot up to current <NuxtLink to="/services/ada-compliance-marking" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">ADA standards</NuxtLink>, protect the pavement with <NuxtLink to="/services/sealcoating" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">sealcoating</NuxtLink>, and install <NuxtLink to="/services/signage-installation" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">signs</NuxtLink> where needed, working around your business hours so you never lose a day of sales.
          </p>
          <p class="mb-6">
            In Van Buren, we serve the restaurants, grocery stores and travel stops near the I-40 and I-49 interchange, along with the small businesses in and around the historic Main Street district. Highway-side lots get bold, high-visibility lines and clear directional arrows so drivers can park and get back on the road easily, and the tighter, older lots downtown get a layout planned to make the most of every space.
          </p>
          <p class="mb-8">
            Every Van Buren project starts with a lot assessment and a reply within one business day. We analyze the property, review stall counts, accessible spaces and traffic flow, then give you a clear scope and price. Our crew completes the work on schedule and finishes with a walkthrough so you know exactly what was done.
          </p>
          <BaseButton size="lg" to="/contact" color="cta"
            >Request a Quote</BaseButton
          >
        </div>
        <NuxtImg
          src="/images/services/line-striping.jpg"
          :alt="`Fresh parking lot striping in ${town.name}, Arkansas`"
          width="960"
          height="780"
          format="webp"
          fit="outside"
          loading="lazy"
          class="h-full min-h-[18rem] w-full rounded-2xl object-cover"
        />
        <div
          class="grid gap-4 border-t border-primary-200 pt-8 text-center dark:border-primary-600 sm:grid-cols-3 lg:col-span-2"
        >
          <div>
            <p class="text-lg font-bold">Precision</p>
            <p class="text-sm">Dedicated crews with an eye for detail on every line.</p>
          </div>
          <div>
            <p class="text-lg font-bold">Clear Scope &amp; Pricing</p>
            <p class="text-sm">Know exactly what's included before work begins.</p>
          </div>
          <div>
            <p class="text-lg font-bold">Reply Within 1 Business Day</p>
            <p class="text-sm">Fast scheduling for Van Buren and all of Crawford County.</p>
          </div>
        </div>
      </div>
      <hr class="border-primary-300 dark:border-primary-500" />

      <div>
        <ServiceListLite />
        <ProcessSection />
      </div>
      <NearbyAreas slug="van-buren" />
    </div>
  </div>
</template>
