<script setup lang="ts">
  import siteMeta from '@/site'
  import NearbyAreas from '~/components/heroSections/areas/NearbyAreas.vue'
  import AreaHero from '~/components/heroSections/hero/AreaHero.vue'
import TrustBar from "~/components/heroSections/trust/TrustBar.vue";
  import ServiceSection from '~/components/heroSections/services/ServiceSection.vue'
  import ProcessSection from '~/components/heroSections/process/ProcessSection.vue'

  const town = {
    name: 'Van Buren',
    countyName: 'Crawford County',
  }

  usePageSeo({
    title: 'Parking Lot Striping in Van Buren, AR',
    description:
      "Parking lot striping in Van Buren, AR. Restriping, ADA striping and sealcoating for Crawford County restaurants, grocery stores and Main Street.",
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
      url: `${siteMeta.url}/areas/van-buren/`,
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
  ])
</script>

<template>
  <div class="py-12 bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100">
    <div class="container mx-auto px-4">
      <AreaHero
        eyebrow="Parking Lot Striping in Van Buren, Crawford County"
        title="Professional Pavement Marking & Maintenance in Van Buren, AR"
      />

      <div class="-mx-4 mt-8">
        <TrustBar />
      </div>

      <!-- First half of the copy beside the quote form -->
      <div class="grid items-start gap-8 pt-20 lg:grid-cols-2 lg:gap-12">
        <div>
          <p
            class="mb-2 text-sm font-medium uppercase text-primary-600 dark:text-primary-200 md:text-base eyebrow-dash"
          >
            Crawford County pavement solutions
          </p>
          <h2 class="mb-4 text-2xl font-bold md:!text-3xl">
            Your Trusted Pavement Expert in {{ town.name }}
          </h2>
          <p class="mb-6">
            We serve Van Buren and Crawford County businesses with <NuxtLink to="/services/restriping/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">restriping</NuxtLink> that keeps customers parking where they should. From restaurant and grocery lots to downtown spaces, we measure the lot, propose the best stall layout, and restripe with durable paint.
          </p>
          <p class="mb-0">
            We also bring each lot up to current <NuxtLink to="/services/new-layout-ada-striping/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">ADA standards</NuxtLink>, protect the pavement with <NuxtLink to="/services/sealcoating/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">sealcoating</NuxtLink> and <NuxtLink to="/services/crack-filling/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">crack filling</NuxtLink>, and fix damaged areas with <NuxtLink to="/services/patching-potholes/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">patching</NuxtLink>, working around your business hours so you never lose a day of sales.
          </p>
        </div>
        <QuoteForm />
      </div>

      <!-- Second half of the copy beside the photo -->
      <div class="grid items-center gap-8 pt-20 lg:grid-cols-2 lg:gap-12">
        <AreaPhoto
          src="/area-photos/van-buren.jpg"
          :alt="`Newly painted white parking stall lines on dark asphalt beside a landscaped island - parking lot striping in ${town.name}, Arkansas`"
        />
        <div>
          <p
            class="mb-2 text-sm font-medium uppercase text-primary-600 dark:text-primary-200 md:text-base eyebrow-dash"
          >
            Our Work in {{ town.name }}
          </p>
          <h2 class="mb-4 text-2xl font-bold md:!text-3xl">
            High-Visibility Lines for Van Buren's Busy Lots
          </h2>
          <p class="mb-6">
            In Van Buren, we serve the restaurants, grocery stores and travel stops near the I-40 and I-49 interchange, along with the small businesses in and around the historic Main Street district. Highway-side lots get bold, high-visibility lines and clear directional arrows so drivers can park and get back on the road easily, and the tighter, older lots downtown get a layout planned to make the most of every space.
          </p>
          <p class="mb-8">
            Every Van Buren project starts with a lot assessment and a reply within one business day. We analyze the property, review stall counts, accessible spaces and traffic flow, then give you a clear scope and price. Our crew completes the work on schedule and finishes with a walkthrough so you know exactly what was done.
          </p>
          <QuoteButton size="lg" background="white" />
        </div>
      </div>

      <div
        class="mt-12 grid gap-4 border-t border-primary-200 py-8 text-center dark:border-primary-600 sm:grid-cols-3"
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
      <hr class="border-primary-300 dark:border-primary-500" />

      <div>
        <ServiceSection plain class="-mx-4" />
        <hr class="border-primary-300 dark:border-primary-500" />
        <ProcessSection background="white" />
      </div>
      <NearbyAreas slug="van-buren" />
    </div>
  </div>
</template>
