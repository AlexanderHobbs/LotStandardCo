<script setup lang="ts">
import siteMeta from "@/site";
import NearbyAreas from "~/components/heroSections/areas/NearbyAreas.vue";
import AreaHero from "~/components/heroSections/hero/AreaHero.vue";
import TrustBar from "~/components/heroSections/trust/TrustBar.vue";
import ServiceSection from "~/components/heroSections/services/ServiceSection.vue";
import ProcessSection from "~/components/heroSections/process/ProcessSection.vue";

const town = {
  name: "Alma",
  countyName: "Crawford County",
};

usePageSeo({
  title: "Parking Lot Striping in Alma, AR",
  description:
    "Parking lot striping in Alma, AR. Sealcoating, patching, restriping and crack filling for Crawford County warehouses and distribution yards.",
  keywords:
    "Alma AR parking lot striping, Alma sealcoating, Alma pothole repair, Crawford County line striping, Alma ADA parking markings, pavement marking Crawford County Arkansas",
});

useSchemaOrg([
  {
    // This page describes the service in one town. The business itself is the
    // site-wide LocalBusiness (#identity), referenced as the provider, so Google
    // sees one business serving many towns rather than a business per town.
    '@type': 'Service',
    name: `Parking Lot Striping in ${town.name}, AR`,
    serviceType: 'Parking lot striping and pavement maintenance',
    url: `${siteMeta.url}/areas/alma/`,
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
]);
</script>

<template>
  <div
    class="py-12 bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100"
  >
    <div class="container mx-auto px-4">
      <AreaHero
        eyebrow="Parking Lot Striping in Alma, Crawford County"
        title="Professional Pavement Marking & Maintenance in Alma, AR"
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
            Crawford County pavement solutions
          </p>
          <h2 class="mb-4 text-2xl font-bold md:!text-3xl">
            Your Trusted Pavement Expert in {{ town.name }}
          </h2>
          <p class="mb-6">
            We serve Alma and Crawford County with the heavy-duty work high-traffic lots demand. Our crews handle truck-lane and loading-zone <NuxtLink to="/services/restriping/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">restriping</NuxtLink>, <NuxtLink to="/services/patching-potholes/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">pothole and pavement patching</NuxtLink> where heavy trucks have broken down the surface, and <NuxtLink to="/services/crack-filling/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">crack filling</NuxtLink> for yards and docks, all planned with you before the first line is painted.
          </p>
          <p class="mb-0">
            To protect the investment, we pair striping with <NuxtLink to="/services/sealcoating/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">sealcoating</NuxtLink> and our <NuxtLink to="/services/full-package/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">full repair-seal-stripe package</NuxtLink>, add code-compliant <NuxtLink to="/services/new-layout-ada-striping/" class="font-medium hover:text-primary-600 dark:hover:text-primary-200">ADA striping</NuxtLink> and new layouts, and schedule the work around your operations so deliveries and shifts keep moving.
          </p>
        </div>
        <QuoteForm />
      </div>

      <!-- Second half of the copy beside the photo -->
      <div class="grid items-center gap-8 pt-20 lg:grid-cols-2 lg:gap-12">
        <AreaPhoto
          src="/area-photos/alma.jpg"
          :alt="`Aerial view of a parking lot with fresh white stall lines, directional arrows and a light pole - parking lot striping in ${town.name}, Arkansas`"
        />
        <div>
          <p
            class="mb-2 text-sm font-medium uppercase text-primary-600 dark:text-primary-200 md:text-base eyebrow-dash"
          >
            Our Work in {{ town.name }}
          </p>
          <h2 class="mb-4 text-2xl font-bold md:!text-3xl">
            Heavy-Duty Striping for Alma's Lots
          </h2>
          <p class="mb-6">
            In Alma, we serve the warehouses, distribution yards and truck stops near the I-40 and I-49 junction, as well as the downtown businesses, churches and schools that make up the rest of town. Freight sites get durable traffic paint focused on the high-wear spots like entrances, docks and fuel islands, and smaller local lots get the same careful layout and attention, sized to the job.
          </p>
          <p class="mb-8">
            Every Alma project starts with a lot assessment and a reply within one business day. We analyze the property, confirm truck routes, dock access and fire lanes, then give you a clear scope and price. Our crew completes the work on schedule and finishes with a walkthrough so you know exactly what was done.
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
          <p class="text-sm">Fast scheduling for Alma and all of Crawford County.</p>
        </div>
      </div>
      <hr class="border-primary-300 dark:border-primary-500" />
      <div>
        <ServiceSection plain class="-mx-4" />
        <hr class="border-primary-300 dark:border-primary-500" />
        <ProcessSection background="white" />
      </div>
      <NearbyAreas slug="alma" />
    </div>
  </div>
</template>
