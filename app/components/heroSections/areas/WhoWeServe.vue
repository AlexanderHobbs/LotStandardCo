<script setup lang="ts">
// Cards for the "who we serve" list on a town page: each one pops in with a
// check mark as the list scrolls into view. Content is fully visible until the
// client hydrates, so nothing stays hidden if JS fails or the user prefers
// reduced motion (same approach as TrustBar).
//   idle  -> visible (SSR / no JS / reduced motion)
//   armed -> hidden, waiting to scroll into view
//   play  -> animating in
const props = withDefaults(
  defineProps<{ items: string[]; title?: string }>(),
  { title: "Who we serve" },
);

const root = ref<HTMLElement | null>(null);
const anim = ref<"idle" | "armed" | "play">("idle");

onMounted(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  anim.value = "armed";
  if (!("IntersectionObserver" in window)) {
    anim.value = "play";
    return;
  }
  const { stop } = useIntersectionObserver(
    root,
    ([entry]) => {
      if (entry?.isIntersecting) {
        anim.value = "play";
        stop();
      }
    },
    { threshold: 0.3 },
  );
});

// Seconds between one card and the next.
const STEP = 0.1;
</script>
<template>
  <div ref="root" class="who-we-serve mt-8" :data-anim="anim">
    <p
      class="mb-3 text-sm font-bold uppercase text-primary-600 dark:text-primary-200"
    >
      {{ props.title }}
    </p>
    <ul class="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <li
        v-for="(item, i) in props.items"
        :key="item"
        class="wws-card flex items-center gap-3 rounded-2xl border border-primary-200 bg-white/70 p-3 font-semibold dark:border-primary-600 dark:bg-neutral-900/50"
        :style="{ '--d': `${i * STEP}s` }"
      >
        <span
          class="wws-check flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-success-600/15"
        >
          <BaseIcon
            name="i-mdi-check-bold"
            height="16px"
            class="!text-success-600"
          />
        </span>
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.wws-card {
  --d: 0s;
}

/* Hidden until the list scrolls into view */
.who-we-serve[data-anim="armed"] .wws-card {
  opacity: 0;
}

.who-we-serve[data-anim="play"] .wws-card {
  animation: wws-in 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: var(--d);
}
/* The check mark pops in just after its card */
.who-we-serve[data-anim="play"] .wws-check {
  animation: wws-pop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  animation-delay: calc(var(--d) + 0.2s);
}

@keyframes wws-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes wws-pop {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>
