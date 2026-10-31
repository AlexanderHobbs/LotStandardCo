import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "pathe";
import presetIcons from "@unocss/preset-icons";
import { bundledLanguages } from "shiki";

import siteMeta from "./app/site";
const {
  title,
  description,
  url,
  defaultLocale,
  twitter,
  trailingSlash,
  titleSeparator,
} = siteMeta;

// Blog posts get their real publish date as sitemap lastmod (from front matter).
const blogSitemapUrls = readdirSync(resolve(__dirname, "app/content/blog"))
  .filter((f) => f.endsWith(".md"))
  .map((f) => {
    const md = readFileSync(resolve(__dirname, "app/content/blog", f), "utf8");
    // `updated:` (when a post is revised) wins over the original publish date.
    const date =
      md.match(/^updated:\s*(\S+)/m)?.[1] ?? md.match(/^date:\s*(\S+)/m)?.[1];
    return {
      loc: `/blog/${f.replace(/\.md$/, "")}`,
      priority: 0.6 as const,
      changefreq: "yearly" as const,
      ...(date ? { lastmod: new Date(date).toISOString() } : {}),
    };
  });

export default defineNuxtConfig({
  extends: [
    "./app-nuxt-tailwindcss-layer", // NavBar and Footer components
  ],

  // Opt in to the Nuxt 4 directory layout (app/, server/)
  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    componentIslands: false,
    payloadExtraction: false,
  },

  nitro: {
    preset: "netlify-static",
    prerender: {
      crawlLinks: true,
      routes: [
        "/services",
        "/services/line-striping",
        "/services/sealcoating",
        "/services/ada-compliance-marking",
        "/services/warehouse-floor-marking",
        "/services/safety-markings",
        "/services/signage-installation",
        "/areas/booneville",
        "/areas/paris",
        "/areas/charleston",
        "/areas/ozark",
        "/areas/greenwood",
        "/areas/fort-smith",
        "/areas/van-buren",
        "/areas/alma",
        "/areas/fayetteville",
        "/areas/springdale",
        "/areas/rogers",
        "/areas/bentonville",
      ],
    },
  },

  build: {
    transpile: ["shiki"], // Workaround as per https://github.com/nuxt/nuxt/issues/28127
  },

  app: {
    baseURL: "/",
    // Brief fade between pages: the old page fades out, then the new one mounts
    // and fades in, which gives its components and styles a moment to settle.
    // The timings live in app/assets/css/tailwind.css (.page-*).
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      meta: [{ charset: "utf-8" }],
    },
  },

  modules: [
    "@unocss/nuxt",
    "@nuxt/content",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@vee-validate/nuxt",
    "@nuxtjs/seo",
    "@nuxtjs/critters",
    "nuxt-icon", // @nuxtjs/seo still depends on this; switch to @nuxt/icon once it doesn't
    "@nuxt/eslint",
    "@vueuse/motion/nuxt",
  ],

  critters: {
    config: {
      preload: "swap",
    },
  },

  css: [
    "@/assets/css/tailwind.css",
  ],

  postcss: {
    plugins: {
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls: {
          NuxtImg: ["src"],
          OgImage: ["image"],
        },
      },
    },
  },

  image: {
    format: ["webp", "png", "jpg"],
    // Images are resized and converted at build time (nuxt generate writes them
    // to dist/_ipx/), so the static site serves the small versions.
    provider: "ipx",
    quality: 75,

    presets: {
      avatar: {
        modifiers: {
          format: "webp",
          width: 80,
          height: 80,
        },
      },
    },
  },

  veeValidate: {
    autoImports: true,
    // Prefixed so they don't clash with native <form>/<input> names
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },

  content: {
    // Content lives in app/content (Nuxt 4 layout)
    sources: {
      content: {
        driver: "fs",
        base: resolve(__dirname, "app/content"),
      },
    },
    markdown: {
      anchorLinks: false,
      rehypePlugins: [
        [
          "rehype-external-links",
          {
            target: "_blank",
            rel: ["noopener"],
            test: (node: any) => /^https?:\/\//.test(node.properties.href),
          },
        ],
      ],
    },
    highlight: {
      //@ts-ignore
      langs: Object.keys(bundledLanguages),
      theme: "dracula-soft",
    },
  },

  sourcemap: {
    client: false,
    server: false,
  },

  routeRules: {
    "/hidden": { robots: false },
  },

  // Used by all modules in the @nuxtjs/seo collection
  site: {
    url,
    name: title,
    description,
    defaultLocale,
    twitter,
    trailingSlash,
    titleSeparator,
  },

  robots: {
    blockNonSeoBots: true,
  },

  sitemap: {
    // Auto-discovery wrote an escaped, resized /_ipx URL (and empty entries);
    // list the home page image explicitly instead.
    discoverImages: false,
    exclude: ["/franchise", "/franchise/"],
    // Give crawlers freshness/priority hints (build time = last deploy).
    defaults: {
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.7,
    },
    urls: [
      {
        loc: "/",
        priority: 1,
        changefreq: "weekly",
        images: [{ loc: "/images/hero-parking-lot-striping.jpg" }],
      },
      { loc: "/services", priority: 0.9, changefreq: "weekly" },
      { loc: "/areas", priority: 0.9, changefreq: "weekly" },
      { loc: "/contact", priority: 0.8, changefreq: "monthly" },
      { loc: "/about", priority: 0.8, changefreq: "monthly" },
      { loc: "/blog", priority: 0.8, changefreq: "weekly" },
      { loc: "/areas/booneville", priority: 0.7, changefreq: "monthly" },
      { loc: "/areas/paris", priority: 0.7, changefreq: "monthly" },
      { loc: "/areas/charleston", priority: 0.7, changefreq: "monthly" },
      { loc: "/areas/ozark", priority: 0.7, changefreq: "monthly" },
      { loc: "/areas/greenwood", priority: 0.7, changefreq: "monthly" },
      { loc: "/areas/fort-smith", priority: 0.7, changefreq: "monthly" },
      { loc: "/areas/van-buren", priority: 0.7, changefreq: "monthly" },
      { loc: "/areas/alma", priority: 0.7, changefreq: "monthly" },
      { loc: "/areas/fayetteville", priority: 0.7, changefreq: "monthly" },
      { loc: "/areas/springdale", priority: 0.7, changefreq: "monthly" },
      { loc: "/areas/rogers", priority: 0.7, changefreq: "monthly" },
      { loc: "/areas/bentonville", priority: 0.7, changefreq: "monthly" },
      ...blogSitemapUrls,
    ],
    xslColumns: [
      { label: "URL", width: "50%" },
      { label: "Last Modified", select: "sitemap:lastmod", width: "12.5%" },
      { label: "Priority", select: "sitemap:priority", width: "12.5%" },
      {
        label: "Change Frequency",
        select: "sitemap:changefreq",
        width: "12.5%",
      },
      { label: "Hreflangs", select: "count(xhtml:link)", width: "12.5%" },
    ],
    strictNuxtContentPaths: true,
  },

  ogImage: {
    defaults: {
      extension: "jpeg",
    },
    // Preview a page's image at /__og-image__/image/<path>/og.jpeg
  },

  linkChecker: {
    enabled: false,
    report: {
      html: true,
      markdown: true,
    },
  },

  unocss: {
    presets: [
      // Cast to any to avoid type conflicts between different @unocss/core instances
      presetIcons({
        prefix: "i-",
        // Load the icon sets explicitly. The preset's automatic loader switches
        // itself off when it detects VS Code (e.g. `npm run dev` in its
        // terminal), which left every icon on the site blank. Add a line here
        // when using an icon from a new set.
        collections: {
          mdi: () =>
            import("@iconify/json/json/mdi.json").then((i) => i.default as any),
          "line-md": () =>
            import("@iconify/json/json/line-md.json").then((i) => i.default as any),
          "material-symbols": () =>
            import("@iconify/json/json/material-symbols.json").then(
              (i) => i.default as any,
            ),
        },
      }) as any,
    ],
  },

  eslint: {},

  compatibilityDate: "2025-01-14",
  devServer: {
    port: 3001
  },
});
