<script setup lang="ts">
// These are promises rather than numbers. Each is marked in the template:
// CONFIRM = make sure it's true before launch, OK = confirmed by the owner.
</script>
<template>
  <section>
    <div class="container mx-auto px-4 py-12 relative">
      <div class="-mx-4 flex flex-wrap items-center">
        <div class="p-4 w-full lg:w-2/5">
          <NuxtImg
            src="/images/trust.jpg"
            width="600"
            height="600"
            loading="lazy"
            class="mb-6 rounded-3xl w-full"
            alt="Completed parking lot striping and pavement maintenance project by Lot Standard Co"
          />
        </div>
        <div class="lg:w-6/12 mx-auto p-4 w-full">
          <p
            class="text-sm md:text-base lg:text-lg font-medium mb-2 font-bold mb-2 text-primary-600 dark:text-primary-200 uppercase"
          >
            Our promise to every property owner
          </p>
          <h2 class="capitalize mb-6 !text-2xl md:!text-3xl lg:!text-4xl">
            Built on Accountability
          </h2>
          <p>
            We’re building our reputation one job at a time, 
            with consistent, code-conscious results for commercial 
            lots of every size. Here’s what you can count on.
          </p>
          <div class="-mx-4 flex flex-wrap items-center">
            <!-- CONFIRM: one named contact handles every job -->
            <div class="px-4 py-6 w-1/2">
              <p class="mb-2 text-3xl md:text-4xl lg:text-5xl font-bold">1</p>
              <p>Point Of Contact</p>
            </div>
            <!-- CONFIRM: every quote goes out within 24 hours -->
            <div class="px-4 py-6 w-1/2">
              <p class="mb-2 text-3xl md:text-4xl lg:text-5xl font-bold">
                24hr
              </p>
              <p>Quote Turnaround</p>
            </div>

            <!-- OK: licensed and insured, confirmed by the owner 2026-10-18 -->
            <div class="px-4 py-6 w-1/2">
              <p class="mb-2 text-3xl md:text-4xl lg:text-5xl font-bold">
                100%
              </p>
              <p>Licensed & Insured</p>
            </div>
            <!-- CONFIRM: a written satisfaction guarantee exists; "guaranteed" is a promise customers can hold you to -->
            <div class="px-4 py-6 w-1/2">
              <p class="mb-2 text-3xl md:text-4xl lg:text-5xl font-bold">Guaranteed</p>
              <p>Satisfaction From Our Work</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
