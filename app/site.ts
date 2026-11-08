// Makes UnoCSS scan this file for the nav and social icon classes:
// @unocss-include

export default {
  title: "Lot Standard Co",
  description:
    "Professional parking lot sealcoating, crack filling, patching, restriping, ADA-compliant striping, and pavement maintenance for commercial properties in the River Valley & Northwest Arkansas.",
  // Path from the public/ folder (public/logo.png), not a path on this computer.
  logo: "/logo.png",
  author: "Lot Standard Co",
  // Person shown in the "Written by" card on blog posts and used as the author
  // in the BlogPosting structured data, so the two always match.
  postAuthor: {
    name: "Alexander Hobbs",
    title: "Owner | General Manager",
    path: "/about/",
  },
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
    email: "contact@lotstandard.com",
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
    addressDisplay: "River Valley & Northwest Arkansas",
    // Must match the Google Business Profile exactly.
    hoursDisplay: "Mon–Sat, 5am–9pm",
    openingHours: {
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "05:00",
      closes: "21:00",
    },
    // Profile links (Google Business Profile, etc.) for schema.org `sameAs`.
    sameAs: [
      "https://share.google/BHiVMEgkuF6DXLslt",
      "https://instagram.com/lotstandardco",
      "https://www.youtube.com/@LotStandardCo",
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
    {
      name: "Instagram",
      icon: "i-mdi-instagram",
      color: "#E4405F",
      url: "https://instagram.com/lotstandardco",
    },
    {
      name: "Youtube",
      icon: "i-mdi-youtube",
      color: "#CD201F",
      url: "https://www.youtube.com/@LotStandardCo",
    },
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
        to: "/services/",
        // Dropdown menu. Any nav item can get a dropdown by adding a `children` array.
        children: [
          { title: "Restriping", to: "/services/restriping/" },
          {
            title: "New Layout & ADA Striping",
            to: "/services/new-layout-ada-striping/",
          },
          { title: "Sealcoating", to: "/services/sealcoating/" },
          { title: "Crack Filling", to: "/services/crack-filling/" },
          { title: "Patching & Potholes", to: "/services/patching-potholes/" },
          {
            title: "Residential Driveway",
            to: "/services/residential-driveway/",
          },
          { title: "Full Package", to: "/services/full-package/" },
          {
            title: "Warehouse Floor Marking",
            to: "/services/warehouse-floor-marking/",
          },
        ],
      },
      {
        title: "Areas We Serve",
        icon: "i-mdi-map-marker-radius-outline",
        to: "/areas/",
        // Each town links to its own page; the dropdown adds "View all areas".
        children: [
          { title: "Fort Smith", to: "/areas/fort-smith/" },
          { title: "Fayetteville", to: "/areas/fayetteville/" },
          { title: "Bentonville", to: "/areas/bentonville/" },
          { title: "Rogers", to: "/areas/rogers/" },
          { title: "Springdale", to: "/areas/springdale/" },
          { title: "Van Buren", to: "/areas/van-buren/" },
          { title: "Alma", to: "/areas/alma/" },
          { title: "Booneville", to: "/areas/booneville/" },
          { title: "Charleston", to: "/areas/charleston/" },
          { title: "Greenwood", to: "/areas/greenwood/" },
          { title: "Ozark", to: "/areas/ozark/" },
          { title: "Paris", to: "/areas/paris/" },
        ],
      },
    ],
    secondary: [
      {
        title: "About",
        icon: "i-mdi-information-outline",
        to: "/about/",
      },
      {
        title: "Blog",
        icon: "i-mdi-post-outline",
        to: "/blog/",
      },
      {
        title: "Franchise",
        icon: "i-mdi-store-outline",
        to: "/franchise/",
      },
    ],
  },
};
