<script setup lang="ts">
  definePageMeta({
    title: "Parking Lot Maintenance Tips & Guides",
    description: "Parking lot maintenance tips and guides from Lot Standard Co: striping, sealcoating, ADA compliance and floor marking for Arkansas businesses.",
    navOrder: 5,
    type: 'secondary',
    icon: 'i-mdi-post-outline',
  })
</script>
<template>
  <div class="pb-12">
    <TheHeader>
      <span
        class="logo-mark mb-2 block h-10 w-10 bg-current sm:h-12 sm:w-12"
        role="img"
        aria-label="Lot Standard Co logo"
      />
      <h1 class="text-3xl sm:text-4xl">Parking Lot Maintenance Tips & Guides</h1>
      <p class="mt-1 text-sm font-medium md:text-base lg:text-lg">
        Advice on striping, sealcoating and ADA compliance from the Lot Standard Co team.
      </p>
    </TheHeader>
    <BlogList />
  </div>
</template>
<style scoped>
  .logo-mark {
    -webkit-mask: url('/logo-icon-mark.png') center / contain no-repeat;
    mask: url('/logo-icon-mark.png') center / contain no-repeat;
  }
</style>
