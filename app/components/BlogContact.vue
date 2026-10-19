<script setup lang="ts">
  import siteMeta from '@/site'

  const { business, socials } = siteMeta
</script>
<template>
  <aside
    aria-label="Contact Lot Standard Co"
    class="h-fit rounded-3xl border border-primary-200 bg-white/80 p-6 shadow-lg dark:border-primary-700 dark:bg-neutral-900/80 lg:sticky lg:top-28"
  >
    <h2 class="mb-1 font-bold !text-base md:!text-lg lg:!text-xl">Contact Us</h2>
    <p class="mb-5 text-sm text-primary-600 dark:text-primary-200">
      Questions about your lot? We're happy to help.
    </p>

    <ul class="space-y-3">
      <li>
        <a
          :href="`tel:${business.phone}`"
          class="flex items-center gap-3 hover:text-primary-600"
        >
          <BaseIcon name="i-mdi-phone-outline" height="22px" class="shrink-0 !text-primary-600" />
          {{ business.phoneDisplay }}
        </a>
      </li>
      <li>
        <a
          :href="`mailto:${business.email}`"
          class="flex items-center gap-3 text-[15px] hover:text-primary-600"
        >
          <BaseIcon name="i-mdi-email-outline" height="22px" class="shrink-0 !text-primary-600" />
          {{ business.email }}
        </a>
      </li>
    </ul>

    <div class="mt-6 border-t border-primary-200 pt-5 dark:border-primary-700">
      <p class="mb-3 text-sm font-semibold uppercase tracking-wide">
        Follow Us
      </p>
      <ul class="flex gap-3">
        <li v-for="social in socials" :key="social.name">
          <a
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.name"
            :style="{ '--brand': social.color }"
            class="social-link flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--brand)] shadow ring-1 ring-primary-200 transition hover:-translate-y-0.5 hover:bg-[var(--brand)] hover:text-white dark:ring-primary-700"
          >
            <BaseIcon :name="social.icon" height="20px" />
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>
