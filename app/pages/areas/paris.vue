<script setup lang="ts">
  import siteMeta from '@/site'
  import NearbyAreas from '~/components/heroSections/areas/NearbyAreas.vue'
  import AreaHero from '~/components/heroSections/hero/AreaHero.vue'
import TrustBar from "~/components/heroSections/trust/TrustBar.vue";
  import ServiceSection from '~/components/heroSections/services/ServiceSection.vue'
  import ProcessSection from '~/components/heroSections/process/ProcessSection.vue'

  const town = {
    name: 'Paris',
    countyName: 'Logan County',
  }

  usePageSeo({
    title: 'Parking Lot Striping in Paris, AR',
    description:
      "Parking lot striping in Paris, AR. Restriping, ADA striping and sealcoating for Logan County banks, downtown shops and community lots.",
    keywords:
      "Paris AR parking lot striping, Paris Arkansas sealcoating, Logan County line striping, Paris downtown parking lot, bank parking lot striping Paris AR, Paris ADA parking markings",
  })

  useSchemaOrg([
    {
      // This page describes the service in one town. The business itself is the
      // site-wide LocalBusiness (#identity), referenced as the provider, so Google
      // sees one business serving many towns rather than a business per town.
      '@type': 'Service',
      name: `Parking Lot Striping in ${town.name}, AR`,
      serviceType: 'Parking lot striping and pavement maintenance',
      url: `${siteMeta.url}/areas/paris/`,
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
        eyebrow="Parking Lot Striping in Paris, Logan County"
        title="Professional Pavement Marking & Maintenance in Paris, AR"
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
            Logan County pavement solutions
          </p>
          <h2 class="mb-4 text-2xl font-bold md:!text-3xl">
            Your Trusted Pavement Expert in {{ town.name }}
          </h2>
          <p class="mb-6">
            We serve Paris and Logan County banks, shops and community lots with precise <NuxtLink to="/services/restriping/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">restriping</NuxtLink>. We re-measure tight lots for the best layout, mark bank and drive-through lanes, and add compliant <NuxtLink to="/services/new-layout-ada-striping/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">ADA stalls and ramps</NuxtLink> and new layouts.
          </p>
          <p class="mb-0">
            Each job is finished with durable paint, optional <NuxtLink to="/services/sealcoating/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">sealcoating</NuxtLink> and <NuxtLink to="/services/crack-filling/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">crack filling</NuxtLink> to protect the surface, and <NuxtLink to="/services/patching-potholes/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">patching</NuxtLink> where the pavement has broken down. We schedule quickly and work around your hours to keep disruption minimal.
          </p>
        </div>
        <QuoteForm />
      </div>

      <!-- Second half of the copy beside the photo -->
      <div class="grid items-center gap-8 pt-20 lg:grid-cols-2 lg:gap-12">
        <AreaPhoto
          src="/area-photos/paris.jpg"
          :alt="`Freshly painted white parking stalls along a curb beside a commercial building - parking lot striping in ${town.name}, Arkansas`"
        />
        <div>
          <p
            class="mb-2 text-sm font-medium uppercase text-primary-600 dark:text-primary-200 md:text-base eyebrow-dash"
          >
            Our Work in {{ town.name }}
          </p>
          <h2 class="mb-4 text-2xl font-bold md:!text-3xl">
            Careful Layouts for Paris's Tight Lots
          </h2>
          <p class="mb-6">
            In Paris, we serve the banks, shops and restaurants around the historic courthouse square, along with churches and community lots throughout town. Downtown lots are often small and irregular, so we measure carefully and plan a layout that fits. Weekend visitors heading to Mount Magazine add traffic for local businesses, and clearly marked stalls, drive-through lanes and accessible spaces help every one of them handle it smoothly.
          </p>
          <p class="mb-8">
            Every Paris project starts with a lot assessment and a reply within one business day. We analyze the property, measure the lot and show how a new layout could add or improve spaces, then give you a clear scope and price. Our crew completes the work on schedule and finishes with a walkthrough so you know exactly what was done.
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
          <p class="text-sm">Fast scheduling for Paris and all of Logan County.</p>
        </div>
      </div>
      <hr class="border-primary-300 dark:border-primary-500" />

      <div>
        <ServiceSection plain class="-mx-4" />
        <hr class="border-primary-300 dark:border-primary-500" />
        <ProcessSection background="white" />
      </div>
      <NearbyAreas slug="paris" />
    </div>
  </div>
</template>
