<script setup lang="ts">
  import siteMeta from '@/site'
  import type { ServicePage } from '~~/types/services'

  const { service } = defineProps<{ service: ServicePage }>()

  const pageUrl = `${siteMeta.url}/services/${service.slug}`

  // The contact form preselects this service from the ?service= query.
  const contactLink = { path: '/contact', query: { service: service.slug } }

  usePageSeo({
    title: service.seoTitle,
    description: service.metaDescription,
    keywords: service.keywords,
  })

  useSchemaOrg([
    {
      '@type': 'Service',
      name: service.name,
      serviceType: service.name,
      description: service.metaDescription,
      url: pageUrl,
      image: service.image,
      provider: { '@id': `${siteMeta.url}/#identity` },
      areaServed: siteMeta.business.areaServed.map((name) => ({
        '@type': 'AdministrativeArea',
        name,
      })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: service.faqs.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
    defineBreadcrumb({
      itemListElement: [
        { name: 'Home', item: '/' },
        { name: 'Services', item: '/services' },
        { name: service.name },
      ],
    }),
  ])
</script>

<template>
  <div
    class="bg-primary-100 py-12 text-primary-900 dark:bg-primary-700 dark:text-primary-100"
  >
    <div class="container mx-auto px-4">
      <nav aria-label="Breadcrumb" class="mb-6 text-sm">
        <NuxtLink to="/" class="underline">Home</NuxtLink>
        <span class="mx-2">/</span>
        <NuxtLink to="/services" class="underline">Services</NuxtLink>
        <span class="mx-2">/</span>
        <span aria-current="page">{{ service.name }}</span>
      </nav>

      <header class="mx-auto text-center lg:w-8/12">
        <p class="mb-2 text-sm font-medium md:text-base lg:text-lg uppercase">{{ service.eyebrow }}</p>
        <h1 class="text-2xl capitalize md:text-3xl lg:text-4xl">
          {{ service.heading }}
        </h1>
      </header>

      <div class="mt-14 grid gap-8 lg:grid-cols-2">
        <NuxtImg
          :src="service.image"
          :alt="`${service.name} for a commercial parking lot in Arkansas`"
          width="800"
          height="600"
          loading="eager"
          fetchpriority="high"
          class="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
        />
        <div class="flex flex-col gap-4 text-base leading-relaxed">
          <p v-for="(paragraph, index) in service.intro" :key="index">
            {{ paragraph }}
          </p>
          <p v-if="service.priceNote" class="font-semibold">
            {{ service.priceNote }}
          </p>
          <BaseButton
            size="lg"
            :to="contactLink"
            color="cta"
            class="mt-auto self-start"
          >
            Request a {{ service.name }} Quote
          </BaseButton>
        </div>
      </div>

      <section class="mt-20">
        <h2 class="mb-6 text-center text-2xl font-bold">
          Why Property Owners Choose Our {{ service.name }}
        </h2>
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div
            v-for="benefit in service.benefits"
            :key="benefit.title"
            class="rounded-3xl bg-white/80 p-6 shadow-xl dark:bg-neutral-900/80"
          >
            <h3
              class="mb-2 text-lg font-bold text-primary-700 dark:text-primary-200"
            >
              {{ benefit.title }}
            </h3>
            <p class="text-sm">{{ benefit.text }}</p>
          </div>
        </div>
      </section>

      <section
        class="mt-20 rounded-3xl bg-neutral-50 p-8 shadow-xl dark:bg-neutral-900"
      >
        <div class="grid gap-8 lg:grid-cols-[1fr_40%]">
          <div>
            <h2 class="mb-4 text-2xl font-bold">Our Efficient {{ service.name }} Process</h2>
            <ol class="space-y-8">
              <li
                v-for="(step, index) in service.process"
                :key="step.title"
                class="grid grid-cols-[2rem_1fr] items-center gap-x-4 gap-y-1"
              >
                <span
                  class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-600 font-bold text-white dark:bg-primary-200 dark:text-primary-900"
                >
                  {{ index + 1 }}
                </span>
                <h3 class="!mb-0 font-bold">{{ step.title }}</h3>
                <p class="col-start-2 text-sm">{{ step.text }}</p>
              </li>
            </ol>
          </div>

          <div
            class="rounded-3xl bg-primary-600 p-6 text-white dark:bg-primary-200 dark:text-primary-900"
          >
            <h3 class="mb-3 text-xl font-bold">What's Included</h3>
            <ul class="mb-6 space-y-3">
              <li
                v-for="feature in service.features"
                :key="feature"
                class="flex items-start gap-2"
              >
                <BaseIcon
                  name="i-mdi-check-circle-outline"
                  height="20px"
                  class="mt-0.5"
                />
                <span>{{ feature }}</span>
              </li>
            </ul>
            <BaseButton size="lg" :to="contactLink" color="cta">
              Request a Quote
            </BaseButton>
          </div>
        </div>
      </section>

      <section class="mt-20 lg:mx-auto lg:w-8/12">
        <h2 class="mb-6 text-center text-2xl font-bold">
          {{ service.name }} FAQs
        </h2>
        <div class="space-y-4">
          <details
            v-for="faq in service.faqs"
            :key="faq.question"
            class="rounded-2xl bg-white/80 p-5 shadow dark:bg-neutral-900/80"
          >
            <summary class="cursor-pointer font-bold">{{ faq.question }}</summary>
            <p class="mt-3 text-sm leading-relaxed">{{ faq.answer }}</p>
          </details>
        </div>
      </section>

      <section class="mt-20 text-center">
        <h2 class="mb-2 text-2xl font-bold">Serving Western & Northwest Arkansas</h2>
        <p class="mx-auto mb-4 lg:w-8/12">
          We provide {{ service.name.toLowerCase() }} across
          {{ siteMeta.business.areaServed.join(', ') }}.
        </p>
        <BaseButton to="/areas">View All Service Areas</BaseButton>
      </section>

      <section class="mt-20 text-center">
        <h2 class="mb-4 text-2xl font-bold">Related Services</h2>
        <div class="flex flex-wrap justify-center gap-3">
          <BaseButton
            v-for="related in service.related"
            :key="related.slug"
            :to="`/services/${related.slug}`"
          >
            {{ related.name }}
          </BaseButton>
          <BaseButton to="/services">All Services</BaseButton>
        </div>
      </section>
    </div>
  </div>
</template>
