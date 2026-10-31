<script setup lang="ts">
  const stats = [
    { value: '1', label: 'Point Of Contact' },
    { value: '100%', label: 'Partner Focus' },
    { value: '24hr', label: 'Quote Turnaround' },
    { value: 'All', label: 'Employees in Uniform' },
    { value: '100%', label: 'Projects Photo-Documented' },
    { value: 'Off-Hours', label: 'Flexible Scheduling' },
    { value: '100%', label: 'Licensed & Insured' },
    { value: 'Guaranteed', label: 'Satisfaction From Our Work' },
  ]
</script>
<template>
  <section class="relative isolate overflow-hidden bg-primary-950 text-white">
    <!-- Photo fills the whole section -->
    <NuxtImg
      src="/images/brand-palette-background.png"
      width="1368"
      height="2688"
      format="webp"
      sizes="100vw"
      loading="lazy"
      class="absolute inset-0 -z-30 h-full w-full object-fill"
      alt=""
      aria-hidden="true"
    />
    <!-- Dark wash so the text always reads, heavier on the text side -->
    <div
      class="absolute inset-0 -z-20 bg-gradient-to-r from-primary-950/30 via-primary-950/15 to-transparent"
      aria-hidden="true"
    />
    <!-- Tints the bright bottom-right corner of the image back to the brand colour -->
    <div
      class="absolute inset-0 -z-20 bg-gradient-to-tl from-primary-600/50 via-primary-600/15 to-transparent"
      aria-hidden="true"
    />
    <!-- Diagonal streaks behind the text, like painted stall lines -->
    <div class="absolute inset-0 -z-10" aria-hidden="true">
      <div
        class="absolute -left-24 top-0 h-full w-40 -skew-x-12 bg-gradient-to-b from-primary-400/50 to-primary-400/0 md:w-56"
      />
      <div
        class="absolute left-32 top-0 h-full w-6 -skew-x-12 bg-white/15 md:left-52"
      />
      <div
        class="absolute left-44 top-0 h-full w-2 -skew-x-12 bg-white/25 md:left-64"
      />
    </div>

    <div class="container mx-auto px-4 py-16 md:py-24">
      <div class="max-w-2xl">
        <p
          class="mb-2 text-sm font-bold uppercase text-primary-200 md:text-base lg:text-lg"
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
            class="stat-card rounded-2xl border border-white/15 bg-primary-950/40 p-4 backdrop-blur-md md:p-5"
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
