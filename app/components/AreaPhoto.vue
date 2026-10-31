<script setup lang="ts">
  // Town photo in a fixed 4:3 frame so every area page shows its image at the
  // same size, whatever the original photo's shape (cropped to fill).
  defineProps<{ src: string; alt: string }>()
</script>
<template>
  <div class="aspect-[4/3] w-full overflow-hidden rounded-2xl">
    <NuxtImg
      :src="src"
      :alt="alt"
      width="960"
      height="720"
      format="webp"
      fit="cover"
      loading="lazy"
      class="h-full w-full object-cover"
    />
  </div>
</template>
