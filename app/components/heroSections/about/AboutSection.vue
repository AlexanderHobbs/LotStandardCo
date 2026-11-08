<script setup lang="ts">
import MiniDivider from "@/components/heroSections/divider/MiniDivider.vue";

// The three promises under the intro. Each one always pulses to invite a click
// and opens a dialog explaining how we uphold it.
const promises = [
  {
    title: "One Standard",
    summary:
      "Every crew follows the Lot Standard Playbook, so your lot gets the same careful process from first message to finished lot.",
    points: [
      "An aerial assessment and digital quote start every job, so you know the plan before we begin.",
      "The Lot Standard Playbook gives every crew the same steps, so the work is consistent on every lot.",
      "Every quote request gets a reply within one business day.",
      "We schedule early mornings, evenings and weekends, and use phased work and fast-drying paint to get your lot reopened quickly.",
    ],
  },
  {
    title: "Every Lot",
    summary:
      "Every lot gets the same paper trail, so you always know what is happening and what it will cost.",
    points: [
      "A walkthrough and a clear written quote before any work begins. The approved price is the final price.",
      "One coordinated crew and one point of contact keep you informed from the first quote through the final walkthrough.",
      "Photo documentation of the work, so you have a record of exactly what was done.",
      "A final walkthrough with a documented closeout report.",
    ],
  },
  {
    title: "Every Time",
    summary:
      "We stand behind every job with a satisfaction guarantee and a written warranty, so you can call us every time, not just once.",
    points: [
      "Satisfaction guarantee: if something isn't right, we come back and make it right.",
      "A written warranty on the work, delivered with your closeout report.",
      "Owners with multiple locations can combine properties on one schedule and one invoice.",
      "We plan lot upkeep ahead of time, so maintenance is scheduled instead of chased.",
    ],
  },
];

const dialog = ref<HTMLDialogElement | null>(null);
const active = ref<(typeof promises)[number] | null>(null);
const open = (promise: (typeof promises)[number]) => {
  active.value = promise;
  dialog.value?.showModal();
  // Keep the page from scrolling (or Lenis gliding) behind the dialog.
  document.documentElement.style.overflow = "hidden";
};
const onClose = () => {
  document.documentElement.style.overflow = "";
};
// A click on the dimmed backdrop lands on the <dialog> itself.
const onDialogClick = (event: MouseEvent) => {
  if (event.target === dialog.value) dialog.value?.close();
};
onBeforeUnmount(onClose);
</script>
<template>
  <section
    id="about"
    class="container mx-auto px-4 pb-12 md:pb-16 md:pt-16"
    aria-labelledby="about-heading"
  >
    <div
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :visible-once="{
        opacity: 1,
        y: 0,
        transition: { duration: 600, ease: 'easeOut' },
      }"
      class="grid items-start gap-10 lg:grid-cols-2 lg:gap-14"
    >
      <div class="w-full text-left">
        <p
          class="mb-2 text-sm font-medium uppercase text-primary-600 dark:text-primary-200 md:text-base lg:text-lg eyebrow-dash"
        >
          About Lot Standard Co
        </p>
        <h2
          id="about-heading"
          class="capitalize !text-2xl md:!text-3xl lg:!text-4xl"
        >
          Parking Lot Maintenance in the River Valley & Northwest Arkansas
        </h2>
        <p class="mt-4">
          Lot Standard Co keeps parking lots in shape for businesses, property
          managers, churches, schools and franchises across Fort Smith,
          Fayetteville, Rogers, Bentonville, Van Buren and the rest of Northwest
          Arkansas and the River Valley.
          <br><br>Sealcoating, crack filling, pothole repair and striping
          all run on our Lot Standard Playbook: aerial assessment, digital
          quote, work scheduled around your business, and a documented final
          walkthrough. Every job comes with a written warranty.
        </p>
        <ul class="mt-6 space-y-3 [zoom:1.2]">
          <li v-for="promise in promises" :key="promise.title">
            <button
              type="button"
              class="group relative flex items-center gap-3 rounded-full py-0.5 pr-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              :aria-label="`${promise.title}: see how we uphold this`"
              aria-haspopup="dialog"
              @click="open(promise)"
            >
              <!-- Pulsing ring behind the logo bullet -->
              <span
                class="absolute left-0 top-1/2 -mt-3 h-6 w-6 animate-ping rounded-full bg-primary-400/60 motion-reduce:animate-none"
                aria-hidden="true"
              />
              <LogoBullet class="relative">{{ promise.title }}</LogoBullet>
              <span
                class="hint flex items-center gap-1 text-sm font-medium text-primary-600 dark:text-primary-200"
                aria-hidden="true"
              >
                Click to see how we do it
                <BaseIcon
                  name="i-mdi-arrow-right"
                  height="16px"
                  class="hint-arrow"
                />
              </span>
            </button>
          </li>
        </ul>
      </div>
      <div>
        <QuoteForm />
      </div>
    </div>
    <dialog
      ref="dialog"
      data-lenis-prevent
      class="m-auto w-[calc(100%-2rem)] max-w-2xl rounded-3xl bg-white p-0 text-tertiary-900 shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
      aria-labelledby="promise-title"
      @click="onDialogClick"
      @close="onClose"
    >
      <div v-if="active" class="p-6 md:p-10">
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="mb-1 text-sm font-medium uppercase text-primary-600">
              How we uphold it
            </p>
            <h3 id="promise-title" class="!mb-0 text-2xl font-bold md:text-3xl">
              {{ active.title }}
            </h3>
          </div>
          <button
            type="button"
            class="-mr-2 -mt-2 rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-tertiary-900"
            aria-label="Close"
            @click="dialog?.close()"
          >
            <BaseIcon name="i-mdi-close" height="24px" />
          </button>
        </div>
        <p class="mt-4 text-lg">{{ active.summary }}</p>
        <ul class="mt-6 space-y-5">
          <li v-for="point in active.points" :key="point">
            <LogoBullet class="!items-start">{{ point }}</LogoBullet>
          </li>
        </ul>
        <div class="mt-6 flex justify-end">
          <button
            type="button"
            class="rounded-full bg-[#fcc419] px-6 py-2.5 font-bold text-tertiary-900 transition-all hover:brightness-95"
            @click="dialog?.close()"
          >
            Got it
          </button>
        </div>
      </div>
    </dialog>
  </section>
  <MiniDivider />
</template>
<style scoped>
dialog[open] {
  animation: dialog-in 0.25s ease-out;
}
dialog[open]::backdrop {
  animation: backdrop-in 0.25s ease-out;
}
@keyframes dialog-in {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.97);
  }
}
@keyframes backdrop-in {
  from {
    opacity: 0;
  }
}
/* Arrow nudges toward the label to say "click me" */
.hint-arrow {
  animation: nudge 1.1s ease-in-out infinite;
}
@keyframes nudge {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(4px);
  }
}
@media (prefers-reduced-motion: reduce) {
  .hint-arrow,
  dialog[open],
  dialog[open]::backdrop {
    animation: none;
  }
}
</style>
