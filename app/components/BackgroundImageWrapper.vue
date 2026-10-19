<script setup lang="ts">
  import { heroImageUrl, heroImageModifiers } from '@/utils/hero'

  const props = defineProps({
    imageUrl: {
      type: String,
      default: heroImageUrl,
    },
    alt: {
      type: String,
      default: '',
    },
    cover: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: [Boolean, String],
      default: false,
    },
    modifiers: {
      type: Object,
      default: () => heroImageModifiers,
    },
  })

  const { optimizeImage } = useOptimizeImage()
  const imageOptimized = {
    alt: props.alt,
    cover: props.cover,
    ...optimizeImage(
      props.imageUrl,
      {
        modifiers: props.modifiers,
        placeholder: props.placeholder,
      },
      true, // also return CSS background styles
    ),
  }

  const bgStyles = imageOptimized.bgStyles
</script>
<template>
  <div class="bg-center bg-cover bg-no-repeat blur-none z-0" :style="bgStyles">
    <img
      v-if="imageOptimized.alt"
      :src="imageOptimized.src"
      :alt="imageOptimized.alt"
      class="sr-only"
    >
    <slot />
  </div>
</template>
<style scoped></style>
