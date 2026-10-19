<script setup lang="ts">
  import siteMeta from '@/site'
  import NearbyAreas from '~/components/heroSections/areas/NearbyAreas.vue'
  import AreaHero from '~/components/heroSections/hero/AreaHero.vue'
import TrustBar from "~/components/heroSections/trust/TrustBar.vue";
  import ServiceListLite from '~/components/heroSections/services/ServiceListLite.vue'
  import ProcessSection from '~/components/heroSections/process/ProcessSection.vue'

  const town = {
    slug: 'charleston',
    name: 'Charleston',
    countySlug: 'franklin',
    countyName: 'Franklin County',
    blurb:
      'Reliable pavement and floor marking for Charleston clinics, schools and small businesses.',
    focus: ['Medical offices', 'Schools', 'Small businesses'],
  }
  const county = { name: town.countyName }

  usePageSeo({
    title: 'Parking Lot Striping in Charleston',
    description:
      "Parking lot striping in Charleston, AR. ADA-compliant striping and sealcoating for Franklin County medical offices, schools and local businesses.",
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
      url: `${siteMeta.url}/areas/charleston`,
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
        { name: 'Charleston' },
      ],
    }),
  ])
</script>

<template>
  <div class="py-12 bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100">
    <div class="container mx-auto px-4">
      <AreaHero
        eyebrow="Parking Lot Striping in Charleston, Franklin County"
        title="Professional Pavement Marking & Maintenance in Charleston, AR"
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
            Franklin County pavement solutions
          </p>
          <h2 class="mb-4 text-2xl font-bold md:!text-3xl">
            Your Trusted Pavement Expert in {{ town.name }}
          </h2>
          <p class="mb-6">
            We serve Charleston and Franklin County medical offices, schools and local businesses with <NuxtLink to="/services/ada-compliance-marking" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">ADA-compliant parking</NuxtLink> done exactly right. We lay out accessible stalls, access aisles and loading zones to code, plus clear <NuxtLink to="/services/line-striping" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">line striping</NuxtLink> for busy drop-off times.
          </p>
          <p class="mb-6">
            We protect each lot with <NuxtLink to="/services/sealcoating" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">sealcoating</NuxtLink> and crack sealing, and finish with <NuxtLink to="/services/safety-markings" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">safety markings</NuxtLink> and <NuxtLink to="/services/signage-installation" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">signage</NuxtLink>.
          </p>
          <p class="mb-6">
            In Charleston, we serve the schools, medical clinics and local businesses that the community relies on every day, plus the properties along Highway 22. For these lots, accessible parking matters most, so we make sure accessible stalls, access aisles, signs and routes to the entrance meet current requirements, and we time school projects for breaks so lots are ready when students return.
          </p>
          <p class="mb-8">
            Every Charleston project starts with a lot assessment and a reply within one business day. We analyze accessible parking, drop-off zones and walkways, confirm what needs to change to meet code, then give you a clear scope and price. Our crew completes the work on schedule and finishes with a walkthrough so you know exactly what was done.
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
            <p class="text-sm">Fast scheduling for Charleston and all of Franklin County.</p>
          </div>
        </div>
      </div>
      <hr class="border-primary-300 dark:border-primary-500" />

      <div>
        <ServiceListLite />
        <ProcessSection />
      </div>
      <NearbyAreas slug="charleston" />
    </div>
  </div>
</template>
