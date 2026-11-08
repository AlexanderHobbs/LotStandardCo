<script setup lang="ts">
  import siteMeta from '@/site'
  import NearbyAreas from '~/components/heroSections/areas/NearbyAreas.vue'
  import AreaHero from '~/components/heroSections/hero/AreaHero.vue'
import TrustBar from "~/components/heroSections/trust/TrustBar.vue";
  import ServiceSection from '~/components/heroSections/services/ServiceSection.vue'
  import ProcessSection from '~/components/heroSections/process/ProcessSection.vue'

  const town = {
    name: 'Springdale',
    countyName: 'Washington County',
  }

  usePageSeo({
    title: 'Parking Lot Striping in Springdale, AR',
    description:
      "Parking lot striping in Springdale, AR. Restriping, patching, sealcoating and ADA striping for Washington County business parks and industrial sites.",
    keywords:
      "Springdale AR parking lot striping, Springdale sealcoating, Washington County line striping, industrial pavement marking Springdale, business park parking lot striping, Springdale ADA parking markings",
  })

  useSchemaOrg([
    {
      // This page describes the service in one town. The business itself is the
      // site-wide LocalBusiness (#identity), referenced as the provider, so Google
      // sees one business serving many towns rather than a business per town.
      '@type': 'Service',
      name: `Parking Lot Striping in ${town.name}, AR`,
      serviceType: 'Parking lot striping and pavement maintenance',
      url: `${siteMeta.url}/areas/springdale/`,
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
        eyebrow="Parking Lot Striping in Springdale, Washington County"
        title="Professional Pavement Marking & Maintenance in Springdale, AR"
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
            Washington County pavement solutions
          </p>
          <h2 class="mb-4 text-2xl font-bold md:!text-3xl">
            Your Trusted Pavement Expert in {{ town.name }}
          </h2>
          <p class="mb-6">
            We serve Springdale and Washington County business parks and industrial sites with markings that work for trucks, forklifts and employees at once. Our crews handle <NuxtLink to="/services/restriping/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">restriping</NuxtLink>, including truck routes, pedestrian walkways and loading areas, and repair heavy-traffic damage with <NuxtLink to="/services/patching-potholes/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">patching and pothole repair</NuxtLink>.
          </p>
          <p class="mb-0">
            We add <NuxtLink to="/services/new-layout-ada-striping/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">ADA striping</NuxtLink> and new layouts, protect pavement with <NuxtLink to="/services/sealcoating/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">sealcoating</NuxtLink> and <NuxtLink to="/services/crack-filling/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">crack filling</NuxtLink>, and offer a <NuxtLink to="/services/full-package/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">full repair-seal-stripe package</NuxtLink>, all scheduled so your operations keep running.
          </p>
        </div>
        <QuoteForm />
      </div>

      <!-- Second half of the copy beside the photo -->
      <div class="grid items-center gap-8 pt-20 lg:grid-cols-2 lg:gap-12">
        <AreaPhoto
          src="/area-photos/springdale.jpg"
          :alt="`Large freshly sealcoated parking lot with crisp white stall lines and arrows under a clear sky - parking lot striping in ${town.name}, Arkansas`"
        />
        <div>
          <p
            class="mb-2 text-sm font-medium uppercase text-primary-600 dark:text-primary-200 md:text-base eyebrow-dash"
          >
            Our Work in {{ town.name }}
          </p>
          <h2 class="mb-4 text-2xl font-bold md:!text-3xl">
            Markings Built for Springdale's Round-the-Clock Sites
          </h2>
          <p class="mb-6">
            In Springdale, we serve the food-processing plants, trucking companies, warehouses and business parks that run across the city, many of them operating around the clock. Markings here have to hold up to trucks, forklifts and shift changes, so we separate truck routes from pedestrian walkways, mark loading and staging areas clearly, and can stripe in sections overnight or on weekends so your facility keeps running.
          </p>
          <p class="mb-8">
            Every Springdale project starts with a lot assessment and a reply within one business day. We analyze truck, forklift and pedestrian flow across your site, then give you a clear scope and price. Our crew works around your operations and finishes with a walkthrough so you know exactly what was done.
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
          <p class="text-sm">Fast scheduling for Springdale and all of Washington County.</p>
        </div>
      </div>
      <hr class="border-primary-300 dark:border-primary-500" />

      <div>
        <ServiceSection plain class="-mx-4" />
        <hr class="border-primary-300 dark:border-primary-500" />
        <ProcessSection background="white" />
      </div>
      <NearbyAreas slug="springdale" />
    </div>
  </div>
</template>
