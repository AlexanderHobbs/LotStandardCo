<script setup lang="ts">
import siteMeta from "@/site";

const { phone, phoneDisplay, email, addressDisplay, hoursDisplay } =
  siteMeta.business;
const { socials } = siteMeta;

</script>
<template>
  <footer class="pt-12">
    <ServiceAreaMap />
    <div class="container mx-auto px-8">
      <div class="flex flex-wrap justify-between gap-y-8 gap-x-6 relative">
        <div
          class="-mx-4 flex flex-col flex-wrap items-center pl-4 pr-8 py-4 md:flex-col md:flex-nowrap -mt-4 lg:items-start md:flex-[2]"
        >
          <TheLogo />
          <p class="mt-2 text-center w-full lg:text-left">
            Professional line striping, sealcoating, and parking lot maintenance
            you can count on.
          </p>
          <ul class="mt-6 mb-2 flex gap-3">
            <li v-for="social in socials" :key="social.name">
              <a
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`Lot Standard Co on ${social.name}`"
                :style="{ '--brand': social.color }"
                class="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand)] text-white shadow transition hover:-translate-y-0.5 hover:brightness-110"
              >
                <BaseIcon
                  :name="social.icon"
                  height="20px"
                  class="!text-white"
                />
              </a>
            </li>
          </ul>
        </div>
        <div
          class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 lg:items-start"
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
          class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 lg:items-start"
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
          class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 lg:items-start"
        >
          <p class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            Contact Us
          </p>
          <ul class="text-center sm:whitespace-nowrap lg:mt-2 lg:text-left">
            <li class="mb-4">
              <NuxtLink
                :to="`tel:${phone}`"
                class="hover:text-primary-600 dark:text-primary-200"
                >{{ phoneDisplay }}</NuxtLink
              >
            </li>
            <li class="mb-4">
              <NuxtLink
                :to="`mailto:${email}`"
                class="hover:text-primary-600 dark:text-primary-200"
                >{{ email }}</NuxtLink
              >
            </li>
            <li class="mb-4">{{ addressDisplay }}</li>
            <li class="mb-4">{{ hoursDisplay }}</li>
          </ul>
        </div>
        <div class="flex w-full flex-col items-center">
          <hr class="mb-4 w-full opacity-25" />
          <p class="py-1 text-center text-sm">
            &copy; {{ new Date().getFullYear() }}. All Rights Reserved - Lot
            Standard Co
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped></style>
