<script setup lang="ts">
  const faqs = [
    {
      question: 'How much does parking lot striping cost?',
      answer:
        'Pricing depends on lot size, layout complexity, and the number of stalls. Most jobs are priced per linear foot or per stall. Contact us for a free, no-obligation quote based on your specific property.',
    },
    {
      question: 'How long does a striping project take?',
      answer:
        'Most commercial lots are completed within a single day. Paint is typically dry to the touch within an hour, with full cure over the following 24 hours.',
    },
    {
      question: 'Will my parking lot need to close during striping?',
      answer:
        'We schedule around your business hours whenever possible — early mornings, evenings, or weekends — and can stripe in sections so only part of the lot is closed at a time.',
    },
    {
      question: 'How often should a parking lot be re-striped?',
      answer:
        'Most lots need re-striping every 18-24 months, depending on traffic volume and climate. High-traffic lots may need it sooner.',
    },
    {
      question: 'Do you handle ADA-compliant accessible parking markings?',
      answer:
        'Yes. Every layout we design and paint meets federal and state ADA requirements, including accessible stalls, access aisles, and van-accessible spaces.',
    },
    {
      question: 'What areas do you service?',
      answer:
        'We proudly serve commercial and residential properties across the greater metro area and surrounding counties. Contact us to confirm coverage for your location.',
    },
  ]

  useSchemaOrg([
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ])
</script>
<template>
  <section class="container mx-auto px-4 py-12">
    <div class="mx-auto text-center w-full lg:w-7/12">
      <p class="text-sm md:text-base lg:text-lg font-medium mb-2 text-primary-600 dark:text-primary-200 uppercase">
        Frequently Asked Questions
      </p>
      <h2 class="capitalize mt-3 !text-2xl md:!text-3xl lg:!text-4xl">Common Questions About Our Services</h2>
    </div>
    <div class="max-w-3xl mt-10 mx-auto space-y-3">
      <details
        v-for="(faq, index) in faqs"
        :key="index"
        class="group rounded-xl px-5 py-4 bg-neutral-50 dark:bg-neutral-900"
      >
        <summary
          class="font-semibold cursor-pointer list-none flex items-center justify-between"
        >
          {{ faq.question }}
          <BaseIcon
            name="i-mdi-chevron-down"
            height="20px"
            class="transition-transform group-open:rotate-180"
          />
        </summary>
        <p class="mt-3 text-neutral-700 dark:text-neutral-300">
          {{ faq.answer }}
        </p>
      </details>
    </div>
  </section>
</template>
<style scoped></style>
