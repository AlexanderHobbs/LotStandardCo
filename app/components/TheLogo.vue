<script setup lang="ts">
import siteMeta from "@/site";

const { title } = siteMeta;
</script>

<template>
  <NuxtLink
    class="flex items-center gap-3 sm:gap-4"
    to="/"
    :aria-label="`${title} home`"
  >
    <!-- Logo mark: the white "Logo Icon" PNG used as a mask so it takes the text color -->
    <span
      class="logo-mark block h-10 w-10 shrink-0 bg-secondary-500 sm:h-12 sm:w-12"
      role="img"
      :aria-label="`${title} logo mark`"
    />

    <span
      class="text-2xl font-bold leading-none tracking-tight text-secondary-500 sm:text-3xl"
    >
      {{ title }}
    </span>
  </NuxtLink>
</template>

<style scoped>
.logo-mark {
  -webkit-mask: url('/logo-icon-mark.png') center / contain no-repeat;
  mask: url('/logo-icon-mark.png') center / contain no-repeat;
}
</style>
