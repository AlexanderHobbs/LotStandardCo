<script setup lang="ts">
  import siteMeta from '@/site'
  import NearbyAreas from '~/components/heroSections/areas/NearbyAreas.vue'
  import AreaHero from '~/components/heroSections/hero/AreaHero.vue'
import TrustBar from "~/components/heroSections/trust/TrustBar.vue";
  import ServiceSection from '~/components/heroSections/services/ServiceSection.vue'
  import ProcessSection from '~/components/heroSections/process/ProcessSection.vue'

  const town = {
    name: 'Ozark',
    countyName: 'Franklin County',
  }

  usePageSeo({
    title: 'Parking Lot Striping in Ozark, AR',
    description:
      "Parking lot striping in Ozark, AR. Restriping, crack filling, sealcoating and ADA striping for Franklin County municipal and downtown lots.",
    keywords:
      "Ozark AR parking lot striping, Ozark Arkansas sealcoating, Franklin County line striping, Ozark crack filling, municipal parking lot striping Franklin County, downtown Ozark parking",
  })

  useSchemaOrg([
    {
      // This page describes the service in one town. The business itself is the
      // site-wide LocalBusiness (#identity), referenced as the provider, so Google
      // sees one business serving many towns rather than a business per town.
      '@type': 'Service',
      name: `Parking Lot Striping in ${town.name}, AR`,
      serviceType: 'Parking lot striping and pavement maintenance',
      url: `${siteMeta.url}/areas/ozark/`,
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
        eyebrow="Parking Lot Striping in Ozark, Franklin County"
        title="Professional Pavement Marking & Maintenance in Ozark, AR"
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
            Franklin County pavement solutions
          </p>
          <h2 class="mb-4 text-2xl font-bold md:!text-3xl">
            Your Trusted Pavement Expert in {{ town.name }}
          </h2>
          <p class="mb-6">
            We serve Ozark and Franklin County with striping and pavement repair handled by one crew. We restripe municipal and downtown lots with traffic-rated <NuxtLink to="/services/restriping/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">restriping</NuxtLink>, then fill cracks and patch damage with <NuxtLink to="/services/crack-filling/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">crack filling</NuxtLink> and <NuxtLink to="/services/patching-potholes/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">patching</NuxtLink> in the same visit so projects stay on schedule.
          </p>
          <p class="mb-0">
            We also renew <NuxtLink to="/services/new-layout-ada-striping/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">ADA stalls</NuxtLink>, mark crosswalks and stop bars, and extend pavement life with <NuxtLink to="/services/sealcoating/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">sealcoating</NuxtLink> or a <NuxtLink to="/services/full-package/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">full repair-seal-stripe package</NuxtLink>.
          </p>
        </div>
        <QuoteForm />
      </div>

      <!-- Second half of the copy beside the photo -->
      <div class="grid items-center gap-8 pt-20 lg:grid-cols-2 lg:gap-12">
        <AreaPhoto
          src="/area-photos/ozark.jpg"
          :alt="`Parking lot with fresh white stall lines, a yellow striped lane and blue accessible-space markings - parking lot striping in ${town.name}, Arkansas`"
        />
        <div>
          <p
            class="mb-2 text-sm font-medium uppercase text-primary-600 dark:text-primary-200 md:text-base eyebrow-dash"
          >
            Our Work in {{ town.name }}
          </p>
          <h2 class="mb-4 text-2xl font-bold md:!text-3xl">
            One Crew, One Schedule in Ozark
          </h2>
          <p class="mb-6">
            In Ozark, we serve city and county lots, downtown businesses near the courthouse and riverfront, and the commercial properties off I-40. Many of these lots are used by visitors who don't park there every day, so clear markings matter. Because one crew handles repairs, sealing and striping, cracks, patches, lines, stop bars and crosswalks can all be updated together, with one schedule and one point of contact.
          </p>
          <p class="mb-8">
            Every Ozark project starts with a lot assessment and a reply within one business day. We analyze pavement condition, parking and crosswalk needs together, then give you one clear scope and price instead of multiple contractors to coordinate. Our crew completes the work on schedule and finishes with a walkthrough so you know exactly what was done.
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
          <p class="text-sm">Fast scheduling for Ozark and all of Franklin County.</p>
        </div>
      </div>
      <hr class="border-primary-300 dark:border-primary-500" />

      <div>
        <ServiceSection plain class="-mx-4" />
        <hr class="border-primary-300 dark:border-primary-500" />
        <ProcessSection background="white" />
      </div>
      <NearbyAreas slug="ozark" />
    </div>
  </div>
</template>
