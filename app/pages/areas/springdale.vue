<script setup lang="ts">
  import siteMeta from '@/site'
  import NearbyAreas from '~/components/heroSections/areas/NearbyAreas.vue'
  import AreaHero from '~/components/heroSections/hero/AreaHero.vue'
import TrustBar from "~/components/heroSections/trust/TrustBar.vue";
  import ServiceListLite from '~/components/heroSections/services/ServiceListLite.vue'
  import ProcessSection from '~/components/heroSections/process/ProcessSection.vue'

  const town = {
    slug: 'springdale',
    name: 'Springdale',
    countySlug: 'washington',
    countyName: 'Washington County',
    blurb:
      'ADA-compliant marking and full lot maintenance for Springdale business parks and industrial properties.',
    focus: ['Business parks', 'Industrial', 'ADA marking'],
  }
  const county = { name: town.countyName }

  usePageSeo({
    title: 'Parking Lot Striping in Springdale',
    description:
      "Parking lot striping in Springdale, AR. Line striping, safety markings and ADA compliance for Washington County business parks and industrial sites.",
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
      url: `${siteMeta.url}/areas/springdale`,
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
        { name: 'Springdale' },
      ],
    }),
  ])
</script>

<template>
  <div class="py-12 bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100">
    <div class="container mx-auto px-4">
      <AreaHero
        eyebrow="Parking Lot Striping in Springdale, Washington County"
        title="Professional Pavement Marking & Maintenance in Springdale, AR"
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
            Washington County pavement solutions
          </p>
          <h2 class="mb-4 text-2xl font-bold md:!text-3xl">
            Your Trusted Pavement Expert in {{ town.name }}
          </h2>
          <p class="mb-6">
            We serve Springdale and Washington County business parks and industrial sites with markings that work for trucks, forklifts and employees at once. Our crews handle <NuxtLink to="/services/line-striping" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">line striping</NuxtLink>, truck routes and <NuxtLink to="/services/safety-markings" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">pedestrian walkways and safety zones</NuxtLink>.
          </p>
          <p class="mb-6">
            We add <NuxtLink to="/services/warehouse-floor-marking" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">warehouse floor marking</NuxtLink> and <NuxtLink to="/services/ada-compliance-marking" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">ADA compliance</NuxtLink>, protect pavement with <NuxtLink to="/services/sealcoating" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">sealcoating</NuxtLink> and crack sealing, and install <NuxtLink to="/services/signage-installation" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">signage</NuxtLink>, scheduled so your operations keep running.
          </p>
          <p class="mb-6">
            In Springdale, we serve the food-processing plants, trucking companies, warehouses and business parks that run across the city, many of them operating around the clock. Markings here have to hold up to trucks, forklifts and shift changes, so we separate truck routes from pedestrian walkways, mark loading and staging areas clearly, and can stripe in sections overnight or on weekends so your facility keeps running.
          </p>
          <p class="mb-8">
            Every Springdale project starts with a lot assessment and a reply within one business day. We analyze truck, forklift and pedestrian flow across your site, then give you a clear scope and price. Our crew works around your operations and finishes with a walkthrough so you know exactly what was done.
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
            <p class="text-sm">Fast scheduling for Springdale and all of Washington County.</p>
          </div>
        </div>
      </div>
      <hr class="border-primary-300 dark:border-primary-500" />

      <div>
        <ServiceListLite />
        <ProcessSection />
      </div>
      <NearbyAreas slug="springdale" />
    </div>
  </div>
</template>
