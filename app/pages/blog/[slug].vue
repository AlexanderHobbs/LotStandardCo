<script setup lang="ts">
  import siteMeta from '@/site'

  definePageMeta({
    title: 'Blog',
    description: 'Read, Learn, Enjoy: Your Blog Destination!',
    hidden: true,
    navOrder: 5,
    type: 'secondary',
    icon: 'i-mdi-home',
  })

  const slug =
    useRoute().params.slug.toString().replace(/,/g, '/') ||
    useRoute().name.toString().replace(/,/g, '/')

  const post = await getPost('blog', slug)

  const author = computed(() => {
    const { twitter, avatar, gravatar, author } = post.value
    return { twitter, avatar, gravatar, author }
  })

  usePageSeo({
    // `seoTitle` (front matter) is a shorter version for search results; the
    // full `title` stays as the on-page headline.
    title: () => post.value?.seoTitle || post.value?.title,
    description: () => post.value?.description || post.value?.title,
    ogType: 'article',
  })

  const publishedAt = computed(() =>
    post.value?.date ? new Date(post.value.date).toISOString() : undefined,
  )

  useServerSeoMeta({
    articlePublishedTime: publishedAt,
    articleAuthor: () => (post.value?.author ? [post.value.author] : undefined),
  })

  useSchemaOrg([
    {
      '@type': 'BlogPosting',
      headline: post.value?.title,
      description: post.value?.description,
      datePublished: publishedAt.value,
      dateModified: publishedAt.value,
      author: {
        '@type': 'Organization',
        name: post.value?.author || siteMeta.business.name,
      },
      publisher: { '@id': `${siteMeta.url}/#identity` },
    },
    defineBreadcrumb({
      itemListElement: [
        { name: 'Home', item: '/' },
        { name: 'Blog', item: '/blog' },
        { name: post.value?.title },
      ],
    }),
  ])
</script>
<template>
  <section>
    <div class="mt-12 mx-auto px-4 w-full">
      <div class="flex flex-col p-4 rounded-lg">
        <article class="dark:xl:divide-gray-700 xl:divide-gray-200 xl:divide-y">
          <header class="pt-6 relative space-y-1 text-center xl:pb-10">
            <div class="flex justify-center mb-4 lg:absolute lg:justify-start">
              <BaseButton to="/blog"><span>&lt;- Go Back</span> </BaseButton>
            </div>
            <div>
              <PostDate :date="post.date" />
              <h1>
                {{ post.title }}
              </h1>
            </div>
          </header>
          <div
            class="dark:divide-gray-700 divide-gray-200 divide-y pb-16 xl:divide-y-0 xl:gap-x-10 xl:grid xl:grid-cols-4 xl:pb-20 xl:sticky"
            style="grid-template-rows: auto 1fr"
          >
            <div class="p-4 rounded-xl xl:hidden xl:sticky xl:top-28">
              <TheAuthor v-bind="author" />
            </div>
            <div
              class="hidden pl-8 pr-4 py-4 rounded-xl xl:block xl:sticky xl:top-28 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100"
            >
              <TheAuthor v-bind="author" />
              <TableOfContents :post="post" class="hidden xl:block" />
              <QuoteBanner
                variant="compact"
                title="Want a free quote?"
                class="mt-6"
              />
            </div>
            <div
              class="dark:divide-gray-700 divide-gray-200 divide-y xl:col-span-3 xl:pb-0 xl:row-span-2"
            >
              <StaticMarkdown base="blog" :path="slug" />
              <QuoteBanner
                variant="card"
                title="Need Help With Your Parking Lot?"
                text="Get a free, no-obligation quote from our licensed & insured crew."
              />
            </div>
            <div class="hidden">
              <footer
                class="dark:divide-gray-700 divide-gray-200 divide-y font-medium leading-5 text-sm xl:col-start-1 xl:row-start-2"
              >
                <NuxtLink class="block pt-8" to="/blog"
                  >Back to the blog
                </NuxtLink>
              </footer>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
