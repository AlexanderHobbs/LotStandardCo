<script setup>
  const props = defineProps({
    error: {
      type: Object,
      default() {
        return {
          url: '-',
          statusCode: 404,
          statusMessage: 'Not Found',
          message: '(404 Not Found)',
          stack: '',
          data: '{"error":"FetchError:  (404 Not Found)"}',
        }
      },
    },
  })

  const message = computed(() => String(props.error?.message || ''))
  const is404 = computed(
    () => props.error?.statusCode === 404 || message.value?.includes('404'),
  )

  useSeoMeta({
    title: () => (is404.value ? 'Page Not Found' : 'Something Went Wrong'),
    robots: 'noindex, nofollow',
  })
</script>
<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <ErrorMessage :is404="is404" :error="error" />
  </NuxtLayout>
</template>
