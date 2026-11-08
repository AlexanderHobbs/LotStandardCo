<script setup lang="ts">
  import siteMeta from '@/site'

  // Slim info strip above the navbar: hours, credentials and phone. Fixed at
  // the very top; the layout fades it out once the page scrolls and slides the
  // navbar up into its place.
  // White instead of the default light grey, for pages with a grey backdrop.
  defineProps<{ white?: boolean }>()

  const { phone, phoneDisplay, hoursDisplay, addressDisplay } = siteMeta.business
</script>

<template>
  <div
    class="h-10 border-b border-neutral-200 text-sm text-neutral-600 transition-colors duration-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
    :class="white ? 'bg-white' : 'bg-neutral-100'"
  >
    <div
      class="container mx-auto flex h-full items-center justify-between gap-x-4 px-4 sm:px-6"
    >
      <div class="flex min-w-0 items-center gap-x-4">
        <span class="whitespace-nowrap">{{ hoursDisplay }}</span>
        <span
          class="hidden h-4 w-px bg-neutral-300 dark:bg-neutral-700 md:block"
          aria-hidden="true"
        />
        <span class="hidden truncate md:block">
          Licensed &amp; Insured · {{ addressDisplay }}
        </span>
      </div>
      <a
        :href="`tel:${phone}`"
        class="whitespace-nowrap font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-300"
      >
        {{ phoneDisplay }}
      </a>
    </div>
  </div>
</template>
