// Makes UnoCSS scan this file for the nav and social icon classes:
// @unocss-include

export default {
  title: "Lot Standard Co",
  description: "Professional parking lot line striping, sealcoating, ADA-compliant marking, and pavement maintenance for commercial properties in Fort Smith and surrounding areas.",
  // Path from the public/ folder (public/logo.png), not a path on this computer.
  logo: "/logo.png",
  author: "Lot Standard Co",
  url: "https://lotstandard.com",
  defaultLocale: "en",
  // Business details used for schema.org LocalBusiness markup and the visible
  // contact info (footer + contact page). Keep these identical everywhere
  // (name, address, phone) - consistency is a local SEO ranking signal.
  // Service-area business with no public street address: the schema address
  // is city/state only (Google's guidance for service-area businesses), and
  // `addressDisplay` is the human-readable version shown on the site.
  business: {
    name: "Lot Standard Co",
    phone: "+14792767122",
    phoneDisplay: "(479) 276-7122",
    email: "alex@lotstandard.com",
    address: {
      addressLocality: "Fort Smith",
      addressRegion: "AR",
      addressCountry: "US",
    } as
      | {
          streetAddress?: string;
          addressLocality: string;
          addressRegion: string;
          postalCode?: string;
          addressCountry: string;
        }
      | undefined,
    addressDisplay: "Fort Smith and surrounding areas",
    // Must match the Google Business Profile exactly.
    hoursDisplay: "Mon–Fri, 5am–7pm",
    openingHours: {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "05:00",
      closes: "19:00",
    },
    // Profile links (Google Business Profile, etc.) for schema.org `sameAs`.
    sameAs: [
      "https://share.google/BHiVMEgkuF6DXLslt",
      "https://instagram.com/lotstandardco",
    ] as string[],
    areaServed: [
      "Logan County, AR",
      "Franklin County, AR",
      "Sebastian County, AR",
      "Crawford County, AR",
      "Washington County, AR",
      "Benton County, AR",
    ] as string[],
  },
  // Only list profiles that exist; add Facebook, LinkedIn, etc. back here when they do.
  socials: [
    { name: "Instagram", icon: "i-mdi-instagram", color: "#E4405F", url: "https://instagram.com/lotstandardco" },
  ],
  twitter: "", // handle without the @, e.g. 'lotstandardco'
  // Netlify serves every page at /page/ and 301s /page to it, so canonical
  // URLs, og:url and the sitemap must use the trailing slash to match.
  trailingSlash: true,
  titleSeparator: "|",

  navs: {
    primary: [
      {
        title: "Services",
        icon: "i-mdi-road-variant",
        to: "/services",
        // Dropdown menu. Any nav item can get a dropdown by adding a `children` array.
        children: [
          { title: "Line Striping", to: "/services/line-striping" },
          { title: "Sealcoating", to: "/services/sealcoating" },
          {
            title: "ADA Compliance Marking",
            to: "/services/ada-compliance-marking",
          },
          { title: "Warehouse Floor Marking", to: "/services/warehouse-floor-marking" },
          {
            title: "Safety Markings",
            to: "/services/safety-markings",
          },
          {
            title: "Signage Installation",
            to: "/services/signage-installation",
          },
        ],
      },
      {
        title: "Areas We Serve",
        icon: "i-mdi-map-marker-radius-outline",
        to: "/areas",
        // Each town links to its own page; the dropdown adds "View all areas".
        children: [
          { title: "Fort Smith", to: "/areas/fort-smith" },
          { title: "Fayetteville", to: "/areas/fayetteville" },
          { title: "Bentonville", to: "/areas/bentonville" },
          { title: "Rogers", to: "/areas/rogers" },
          { title: "Springdale", to: "/areas/springdale" },
          { title: "Van Buren", to: "/areas/van-buren" },
          { title: "Alma", to: "/areas/alma" },
          { title: "Booneville", to: "/areas/booneville" },
          { title: "Charleston", to: "/areas/charleston" },
          { title: "Greenwood", to: "/areas/greenwood" },
          { title: "Ozark", to: "/areas/ozark" },
          { title: "Paris", to: "/areas/paris" },
        ],
      },
    ],
    secondary: [
      {
        title: "About",
        icon: "i-mdi-information-outline",
        to: "/about",
      },
      {
        title: "Blog",
        icon: "i-mdi-post-outline",
        to: "/blog",
      },
      {
        title: "Franchise",
        icon: "i-mdi-store-outline",
        to: "/franchise",
      },
    ],
  },
};
