<script setup lang="ts">
  definePageMeta({
    title: "Striping Franchise Opportunities",
    description:
      "Lot Standard Co franchise opportunities are coming soon. Check back for details on bringing our parking lot striping model to your market.",
  })

  // "Coming soon" stub: keep it out of search results until it has real content.
  // A page-level noindex (not a robots.txt block) so Google can still read the tag.
  useRobotsRule('noindex, follow')
</script>
<template>
  <section
    class="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center"
  >
    <p class="mb-2 text-sm font-medium md:text-base lg:text-lg uppercase text-primary-600">Coming Soon</p>
    <h1 class="mb-4 capitalize">Franchise Opportunities</h1>
    <p class="mb-8 max-w-xl text-neutral-600">
      We're putting together franchise opportunities with Lot Standard Co.
      Check back soon for details.
    </p>
    <BaseButton to="/">Back to Home</BaseButton>
  </section>
</template>
