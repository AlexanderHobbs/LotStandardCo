<template>
  <span class="flex items-center gap-1.5 font-medium">
    <!-- Logo mark inside a primary-colored circle -->
    <span
      class="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-200 text-secondary-700"
      aria-hidden="true"
    >
      <svg
        viewBox="268 765 390 402"
        class="h-3.5 w-3.5"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M366 771H525L421 1161H328Q277 1161 277 1110Q277 1100 280 1090Z" />
        <path d="M487 1031H647L613 1161H518Q468 1161 468 1110Q468 1100 471 1092Z" />
      </svg>
    </span>
    <slot />
  </span>
</template>
