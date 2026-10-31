<script setup lang="ts">
  import siteMeta from '@/site'
  import NearbyAreas from '~/components/heroSections/areas/NearbyAreas.vue'
  import AreaHero from '~/components/heroSections/hero/AreaHero.vue'
import TrustBar from "~/components/heroSections/trust/TrustBar.vue";
  import ServiceSection from '~/components/heroSections/services/ServiceSection.vue'
  import ProcessSection from '~/components/heroSections/process/ProcessSection.vue'

  const town = {
    name: 'Fayetteville',
    countyName: 'Washington County',
  }

  usePageSeo({
    title: 'Parking Lot Striping in Fayetteville',
    description:
      "Parking lot striping in Fayetteville, AR. Line striping, ADA markings and sealcoating for Washington County apartments, offices and campus lots.",
    keywords:
      "Fayetteville AR parking lot striping, Fayetteville sealcoating, Washington County line striping, apartment complex striping Fayetteville, campus area parking lot striping, Fayetteville ADA parking",
  })

  useSchemaOrg([
    {
      // This page describes the service in one town. The business itself is the
      // site-wide LocalBusiness (#identity), referenced as the provider, so Google
      // sees one business serving many towns rather than a business per town.
      '@type': 'Service',
      name: `Parking Lot Striping in ${town.name}, AR`,
      serviceType: 'Parking lot striping and pavement maintenance',
      url: `${siteMeta.url}/areas/fayetteville/`,
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
        { name: 'Areas We Cover', item: '/areas/' },
        { name: 'Fayetteville' },
      ],
    }),
  ])
</script>

<template>
  <div class="py-12 bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100">
    <div class="container mx-auto px-4">
      <AreaHero
        eyebrow="Parking Lot Striping in Fayetteville, Washington County"
        title="Professional Pavement Marking & Maintenance in Fayetteville, AR"
      />

      <div class="-mx-4 mt-8">
        <TrustBar />
      </div>

      <div
        class="grid items-center gap-8 pt-20 pb-0 lg:grid-cols-2 lg:gap-12"
      >
        <div>
          <p
            class="mb-2 text-sm font-medium uppercase text-primary-600 dark:text-primary-200 md:text-base"
          >
            Washington County pavement solutions
          </p>
          <h2 class="mb-4 text-2xl font-bold md:!text-3xl">
            Your Trusted Pavement Expert in {{ town.name }}
          </h2>
          <p class="mb-6">
            We serve Fayetteville and Washington County apartment communities, offices and campus-area lots with durable <NuxtLink to="/services/line-striping" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">line striping</NuxtLink>, unit and visitor stall numbering, and <NuxtLink to="/services/safety-markings" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">fire lane markings</NuxtLink>. Work is timed around move-in dates and busy periods.
          </p>
          <p class="mb-6">
            We keep every property compliant with <NuxtLink to="/services/ada-compliance-marking" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">ADA markings</NuxtLink>, extend pavement life with <NuxtLink to="/services/sealcoating" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">sealcoating</NuxtLink> and crack sealing, and install <NuxtLink to="/services/signage-installation" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">signage</NuxtLink>, all coordinated by one crew.
          </p>
          <p class="mb-6">
            In Fayetteville, we serve apartment communities near the University of Arkansas, offices and retail across town, and the lots around Dickson Street that fill up on game days and weekends. We plan striping around move-in season and other busy windows, number resident and visitor stalls clearly, and keep fire lanes marked so emergency access stays open even when every space is taken.
          </p>
          <p class="mb-8">
            Every Fayetteville project starts with a lot assessment and a reply within one business day. We analyze resident, visitor and accessible parking, fire lanes and numbering, then give you a clear scope, price and a schedule that works for your community. Our crew keeps you posted and finishes with a walkthrough so you know exactly what was done.
          </p>
          <QuoteButton size="lg" background="white" />
        </div>
        <AreaPhoto
          src="/area-photos/fayetteville.png"
          :alt="`Aerial view of a freshly sealcoated parking lot with landscaped islands and evenly striped stalls - parking lot striping in ${town.name}, Arkansas`"
        />
        <div
          class="grid gap-4 border-t border-primary-200 py-8 text-center dark:border-primary-600 sm:grid-cols-3 lg:col-span-2"
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
            <p class="text-sm">Fast scheduling for Fayetteville and all of Washington County.</p>
          </div>
        </div>
      </div>
      <hr class="border-primary-300 dark:border-primary-500" />

      <div>
        <ServiceSection plain class="-mx-4 my-20" />
        <hr class="border-primary-300 dark:border-primary-500" />
        <ProcessSection background="white" />
      </div>
      <NearbyAreas slug="fayetteville" />
    </div>
  </div>
</template>
