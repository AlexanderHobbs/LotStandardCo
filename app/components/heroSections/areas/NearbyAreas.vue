<script setup lang="ts">
// "View other service areas" for the town pages: links to the surrounding
// towns we serve, nearest first.
const props = defineProps<{ slug: string }>();

const TOWNS: Record<string, string> = {
  alma: "Alma",
  bentonville: "Bentonville",
  booneville: "Booneville",
  charleston: "Charleston",
  fayetteville: "Fayetteville",
  "fort-smith": "Fort Smith",
  greenwood: "Greenwood",
  ozark: "Ozark",
  paris: "Paris",
  rogers: "Rogers",
  springdale: "Springdale",
  "van-buren": "Van Buren",
};

const NEARBY: Record<string, string[]> = {
  alma: ["van-buren", "fort-smith", "ozark", "greenwood"],
  bentonville: ["rogers", "springdale", "fayetteville"],
  booneville: ["paris", "greenwood", "charleston", "fort-smith"],
  charleston: ["ozark", "paris", "greenwood", "fort-smith"],
  fayetteville: ["springdale", "rogers", "bentonville"],
  "fort-smith": ["van-buren", "greenwood", "alma", "charleston", "booneville"],
  greenwood: ["fort-smith", "booneville", "charleston", "van-buren"],
  ozark: ["charleston", "alma", "paris", "van-buren"],
  paris: ["booneville", "charleston", "ozark", "greenwood"],
  rogers: ["bentonville", "springdale", "fayetteville"],
  springdale: ["rogers", "fayetteville", "bentonville"],
  "van-buren": ["fort-smith", "alma", "greenwood", "ozark"],
};

const nearby = computed(() =>
  (NEARBY[props.slug] ?? []).map((slug) => ({
    slug,
    name: TOWNS[slug],
  })),
);
</script>
<template>
  <section v-if="nearby.length" class="mt-20 text-center">
    <h2 class="mb-2 !text-2xl font-bold">View Other Service Areas</h2>
    <p class="mb-5">Also serving the surrounding cities:</p>
    <ul class="flex flex-wrap justify-center gap-3">
      <li v-for="town in nearby" :key="town.slug">
        <NuxtLink
          :to="`/areas/${town.slug}`"
          class="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-3 font-medium shadow-xl ring-1 ring-neutral-200 transition duration-300 ease-in-out hover:bg-white hover:ring-neutral-300 dark:bg-neutral-900/80"
        >
          <BaseIcon name="i-mdi-map-marker-outline" height="18px" />
          {{ town.name }}
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
