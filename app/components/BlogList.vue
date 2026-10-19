<script setup lang="ts">
  import BlogContact from '@/components/BlogContact.vue'
  const posts = await getPosts()

  const ALL = 'All'
  const active = ref(ALL)

  const categories = computed(() => {
    const counts = new Map<string, number>()
    for (const post of posts.value) {
      const c = post.category || 'General'
      counts.set(c, (counts.get(c) ?? 0) + 1)
    }
    return [
      { name: ALL, count: posts.value.length },
      ...[...counts].map(([name, count]) => ({ name, count })),
    ]
  })

  const filtered = computed(() =>
    active.value === ALL
      ? posts.value
      : posts.value.filter((p) => (p.category || 'General') === active.value),
  )
</script>
<template>
  <section class="container mx-auto px-4 py-10">
    <div class="mx-auto w-full max-w-6xl gap-8 lg:grid lg:grid-cols-[20rem_1fr]">
      <BlogContact class="mb-10 lg:mb-0" />
      <div class="min-w-0">
      <div
        role="tablist"
        aria-label="Blog categories"
        class="mb-10 flex flex-wrap justify-center gap-2 rounded-3xl sm:rounded-full border border-primary-200 bg-white/95 p-2 shadow-lg backdrop-blur dark:border-primary-700 dark:bg-neutral-900/95"
      >
        <button
          v-for="cat in categories"
          :key="cat.name"
          type="button"
          role="tab"
          :aria-selected="active === cat.name"
          class="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition"
          :class="
            active === cat.name
              ? 'bg-primary-600 text-white shadow-md'
              : 'text-primary-800 hover:bg-primary-100 dark:text-primary-100 dark:hover:bg-primary-800'
          "
          @click="active = cat.name"
        >
          {{ cat.name }}
          <span
            class="rounded-full px-2 text-xs"
            :class="
              active === cat.name
                ? 'bg-white/25'
                : 'bg-primary-100 dark:bg-primary-800'
            "
            >{{ cat.count }}</span
          >
        </button>
      </div>

      <TransitionGroup
        tag="ul"
        name="post"
        class="relative space-y-6"
        role="list"
      >
        <li v-for="post in filtered" :key="post._path">
          <BlogPreview :post="post" />
        </li>
      </TransitionGroup>

      <p
        v-if="!filtered.length"
        class="py-16 text-center text-primary-600 dark:text-primary-200"
      >
        No posts in this category yet.
      </p>
      </div>
    </div>
  </section>
</template>
<style scoped>
  .post-enter-active,
  .post-leave-active {
    transition: all 0.3s ease;
  }
  .post-enter-from,
  .post-leave-to {
    opacity: 0;
    transform: translateY(12px);
  }
  .post-leave-active {
    position: absolute;
    width: 100%;
  }
</style>
