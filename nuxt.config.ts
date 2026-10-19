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

export default defineNuxtConfig({
  extends: [
    "./app-nuxt-tailwindcss-layer", // NavBar and Footer components
  ],

  // ssr: false,
  // devtools: { enabled: false }, // enabled by default, disable when using standalone Vue devtools when using standalone Vue devtools

  // Preparation for Nuxt 4 migration
  future: {
    compatibilityVersion: 4,
  },

  // Before Nuxt 4 migration
  // srcDir: 'app',
  // serverDir: fileURLToPath(new URL('server', import.meta.url)),
  // dir: {
  //   public: fileURLToPath(new URL('public', import.meta.url)),
  //   modules: fileURLToPath(new URL('modules', import.meta.url)),
  // },

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
    baseURL: "/", // defaulted by nuxt
    // Brief fade between pages: the old page fades out, then the new one mounts
    // and fades in, which gives its components and styles a moment to settle.
    // The timings live in app/assets/css/tailwind.css (.page-*).
    pageTransition: { name: "page", mode: "out-in" },
    // Look into HeadAndMeta.vue for the rest
    head: {
      meta: [{ charset: "utf-8" }], // defaulted by nuxt
    },
  },

  modules: [
    "@unocss/nuxt",
    "@nuxt/content",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    // '@nuxtjs/html-validator',
    "@nuxt/image",
    "@vee-validate/nuxt",
    "@nuxtjs/seo",
    // '@nuxtjs/fontaine', // blocked by https://github.com/nuxt-modules/fontaine/issues/342
    "@nuxtjs/critters",
    // '@nuxt/icon', // Enable once nuxt-icon is removed
    "nuxt-icon", // To be replaced with @nuxt-icon (above), once NuxtSEO drops using this/becomes stable..
    "@nuxt/eslint",
  ],

  // https://dev.to/jacobandrewsky/improving-performance-of-nuxt-with-fontaine-5dim
  // blocked by https://github.com/nuxt-modules/fontaine/issues/342
  // fontMetrics: {
  //   fonts: ['Inter', 'Kalam'],
  // },

  // https://dev.to/jacobandrewsky/optimizing-css-performance-in-nuxt-with-critters-4k8i
  critters: {
    // Options passed directly to critters: https://github.com/GoogleChromeLabs/critters#critters-2
    config: {
      // Default: 'media'
      preload: "swap",
    },
  },

  /* Enable once nuxt-icon is removed */
  // icon: {
  //   componentName: 'NuxtIcon', // Instead of NuxtIcon, prefer using BaseIcon that uses unocss-icons which is more efficient
  //   serverBundle: {
  //     collections: ['vscode-icons', 'logos'],
  //   },
  // },

  css: [
    "@/assets/css/tailwind.css",
    // 'lite-youtube-embed/src/lite-yt-embed.css',
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
    // dir: 'assets/images', // doesn't always work, for eg, with vercel etc, https://github.com/nuxt/image/issues/1006. Therefore, we are storing the images in public folder, to have them not processed by vite, but rather by nuxt-image module on-demand
    // sizes: 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw', // Global sizes not yet supported, has to be specified in NuxtImg or NuxtPicture tags - https://github.com/nuxt/image/issues/216
    // densities: [1,2], // default
    // quality: 80, // can be overridden as NuxtImg prop
    format: ["webp", "png", "jpg"], // default is ['webp']
    // The screen sizes predefined by `@nuxt/image`:
    // screens: {
    //   xs: 320,
    //   sm: 640,
    //   md: 768,
    //   lg: 1024,
    //   xl: 1280,
    //   xxl: 1536,
    //   '2xl': 1536,
    // },

    // TODO: Currently image optimization is paused until some bugs in Nuxt Image modules are fixed
    // provider: 'ipx',
    provider: "none",

    presets: {
      avatar: {
        modifiers: {
          format: "webp",
          width: 80,
          height: 80,
        },
      },
    },
    // netlify: {
    //   baseURL: url,
    // },
    domains: ["placehold.co"],
  },

  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },

  content: {
    // Before Nuxt 4 migration
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

  pinia: {
    storesDirs: ["./stores/**"],
  },

  imports: {
    // dirs: ['my-components'],
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === "lite-youtube",
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
  // https://nuxtseo.com/docs/nuxt-seo/guides/using-the-modules
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
    // https://nuxtseo.com/docs/robots/api/config#blocknonseobots-boolean
    blockNonSeoBots: true,
  },

  sitemap: {
    // Give crawlers freshness/priority hints (build time = last deploy).
    defaults: {
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.7,
    },
    urls: [
      { loc: "/", priority: 1, changefreq: "weekly" },
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
    ],
    // https://nuxtseo.com/docs/sitemap/getting-started/troubleshooting
    // Open {{site.url}}/sitemap.xml
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
    // To turn off xls file when viewing sitemap.xml
    // xsl: false,
    // Remove strictNuxtContentPaths if using nuxt-content in documentDriven mode
    strictNuxtContentPaths: true,
  },

  ogImage: {
    defaults: {
      extension: "jpeg",
    },
    // OG images and nuxtseo features can be previewed with nuxt-devtools during development. OG images can also be viewed using URL in this form - `/__og-image__/image/<path>/og.<extension>`.
    // fonts: ['Inter:400', 'Inter:700'],
    //
    // defaults: { width: 1200, height: 600, emojis: 'noto', renderer: 'satori', component: 'NuxtSeo', cacheMaxAgeSeconds: 60 * 60 * 24 * 3 },
    //
    // disable at a global level
    // runtimeCacheStorage: false,
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
        prefix: "i-", // default prefix, do not change
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

  eslint: {
    // config: {
    //   stylistic: {
    //     // All are default values
    //     semi: false,
    //     quotes: 'single',
    //     blockSpacing: true,
    //     indent: 2,
    //     commaDangle: 'always-multiline',
    //     // ...
    //   },
    // },
    // ...
  },

  compatibilityDate: "2025-01-14",
  devServer: {
    port: 3001
  },
});
