<script setup lang="ts">
import WhatSetsUsApart from "@/components/heroSections/about/WhatSetsUsApart.vue";
import siteMeta from "@/site";

const { phone, phoneDisplay } = siteMeta.business;
definePageMeta({
  title: "About Our Fort Smith Striping Company",
  description:
    "Licensed, insured and locally owned parking lot striping and pavement maintenance company in Fort Smith, AR, serving western and northwest Arkansas.",
  navOrder: 4,
  type: "secondary",
  icon: "i-mdi-information-outline",
  tags: [
    "parking lot striping company",
    "licensed and insured",
    "pavement maintenance contractor",
  ],
});

const ownersImage = "/images/owners.jpg";
const equipmentImage = "/images/equipment.jpg";

const values = [
  {
    icon: "i-mdi-message-text-outline",
    title: "Communication",
    description:
      "Clear quotes, honest timelines, and quick replies from the first estimate to the final line.",
  },
  {
    icon: "i-mdi-handshake-outline",
    title: "Character",
    description:
      "We do what we say, price jobs fairly, and treat your property like it's our own.",
  },
  {
    icon: "i-mdi-shield-check-outline",
    title: "Confidence",
    description:
      "Fully licensed and insured, with experienced crews, so you can hire us with peace of mind.",
  },
  {
    icon: "i-mdi-check-decagram-outline",
    title: "Consistency",
    description:
      "Consistent results on every job, built to meet code requirements and partner satisfaction.",
  },
];
</script>
<template>
  <div
    class="bg-primary-100 text-primary-900 dark:bg-primary-700 dark:text-primary-100"
  >
    <section class="container mx-auto px-4 py-12">
      <div class="mx-auto text-center w-full lg:w-8/12">
        <p
          class="mb-2 text-sm font-medium uppercase text-primary-600 dark:text-primary-200 md:text-base lg:text-lg"
        >
          About Us
        </p>
        <h1 class="capitalize mt-3 text-2xl md:text-3xl lg:text-4xl">
          Building a New Standard
        </h1>
        <p class="mt-4">
          Lot Standard Co was built upon a simple belief that parking lots
          signal more to customers than one would think. We made it our goal to
          help property managers appeal the moment someone enters their
          premises. We dedicated ourselves to being the pavement maintenance
          partner who stays true to their word, understand the value of time,
          and does every job with precision and efficiency.
        </p>
      </div>
    </section>

    <section class="container mx-auto px-4 py-12">
      <!-- Section heading for screen readers and search engines, so the value
           cards (h3) sit under an h2 instead of jumping straight from the h1. -->
      <h2 class="sr-only">Our Values</h2>
      <div class="-mx-4 flex flex-wrap">
        <div
          v-for="(value, index) in values"
          :key="index"
          class="p-4 w-full sm:w-1/2 lg:w-1/4"
        >
          <div
            class="h-full p-6 rounded-3xl text-center bg-neutral-50 shadow-xl dark:bg-neutral-900"
          >
            <BaseIcon
              :name="value.icon"
              height="36px"
              class="mb-3 mx-auto !text-primary-600"
            />
            <h3 class="font-bold mb-2 !text-base md:!text-lg lg:!text-xl">
              {{ value.title }}
            </h3>
            <p class="text-sm">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto px-4 py-12">
      <div class="-mx-4 flex flex-wrap items-center">
        <div class="p-4 w-full lg:order-last lg:w-5/12">
          <NuxtImg
            :src="ownersImage"
            width="800"
            height="1000"
            format="webp"
            fit="outside"
            loading="lazy"
            class="aspect-[4/5] w-full rounded-3xl object-cover object-[50%_30%] shadow-xl"
            alt="The owners of Lot Standard Co standing together outdoors"
          />
        </div>
        <div class="mx-auto p-4 w-full lg:w-6/12">
          <p
            class="mb-2 text-sm font-medium uppercase text-primary-600 dark:text-primary-200 md:text-base lg:text-lg"
          >
            The People Behind The Work
          </p>
          <h2 class="capitalize mb-4 !text-2xl md:!text-3xl lg:!text-4xl">
            Meet Your Owners
          </h2>
          <p class="mb-4">
            Lot Standard Co is locally owned and operated, and the people who
            own it are the people who answer your call. We started the company
            because we care about how our city looks and how your business
            performs. We live a life of quality, consistency, and extreme
            ownership; and that translates directly into how we run our company.
          </p>
          <p class="mb-4">
            Every project reflects our name. We walk each property ourselves,
            keep our crews to a high standard, and treat every lot like it is
            our own, because for the families and businesses who rely on it, it
            is part of their livelihood.
          </p>
          <p class="mb-6 font-medium">
            Thank you for trusting us with your property.
          </p>
          <div class="flex flex-wrap items-center gap-4">
            <BaseButton size="xl" color="cta" to="/contact">
              Talk To Us
            </BaseButton>
            <NuxtLink
              :to="`tel:${phone}`"
              class="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium ring-2 ring-inset ring-primary-600/70 transition-colors duration-300 ease-in-out hover:bg-primary-600/10 dark:ring-primary-200/70 dark:hover:bg-primary-200/10"
            >
              <BaseIcon name="i-mdi-phone-outline" height="20px" />
              {{ phoneDisplay }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto px-4 py-12">
      <div class="-mx-4 flex flex-wrap items-center">
        <div class="p-4 w-full lg:w-5/12">
          <NuxtImg
            :src="equipmentImage"
            width="800"
            height="1000"
            format="webp"
            fit="outside"
            loading="lazy"
            class="aspect-[4/5] w-full rounded-3xl object-cover shadow-xl"
            alt="Lot Standard Co line striping machine and sealcoating equipment"
          />
        </div>
        <div class="mx-auto p-4 w-full lg:w-6/12">
          <p
            class="mb-2 text-sm font-medium uppercase text-primary-600 dark:text-primary-200 md:text-base lg:text-lg"
          >
            Our Equipment
          </p>
          <h2 class="capitalize mb-4 !text-2xl md:!text-3xl lg:!text-4xl">
            Modern Equipment, Smarter Technology
          </h2>
          <p class="mb-4">
            We invest in modern striping and sealcoating equipment so every job
            gets crisp lines, even coverage, and a fast cure time, minimizing
            disruption to your property.
          </p>
          <p class="mb-6">
            Behind the equipment is technology that makes the whole process
            smoother. Laser line projection gives us precise, code-compliant
            layouts before any paint goes down. Digital quotes get you clear
            pricing quickly, and our in-house CRM keeps your project, schedule,
            and history organized from first call to final walkthrough.
            AI-powered tools help us respond faster and plan smarter, so you get
            accurate results with fewer delays.
          </p>
          <BaseButton size="xl" color="cta" to="/contact">
            Request a Quote
          </BaseButton>
        </div>
      </div>
    </section>

    <WhatSetsUsApart />
  </div>
</template>
