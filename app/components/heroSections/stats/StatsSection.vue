<script setup lang="ts">
  const stats = [
    { value: '1', label: 'Standard For Every Lot' },
    { value: '1', label: 'Point Of Contact' },
    { value: '1 Day', label: 'Quote Turnaround' },
    { value: 'Aerial', label: 'Assessments & Digital Quotes' },
    { value: '100%', label: 'Projects Photo-Documented' },
    { value: 'Guaranteed', label: 'Satisfaction & Written Warranty' },
    { value: '100%', label: 'Licensed & Insured' },
    { value: 'Off-Hours', label: 'Flexible Scheduling' },
  ]
</script>
<template>
  <section class="relative isolate overflow-hidden bg-primary-950 text-white">
    <!-- Photo fills the whole section -->
    <NuxtImg
      src="/images/seal-coating-action-photo.png"
      width="1600"
      height="900"
      densities="x1"
      format="webp"
      loading="lazy"
      class="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      alt=""
      aria-hidden="true"
    />
    <!-- Dark overlay so the text and stat cards always read over the photo -->
    <div class="absolute inset-0 -z-10 bg-primary-950/75" aria-hidden="true" />
    <div class="container mx-auto px-4 py-16 md:py-24">
      <div class="max-w-2xl">
        <p
          class="mb-2 text-sm font-bold uppercase text-primary-200 md:text-base lg:text-lg eyebrow-dash"
        >
          Our promise to every property owner
        </p>
        <h2 class="capitalize mb-6 !text-2xl !text-white md:!text-3xl lg:!text-4xl">
          Built on Accountability
        </h2>
        <p class="text-neutral-100">
          We’re building our reputation one job at a time, with consistent,
          code-conscious results for commercial lots of every size. Here’s what
          you can count on.
        </p>
      </div>
      <!-- Full container width: 2 columns on phones, 4 across (two rows of four) from md up -->
      <div class="stats-grid mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="stat-card rounded-2xl border border-white/30 bg-white/20 p-4 backdrop-blur-md md:p-5"
          >
            <p
              class="mb-1 break-words text-2xl font-bold text-white md:text-2xl lg:text-3xl"
            >
              {{ stat.value }}
            </p>
            <p class="text-sm text-neutral-100 md:text-base">
              {{ stat.label }}
            </p>
          </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
  .stat-card {
    transition:
      opacity 0.3s ease,
      filter 0.3s ease,
      transform 0.3s ease,
      background-color 0.3s ease;
  }
  @media (hover: hover) {
    .stats-grid:has(.stat-card:hover) .stat-card:not(:hover) {
      opacity: 0.35;
      filter: grayscale(1);
    }
    .stat-card:hover {
      transform: translateY(-4px);
    }
  }
</style>
