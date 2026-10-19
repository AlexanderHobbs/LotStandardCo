<script setup lang="ts">
  import siteMeta from '@/site'

  // Mobile-only bar pinned to the bottom of the screen once the visitor has
  // scrolled past the hero. Thumb-reach position, always one tap from a quote.
  const { phone } = siteMeta.business
  const { y } = useWindowScroll()
  const visible = computed(() => y.value > 400)
</script>

<template>
  <Transition
    enter-active-class="transition duration-200"
    leave-active-class="transition duration-200"
    enter-from-class="translate-y-full"
    leave-to-class="translate-y-full"
  >
    <div
      v-if="visible"
      class="fixed inset-x-0 bottom-0 z-20 flex gap-3 border-t border-neutral-200 bg-background/95 p-3 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/95 lg:hidden"
    >
      <BaseButton
        size="xl"
        color="white"
        :to="`tel:${phone}`"
        aria-label="Call us"
        class="flex-1 justify-center"
      >
        <BaseIcon name="i-mdi-phone-outline" height="20px" />
        Call
      </BaseButton>
      <BaseButton size="xl" color="cta" to="/contact" class="flex-[2] justify-center">
        Request a Quote
      </BaseButton>
    </div>
  </Transition>
</template>
