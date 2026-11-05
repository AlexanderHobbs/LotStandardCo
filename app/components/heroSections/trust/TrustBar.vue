<script setup lang="ts">
// Shown on the home page and all 12 town pages.
const google = {
  rating: 5.0,
};

const USP = [
  { name: "Annual Lot Care Plan" },
  { name: "Multi-property coverage and single invoice" },
  { name: "Automatic reminders and scheduling" },
  { name: "Direct Owner Communication" },
];

// Load animation: the hairlines draw in, then the rating, then each point one
// after another. Content is fully visible until the client hydrates, so nothing
// stays hidden if JS fails or the user prefers reduced motion.
//   idle  -> visible (SSR / no JS / reduced motion)
//   armed -> hidden, waiting to scroll into view
//   play  -> animating in
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

// Seconds each element waits before animating in.
const STEP = 0.12;
const FIRST_USP = 0.6;
</script>
<template>
  <section
    ref="root"
    class="trust-bar container mx-auto mt-8 px-4 pb-16 md:mt-12"
    :data-anim="anim"
    aria-label="Why customers trust Lot Standard Co"
  >
    <div>
      <!-- Google rating -->
      <div
        class="tb-item flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-lg md:text-xl"
        style="--d: 0.3s"
      >
        <BaseIcon name="i-mdi-google" height="28px" />
        <div
          class="flex items-center"
          role="img"
          :aria-label="`${google.rating} out of 5 stars`"
        >
          <BaseIcon
            v-for="n in 5"
            :key="n"
            name="i-mdi-star"
            height="28px"
            class="!text-yellow-400"
          />
        </div>
        <strong class="text-2xl md:text-3xl">{{
          google.rating.toFixed(1)
        }}</strong>
      </div>

      <div
        class="tb-item my-8 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700"
        style="--d: 0.3s"
        aria-hidden="true"
      />

      <!-- Why customers trust us -->
      <ul
        class="grid grid-cols-1 justify-items-start gap-y-4 md:justify-items-center lg:flex lg:justify-between lg:gap-x-4"
      >
        <li
          v-for="(usp, i) in USP"
          :key="usp.name"
          class="tb-item flex items-center gap-2 text-sm font-semibold text-neutral-700 md:whitespace-nowrap md:text-base lg:text-xs xl:gap-3 xl:text-sm 2xl:text-base dark:text-neutral-200"
          :style="{ '--d': `${FIRST_USP + i * STEP}s` }"
        >
          <span
            class="tb-check flex h-7 w-7 shrink-0 xl:h-9 xl:w-9 items-center justify-center rounded-full bg-success-600/15"
          >
            <BaseIcon
              name="i-mdi-check-bold"
              height="16px"
              class="!text-success-600"
            />
          </span>
          <span>{{ usp.name }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped>
.tb-line {
  transform-origin: center;
}
.tb-item {
  --d: 0s;
}

/* Hidden until the bar scrolls into view */
.trust-bar[data-anim="armed"] .tb-line {
  transform: scaleX(0);
}
.trust-bar[data-anim="armed"] .tb-item {
  opacity: 0;
}

.trust-bar[data-anim="play"] .tb-line {
  animation: tb-draw 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: var(--d, 0s);
}
/* Each item follows its own delay */
.trust-bar[data-anim="play"] .tb-item {
  animation: tb-in 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: var(--d);
}
.trust-bar[data-anim="play"] .tb-check {
  animation: tb-pop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  animation-delay: calc(var(--d) + 0.15s);
}

@keyframes tb-draw {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
@keyframes tb-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes tb-pop {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>
