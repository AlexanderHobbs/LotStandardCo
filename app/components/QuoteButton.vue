<script setup lang="ts">
  // The site's "Request a Quote" call to action. Same look as the Continue
  // button in the quote form: a bold yellow pill with an arrow that nudges
  // right on hover.
  import type { RouteLocationRaw } from 'vue-router'

  withDefaults(
    defineProps<{
      to?: RouteLocationRaw
      size?: 'sm' | 'md' | 'lg' | 'xl'
      block?: boolean
      // No longer changes the look (the button is always yellow); kept so
      // existing callers don't pass it through as a stray HTML attribute.
      background?: 'default' | 'white'
      // 'submit' renders a real <button> for use inside a form instead of a link.
      type?: 'submit'
      disabled?: boolean
    }>(),
    { to: '/contact/', size: 'lg', block: false, background: 'default', type: undefined },
  )

  const NuxtLink = resolveComponent('NuxtLink')
</script>
<template>
  <component
    :is="type ? 'button' : NuxtLink"
    :to="type ? undefined : to"
    :type="type"
    :disabled="type ? disabled : undefined"
    class="quote-btn group inline-flex select-none items-center justify-center gap-2 rounded-full bg-[#fcc419] font-bold text-tertiary-900 transition-all hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary-900"
    :class="[
      `quote-btn--${size}`,
      block ? 'flex w-full' : '',
      disabled ? 'opacity-60' : '',
    ]"
  >
    <span class="whitespace-nowrap"><slot>Request a Quote</slot></span>
    <BaseIcon name="i-mdi-arrow-right" height="20px" class="quote-arrow" />
  </component>
</template>
<style scoped>
  .quote-btn {
    --h: 3.5rem;
    height: var(--h);
    padding: 0 1.75rem;
    font-size: 1.125rem;
    /* Subtle yellow glow, a little stronger on hover */
    box-shadow: 0 0 18px 2px rgb(252 196 25 / 0.35);
  }
  .quote-btn:hover {
    box-shadow: 0 0 24px 4px rgb(252 196 25 / 0.5);
  }
  .quote-btn--sm {
    --h: 2.25rem;
    padding: 0 1rem;
    font-size: 0.875rem;
  }
  .quote-btn--md {
    --h: 2.75rem;
    padding: 0 1.25rem;
    font-size: 1rem;
  }
  .quote-btn--lg {
    --h: 3.25rem;
  }

  .quote-arrow {
    flex: none;
    transition: transform 0.2s ease;
  }
  .quote-btn:hover .quote-arrow {
    transform: translateX(4px);
  }

  @media (prefers-reduced-motion: reduce) {
    .quote-btn,
    .quote-arrow {
      transition: none;
    }
  }
</style>
