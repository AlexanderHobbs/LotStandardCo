<script setup lang="ts">
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
// The four 2x2 cards; the wide dark card below them is written out in the template
const points = [
  {
    icon: "i-mdi-clipboard-text-outline",
    title: "Quick ranges, free quotes",
    detail:
      "Get a free price range on your first call, then a clear written quote within one business day. No hidden fees, no pressure.",
  },
  {
    icon: "i-mdi-drone",
    title: "Aerial assessments, digital quotes",
    detail:
      "We survey your lot from above and send a digital quote, so you know the scope and price before work starts.",
  },
  {
    icon: "i-mdi-book-open-page-variant-outline",
    title: "The Lot Standard Playbook",
    detail:
      "One team follows the same written steps on every job, scheduled around your business hours.",
  },
  {
    icon: "i-mdi-camera-outline",
    title: "Clear communication, every project documented",
    detail:
      "Stay informed from first quote to final walkthrough, with a record of the work, materials and results.",
  },
];
</script>
<template>
  <div
    id="mission_text"
    ref="root"
    class="container mx-auto px-4 pt-16 pb-16 md:pt-24 md:pb-24 relative"
  >
    <div class="-mx-4 flex flex-wrap items-start">
      <div
        class="mr-auto py-4 px-4 w-full lg:w-[45%] lg:pr-8 transition duration-700 ease-out"
        :class="
          mounted ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
        "
      >
        <p
          class="mb-2 text-sm font-medium uppercase text-primary-600 dark:text-primary-200 md:text-base lg:text-lg eyebrow-dash"
        >
          Why Choose Lot Standard Co
        </p>
        <h2 class="capitalize mb-4 !text-2xl md:!text-3xl lg:!text-4xl">
          One standard. Every lot. Every time.
        </h2>
        <p class="mb-6">
          You shouldn’t have to wonder how your lot will turn out. With Lot
          Standard Co, you know the plan, the price and the process before any
          work begins. You’ll see your lot from above with an aerial assessment,
          get a clear digital quote, and stay in the loop from first contact to
          the final walkthrough.
        </p>
        <p class="mb-8">
          Every project comes with a detailed record of what was done, plus a
          satisfaction guarantee and a written warranty, so you’re covered after
          the work is finished. Your time matters too. Quotes come back quickly,
          and the work is scheduled around your business, so your customers keep
          coming through the door.
        </p>
        <BaseButton size="lg" to="/about/">
          <span>Learn More</span>
          <BaseIcon
            name="i-mdi-arrow-right"
            height="20px"
            class="!text-white md:ml-1.5"
          />
        </BaseButton>
      </div>
      <div
        class="w-full px-4 py-4 lg:w-[55%] transition duration-700 ease-out"
        :class="
          mounted ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
        "
      >
        <div class="grid gap-3 sm:grid-cols-2">
          <div
            v-for="point in points"
            :key="point.title"
            class="rounded-2xl bg-white p-4 shadow-md ring-1 ring-neutral-200 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg dark:bg-neutral-900 dark:ring-neutral-800"
          >
            <span
              class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-700 dark:text-primary-100"
              aria-hidden="true"
            >
              <BaseIcon :name="point.icon" height="20px" />
            </span>
            <h3 class="!mb-1 !text-lg font-bold">{{ point.title }}</h3>
            <p class="text-sm text-neutral-700 dark:text-neutral-300">
              {{ point.detail }}
            </p>
          </div>
          <!-- Wide brand-colour card spanning both columns -->
          <div
            class="flex items-start gap-3 rounded-2xl bg-primary-600 p-4 text-white shadow-md dark:bg-primary-200 dark:text-primary-800 sm:col-span-2"
          >
            <span
              class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white dark:bg-primary-800/15 dark:text-primary-800"
              aria-hidden="true"
            >
              <BaseIcon name="i-mdi-certificate-outline" height="20px" />
            </span>
            <div>
              <h3
                class="!mb-1 !text-lg font-bold !text-white dark:!text-primary-800"
              >
                Written warranty, licensed and insured
              </h3>
              <p class="text-sm text-white/90 dark:text-primary-800">
                Licensed, insured crews and a written warranty with a
                satisfaction guarantee protect your property and your
                investment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
