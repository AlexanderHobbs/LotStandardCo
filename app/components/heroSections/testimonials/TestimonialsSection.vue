<script setup lang="ts">
// Add, remove or reorder entries freely; extra cards scroll horizontally.
const testimonials = [
  {
    quote:
      "This was our second project with them, and we already have a third on the calendar. They show up when they say they will, and the work holds up.",
    name: "Brett J.",
    location: "Rogers, AR",
  },
  {
    quote:
      "The crew showed up on the day they said they would and the new striping looks sharp. Communication from the owner was clear the entire process.",
    name: "Mark T.",
    location: "Fort Smith, AR",
  },
  {
    quote:
      "Owner is great, crew did good work - great job.",
    name: "Priya R.",
    location: "Fayetteville, AR",
  },
  {
    quote:
      "We called to get our lot sealcoated and re-striped. They did a great job, kept us updated and finished on schedule.",
    name: "Shawn H.",
    location: "Fort Smith, AR",
  },
];

// Arrow buttons scroll by one card and disable at either end
const scroller = ref<HTMLElement | null>(null);
const atStart = ref(true);
const atEnd = ref(true);
const updateEdges = () => {
  const el = scroller.value;
  if (!el) return;
  atStart.value = el.scrollLeft <= 1;
  atEnd.value = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
};
const scrollByCard = (direction: 1 | -1) => {
  const el = scroller.value;
  const card = el?.firstElementChild as HTMLElement | undefined;
  if (!el || !card) return;
  el.scrollBy({
    left: direction * (card.offsetWidth + 24),
    behavior: "smooth",
  });
};
onMounted(() => {
  updateEdges();
  window.addEventListener("resize", updateEdges);
  onBeforeUnmount(() => window.removeEventListener("resize", updateEdges));
});
</script>
<template>
  <section class="container mx-auto px-4 py-12">
    <div class="mx-auto text-center w-full lg:w-7/12">
      <p
        class="text-sm md:text-base lg:text-lg font-medium mb-2 text-primary-600 dark:text-primary-200 uppercase"
      >
        Testimonials
      </p>
      <h2 class="capitalize mt-3 !text-2xl md:!text-3xl lg:!text-4xl">
        What Our Customers Say
      </h2>
    </div>
    <!-- Horizontal scroller: cards snap into place and the next one peeks in on mobile -->
    <div class="mt-10">
      <div
        ref="scroller"
        class="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 py-4 scroll-px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        tabindex="0"
        role="region"
        aria-label="Customer testimonials"
        @scroll.passive="updateEdges"
      >
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="flex w-[85%] shrink-0 snap-start md:w-[calc(50%-0.75rem)]"
        >
          <figure
            class="flex flex-col h-full p-8 rounded-3xl w-full bg-neutral-50 dark:bg-neutral-900"
          >
            <BaseIcon
              name="i-mdi-format-quote-open"
              height="40px"
              class="mb-3 !text-primary-600"
            />
            <blockquote class="mb-6">
              <p>{{ testimonial.quote }}</p>
            </blockquote>
            <figcaption class="mt-auto">
              <span class="block font-bold">{{ testimonial.name }}</span>
              <span class="block text-sm">
                {{ testimonial.location }}
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
    <!-- Arrows sit below the scroller, one at each end -->
    <div v-if="!(atStart && atEnd)" class="mt-2 flex justify-between">
      <button
        v-for="arrow in [
          { label: 'Previous testimonial', dir: -1, icon: 'i-mdi-arrow-left' },
          { label: 'Next testimonial', dir: 1, icon: 'i-mdi-arrow-right' },
        ] as const"
        :key="arrow.dir"
        type="button"
        :aria-label="arrow.label"
        :disabled="arrow.dir === -1 ? atStart : atEnd"
        class="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white transition hover:bg-primary-700 disabled:pointer-events-none disabled:opacity-0"
        @click="scrollByCard(arrow.dir)"
      >
        <BaseIcon :name="arrow.icon" height="24px" class="!text-white" />
      </button>
    </div>
    <div class="mt-14 text-center">
      <p class="mb-6">Join the property owners who trust us with their lots.</p>
      <QuoteButton size="xl" />
    </div>
  </section>
</template>
<style scoped></style>
