<script setup lang="ts">
  import siteMeta from '@/site'
  import NearbyAreas from '~/components/heroSections/areas/NearbyAreas.vue'
  import AreaHero from '~/components/heroSections/hero/AreaHero.vue'
import TrustBar from "~/components/heroSections/trust/TrustBar.vue";
  import ServiceSection from '~/components/heroSections/services/ServiceSection.vue'
  import ProcessSection from '~/components/heroSections/process/ProcessSection.vue'

  const town = {
    name: 'Charleston',
    countyName: 'Franklin County',
  }

  usePageSeo({
    title: 'Parking Lot Striping in Charleston, AR',
    description:
      "Parking lot striping in Charleston, AR. ADA-compliant striping, sealcoating and crack filling for Franklin County medical offices, schools and businesses.",
    keywords:
      "Charleston AR parking lot striping, Charleston Arkansas sealcoating, Franklin County line striping, medical office parking lot striping Charleston, school parking lot striping Franklin County, Charleston ADA parking",
  })

  useSchemaOrg([
    {
      // This page describes the service in one town. The business itself is the
      // site-wide LocalBusiness (#identity), referenced as the provider, so Google
      // sees one business serving many towns rather than a business per town.
      '@type': 'Service',
      name: `Parking Lot Striping in ${town.name}, AR`,
      serviceType: 'Parking lot striping and pavement maintenance',
      url: `${siteMeta.url}/areas/charleston/`,
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
        eyebrow="Parking Lot Striping in Charleston, Franklin County"
        title="Professional Pavement Marking & Maintenance in Charleston, AR"
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
            We serve Charleston and Franklin County medical offices, schools and local businesses with <NuxtLink to="/services/new-layout-ada-striping/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">ADA-compliant parking</NuxtLink> done exactly right. We lay out accessible stalls, access aisles and loading zones to code, plus clear <NuxtLink to="/services/restriping/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">restriping</NuxtLink> for busy drop-off times.
          </p>
          <p class="mb-0">
            We protect each lot with <NuxtLink to="/services/sealcoating/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">sealcoating</NuxtLink> and <NuxtLink to="/services/crack-filling/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">crack filling</NuxtLink>, and fix trouble spots with <NuxtLink to="/services/patching-potholes/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">patching and pothole repair</NuxtLink>, or bundle it all in a <NuxtLink to="/services/full-package/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">full repair-seal-stripe package</NuxtLink>.
          </p>
        </div>
        <QuoteForm />
      </div>

      <!-- Second half of the copy beside the photo -->
      <div class="grid items-center gap-8 pt-20 lg:grid-cols-2 lg:gap-12">
        <AreaPhoto
          src="/area-photos/charleston.jpg"
          :alt="`Freshly sealcoated parking lot with crisp white stall lines beside a residential neighborhood - parking lot striping in ${town.name}, Arkansas`"
        />
        <div>
          <p
            class="mb-2 text-sm font-medium uppercase text-primary-600 dark:text-primary-200 md:text-base eyebrow-dash"
          >
            Our Work in {{ town.name }}
          </p>
          <h2 class="mb-4 text-2xl font-bold md:!text-3xl">
            Accessible Parking Done Right in Charleston
          </h2>
          <p class="mb-6">
            In Charleston, we serve the schools, medical clinics and local businesses that the community relies on every day, plus the properties along Highway 22. For these lots, accessible parking matters most, so we make sure accessible stalls, access aisles, signs and routes to the entrance meet current requirements, and we time school projects for breaks so lots are ready when students return.
          </p>
          <p class="mb-8">
            Every Charleston project starts with a lot assessment and a reply within one business day. We analyze accessible parking, drop-off zones and walkways, confirm what needs to change to meet code, then give you a clear scope and price. Our crew completes the work on schedule and finishes with a walkthrough so you know exactly what was done.
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
          <p class="text-sm">Fast scheduling for Charleston and all of Franklin County.</p>
        </div>
      </div>
      <hr class="border-primary-300 dark:border-primary-500" />

      <div>
        <ServiceSection plain class="-mx-4" />
        <hr class="border-primary-300 dark:border-primary-500" />
        <ProcessSection background="white" />
      </div>
      <NearbyAreas slug="charleston" />
    </div>
  </div>
</template>
