<script setup lang="ts">
  // "Written by" card at the bottom of a blog post. The name and title come
  // from site.ts (postAuthor); edit the bio here.
  import siteMeta from '@/site'

  const author = {
    name: siteMeta.postAuthor.name,
    title: siteMeta.postAuthor.title,
    bio: 'Alexander leads Lot Standard Co, a parking lot maintenance company serving Fort Smith, the River Valley and Northwest Arkansas. Quotes, scheduling and the Lot Standard Playbook all run through Alexander, so every lot gets the same careful process from the first message to the final walkthrough.',
  }
  const initials = author.name
    .split(' ')
    .map((part) => part[0])
    .join('')
</script>

<template>
  <aside
    aria-label="About the author"
    class="flex flex-col gap-5 rounded-3xl border border-primary-200 bg-neutral-50 p-6 dark:border-primary-700 dark:bg-neutral-900 sm:flex-row sm:items-start md:p-8"
  >
    <span
      class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary-600 text-xl font-bold text-white dark:bg-primary-200 dark:text-primary-800"
      aria-hidden="true"
    >
      {{ initials }}
    </span>
    <div>
      <p
        class="mb-1 text-sm font-medium uppercase text-primary-600 dark:text-primary-200 eyebrow-dash"
      >
        Written by
      </p>
      <p class="text-xl font-bold">{{ author.name }}</p>
      <p class="mb-3 text-sm font-medium text-neutral-600 dark:text-neutral-300">
        {{ author.title }}
      </p>
      <p class="text-neutral-700 dark:text-neutral-300">{{ author.bio }}</p>
    </div>
  </aside>
</template>
