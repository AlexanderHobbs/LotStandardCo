<script setup lang="ts">
  import siteMeta from '@/site'

  const { phone, phoneDisplay, email, addressDisplay, hoursDisplay } =
    siteMeta.business

  // The Areas page shows the map in its body, so skip the footer copy there.
  const route = useRoute()
</script>
<template>
  <footer class="pt-12">
    <ServiceAreaMap />
    <div class="container mx-auto px-8">
      <div class="flex flex-wrap relative">
        <div
          class="-mx-4 flex flex-col flex-wrap items-center pl-4 pr-8 py-4 md:flex-col md:flex-nowrap -mt-4 lg:items-start lg:w-1/3"
        >
          <NuxtLink class="-ml-6" to="/">
            <div to="/" class="font-serif inline-flex items-center text-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.5em"
                height="2.5em"
                viewBox="0 0 24 24"
                fill="none"
                class="mr-2"
              >
                <rect x="1" y="8" width="22" height="8" rx="1" fill="#6c7e82" />
                <rect x="3" y="11" width="4" height="2" fill="#ffffff" />
                <rect x="10" y="11" width="4" height="2" fill="#ffffff" />
                <rect x="17" y="11" width="4" height="2" fill="#ffffff" />
              </svg>
              <p class="font-serif inline-flex items-center text-3xl">
                Lot Standard Co
              </p>
            </div>
          </NuxtLink>
          <p class="mt-2 text-center w-full lg:text-left">
            Professional line striping, sealcoating, and parking lot maintenance
            you can count on.
          </p>
          <div class="my-6 text-center">
            <NuxtLink :to="`tel:${phone}`">{{ phoneDisplay }}</NuxtLink>
            <br />
            <NuxtLink :to="`mailto:${email}`">{{ email }}</NuxtLink>
            <br />
            <span>{{ addressDisplay }}</span>
            <br />
            <span>{{ hoursDisplay }}</span>
          </div>
        </div>
        <div
          class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 md:w-1/3 lg:items-start"
        >
          <p class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            Company
          </p>
          <ul class="text-center lg:mt-2 lg:text-left">
            <li class="mb-4">
              <NuxtLink
                to="/"
                class="hover:text-primary-600 dark:text-primary-200"
                >Home</NuxtLink
              >
            </li>
            <li class="mb-4">
              <NuxtLink
                to="/services"
                class="hover:text-primary-600 dark:text-primary-200"
                >Services</NuxtLink
              >
            </li>
            <li class="mb-4">
              <NuxtLink
                to="/about"
                class="hover:text-primary-600 dark:text-primary-200"
                >About</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div
          class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 md:w-1/3 lg:items-start"
        >
          <p class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            Resources
          </p>
          <ul class="text-center lg:mt-2 lg:text-left">
            <li class="mb-4">
              <NuxtLink
                to="/blog"
                class="hover:text-primary-600 dark:text-primary-200"
                >Blog</NuxtLink
              >
            </li>
            <li class="mb-4">
              <NuxtLink
                to="/areas"
                class="hover:text-primary-600 dark:text-primary-200"
                >Areas We Cover</NuxtLink
              >
            </li>
            <li class="mb-4">
              <NuxtLink
                to="/contact"
                class="hover:text-primary-600 dark:text-primary-200"
                >Contact Us</NuxtLink
              >
            </li>
            <li class="mb-4">
              <NuxtLink
                to="/contact"
                class="hover:text-primary-600 dark:text-primary-200"
                >Get A Free Quote</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div
          class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 md:w-1/3 lg:items-start"
        >
          <p class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            Service Area
          </p>
          <p class="text-center lg:mt-2 lg:text-left">
            Proudly serving commercial and residential properties in Logan,
            Franklin, Sebastian, Crawford, Washington and Benton counties,
            Arkansas - from Booneville to Bentonville.
          </p>
        </div>
        <div class="flex flex-col sm:w-full md:items-end">
          <hr class="mb-4 opacity-25" />
          <p class="py-1 text-sm sm:text-center">
            &copy; {{ new Date().getFullYear() }}. All Rights Reserved -
            Lot Standard Co
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped></style>
