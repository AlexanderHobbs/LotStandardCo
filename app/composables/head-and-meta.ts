import siteMeta from "@/site";

import { fontUrls } from "@/utils/font";

import checkDarkTheme from "@/composables/dark-color-scheme-check?raw";
import type { Script } from "@unhead/schema";

type TurboScript = Omit<Script, "async"> & {
  async?: false;
  once: true;
};

export const useHeadAndMeta = (pageMeta: ComputedRef) => {
  const {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    author,
    twitter,
    titleSeparator,
    business,
    logo,
  } = siteMeta;

  const link: any = [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico", sizes: "any" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    // ...[
    //   '/fonts/barlow-7cHpv4kjgoGqM7E_Ass52Hs.woff2',
    //   '/fonts/firacode-uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_D1sJVD7Ng.woff2',
    //   '/fonts/barlow-7cHpv4kjgoGqM7E_DMs5.woff2',
    // ].map(
    //   (href) =>
    //     ({
    //       rel: 'preload',
    //       as: 'font',
    //       type: 'font/woff2',
    //       crossorigin: '',
    //       href,
    //     } as const),
    // ),
  ];
  const noscript: any = [];

  const route = useRoute();

  // Absolute, normalised canonical URL for the current page (query strings and
  // hashes are dropped so filtered/tracked URLs don't split ranking signals).
  const canonicalHref = computed(() => {
    const path = pageMeta.value.canonicalUrl || route.path;
    const url = new URL(path, siteUrl);
    if (url.pathname !== "/") {
      url.pathname = url.pathname.replace(/\/+$/, "");
    }
    return url.origin + url.pathname;
  });
  link.push({ rel: "canonical", href: canonicalHref });

  if (fontUrls.length) {
    // Font preloads
    const googleapis = "https://fonts.googleapis.com";
    const gstatic = "https://fonts.gstatic.com";
    link.push(
      { rel: "dns-prefetch", href: googleapis },
      { rel: "dns-prefetch", href: gstatic },
      { rel: "preconnect", crossorigin: "anonymous", href: googleapis },
      { rel: "preconnect", crossorigin: "anonymous", href: gstatic },
      {
        rel: "preload",
        as: "style",
        onload: "this.onload=null;this.rel='stylesheet'",
        href: fontUrls.toString(),
      },
    );
    noscript.push(
      `<link rel="stylesheet" crossorigin="anonymous" href="${fontUrls.toString()}" />`,
    );
  }

  // Page title only (e.g. "Services"); the site name is appended by the
  // titleTemplate below, so pages that call useHead({ title }) get it too.
  const pageTitle = computed(() => pageMeta.value.title as string | undefined);
  const title = computed(() =>
    pageTitle.value
      ? `${pageTitle.value} ${titleSeparator} ${siteTitle}`
      : siteTitle,
  );

  // Manage head with useHead
  useHead({
    title: pageTitle, // defined statically using definePageMeta in pages. Dynamic routes (e.g., [slug]) override it via usePageSeo.
    titleTemplate: (t?: string) =>
      t && t !== siteTitle ? `${t} ${titleSeparator} ${siteTitle}` : siteTitle,

    // useScript can also be used to load scripts
    script: [{ innerHTML: checkDarkTheme, once: true } as TurboScript],
    link,
    noscript,
    htmlAttrs: { lang: "en-US" },
    bodyAttrs: {},
    style: [],
  });

  const description = computed(
    () => pageMeta.value.description || siteDescription,
  );
  const keywords = computed(() => pageMeta.value.tags?.toString());

  // Manage head meta with useSeoMeta
  useServerSeoMeta({
    description,
    author,
    charset: "utf-8", // defaulted by nuxt
    viewport: "width=device-width, initial-scale=1", // defaulted by nuxt
    keywords,

    // // Open Graph / Facebook / LinkedIn / Discord
    ogTitle: title, // set by @nuxtjs/seo's nuxt-seo-utils
    ogDescription: description, // set by @nuxtjs/seo's nuxt-seo-utils
    ogType: pageMeta.value.ogType || "website",
    ogImageAlt: title, // set by @nuxtjs/seo's nuxt-og-image
    // // Other values - og:image:width, og:image:height, og:image:alt, og:image:type, og:image:secure_url
    ogUrl: canonicalHref,
    ogSiteName: siteTitle,
    // // Other values - og: locale, og: type

    // // Twitter (X)
    twitterCard: "summary_large_image", // set by @nuxtjs/seo & nuxt-og-image
    twitterTitle: title,
    twitterDescription: description,
    twitterImageAlt: title,
    ...(twitter
      ? { twitterSite: `@${twitter}`, twitterCreator: `@${twitter}` }
      : {}),
  });

  // Manage schema-org with useSchemaOrg
  // https://unhead.unjs.io/schema-org/getting-started/setup#_3-add-site-schemaorg
  // https://nuxtseo.com/learn/mastering-meta/schema-org#reactivity-with-useschemaorg
  useSchemaOrg([
    defineWebSite({
      name: siteTitle,
      description: siteDescription,
    }),
    // name, description and url are inferred from the resolved <title>,
    // description meta and canonical link, so per-page overrides are respected.
    defineWebPage(),
    // Site-wide business entity; Service and BlogPosting nodes on inner pages
    // reference it through its @id (`${siteUrl}/#identity`).
    defineLocalBusiness({
      name: business.name,
      url: siteUrl,
      logo,
      image: logo,
      description: siteDescription,
      telephone: business.phone,
      email: business.email,
      ...(business.address
        ? { address: { "@type": "PostalAddress", ...business.address } }
        : {}),
      ...(business.areaServed.length
        ? { areaServed: business.areaServed }
        : {}),
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", ...business.openingHours },
      ],
      ...(business.sameAs.length ? { sameAs: business.sameAs } : {}),
    } as any),
  ]);
};

// Meta descriptions display best at ~155 characters: cut on a word boundary
// and add an ellipsis rather than stopping mid-sentence.
const trimDescription = (text?: string, max = 155) => {
  if (!text || text.length <= max) return text;
  return text.slice(0, max).replace(/[\s,;:.-]*\S*$/, "") + "…";
};

type MaybeGetter<T> = T | Ref<T> | (() => T);

// For dynamic pages ([slug]) whose title/description come from data. Keeps the
// <title>, description, Open Graph and Twitter tags in sync with each other.
export const usePageSeo = (opts: {
  title: MaybeGetter<string | undefined>;
  description: MaybeGetter<string | undefined>;
  ogType?: "website" | "article";
  keywords?: MaybeGetter<string | undefined>;
}) => {
  const { title: siteTitle, titleSeparator } = siteMeta;
  const pageTitle = computed(() => toValue(opts.title));
  const fullTitle = computed(() =>
    pageTitle.value
      ? `${pageTitle.value} ${titleSeparator} ${siteTitle}`
      : siteTitle,
  );
  const description = computed(() =>
    trimDescription(toValue(opts.description)),
  );

  useHead({ title: pageTitle });
  useServerSeoMeta({
    ogTitle: fullTitle,
    twitterTitle: fullTitle,
    ogImageAlt: fullTitle,
    twitterImageAlt: fullTitle,
    description,
    ogDescription: description,
    twitterDescription: description,
    ogType: opts.ogType || "website",
    keywords: computed(() => toValue(opts.keywords)),
  });
};
