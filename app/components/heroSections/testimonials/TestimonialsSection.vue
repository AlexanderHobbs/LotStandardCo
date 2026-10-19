<script setup lang="ts">
// Add, remove or reorder entries freely; the grid adapts to the count.
const testimonials = [
  {
    quote:
      "This was our second project with them, and we already have a third on the calendar. They show up when they say they will, and the work holds up.",
    name: "Marcus D.",
    location: "Rogers, Ar",
  },
  {
    quote:
      "We got a few bids and went with them on price, but we would hire them again even if they cost more. They are easy to work with, and we never had to chase anyone for an update.",
    name: "Priya R.",
    location: "Fort Smith, Ar",
  },
];
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
    <div class="-mx-4 flex flex-wrap mt-10">
      <div
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="flex p-4 w-full lg:w-1/2"
      >
        <figure
          class="flex flex-col h-full p-8 rounded-3xl w-full bg-neutral-50 dark:bg-neutral-900 shadow-xl"
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
    <div class="mt-14 text-center">
      <p class="mb-6">Join the property owners who trust us with their lots.</p>
      <BaseButton size="xl" color="cta" to="/contact"
        >Request a Quote</BaseButton
      >
    </div>
  </section>
</template>
<style scoped></style>
