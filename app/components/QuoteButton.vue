<script setup lang="ts">
  // The site's "Request a Quote" call to action. Dark pill with a yellow tab on
  // the left; on hover the tab slides across the whole button and a row of
  // dot-matrix arrows pulses through it.
  import type { RouteLocationRaw } from 'vue-router'

  withDefaults(
    defineProps<{
      to?: RouteLocationRaw
      size?: 'sm' | 'md' | 'lg' | 'xl'
      block?: boolean
      // Body colour: the site's default light grey, or white for grey backdrops.
      background?: 'default' | 'white'
    }>(),
    { to: '/contact', size: 'lg', block: false, background: 'default' },
  )

  // Chevron drawn as dots on a 4 x 5 grid: [column, row].
  const dots = [
    [0, 0], [1, 0],
    [1, 1], [2, 1],
    [2, 2], [3, 2],
    [1, 3], [2, 3],
    [0, 4], [1, 4],
  ]
  const ARROWS = 7
</script>
<template>
  <NuxtLink
    :to="to"
    class="quote-btn group relative isolate inline-flex select-none items-center overflow-hidden font-bold text-tertiary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
    :class="[
      `quote-btn--${size}`,
      background === 'white' ? 'bg-white' : 'bg-[#e9edf1]',
      block ? 'flex w-full justify-center' : '',
    ]"
  >
    <span class="qb-label relative z-10"><slot>Request a Quote</slot></span>
    <span class="qb-tab" aria-hidden="true">
      <svg class="qb-single" viewBox="0 0 4 5">
        <circle v-for="([x, y], i) in dots" :key="i" :cx="x + 0.5" :cy="y + 0.5" r="0.4" />
      </svg>
      <span class="qb-row">
        <svg
          v-for="n in ARROWS"
          :key="n"
          class="qb-arrow"
          viewBox="0 0 4 5"
          :style="{ '--i': n - 1 }"
        >
          <circle v-for="([x, y], i) in dots" :key="i" :cx="x + 0.5" :cy="y + 0.5" r="0.4" />
        </svg>
      </span>
    </span>
  </NuxtLink>
</template>
<style scoped>
  .quote-btn {
    --h: 3.5rem;
    --inset: 0.4rem;
    --tab: calc(var(--h) - var(--inset) * 2);
    height: var(--h);
    border-radius: 1rem;
    padding: 0 1.75rem 0 calc(var(--tab) + var(--inset) + 1.25rem);
    font-size: 1.125rem;
    /* Same grey body + bold striping-yellow border as the site's other CTAs */
    /*box-shadow:
      inset 0 0 0 3px #fcc419,
      0 10px 20px -8px rgb(0 0 0 / 0.35);*/
  }
  .quote-btn--sm {
    --h: 2.25rem;
    --inset: 0.25rem;
    font-size: 0.875rem;
    padding-right: 1rem;
    border-radius: 0.65rem;
  }
  /* Slightly tighter than the button's own radius so the 1.75rem tab reads as a
     rounded square rather than a circle. */
  .quote-btn--sm .qb-tab,
  .quote-btn--md .qb-tab {
    border-radius: 0.5rem;
  }
  .quote-btn--md {
    --h: 2.75rem;
    --inset: 0.3rem;
    font-size: 1rem;
    padding-right: 1.25rem;
    border-radius: 0.8rem;
  }
  .quote-btn--lg {
    --h: 3.25rem;
  }

  .qb-label {
    white-space: nowrap;
    transition:
      opacity 0.25s ease,
      transform 0.35s ease;
  }

  .qb-tab {
    position: absolute;
    top: var(--inset);
    bottom: var(--inset);
    left: var(--inset);
    width: var(--tab);
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: calc(1rem - var(--inset) + 0.05rem);
    background: linear-gradient(to bottom, #5d6e7e, #3a4550);
    box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.2);
    transition: width 0.45s cubic-bezier(0.65, 0, 0.25, 1);
  }

  .qb-tab circle {
    fill: #fcc419;
  }
  .qb-single {
    height: 1.25rem;
    transition: opacity 0.2s ease;
  }
  .qb-row {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 0.75rem;
    opacity: 0;
    transition: opacity 0.25s ease;
  }
  .qb-arrow {
    height: 1.25rem;
    flex: none;
  }

  @keyframes qb-wave {
    0%,
    100% {
      opacity: 0.25;
    }
    50% {
      opacity: 1;
    }
  }

  /* Hover (pointer devices) and keyboard focus */
  @media (hover: hover) {
    .quote-btn:hover .qb-tab {
      width: calc(100% - var(--inset) * 2);
    }
    .quote-btn:hover .qb-label {
      opacity: 0;
      transform: translateX(0.75rem);
    }
    .quote-btn:hover .qb-single {
      opacity: 0;
    }
    .quote-btn:hover .qb-row {
      opacity: 1;
      transition-delay: 0.15s;
    }
    .quote-btn:hover .qb-arrow {
      animation: qb-wave 1.2s ease-in-out infinite;
      animation-delay: calc(var(--i) * 0.12s);
    }
  }
  .quote-btn:focus-visible .qb-tab {
    width: calc(100% - var(--inset) * 2);
  }
  .quote-btn:focus-visible .qb-label,
  .quote-btn:focus-visible .qb-single {
    opacity: 0;
  }
  .quote-btn:focus-visible .qb-row {
    opacity: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    .qb-tab,
    .qb-label,
    .qb-row,
    .qb-single {
      transition: none;
    }
    .quote-btn:hover .qb-arrow {
      animation: none;
    }
  }
</style>
