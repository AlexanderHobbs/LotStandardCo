<script setup lang="ts">
  defineProps({
    post: {
      type: Object,
      required: true,
    },
  })
</script>
<template>
  <article
    v-if="post"
    class="group relative overflow-hidden rounded-2xl border border-primary-200 bg-white/80 p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-primary-700 dark:bg-neutral-900/80 md:p-6"
  >
    <span
      class="absolute inset-y-0 left-0 w-1.5 bg-primary-600 transition-all duration-300 group-hover:w-2.5"
      aria-hidden="true"
    />
    <div
      class="mb-3 flex flex-wrap items-center gap-3 text-sm text-primary-600 dark:text-primary-200"
    >
      <span
        class="rounded-full bg-primary-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-800 dark:bg-primary-800 dark:text-primary-100"
        >{{ post.category || 'General' }}</span
      >
      <PostDate :date="post.date" />
      <span v-if="post.author" class="before:mr-3 before:content-['•']">{{
        post.author
      }}</span>
    </div>
    <h2 class="mb-2 !text-lg font-semibold md:!text-xl lg:!text-2xl">
      <NuxtLink
        :to="`${post._path}/`"
        class="after:absolute after:inset-0 after:content-['']"
        >{{ post.title }}</NuxtLink
      >
    </h2>
    <div
      class="prose prose-sm max-w-none dark:prose-invert prose-neutral-800 dark:prose-neutral-100"
    >
      <ContentRenderer excerpt :value="post" />
    </div>
    <p
      class="mt-3 text-sm font-semibold text-primary-600 dark:text-primary-200"
      aria-hidden="true"
    >
      Read more
      <span class="inline-block transition-transform group-hover:translate-x-1"
        >→</span
      >
    </p>
  </article>
</template>
