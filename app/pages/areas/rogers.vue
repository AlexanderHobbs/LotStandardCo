<script setup lang="ts">
  import siteMeta from '@/site'
  import NearbyAreas from '~/components/heroSections/areas/NearbyAreas.vue'
  import AreaHero from '~/components/heroSections/hero/AreaHero.vue'
import TrustBar from "~/components/heroSections/trust/TrustBar.vue";
  import ServiceListLite from '~/components/heroSections/services/ServiceListLite.vue'
  import ProcessSection from '~/components/heroSections/process/ProcessSection.vue'

  const town = {
    slug: 'rogers',
    name: 'Rogers',
    countySlug: 'benton',
    countyName: 'Benton County',
    blurb:
      'Medical plazas, retail centers and multi-tenant properties in Rogers, striped on your schedule.',
    focus: ['Medical plazas', 'Retail centers', 'Multi-tenant'],
  }
  const county = { name: town.countyName }

  usePageSeo({
    title: 'Parking Lot Striping in Rogers',
    description:
      "Parking lot striping in Rogers, AR. Line striping, ADA markings and sealcoating for Benton County medical plazas and multi-tenant retail centers.",
    keywords:
      "Rogers AR parking lot striping, Rogers Arkansas sealcoating, Benton County line striping, medical plaza parking lot striping Rogers, multi-tenant parking lot striping Rogers AR, Pinnacle Hills striping",
  })

  useSchemaOrg([
    {
      // This page describes the service in one town. The business itself is the
      // site-wide LocalBusiness (#identity), referenced as the provider, so Google
      // sees one business serving many towns rather than a business per town.
      '@type': 'Service',
      name: `Parking Lot Striping in ${town.name}, AR`,
      serviceType: 'Parking lot striping and pavement maintenance',
      url: `${siteMeta.url}/areas/rogers`,
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
        { name: 'Rogers' },
      ],
    }),
  ])
</script>

<template>
  <div class="py-12 bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100">
    <div class="container mx-auto px-4">
      <AreaHero
        eyebrow="Parking Lot Striping in Rogers, Benton County"
        title="Professional Pavement Marking & Maintenance in Rogers, AR"
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
            Benton County pavement solutions
          </p>
          <h2 class="mb-4 text-2xl font-bold md:!text-3xl">
            Your Trusted Pavement Expert in {{ town.name }}
          </h2>
          <p class="mb-6">
            We serve Rogers and Benton County medical plazas, shopping centers and multi-tenant properties with <NuxtLink to="/services/line-striping" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">line striping</NuxtLink> planned around patients, tenants and deliveries. We keep <NuxtLink to="/services/ada-compliance-marking" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">ADA parking</NuxtLink> current and mark reserved and drop-off stalls clearly.
          </p>
          <p class="mb-6">
            We protect the surface with <NuxtLink to="/services/sealcoating" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">sealcoating</NuxtLink> and crack sealing on a maintenance schedule, and add <NuxtLink to="/services/safety-markings" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">fire lane and directional markings</NuxtLink> and <NuxtLink to="/services/signage-installation" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">signage</NuxtLink>, so every tenant's customers see a well-kept lot.
          </p>
          <p class="mb-6">
            In Rogers, we serve the medical offices and clinics around Mercy Hospital, the shopping and office properties in Pinnacle Hills, and multi-tenant plazas along the I-49 corridor. These lots have to work for patients, employees and deliveries at the same time, so we pay close attention to accessible parking near entrances, drop-off zones and reserved tenant stalls, and keep fire lanes and directional arrows sharp so visitors find their way.
          </p>
          <p class="mb-8">
            Every Rogers project starts with a lot assessment and a reply within one business day. We analyze the property, note tenant and patient needs, then give you a clear scope and price. Our crew coordinates timing with your property manager and finishes with a walkthrough so you know exactly what was done.
          </p>
          <BaseButton size="lg" to="/contact" color="cta"
            >Request a Quote</BaseButton
          >
        </div>
        <NuxtImg
          src="/images/services/line-striping.jpg"
          :alt="`Fresh parking lot striping in ${town.name}, Arkansas`"
          width="960"
          height="780"
          format="webp"
          fit="outside"
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
            <p class="text-sm">Fast scheduling for Rogers and all of Benton County.</p>
          </div>
        </div>
      </div>
      <hr class="border-primary-300 dark:border-primary-500" />

      <div>
        <ServiceListLite />
        <ProcessSection />
      </div>
      <NearbyAreas slug="rogers" />
    </div>
  </div>
</template>
