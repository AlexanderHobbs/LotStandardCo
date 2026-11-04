<script setup lang="ts">
import LogoBullet from "@/components/LogoBullet.vue";

// Both columns start slightly offset and slide into place when scrolled into view
const root = ref<HTMLElement | null>(null);
const mounted = ref(false);
onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        mounted.value = true;
        observer.disconnect();
      }
    },
    { threshold: 0.2 },
  );
  if (root.value) observer.observe(root.value);
  onBeforeUnmount(() => observer.disconnect());
});
const points = [
  "Free, no-obligation quotes with a reply within one business day",
  "Licensed and insured crews on every job",
  "Every project documented, so you always know what was done",
  "Flexible scheduling, including off-hours, to keep your business open",
];

// Before/after toggle: the two photos are stacked and cross-fade with a slight zoom
const before = ref(true);
const beforeLayer = ref<HTMLElement | null>(null);
const afterLayer = ref<HTMLElement | null>(null);
const fade = { type: "keyframes", duration: 600, ease: "easeInOut" } as const;
const layerVariants = {
  shown: { opacity: 1, scale: 1, transition: fade },
  hidden: { opacity: 0, scale: 1.05, transition: fade },
};
// Each layer needs an explicit starting variant, otherwise the first apply() has
// no known state to animate from and the first click snaps instead of fading.
const beforeMotion = useMotion(beforeLayer, {
  ...layerVariants,
  initial: { opacity: 1, scale: 1 },
});
const afterMotion = useMotion(afterLayer, {
  ...layerVariants,
  initial: { opacity: 0, scale: 1.05 },
});
watch(before, (isBefore) => {
  beforeMotion.apply(isBefore ? "shown" : "hidden");
  afterMotion.apply(isBefore ? "hidden" : "shown");
});

const toggle = () => {
  before.value = !before.value;
};
</script>
<template>
  <div
    id="mission_text"
    ref="root"
    class="container mx-auto px-4 pt-12 pb-24 relative"
  >
    <div class="-mx-4 flex flex-wrap items-center">
      <div
        class="mr-auto py-4 pl-4 w-full lg:w-[53%] transition duration-700 ease-out"
        :class="
          mounted ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
        "
      >
        <p
          class="text-sm md:text-base lg:text-lg font-medium mb-2 mb-2 text-primary-600 dark:text-primary-200 uppercase"
        >
          Why Choose Lot Standard Co
        </p>
        <h2 class="capitalize mb-2 !text-2xl md:!text-3xl lg:!text-4xl">
          One standard. Every lot. Every time.
        </h2>
        <p class="mb-6">
          At Lot Standard Co we deliver
          <NuxtLink
            to="/services"
            class="font-semibold text-primary-600 underline hover:text-primary-800 dark:text-primary-200 dark:hover:text-primary-100"
            >quality exterior maintenance</NuxtLink
          >
          through a proven process, dependable scheduling, and full
          documentation on every project. Whether it's a
          <NuxtLink
            to="/services/line-striping"
            class="font-semibold text-primary-600 underline hover:text-primary-800 dark:text-primary-200 dark:hover:text-primary-100"
            >re-stripe</NuxtLink
          >
          or a fresh
          <NuxtLink
            to="/services/sealcoating"
            class="font-semibold text-primary-600 underline hover:text-primary-800 dark:text-primary-200 dark:hover:text-primary-100"
            >sealcoat</NuxtLink
          >, your properties get the same high standard no matter where they
          are. <br><br>
          We serve everyone from single-location local businesses to
          multi-property franchises. Our
          <NuxtLink
            to="/about"
            class="font-semibold text-primary-600 underline hover:text-primary-800 dark:text-primary-200 dark:hover:text-primary-100"
            >team-based approach</NuxtLink
          >
          and reliable
          framework mean clear communication and quality work completed on time,
          every time. We’re licensed and insured. <br><br>
          Cutting-edge technology keeps us efficient, and the Lot Standard
          Playbook turns our process into a repeatable system, so you get more
          value on every project. It’s quality work you can count on.
        </p>
        <!-- Hovering a point highlights it and fades the others -->
        <ul
          class="group/list mb-8 space-y-1 text-neutral-700 dark:text-neutral-200"
        >
          <li
            v-for="point in points"
            :key="point"
            class="cursor-default rounded-xl px-3 py-2 transition duration-300 ease-out group-hover/list:opacity-40 hover:!opacity-100 hover:translate-x-2 hover:bg-primary-100 hover:shadow-md dark:hover:bg-primary-700"
          >
            <LogoBullet>{{ point }}</LogoBullet>
          </li>
        </ul>
        <BaseButton size="lg" to="/about">
          <span>Learn More</span>
          <BaseIcon
            name="i-mdi-arrow-right"
            height="20px"
            class="!text-white md:ml-1.5"
          />
        </BaseButton>
      </div>
      <div
        class="w-full px-4 py-4 lg:w-[42%] transition duration-700 ease-out"
        :class="
          mounted ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
        "
      >
        <div class="relative aspect-square overflow-hidden rounded-3xl">
          <div ref="beforeLayer" class="absolute inset-0">
            <NuxtImg
              src="/before.png"
              width="800"
              height="800"
              format="webp"
              fit="outside"
              loading="lazy"
              class="h-full w-full object-cover"
              alt="Commercial parking lot before sealcoating and striping, with faded and worn pavement"
            />
          </div>
          <div ref="afterLayer" class="absolute inset-0 opacity-0">
            <NuxtImg
              src="/After.png"
              width="800"
              height="800"
              format="webp"
              fit="outside"
              loading="lazy"
              class="h-full w-full object-cover"
              alt="Aerial view of a freshly sealcoated and striped commercial parking lot with crisp white stall lines"
            />
          </div>
          <div
            class="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1 rounded-full bg-white/80 p-1 shadow-md backdrop-blur-md dark:bg-neutral-900/80"
            role="group"
            aria-label="Toggle between before and after photos"
          >
            <button
              v-for="option in [
                { label: 'Before', value: true },
                { label: 'After', value: false },
              ]"
              :key="option.label"
              v-motion
              :hovered="{ scale: 1.05 }"
              :tapped="{ scale: 0.95 }"
              type="button"
              class="rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300"
              :class="
                before === option.value
                  ? 'bg-primary-600 text-white'
                  : 'text-neutral-700 hover:bg-white dark:text-neutral-200 dark:hover:bg-neutral-800'
              "
              :aria-pressed="before === option.value"
              @click="before = option.value"
            >
              {{ option.label }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
