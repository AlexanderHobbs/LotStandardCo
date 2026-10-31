<script setup lang="ts">
  import siteMeta from '@/site'
  import NearbyAreas from '~/components/heroSections/areas/NearbyAreas.vue'
  import AreaHero from '~/components/heroSections/hero/AreaHero.vue'
  import TrustBar from "~/components/heroSections/trust/TrustBar.vue";
  import ServiceSection from '~/components/heroSections/services/ServiceSection.vue'
  import ProcessSection from '~/components/heroSections/process/ProcessSection.vue'

  const town = {
    name: 'Bentonville',
    countyName: 'Benton County',
  }

  usePageSeo({
    title: 'Parking Lot Striping in Bentonville',
    description:
      "Parking lot striping in Bentonville, AR. Line striping, ADA markings and sealcoating for Benton County corporate campuses and retail centers.",
    keywords:
      "Bentonville parking lot striping, Bentonville sealcoating, Benton County line striping, corporate campus parking lot striping Bentonville, Bentonville ADA parking, retail parking lot striping Northwest Arkansas",
  })

  useSchemaOrg([
    {
      // This page describes the service in one town. The business itself is the
      // site-wide LocalBusiness (#identity), referenced as the provider, so Google
      // sees one business serving many towns rather than a business per town.
      '@type': 'Service',
      name: `Parking Lot Striping in ${town.name}, AR`,
      serviceType: 'Parking lot striping and pavement maintenance',
      url: `${siteMeta.url}/areas/bentonville/`,
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
        { name: 'Bentonville' },
      ],
    }),
  ])
</script>

<template>
  <div class="py-12 bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100">
    <div class="container mx-auto px-4">
      <AreaHero
        eyebrow="Parking Lot Striping in Bentonville, Benton County"
        title="Professional Pavement Marking & Maintenance in Bentonville, AR"
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
            Benton County pavement solutions
          </p>
          <h2 class="mb-4 text-2xl font-bold md:!text-3xl">
            Your Trusted Pavement Expert in {{ town.name }}
          </h2>
          <p class="mb-6">
            We serve Bentonville and Benton County corporate and retail properties with precise <NuxtLink to="/services/line-striping" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">line striping</NuxtLink>, including visitor, reserved and EV stalls, and current <NuxtLink to="/services/ada-compliance-marking" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">ADA markings</NuxtLink>. Every layout is planned with you before work starts.
          </p>
          <p class="mb-6">
            To keep high-visibility lots looking their best, we add <NuxtLink to="/services/sealcoating" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">sealcoating</NuxtLink> and crack sealing, <NuxtLink to="/services/signage-installation" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">signage</NuxtLink>, and <NuxtLink to="/services/safety-markings" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">safety markings</NuxtLink>. We schedule overnight or weekend work when needed so customers and staff are never disrupted.
          </p>
          <p class="mb-6">
            In Bentonville, we serve corporate offices, vendor buildings and the new retail centers growing around them, along with businesses near the downtown square. These are high-visibility properties where a faded lot stands out, so we stripe crisp, accurate layouts with reserved, visitor and EV charging stalls, keep accessible parking current, and can work nights or weekends so offices and stores stay open while we finish.
          </p>
          <p class="mb-8">
            Every Bentonville project starts with a lot assessment and a reply within one business day. We analyze your site plan, stall requirements and accessibility needs, then give you a clear scope, price and schedule. Our crew keeps you informed throughout and finishes with a walkthrough so you know exactly what was done.
          </p>
          <QuoteButton size="lg" background="white" />
        </div>
        <AreaPhoto
          src="/area-photos/bentonville.png"
          :alt="`Newly striped office parking lot with blue accessible stalls, a hatched access aisle, crosswalk and directional arrows - parking lot striping in ${town.name}, Arkansas`"
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
            <p class="text-sm">Fast scheduling for Bentonville and all of Benton County.</p>
          </div>
        </div>
      </div>
      <hr class="border-primary-300 dark:border-primary-500" />

      <div>
        <ServiceSection plain class="-mx-4 my-20" />
        <hr class="border-primary-300 dark:border-primary-500" />
        <ProcessSection background="white" />
      </div>
      <NearbyAreas slug="bentonville" />
    </div>
  </div>
</template>
