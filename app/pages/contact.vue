<script setup lang="ts">
  import siteMeta from '@/site'

  definePageMeta({
    title: "Contact Us for a Free Parking Lot Quote",
    description:
      "Request a free quote for parking lot sealcoating, crack filling, restriping or ADA striping in the River Valley & Northwest Arkansas. Call or write us.",
    navOrder: 6,
    type: 'secondary',
    icon: 'i-mdi-email-outline',
    tags: ['free quote', 'parking lot sealcoating quote', 'parking lot striping quote', 'contact us'],
  })

  const { phone, phoneDisplay, email } = siteMeta.business
</script>
<template>
  <div class="container mx-auto px-4 py-12">
    <div class="mx-auto text-center w-full lg:w-7/12">
      <p class="mb-2 text-sm font-medium md:text-base lg:text-lg text-primary-600 dark:text-primary-200 uppercase eyebrow-dash">
        Contact Us
      </p>
      <h1 class="capitalize mt-3 text-2xl md:text-3xl lg:text-4xl">
        Get a Free Parking Lot Quote
      </h1>
      <p class="mt-4">
        Tell us a bit about your property and what you need, and we'll get back
        to you within one business day.
      </p>
    </div>

    <div class="-mx-4 flex flex-wrap mt-12">
      <div class="p-4 w-full lg:w-5/12">
        <h2 class="font-bold mb-4 !text-base md:!text-lg lg:!text-xl">Get In Touch</h2>
        <ul class="space-y-4">
          <li class="flex items-center">
            <BaseIcon name="i-mdi-phone-outline" height="24px" class="mr-3" />
            <NuxtLink :to="`tel:${phone}`">{{ phoneDisplay }}</NuxtLink>
          </li>
          <li class="flex items-center">
            <BaseIcon name="i-mdi-email-outline" height="24px" class="mr-3" />
            <NuxtLink :to="`mailto:${email}`">{{ email }}</NuxtLink>
          </li>
          <li class="flex items-center">
            <BaseIcon
              name="i-mdi-map-marker-outline"
              height="24px"
              class="mr-3"
            />
            <span>Proudly serving the River Valley &amp; Northwest Arkansas</span>
          </li>
        </ul>
      </div>

      <div class="p-4 w-full lg:w-7/12">
        <QuoteForm />
      </div>
    </div>
  </div>
</template>
