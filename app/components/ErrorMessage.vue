<script setup lang="ts">
  // The message and graphic shown on the 404 page. Used by error.vue (what
  // visitors see) and by pages/not-found.vue (rendered at build time and copied
  // to 404.html, so the file has real content, a title and noindex).
  defineProps<{ is404: boolean; error?: object }>()
  const isDev = import.meta.dev

  function handleError() {
    return clearError({ redirect: '/' })
  }
</script>
<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      justify-content: center;
      margin-top: 3rem;
      margin-bottom: 3rem;
      text-align: center;
    "
  >
    <!-- Simple space scene: a small ship drifting past a ringed planet -->
    <svg
      viewBox="0 0 400 200"
      role="img"
      aria-label="A small spaceship drifting past a ringed planet among the stars"
      style="width: 100%; max-width: 28rem; border-radius: 1rem"
    >
      <defs>
        <radialGradient id="planet-glow" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stop-color="#f6c177" />
          <stop offset="100%" stop-color="#b4637a" />
        </radialGradient>
      </defs>
      <rect width="400" height="200" fill="#0b1026" />
      <g fill="#ffffff">
        <circle cx="24" cy="30" r="1.4" />
        <circle cx="62" cy="168" r="1" />
        <circle cx="88" cy="52" r="1.2" />
        <circle cx="132" cy="22" r="1" />
        <circle cx="150" cy="150" r="1.4" />
        <circle cx="188" cy="64" r="1" />
        <circle cx="214" cy="178" r="1.2" />
        <circle cx="236" cy="28" r="1.4" />
        <circle cx="262" cy="92" r="1" />
        <circle cx="352" cy="22" r="1.2" />
        <circle cx="376" cy="176" r="1.4" />
        <circle cx="392" cy="86" r="1" />
        <circle cx="46" cy="104" r="1" />
        <circle cx="120" cy="104" r="1.2" />
        <circle cx="170" cy="118" r="1" />
      </g>
      <ellipse
        cx="300"
        cy="112"
        rx="78"
        ry="14"
        fill="none"
        stroke="#e0def4"
        stroke-opacity="0.55"
        stroke-width="4"
        transform="rotate(-18 300 112)"
      />
      <circle cx="300" cy="112" r="40" fill="url(#planet-glow)" />
      <g transform="translate(70 96)">
        <circle cx="-4" cy="4" r="5" fill="#f6c177" opacity="0.7" />
        <polygon points="0,4 50,-4 80,4 50,12" fill="#c4c7d4" />
        <polygon points="30,-4 48,-24 56,-4" fill="#9ca0b5" />
        <polygon points="30,12 48,32 56,12" fill="#9ca0b5" />
        <circle cx="58" cy="4" r="3" fill="#31748f" />
      </g>
    </svg>
    <div style="font-size: 1.875rem; line-height: 2.25rem">
      {{ is404 ? 'This page could not be found' : 'An error occurred' }}
    </div>
    <div style="font-size: 1.25rem; line-height: 1.75rem; opacity: 0.5;">
      Looks like you've followed a broken link or entered a URL that doesn't
      exist on this site.
    </div>
    <pre v-if="isDev" style="width: 100%; white-space: normal">{{
      error
    }}</pre>
    <button
      style="
        background-color: gray;
        padding-left: 12px;
        padding-right: 12px;
        padding-top: 6px;
        padding-bottom: 6px;
        font-size: 0.875rem !important;
        line-height: 1.25rem !important;
        font-weight: 500 !important;
        line-height: 1.25rem;
        letter-spacing: 0.0178571429em !important;
        text-transform: none !important;
        border-radius: 0.5rem !important;
      "
      @click="handleError"
    >
      &lt; Go Back
    </button>
  </div>
</template>
