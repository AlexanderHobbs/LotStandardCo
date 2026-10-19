<script setup lang="ts">
  // inherited attrs can mess up the satori parser
  defineOptions({
    inheritAttrs: false,
  })

  const props = defineProps({
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    summary: {
      type: String,
      default: '',
    },
    fromBg: {
      type: String,
      default: '#c8d1d9',
    },
    toBg: {
      type: String,
      default: '#6c7e82',
    },
    image: {
      type: String,
      default: '',
    },
    logo: {
      type: String,
      default: 'i-mdi-road-variant',
    },
    author: {
      type: String,
      default: 'Lot Standard Co',
    },
    twitter: {
      type: String,
      default: '',
    },
  })

  const backgroundImage = computed(() => {
    return {
      'background-image': `linear-gradient(
        to right,
        ${props.fromBg},
        ${props.toBg}
      );`,
    }
  })
</script>
<template>
  <div class="rounded-3xl w-full" :style="backgroundImage">
    <div class="flex flex-row h-full pl-6 py-6 w-full">
      <div class="flex flex-col w-1/2">
        <div class="flex flex-row items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72px"
            height="72px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect x="1" y="8" width="22" height="8" rx="1" fill="#ffffff" />
            <rect x="3" y="11" width="4" height="2" fill="#566568" />
            <rect x="10" y="11" width="4" height="2" fill="#566568" />
            <rect x="17" y="11" width="4" height="2" fill="#566568" />
          </svg>

          <span class="text-white font-extrabold ml-2 mt-4 p-4 text-6xl">
            {{ title }}
          </span>
        </div>
        <h5 class="mt-8 p-4 text-white text-4xl" style="white-space: normal">
          <span>{{ description }}</span>
        </h5>
        <h5
          v-if="summary"
          class="mt-2 p-4 text-white text-2xl"
          style="white-space: normal"
        >
          {{ summary }}
        </h5>
        <div v-if="twitter" class="flex flex-row items-center mt-auto">
          <Icon name="logos:twitter" size="32" />
          <span class="ml-3 text-2xl text-white">{{ twitter }}</span>
        </div>
      </div>
      <div class="-my-6 w-1/2">
        <img
          cover
          :alt="title || 'Lot Standard Co parking lot striping and pavement maintenance'"
          :src="image"
          height="630"
          width="630"
          class="h-full rounded-r-3xl w-full"
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
