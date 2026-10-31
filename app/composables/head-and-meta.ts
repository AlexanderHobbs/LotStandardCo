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
    trailingSlash,
    business,
    logo,
  } = siteMeta;

  const link: any = [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico", sizes: "any" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  ];
  const noscript: any = [];

  const route = useRoute();

  // Absolute, normalised canonical URL for the current page (query strings and
  // hashes are dropped so filtered/tracked URLs don't split ranking signals).
  // Uses the trailing-slash form because that is what the host serves.
  const canonicalHref = computed(() => {
    const path = pageMeta.value.canonicalUrl || route.path;
    const url = new URL(path, siteUrl);
    if (url.pathname !== "/") {
      url.pathname = url.pathname.replace(/\/+$/, "") + (trailingSlash ? "/" : "");
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

  useHead({
    title: pageTitle, // from definePageMeta; dynamic routes override it via usePageSeo
    titleTemplate: (t?: string) =>
      t && t !== siteTitle ? `${t} ${titleSeparator} ${siteTitle}` : siteTitle,

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

  useServerSeoMeta({
    description,
    author,
    charset: "utf-8",
    viewport: "width=device-width, initial-scale=1",
    keywords,

    ogTitle: title,
    ogDescription: description,
    ogType: pageMeta.value.ogType || "website",
    ogImageAlt: title,
    ogUrl: canonicalHref,
    ogSiteName: siteTitle,
    ogLocale: "en_US",

    twitterCard: "summary_large_image",
    twitterTitle: title,
    twitterDescription: description,
    twitterImageAlt: title,
    ...(twitter
      ? { twitterSite: `@${twitter}`, twitterCreator: `@${twitter}` }
      : {}),
  });

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
