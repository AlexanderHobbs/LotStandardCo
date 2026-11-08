<script setup lang="ts">
import siteMeta from "@/site";

definePageMeta({
  title: "Blog",
  hidden: true,
});

const slug =
  useRoute().params.slug.toString().replace(/,/g, "/") ||
  useRoute().name.toString().replace(/,/g, "/");

const post = await getPost("blog", slug);

usePageSeo({
  // `seoTitle` (front matter) is a shorter version for search results; the
  // full `title` stays as the on-page headline.
  title: () => post.value?.seoTitle || post.value?.title,
  description: () => post.value?.description || post.value?.title,
  ogType: "article",
});

const publishedAt = computed(() =>
  post.value?.date ? new Date(post.value.date).toISOString() : undefined,
);

// Falls back to the publish date until a post has an `updated:` front-matter date.
const modifiedAt = computed(() =>
  post.value?.updated
    ? new Date(post.value.updated).toISOString()
    : publishedAt.value,
);

useServerSeoMeta({
  articlePublishedTime: publishedAt,
  articleModifiedTime: modifiedAt,
  articleAuthor: [siteMeta.postAuthor.name],
});

useSchemaOrg([
  // defineArticle adds mainEntityOfPage and takes the image from the post's
  // og:image tag.
  defineArticle({
    "@type": "BlogPosting",
    headline: post.value?.title,
    description: post.value?.description,
    datePublished: publishedAt.value,
    dateModified: modifiedAt.value,
    // Same person as the visible "Written by" card (see AuthorCard.vue).
    author: {
      "@type": "Person",
      name: siteMeta.postAuthor.name,
      jobTitle: siteMeta.postAuthor.title,
      url: `${siteMeta.url}${siteMeta.postAuthor.path}`,
    },
    publisher: { "@id": `${siteMeta.url}/#identity` },
  }),
]);
</script>
<template>
  <section>
    <div class="container mx-auto mt-12 px-4">
      <div class="flex flex-col p-4 rounded-lg">
        <article class="dark:xl:divide-gray-700 xl:divide-gray-200 xl:divide-y">
          <header class="pt-6 relative space-y-1 text-center xl:pb-10">
            <div class="flex justify-center mb-4 lg:absolute lg:justify-start">
              <BaseButton to="/blog/"><span>&lt;- Go Back</span> </BaseButton>
            </div>
            <!-- On xl the body is a 4-col grid (sidebar + 3-col text); mirror it so the heading centers over the text only -->
            <div class="xl:grid xl:grid-cols-4 xl:gap-x-10">
              <div class="xl:col-span-3 xl:col-start-2">
                <PostDate :date="post.date" />
                <h1>
                  {{ post.title }}
                </h1>
              </div>
            </div>
          </header>
          <div
            class="dark:divide-gray-700 divide-gray-200 divide-y pb-16 xl:divide-y-0 xl:gap-x-10 xl:grid xl:grid-cols-4 xl:pb-20 xl:sticky"
            style="grid-template-rows: auto 1fr"
          >
            <div
              class="hidden pl-8 pr-4 py-4 rounded-xl xl:block xl:sticky xl:top-28 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100"
            >
              <TableOfContents :post="post" class="hidden xl:block" />
            </div>
            <div class="xl:col-span-3 xl:pb-0 xl:row-span-2">
              <StaticMarkdown base="blog" :path="slug" />
              <AuthorCard class="mt-12" />
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
