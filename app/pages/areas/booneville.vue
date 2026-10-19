<script setup lang="ts">
  import siteMeta from '@/site'
  import NearbyAreas from '~/components/heroSections/areas/NearbyAreas.vue'
  import AreaHero from '~/components/heroSections/hero/AreaHero.vue'
import TrustBar from "~/components/heroSections/trust/TrustBar.vue";
  import ServiceListLite from '~/components/heroSections/services/ServiceListLite.vue'
  import ProcessSection from '~/components/heroSections/process/ProcessSection.vue'

  const town = {
    slug: 'booneville',
    name: 'Booneville',
    countySlug: 'logan',
    countyName: 'Logan County',
    blurb:
      'Our southern-most service town. Fresh striping, sealcoating and ADA markings for Booneville businesses, churches and municipal lots.',
    focus: ['Retail plazas', 'Churches', 'Municipal lots'],
  }
  const county = { name: town.countyName }

  usePageSeo({
    title: 'Parking Lot Striping in Booneville',
    description:
      "Parking lot striping in Booneville, AR. Line striping, sealcoating and ADA markings for Logan County retail plazas, churches and municipal lots.",
    keywords:
      "Booneville AR parking lot striping, Booneville sealcoating, Logan County line striping, Booneville church parking lot, municipal parking lot striping Logan County, Booneville ADA parking",
  })

  useSchemaOrg([
    {
      // This page describes the service in one town. The business itself is the
      // site-wide LocalBusiness (#identity), referenced as the provider, so Google
      // sees one business serving many towns rather than a business per town.
      '@type': 'Service',
      name: `Parking Lot Striping in ${town.name}, AR`,
      serviceType: 'Parking lot striping and pavement maintenance',
      url: `${siteMeta.url}/areas/booneville`,
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
        { name: 'Booneville' },
      ],
    }),
  ])
</script>

<template>
  <div class="py-12 bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100">
    <div class="container mx-auto px-4">
      <AreaHero
        eyebrow="Parking Lot Striping in Booneville, Logan County"
        title="Professional Pavement Marking & Maintenance in Booneville, AR"
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
            Logan County pavement solutions
          </p>
          <h2 class="mb-4 text-2xl font-bold md:!text-3xl">
            Your Trusted Pavement Expert in {{ town.name }}
          </h2>
          <p class="mb-6">
            We serve Booneville and Logan County with straightforward, honest pavement work. We begin with an assessment, then recommend only what your lot needs, whether that's fresh <NuxtLink to="/services/line-striping" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">line striping</NuxtLink>, <NuxtLink to="/services/sealcoating" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">sealcoating</NuxtLink> and crack repair, or updated <NuxtLink to="/services/ada-compliance-marking" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">ADA markings</NuxtLink>.
          </p>
          <p class="mb-6">
            Municipal, church and retail customers get clear itemized quotes, and we add <NuxtLink to="/services/safety-markings" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">fire lane and curb markings</NuxtLink> and <NuxtLink to="/services/signage-installation" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">signage</NuxtLink> in the same visit so the whole lot is finished at once.
          </p>
          <p class="mb-6">
            In Booneville, we serve the churches, municipal buildings, schools and local shops that the whole surrounding area depends on. These lots are well used and often go years between projects, so during the assessment we look for cracks and drainage problems as well as faded lines, and recommend crack sealing and sealcoating wherever it will add years to the pavement.
          </p>
          <p class="mb-8">
            Every Booneville project starts with a lot assessment and a reply within one business day. We analyze the condition of your pavement, explain what's urgent and what can wait, then give you a clear, itemized scope and price. Our crew completes the work on schedule and finishes with a walkthrough so you know exactly what was done.
          </p>
          <BaseButton size="lg" to="/contact" color="cta"
            >Request a Quote</BaseButton
          >
        </div>
        <NuxtImg
          src="/images/services/line-striping.jpg"
          :alt="`Fresh parking lot striping in ${town.name}, Arkansas`"
          width="640"
          height="520"
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
            <p class="text-sm">Fast scheduling for Booneville and all of Logan County.</p>
          </div>
        </div>
      </div>
      <hr class="border-primary-300 dark:border-primary-500" />

      <div>
        <ServiceListLite />
        <ProcessSection />
      </div>
      <NearbyAreas slug="booneville" />
    </div>
  </div>
</template>
