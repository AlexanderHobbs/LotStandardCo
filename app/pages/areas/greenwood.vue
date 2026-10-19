<script setup lang="ts">
  import siteMeta from '@/site'
  import NearbyAreas from '~/components/heroSections/areas/NearbyAreas.vue'
  import AreaHero from '~/components/heroSections/hero/AreaHero.vue'
import TrustBar from "~/components/heroSections/trust/TrustBar.vue";
  import ServiceListLite from '~/components/heroSections/services/ServiceListLite.vue'
  import ProcessSection from '~/components/heroSections/process/ProcessSection.vue'

  const town = {
    slug: 'greenwood',
    name: 'Greenwood',
    countySlug: 'sebastian',
    countyName: 'Sebastian County',
    blurb:
      'Line striping and ADA compliance for Greenwood churches, schools and growing retail corridors.',
    focus: ['Churches', 'Schools', 'Retail corridors'],
  }
  const county = { name: town.countyName }

  usePageSeo({
    title: 'Parking Lot Striping in Greenwood',
    description:
      "Parking lot striping in Greenwood, AR. Line striping, sealcoating and ADA markings for Sebastian County schools, churches and Highway 71 retail properties.",
    keywords:
      "Greenwood AR parking lot striping, Greenwood sealcoating, Greenwood church parking lot striping, Greenwood school parking lot, Sebastian County line striping, Highway 71 retail striping Greenwood",
  })

  useSchemaOrg([
    {
      // This page describes the service in one town. The business itself is the
      // site-wide LocalBusiness (#identity), referenced as the provider, so Google
      // sees one business serving many towns rather than a business per town.
      '@type': 'Service',
      name: `Parking Lot Striping in ${town.name}, AR`,
      serviceType: 'Parking lot striping and pavement maintenance',
      url: `${siteMeta.url}/areas/greenwood`,
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
        { name: 'Greenwood' },
      ],
    }),
  ])
</script>

<template>
  <div class="py-12 bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100">
    <div class="container mx-auto px-4">
      <AreaHero
        eyebrow="Parking Lot Striping in Greenwood, Sebastian County"
        title="Professional Pavement Marking & Maintenance in Greenwood, AR"
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
            Sebastian County pavement solutions
          </p>
          <h2 class="mb-4 text-2xl font-bold md:!text-3xl">
            Your Trusted Pavement Expert in {{ town.name }}
          </h2>
          <p class="mb-6">
            We serve Greenwood and Sebastian County schools, churches and retail properties with <NuxtLink to="/services/line-striping" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">line striping</NuxtLink> planned around your calendar. We refresh pickup lanes, crosswalks and event parking, and renew <NuxtLink to="/services/ada-compliance-marking" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">ADA stalls and routes</NuxtLink> so every visitor can get in safely.
          </p>
          <p class="mb-6">
            To make the work last, we add <NuxtLink to="/services/sealcoating" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">sealcoating</NuxtLink> and crack sealing, plus <NuxtLink to="/services/safety-markings" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">safety markings</NuxtLink> like speed bumps and curbs and <NuxtLink to="/services/signage-installation" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">signage</NuxtLink>. We keep you informed from the first quote to the final walkthrough.
          </p>
          <p class="mb-6">
            In Greenwood, we serve the schools, churches and retail centers that keep the town busy, from weekday drop-off lines to packed Sunday parking. As Greenwood grows, many older lots weren't striped for the traffic they see now, so we review how cars and people move through your property before we paint, then mark pickup lanes, crosswalks and accessible routes that keep families moving safely at the busiest times of the week.
          </p>
          <p class="mb-8">
            Every Greenwood project starts with a lot assessment and a reply within one business day. We analyze the property with your calendar in mind, whether that's school hours, Sunday services or retail peaks, then give you a clear scope and price. Our crew completes the work on schedule and finishes with a walkthrough so you know exactly what was done.
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
            <p class="text-sm">Fast scheduling for Greenwood and the rest of Sebastian County.</p>
          </div>
        </div>
      </div>
      <hr class="border-primary-300 dark:border-primary-500" />

      <div>
        <ServiceListLite />
        <ProcessSection />
      </div>
      <NearbyAreas slug="greenwood" />
    </div>
  </div>
</template>
