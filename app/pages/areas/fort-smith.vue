<script setup lang="ts">
  import siteMeta from '@/site'
  import NearbyAreas from '~/components/heroSections/areas/NearbyAreas.vue'
  import AreaHero from '~/components/heroSections/hero/AreaHero.vue'
import TrustBar from "~/components/heroSections/trust/TrustBar.vue";
  import ServiceListLite from '~/components/heroSections/services/ServiceListLite.vue'
  import ProcessSection from '~/components/heroSections/process/ProcessSection.vue'

  const town = {
    slug: 'fort-smith',
    name: 'Fort Smith',
    countySlug: 'sebastian',
    countyName: 'Sebastian County',
    blurb:
      'Our largest western hub. Striping, sealcoating and safety markings for shopping centers, apartments and industrial sites.',
    focus: ['Shopping centers', 'Apartments', 'Industrial sites'],
  }
  const county = { name: town.countyName }

  usePageSeo({
    title: 'Parking Lot Striping in Fort Smith',
    description:
      "Parking lot striping in Fort Smith, AR. Line striping, sealcoating and ADA markings for Sebastian County shopping centers and industrial sites.",
    keywords:
      "Fort Smith parking lot striping, Fort Smith sealcoating, Fort Smith ADA parking markings, Sebastian County line striping, Fort Smith industrial pavement marking, apartment complex striping Fort Smith AR",
  })

  useSchemaOrg([
    {
      // This page describes the service in one town. The business itself is the
      // site-wide LocalBusiness (#identity), referenced as the provider, so Google
      // sees one business serving many towns rather than a business per town.
      '@type': 'Service',
      name: `Parking Lot Striping in ${town.name}, AR`,
      serviceType: 'Parking lot striping and pavement maintenance',
      url: `${siteMeta.url}/areas/fort-smith`,
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
        { name: 'Fort Smith' },
      ],
    }),
  ])
</script>

<template>
  <div class="py-12 bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100">
    <div class="container mx-auto px-4">
      <AreaHero
        eyebrow="Parking Lot Striping in Fort Smith, Sebastian County"
        title="Professional Pavement Marking & Maintenance in Fort Smith, AR"
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
            We serve Fort Smith and Sebastian County properties of every size, from shopping centers to apartment communities and industrial sites. Our crews restripe with <NuxtLink to="/services/line-striping" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">line striping</NuxtLink>, renew <NuxtLink to="/services/ada-compliance-marking" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">ADA markings</NuxtLink>, and add <NuxtLink to="/services/safety-markings" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">safety markings</NuxtLink> for walkways, fire lanes and truck routes.
          </p>
          <p class="mb-6">
            Owners with multiple locations can combine properties on one schedule and one invoice. We protect each lot with <NuxtLink to="/services/sealcoating" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">sealcoating</NuxtLink> and crack sealing, and handle <NuxtLink to="/services/warehouse-floor-marking" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">floor marking</NuxtLink> and <NuxtLink to="/services/signage-installation" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">signage</NuxtLink> so one crew covers everything.
          </p>
          <p class="mb-6">
            In Fort Smith, we work with shopping centers and restaurants along the Rogers Avenue corridor, apartment communities across the city, and the industrial and commercial sites growing out at Chaffee Crossing. Whether your lot sees steady shopper traffic or delivery trucks coming off I-49, we lay out stalls, fire lanes and truck routes that fit how the property is actually used, and we keep busy retail lots on a restriping and sealcoating schedule so the hot summers don't wear them down.
          </p>
          <p class="mb-8">
            Every Fort Smith project starts with a lot assessment and a reply within one business day. We analyze each property, document the areas that need attention first, then give you a clear scope, price and a schedule that fits your tenants. Our crew keeps you informed and finishes with a walkthrough so you know exactly what was done.
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
            <p class="text-sm">Fast scheduling for Fort Smith and all of Sebastian County.</p>
          </div>
        </div>
      </div>
      <hr class="border-primary-300 dark:border-primary-500" />

      <div>
        <ServiceListLite />
        <ProcessSection />
      </div>
      <NearbyAreas slug="fort-smith" />
    </div>
  </div>
</template>
