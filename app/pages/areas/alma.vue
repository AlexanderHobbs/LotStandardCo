<script setup lang="ts">
import siteMeta from "@/site";
import NearbyAreas from "~/components/heroSections/areas/NearbyAreas.vue";
import AreaHero from "~/components/heroSections/hero/AreaHero.vue";
import TrustBar from "~/components/heroSections/trust/TrustBar.vue";
import ServiceListLite from "~/components/heroSections/services/ServiceListLite.vue";
import ProcessSection from "~/components/heroSections/process/ProcessSection.vue";
import MiniDivider from "~/components/heroSections/divider/MiniDivider.vue";

const town = {
  slug: "alma",
  name: "Alma",
  countySlug: "crawford",
  countyName: "Crawford County",
  blurb:
    "Heavy-duty striping and signage for Alma warehouses, distribution yards and commercial lots.",
  focus: ["Warehouses", "Distribution yards", "Signage"],
};
const county = { name: town.countyName };

usePageSeo({
  title: "Parking Lot Striping in Alma",
  description:
    "Parking lot striping in Alma, AR. Line striping, sealcoating, floor marking and ADA markings for Crawford County warehouses and distribution yards.",
  keywords:
    "Alma AR parking lot striping, Alma sealcoating, Alma warehouse floor marking, Crawford County line striping, Alma ADA parking markings, pavement marking Crawford County Arkansas",
});

useSchemaOrg([
  {
    // This page describes the service in one town. The business itself is the
    // site-wide LocalBusiness (#identity), referenced as the provider, so Google
    // sees one business serving many towns rather than a business per town.
    '@type': 'Service',
    name: `Parking Lot Striping in ${town.name}, AR`,
    serviceType: 'Parking lot striping and pavement maintenance',
    url: `${siteMeta.url}/areas/alma`,
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
      { name: "Home", item: "/" },
      { name: "Areas We Cover", item: "/areas" },
      { name: "Alma" },
    ],
  }),
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
            Crawford County pavement solutions
          </p>
          <h2 class="mb-4 text-2xl font-bold md:!text-3xl">
            Your Trusted Pavement Expert in {{ town.name }}
          </h2>
          <p class="mb-6">
            We serve Alma and Crawford County with the heavy-duty work high-traffic lots demand. Our crews handle <NuxtLink to="/services/warehouse-floor-marking" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">warehouse floor marking</NuxtLink>, truck-lane and loading-zone <NuxtLink to="/services/line-striping" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">line striping</NuxtLink>, and <NuxtLink to="/services/safety-markings" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">safety markings</NuxtLink> for yards and docks, all planned with you before the first line is painted.
          </p>
          <p class="mb-6">
            To protect the investment, we pair striping with <NuxtLink to="/services/sealcoating" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">sealcoating</NuxtLink> and crack sealing, add code-compliant <NuxtLink to="/services/ada-compliance-marking" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">ADA markings</NuxtLink> and <NuxtLink to="/services/signage-installation" class="font-medium underline underline-offset-2 hover:text-primary-600 dark:hover:text-primary-200">signage</NuxtLink>, and schedule the work around your operations so deliveries and shifts keep moving.
          </p>
          <p class="mb-6">
            In Alma, we serve the warehouses, distribution yards and truck stops near the I-40 and I-49 junction, as well as the downtown businesses, churches and schools that make up the rest of town. Freight sites get durable traffic paint focused on the high-wear spots like entrances, docks and fuel islands, and smaller local lots get the same careful layout and attention, sized to the job.
          </p>
          <p class="mb-8">
            Every Alma project starts with a lot assessment and a reply within one business day. We analyze the property, confirm truck routes, dock access and fire lanes, then give you a clear scope and price. Our crew completes the work on schedule and finishes with a walkthrough so you know exactly what was done.
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
            <p class="text-sm">Fast scheduling for Alma and all of Crawford County.</p>
          </div>
        </div>
      </div>
      <hr class="border-primary-300 dark:border-primary-500" />
      <div>
        <ServiceListLite />
        <ProcessSection />
      </div>
      <NearbyAreas slug="alma" />
    </div>
  </div>
</template>
