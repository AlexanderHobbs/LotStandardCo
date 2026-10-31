# Lot Standard Co: Search & Crawler Content Reference

Every piece of content Google can show in search results, and every meta tag, file and structured-data block that crawlers read directly. Extracted from the built site in [dist/](dist/) (build of 2026-10-18; live site: <https://lotstandard.com>). Regenerate after content changes by re-running `npm run generate`.

## Contents

- [What shows up in Google search](#1-what-shows-up-in-google-search)
- [Site-wide crawler files](#2-site-wide-crawler-files)
- [Site-wide meta tags (every page)](#3-site-wide-meta-tags-every-page)
- [Per-page search content and meta](#4-per-page-search-content-and-meta)
- [Structured data (JSON-LD)](#5-structured-data-json-ld)
- [Business details in schema](#6-business-details-in-schema)
- [Where to edit each item](#7-where-to-edit-each-item)
- [Issues spotted](#8-issues-spotted)

## 1. What shows up in Google search

| Search result element | Source tag | Limit / note |
|---|---|---|
| Blue title link | `<title>` | ~60 chars before truncation |
| Green URL / breadcrumb | `<link rel="canonical">` + `BreadcrumbList` JSON-LD | Breadcrumbs only on service-area and blog pages |
| Snippet text | `<meta name="description">` (Google may rewrite it) | ~155 chars |
| Site name | `WebSite` JSON-LD `name` | "Lot Standard Co" |
| Favicon | `<link rel="icon">` files in [public/](public/) | Multiples of 48px preferred |
| Business knowledge panel / Maps | `LocalBusiness` JSON-LD + Google Business Profile (`sameAs`) | Name, phone, area served, hours |
| FAQ rich result | `FAQPage` JSON-LD on the home page | Google now shows these rarely |
| Social share cards (not Google) | `og:*` and `twitter:*` tags, generated OG image | 1200×600 JPEG |
| Image search | `<image:image>` in sitemap, page images | Home page only in sitemap |

## 2. Site-wide crawler files

| File | Live URL | Source / built file | Purpose |
|---|---|---|---|
| robots.txt | <https://lotstandard.com/robots.txt> | [dist/robots.txt](dist/robots.txt), configured in [nuxt.config.ts](nuxt.config.ts) (`robots`, `routeRules`) | Allows all crawlers; disallows `/hidden`; blocks 13 non-SEO bots; points to the sitemap |
| sitemap.xml | <https://lotstandard.com/sitemap.xml> | [dist/sitemap.xml](dist/sitemap.xml), configured in [nuxt.config.ts](nuxt.config.ts) (`sitemap`) | 31 URLs with lastmod, changefreq, priority |
| Sitemap stylesheet | <https://lotstandard.com/__sitemap__/style.xsl> | [dist/__sitemap__/style.xsl](dist/__sitemap__/style.xsl) | Human-readable sitemap view |
| Web manifest | <https://lotstandard.com/site.webmanifest> | [public/site.webmanifest](public/site.webmanifest) | Name, icons, theme colour |
| Favicon (ico) | <https://lotstandard.com/favicon.ico> | [public/favicon.ico](public/favicon.ico) | Search-result favicon |
| Favicon 32×32 | <https://lotstandard.com/favicon-32x32.png> | [public/favicon-32x32.png](public/favicon-32x32.png) | |
| Favicon 16×16 | <https://lotstandard.com/favicon-16x16.png> | [public/favicon-16x16.png](public/favicon-16x16.png) | |
| Apple touch icon | <https://lotstandard.com/apple-touch-icon.png> | [public/apple-touch-icon.png](public/apple-touch-icon.png) | |
| Android icon 192 | <https://lotstandard.com/android-chrome-192x192.png> | [public/android-chrome-192x192.png](public/android-chrome-192x192.png) | |
| Android icon 512 | <https://lotstandard.com/android-chrome-512x512.png> | [public/android-chrome-512x512.png](public/android-chrome-512x512.png) | |
| Logo (schema logo) | <https://lotstandard.com/logo.png> | [public/logo.png](public/logo.png) | Used as `logo`/`image` in JSON-LD |
| Redirects / headers | n/a | [netlify.toml](netlify.toml) | 301 from the old Netlify subdomain; `/gallery` → `/our-work`; `nosniff` and referrer headers |

## 3. Site-wide meta tags (every page)

Set in [app/composables/head-and-meta.ts](app/composables/head-and-meta.ts) and [app/site.ts](app/site.ts).

| Tag | Value |
|---|---|
| `<meta charset>` | utf-8 |
| `<meta name="viewport">` | width=device-width, initial-scale=1 |
| `<html lang>` | en-US |
| `<meta name="robots">` | index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1 |
| `<meta name="author">` | Lot Standard Co |
| `og:site_name` | Lot Standard Co |
| `og:type` | website (article on blog posts) |
| `og:locale` | en |
| `og:image:width` / `height` | 1200 / 600 |
| `og:image:type` | image/jpeg |
| `twitter:card` | summary_large_image |
| `twitter:site` / `creator` | Not output: no Twitter handle set in [app/site.ts](app/site.ts) |
| Canonical | Absolute URL with trailing slash (matches Netlify), no query/hash |

Fallback site description (used when a page sets none): Professional parking lot line striping, sealcoating, ADA-compliant marking, and pavement maintenance for commercial properties in Fayetteville, Fort Smith, and surrounding areas.

## 4. Per-page search content and meta

Title and description lengths are shown as `(n chars)`. Titles over 60 or descriptions over 160 may be truncated by Google.

### Top-level pages

#### [/](https://lotstandard.com/)

- **Source:** [app/pages/index.vue](app/pages/index.vue)
- **Title:** Premium Parking Lot Maintenance in Western Arkansas | Lot Standard Co (69 chars) ⚠️
- **Description:** Professional parking lot line striping, sealcoating, ADA-compliant marking, and pavement maintenance for commercial properties in Fort Smith and surrounding areas. (163 chars) ⚠️
- **Keywords:** parking lot striping,line striping contractor,sealcoating,ADA compliant parking lot marking,pavement maintenance
- **Canonical:** <https://lotstandard.com/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** website
- **Share image:** <https://lotstandard.com/__og-image__/image/og.jpeg>
- **Page schema:** WebPage, FAQPage (6 questions)

#### [/areas](https://lotstandard.com/areas/)

- **Source:** [app/pages/areas/index.vue](app/pages/areas/index.vue)
- **Title:** Areas We Cover | Lot Standard Co (32 chars)
- **Description:** Parking lot striping, sealcoating and pavement maintenance from Booneville to Bentonville, Arkansas. See the towns and counties we serve. (137 chars)
- **Keywords:** parking lot striping Arkansas,Bentonville parking lot striping,Fort Smith sealcoating,Fayetteville line striping
- **Canonical:** <https://lotstandard.com/areas/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** website
- **Share image:** <https://lotstandard.com/__og-image__/image/areas/og.jpeg>
- **Page schema:** WebPage

#### [/blog](https://lotstandard.com/blog/)

- **Source:** [app/pages/blog/index.vue](app/pages/blog/index.vue)
- **Title:** Parking Lot Maintenance Tips & Guides | Lot Standard Co (55 chars)
- **Description:** Parking lot maintenance tips and guides from Lot Standard Co: striping, sealcoating, ADA compliance and floor marking for Arkansas businesses. (142 chars)
- **Keywords:** none
- **Canonical:** <https://lotstandard.com/blog/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** website
- **Share image:** <https://lotstandard.com/__og-image__/image/blog/og.jpeg>
- **Page schema:** WebPage

#### [/services](https://lotstandard.com/services/)

- **Source:** [app/pages/services/index.vue](app/pages/services/index.vue)
- **Title:** Parking Lot Striping Services in Arkansas | Lot Standard Co (59 chars)
- **Description:** Professional line striping, sealcoating, ADA-compliant marking, warehouse floor marking, safety markings, and signage for commercial parking lots. (146 chars)
- **Keywords:** line striping,sealcoating,ADA compliance marking,warehouse floor marking,safety markings,signage installation
- **Canonical:** <https://lotstandard.com/services/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** website
- **Share image:** <https://lotstandard.com/__og-image__/image/services/og.jpeg>
- **Page schema:** WebPage

#### [/about](https://lotstandard.com/about/)

- **Source:** [app/pages/about.vue](app/pages/about.vue)
- **Title:** About Our Fort Smith Striping Company | Lot Standard Co (55 chars)
- **Description:** Licensed, insured and locally owned parking lot striping and pavement maintenance company in Fort Smith, AR, serving western and northwest Arkansas. (148 chars)
- **Keywords:** parking lot striping company,licensed and insured,pavement maintenance contractor
- **Canonical:** <https://lotstandard.com/about/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** website
- **Share image:** <https://lotstandard.com/__og-image__/image/about/og.jpeg>
- **Page schema:** WebPage, AboutPage

#### [/contact](https://lotstandard.com/contact/)

- **Source:** [app/pages/contact.vue](app/pages/contact.vue)
- **Title:** Contact Us for a Free Striping Quote | Lot Standard Co (54 chars)
- **Description:** Request a free quote for parking lot striping, sealcoating or ADA marking in Fort Smith and western Arkansas. Call or send us your lot details. (143 chars)
- **Keywords:** free quote,parking lot striping quote,contact us
- **Canonical:** <https://lotstandard.com/contact/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** website
- **Share image:** <https://lotstandard.com/__og-image__/image/contact/og.jpeg>
- **Page schema:** WebPage, ContactPage

#### [/franchise](https://lotstandard.com/franchise/)

- **Source:** [app/pages/franchise.vue](app/pages/franchise.vue)
- **Title:** Striping Franchise Opportunities | Lot Standard Co (50 chars)
- **Description:** Lot Standard Co franchise opportunities are coming soon. Check back for details on bringing our parking lot striping model to your market. (138 chars)
- **Keywords:** none
- **Canonical:** <https://lotstandard.com/franchise/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** website
- **Share image:** <https://lotstandard.com/__og-image__/image/franchise/og.jpeg>
- **Page schema:** WebPage

### Service pages

#### [/services/ada-compliance-marking](https://lotstandard.com/services/ada-compliance-marking/)

- **Source:** [app/pages/services/ada-compliance-marking.vue](app/pages/services/ada-compliance-marking.vue)
- **Title:** ADA Parking Lot Striping in Arkansas | Lot Standard Co (54 chars)
- **Description:** ADA-compliant parking lot striping in Fort Smith, Fayetteville and western Arkansas. Accessible stalls, aisles and symbols done to code. Free quotes. (149 chars)
- **Keywords:** ADA parking lot striping, ADA compliance marking, handicap parking striping, accessible parking spaces, van accessible parking, ADA parking requirements Arkansas
- **Canonical:** <https://lotstandard.com/services/ada-compliance-marking/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** website
- **Share image:** <https://lotstandard.com/__og-image__/image/services/ada-compliance-marking/og.jpeg>
- **Page schema:** WebPage, Service, FAQPage, BreadcrumbList (4 questions)

#### [/services/line-striping](https://lotstandard.com/services/line-striping/)

- **Source:** [app/pages/services/line-striping.vue](app/pages/services/line-striping.vue)
- **Title:** Parking Lot Line Striping in Arkansas | Lot Standard Co (55 chars)
- **Description:** Parking lot line striping in Fort Smith, Fayetteville and western Arkansas. Crisp stalls, fire lanes and arrows with fast-drying paint. Free quotes. (148 chars)
- **Keywords:** parking lot striping, line striping, parking lot restriping, pavement marking, fire lane striping, Fort Smith striping, Northwest Arkansas line striping
- **Canonical:** <https://lotstandard.com/services/line-striping/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** website
- **Share image:** <https://lotstandard.com/__og-image__/image/services/line-striping/og.jpeg>
- **Page schema:** WebPage, Service, FAQPage, BreadcrumbList (4 questions)

#### [/services/safety-markings](https://lotstandard.com/services/safety-markings/)

- **Source:** [app/pages/services/safety-markings.vue](app/pages/services/safety-markings.vue)
- **Title:** Parking Lot Safety Markings in Arkansas | Lot Standard Co (57 chars)
- **Description:** Parking lot safety markings in Fort Smith, Fayetteville and western Arkansas. Crosswalks, fire lanes, stop bars and hazard zones. Free quotes. (142 chars)
- **Keywords:** safety markings, crosswalk striping, fire lane marking, stop bar striping, hazard zone marking, pedestrian safety markings, Fort Smith safety markings, Northwest Arkansas pavement markings
- **Canonical:** <https://lotstandard.com/services/safety-markings/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** website
- **Share image:** <https://lotstandard.com/__og-image__/image/services/safety-markings/og.jpeg>
- **Page schema:** WebPage, Service, FAQPage, BreadcrumbList (4 questions)

#### [/services/sealcoating](https://lotstandard.com/services/sealcoating/)

- **Source:** [app/pages/services/sealcoating.vue](app/pages/services/sealcoating.vue)
- **Title:** Parking Lot Sealcoating in Arkansas | Lot Standard Co (53 chars)
- **Description:** Commercial parking lot sealcoating in Fort Smith, Fayetteville and western Arkansas. Protect asphalt and extend pavement life. Free quotes. (139 chars)
- **Keywords:** sealcoating, asphalt sealcoating, parking lot sealcoating, pavement protection, commercial sealcoating, Fort Smith sealcoating, Northwest Arkansas sealcoating
- **Canonical:** <https://lotstandard.com/services/sealcoating/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** website
- **Share image:** <https://lotstandard.com/__og-image__/image/services/sealcoating/og.jpeg>
- **Page schema:** WebPage, Service, FAQPage, BreadcrumbList (4 questions)

#### [/services/signage-installation](https://lotstandard.com/services/signage-installation/)

- **Source:** [app/pages/services/signage-installation.vue](app/pages/services/signage-installation.vue)
- **Title:** Parking Lot Sign Installation in Arkansas | Lot Standard Co (59 chars)
- **Description:** Parking lot sign installation in Fort Smith, Fayetteville and western Arkansas. ADA, reserved, fire lane and wayfinding signs installed. Free quotes. (149 chars)
- **Keywords:** parking lot signs, sign installation, ADA parking signs, reserved parking signs, stop signs, fire lane signs, wayfinding signage, Fort Smith sign installation
- **Canonical:** <https://lotstandard.com/services/signage-installation/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** website
- **Share image:** <https://lotstandard.com/__og-image__/image/services/signage-installation/og.jpeg>
- **Page schema:** WebPage, Service, FAQPage, BreadcrumbList (4 questions)

#### [/services/warehouse-floor-marking](https://lotstandard.com/services/warehouse-floor-marking/)

- **Source:** [app/pages/services/warehouse-floor-marking.vue](app/pages/services/warehouse-floor-marking.vue)
- **Title:** Warehouse Floor Marking in Arkansas | Lot Standard Co (53 chars)
- **Description:** Warehouse and industrial floor marking in Fort Smith, Fayetteville and western Arkansas. Aisles, walkways and safety zones, applied to last. Free quotes. (153 chars)
- **Keywords:** warehouse floor marking, industrial floor striping, aisle marking, safety zone marking, OSHA floor marking, Fort Smith warehouse striping, Northwest Arkansas floor marking
- **Canonical:** <https://lotstandard.com/services/warehouse-floor-marking/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** website
- **Share image:** <https://lotstandard.com/__og-image__/image/services/warehouse-floor-marking/og.jpeg>
- **Page schema:** WebPage, Service, FAQPage, BreadcrumbList (4 questions)

### Service-area (town) pages

#### [/areas/alma](https://lotstandard.com/areas/alma/)

- **Source:** [app/pages/areas/alma.vue](app/pages/areas/alma.vue)
- **Title:** Parking Lot Striping in Alma | Lot Standard Co (46 chars)
- **Description:** Parking lot striping in Alma, AR. Line striping, sealcoating, floor marking and ADA markings for Crawford County warehouses and distribution yards. (147 chars)
- **Keywords:** Alma AR parking lot striping, Alma sealcoating, Alma warehouse floor marking, Crawford County line striping, Alma ADA parking markings, pavement marking Crawford County Arkansas
- **Canonical:** <https://lotstandard.com/areas/alma/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** website
- **Share image:** <https://lotstandard.com/__og-image__/image/areas/alma/og.jpeg>
- **Page schema:** WebPage, Service, BreadcrumbList

#### [/areas/bentonville](https://lotstandard.com/areas/bentonville/)

- **Source:** [app/pages/areas/bentonville.vue](app/pages/areas/bentonville.vue)
- **Title:** Parking Lot Striping in Bentonville | Lot Standard Co (53 chars)
- **Description:** Parking lot striping in Bentonville, AR. Line striping, ADA markings and sealcoating for Benton County corporate campuses and retail centers. (141 chars)
- **Keywords:** Bentonville parking lot striping, Bentonville sealcoating, Benton County line striping, corporate campus parking lot striping Bentonville, Bentonville ADA parking, retail parking lot striping Northwest Arkansas
- **Canonical:** <https://lotstandard.com/areas/bentonville/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** website
- **Share image:** <https://lotstandard.com/__og-image__/image/areas/bentonville/og.jpeg>
- **Page schema:** WebPage, Service, BreadcrumbList

#### [/areas/booneville](https://lotstandard.com/areas/booneville/)

- **Source:** [app/pages/areas/booneville.vue](app/pages/areas/booneville.vue)
- **Title:** Parking Lot Striping in Booneville | Lot Standard Co (52 chars)
- **Description:** Parking lot striping in Booneville, AR. Line striping, sealcoating and ADA markings for Logan County retail plazas, churches and municipal lots. (144 chars)
- **Keywords:** Booneville AR parking lot striping, Booneville sealcoating, Logan County line striping, Booneville church parking lot, municipal parking lot striping Logan County, Booneville ADA parking
- **Canonical:** <https://lotstandard.com/areas/booneville/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** website
- **Share image:** <https://lotstandard.com/__og-image__/image/areas/booneville/og.jpeg>
- **Page schema:** WebPage, Service, BreadcrumbList

#### [/areas/charleston](https://lotstandard.com/areas/charleston/)

- **Source:** [app/pages/areas/charleston.vue](app/pages/areas/charleston.vue)
- **Title:** Parking Lot Striping in Charleston | Lot Standard Co (52 chars)
- **Description:** Parking lot striping in Charleston, AR. ADA-compliant striping and sealcoating for Franklin County medical offices, schools and local businesses. (145 chars)
- **Keywords:** Charleston AR parking lot striping, Charleston Arkansas sealcoating, Franklin County line striping, medical office parking lot striping Charleston, school parking lot striping Franklin County, Charleston ADA parking
- **Canonical:** <https://lotstandard.com/areas/charleston/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** website
- **Share image:** <https://lotstandard.com/__og-image__/image/areas/charleston/og.jpeg>
- **Page schema:** WebPage, Service, BreadcrumbList

#### [/areas/fayetteville](https://lotstandard.com/areas/fayetteville/)

- **Source:** [app/pages/areas/fayetteville.vue](app/pages/areas/fayetteville.vue)
- **Title:** Parking Lot Striping in Fayetteville | Lot Standard Co (54 chars)
- **Description:** Parking lot striping in Fayetteville, AR. Line striping, ADA markings and sealcoating for Washington County apartments, offices and campus lots. (144 chars)
- **Keywords:** Fayetteville AR parking lot striping, Fayetteville sealcoating, Washington County line striping, apartment complex striping Fayetteville, campus area parking lot striping, Fayetteville ADA parking
- **Canonical:** <https://lotstandard.com/areas/fayetteville/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** website
- **Share image:** <https://lotstandard.com/__og-image__/image/areas/fayetteville/og.jpeg>
- **Page schema:** WebPage, Service, BreadcrumbList

#### [/areas/fort-smith](https://lotstandard.com/areas/fort-smith/)

- **Source:** [app/pages/areas/fort-smith.vue](app/pages/areas/fort-smith.vue)
- **Title:** Parking Lot Striping in Fort Smith | Lot Standard Co (52 chars)
- **Description:** Parking lot striping in Fort Smith, AR. Line striping, sealcoating and ADA markings for Sebastian County shopping centers and industrial sites. (143 chars)
- **Keywords:** Fort Smith parking lot striping, Fort Smith sealcoating, Fort Smith ADA parking markings, Sebastian County line striping, Fort Smith industrial pavement marking, apartment complex striping Fort Smith AR
- **Canonical:** <https://lotstandard.com/areas/fort-smith/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** website
- **Share image:** <https://lotstandard.com/__og-image__/image/areas/fort-smith/og.jpeg>
- **Page schema:** WebPage, Service, BreadcrumbList

#### [/areas/greenwood](https://lotstandard.com/areas/greenwood/)

- **Source:** [app/pages/areas/greenwood.vue](app/pages/areas/greenwood.vue)
- **Title:** Parking Lot Striping in Greenwood | Lot Standard Co (51 chars)
- **Description:** Parking lot striping in Greenwood, AR. Line striping, sealcoating and ADA markings for Sebastian County schools, churches and Highway 71 retail properties. (155 chars)
- **Keywords:** Greenwood AR parking lot striping, Greenwood sealcoating, Greenwood church parking lot striping, Greenwood school parking lot, Sebastian County line striping, Highway 71 retail striping Greenwood
- **Canonical:** <https://lotstandard.com/areas/greenwood/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** website
- **Share image:** <https://lotstandard.com/__og-image__/image/areas/greenwood/og.jpeg>
- **Page schema:** WebPage, Service, BreadcrumbList

#### [/areas/ozark](https://lotstandard.com/areas/ozark/)

- **Source:** [app/pages/areas/ozark.vue](app/pages/areas/ozark.vue)
- **Title:** Parking Lot Striping in Ozark | Lot Standard Co (47 chars)
- **Description:** Parking lot striping in Ozark, AR. Line striping, sign installation, sealcoating and ADA markings for Franklin County municipal and downtown lots. (146 chars)
- **Keywords:** Ozark AR parking lot striping, Ozark Arkansas sealcoating, Franklin County line striping, Ozark signage installation, municipal parking lot striping Franklin County, downtown Ozark parking
- **Canonical:** <https://lotstandard.com/areas/ozark/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** website
- **Share image:** <https://lotstandard.com/__og-image__/image/areas/ozark/og.jpeg>
- **Page schema:** WebPage, Service, BreadcrumbList

#### [/areas/paris](https://lotstandard.com/areas/paris/)

- **Source:** [app/pages/areas/paris.vue](app/pages/areas/paris.vue)
- **Title:** Parking Lot Striping in Paris | Lot Standard Co (47 chars)
- **Description:** Parking lot striping in Paris, AR. Line striping, ADA markings and sealcoating for Logan County banks, downtown shops and community lots. (137 chars)
- **Keywords:** Paris AR parking lot striping, Paris Arkansas sealcoating, Logan County line striping, Paris downtown parking lot, bank parking lot striping Paris AR, Paris ADA parking markings
- **Canonical:** <https://lotstandard.com/areas/paris/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** website
- **Share image:** <https://lotstandard.com/__og-image__/image/areas/paris/og.jpeg>
- **Page schema:** WebPage, Service, BreadcrumbList

#### [/areas/rogers](https://lotstandard.com/areas/rogers/)

- **Source:** [app/pages/areas/rogers.vue](app/pages/areas/rogers.vue)
- **Title:** Parking Lot Striping in Rogers | Lot Standard Co (48 chars)
- **Description:** Parking lot striping in Rogers, AR. Line striping, ADA markings and sealcoating for Benton County medical plazas and multi-tenant retail centers. (145 chars)
- **Keywords:** Rogers AR parking lot striping, Rogers Arkansas sealcoating, Benton County line striping, medical plaza parking lot striping Rogers, multi-tenant parking lot striping Rogers AR, Pinnacle Hills striping
- **Canonical:** <https://lotstandard.com/areas/rogers/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** website
- **Share image:** <https://lotstandard.com/__og-image__/image/areas/rogers/og.jpeg>
- **Page schema:** WebPage, Service, BreadcrumbList

#### [/areas/springdale](https://lotstandard.com/areas/springdale/)

- **Source:** [app/pages/areas/springdale.vue](app/pages/areas/springdale.vue)
- **Title:** Parking Lot Striping in Springdale | Lot Standard Co (52 chars)
- **Description:** Parking lot striping in Springdale, AR. Line striping, safety markings and ADA compliance for Washington County business parks and industrial sites. (148 chars)
- **Keywords:** Springdale AR parking lot striping, Springdale sealcoating, Washington County line striping, industrial pavement marking Springdale, business park parking lot striping, Springdale ADA parking markings
- **Canonical:** <https://lotstandard.com/areas/springdale/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** website
- **Share image:** <https://lotstandard.com/__og-image__/image/areas/springdale/og.jpeg>
- **Page schema:** WebPage, Service, BreadcrumbList

#### [/areas/van-buren](https://lotstandard.com/areas/van-buren/)

- **Source:** [app/pages/areas/van-buren.vue](app/pages/areas/van-buren.vue)
- **Title:** Parking Lot Striping in Van Buren | Lot Standard Co (51 chars)
- **Description:** Parking lot striping in Van Buren, AR. Line striping, ADA markings and sealcoating for Crawford County restaurants, grocery stores and Main Street. (147 chars)
- **Keywords:** Van Buren AR parking lot striping, Van Buren sealcoating, Van Buren ADA parking, Crawford County line striping, Van Buren Main Street parking lot, restaurant parking lot striping Van Buren
- **Canonical:** <https://lotstandard.com/areas/van-buren/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** website
- **Share image:** <https://lotstandard.com/__og-image__/image/areas/van-buren/og.jpeg>
- **Page schema:** WebPage, Service, BreadcrumbList

### Blog posts

#### [/blog/ada-compliant-parking-guide](https://lotstandard.com/blog/ada-compliant-parking-guide/)

- **Source:** [app/content/blog/ada-compliant-parking-guide.md](app/content/blog/ada-compliant-parking-guide.md)
- **Title:** ADA Parking Lot Striping Requirements | Lot Standard Co (55 chars)
- **Description:** How many accessible parking spaces you need, what compliant ADA markings include, and a common mistake that leads to fines. A guide for property managers. (154 chars)
- **Keywords:** none
- **Canonical:** <https://lotstandard.com/blog/ada-compliant-parking-guide/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** article
- **Share image:** <https://lotstandard.com/__og-image__/image/blog/ada-compliant-parking-guide/og.jpeg>
- **Page schema:** WebPage, BlogPosting, BreadcrumbList

#### [/blog/best-time-of-year-for-striping](https://lotstandard.com/blog/best-time-of-year-for-striping/)

- **Source:** [app/content/blog/best-time-of-year-for-striping.md](app/content/blog/best-time-of-year-for-striping.md)
- **Title:** Best Time of Year for Line Striping | Lot Standard Co (53 chars)
- **Description:** When is the best time of year to stripe a parking lot? How weather affects paint, why late spring to early fall works best, and how to plan around it. (150 chars)
- **Keywords:** none
- **Canonical:** <https://lotstandard.com/blog/best-time-of-year-for-striping/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** article
- **Share image:** <https://lotstandard.com/__og-image__/image/blog/best-time-of-year-for-striping/og.jpeg>
- **Page schema:** WebPage, BlogPosting, BreadcrumbList

#### [/blog/how-often-should-you-sealcoat](https://lotstandard.com/blog/how-often-should-you-sealcoat/)

- **Source:** [app/content/blog/how-often-should-you-sealcoat.md](app/content/blog/how-often-should-you-sealcoat.md)
- **Title:** How Often to Sealcoat a Parking Lot | Lot Standard Co (53 chars)
- **Description:** Most commercial parking lots need sealcoating every 2-3 years. Learn what affects the timing, the signs your lot is due, and why it beats repaving. (147 chars)
- **Keywords:** none
- **Canonical:** <https://lotstandard.com/blog/how-often-should-you-sealcoat/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** article
- **Share image:** <https://lotstandard.com/__og-image__/image/blog/how-often-should-you-sealcoat/og.jpeg>
- **Page schema:** WebPage, BlogPosting, BreadcrumbList

#### [/blog/signs-your-lot-needs-restriping](https://lotstandard.com/blog/signs-your-lot-needs-restriping/)

- **Source:** [app/content/blog/signs-your-lot-needs-restriping.md](app/content/blog/signs-your-lot-needs-restriping.md)
- **Title:** 5 Signs It's Time to Restripe Your Lot | Lot Standard Co (56 chars)
- **Description:** Faded lines create real safety and liability risk. Here are 5 signs your parking lot needs restriping, from hard-to-see ADA stalls to fresh sealcoat. (149 chars)
- **Keywords:** none
- **Canonical:** <https://lotstandard.com/blog/signs-your-lot-needs-restriping/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** article
- **Share image:** <https://lotstandard.com/__og-image__/image/blog/signs-your-lot-needs-restriping/og.jpeg>
- **Page schema:** WebPage, BlogPosting, BreadcrumbList

#### [/blog/warehouse-floor-marking-guide](https://lotstandard.com/blog/warehouse-floor-marking-guide/)

- **Source:** [app/content/blog/warehouse-floor-marking-guide.md](app/content/blog/warehouse-floor-marking-guide.md)
- **Title:** Warehouse Floor Marking: Paint or Tape? | Lot Standard Co (57 chars)
- **Description:** Paint or floor tape for warehouse floor marking? When each one makes sense for your facility, what to weigh before choosing, and which one we recommend. (152 chars)
- **Keywords:** none
- **Canonical:** <https://lotstandard.com/blog/warehouse-floor-marking-guide/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** article
- **Share image:** <https://lotstandard.com/__og-image__/image/blog/warehouse-floor-marking-guide/og.jpeg>
- **Page schema:** WebPage, BlogPosting, BreadcrumbList

#### [/blog/what-to-expect-hiring-a-contractor](https://lotstandard.com/blog/what-to-expect-hiring-a-contractor/)

- **Source:** [app/content/blog/what-to-expect-hiring-a-contractor.md](app/content/blog/what-to-expect-hiring-a-contractor.md)
- **Title:** Hiring a Parking Lot Striping Contractor | Lot Standard Co (58 chars)
- **Description:** Hiring a parking lot striping contractor for the first time? What happens from site visit and quote to scheduling, surface prep, striping and walkthrough. (154 chars)
- **Keywords:** none
- **Canonical:** <https://lotstandard.com/blog/what-to-expect-hiring-a-contractor/>
- **Robots:** index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- **og:type:** article
- **Share image:** <https://lotstandard.com/__og-image__/image/blog/what-to-expect-hiring-a-contractor/og.jpeg>
- **Page schema:** WebPage, BlogPosting, BreadcrumbList

## 5. Structured data (JSON-LD)

Output on every page by `useSchemaOrg` in [app/composables/head-and-meta.ts](app/composables/head-and-meta.ts):

- `WebSite`: name, description, language, publisher
- `WebPage` (`AboutPage` on /about, `ContactPage` on /contact): name, description, URL, `isPartOf`, `primaryImageOfPage`
- `Organization` + `LocalBusiness`: name, phone, email, address (city/state only), `areaServed`, opening hours, logo, `sameAs`
- `ImageObject`: logo

Added per page type: `Service` + `BreadcrumbList` on service-area pages, `BlogPosting` + `BreadcrumbList` on blog posts, `FAQPage` on the home page. Inspect any page with Google's [Rich Results Test](https://search.google.com/test/rich-results).

## 6. Business details in schema

From [app/site.ts](app/site.ts). These must match the Google Business Profile exactly.

| Field | Value |
|---|---|
| Name | Lot Standard Co |
| Phone | +14792767122 (displayed (479) 276-7122) |
| Email | alex@lotstandard.com |
| Address | Fort Smith, AR, US (no street address; service-area business) |
| Hours | Mon–Fri, 05:00–19:00 |
| Area served | Logan, Franklin, Sebastian, Crawford, Washington and Benton counties, AR |
| sameAs | <https://share.google/BHiVMEgkuF6DXLslt> |

Social profiles listed on the site (not in `sameAs`): [Instagram](https://instagram.com/lotstandardco), [Twitter](https://twitter.com/lotstandardco), [Facebook](https://facebook.com/lotstandardco), [LinkedIn](https://linkedin.com/company/lotstandardco).

## 7. Where to edit each item

| To change | Edit |
|---|---|
| Site name, fallback description, business details, socials | [app/site.ts](app/site.ts) |
| Title/description/keywords on a static page | `definePageMeta` / `useHead` in the page under [app/pages/](app/pages/) |
| Blog post title/description | Front matter in [app/content/blog/](app/content/blog/) |
| Meta tag logic, canonical, schema | [app/composables/head-and-meta.ts](app/composables/head-and-meta.ts) |
| Share image design | [app/components/OgImage/OgCard.vue](app/components/OgImage/OgCard.vue), [app/composables/og-image.ts](app/composables/og-image.ts) |
| robots.txt, sitemap entries, prerender routes | [nuxt.config.ts](nuxt.config.ts) |
| Redirects and headers | [netlify.toml](netlify.toml) |
| Favicons and manifest | [public/](public/) |

## 8. Issues spotted

Found while extracting the content above. Also logged in [SEO-TODO.md](SEO-TODO.md).

1. **Home page title and description are long.** Title is 69 chars (Google cuts at about 60) and the description is 163 chars.
2. **Description mismatch.** [app/site.ts](app/site.ts) says "Fayetteville, Fort Smith"; the home page meta says "Fort Smith". The `WebSite` schema uses the site.ts version.
3. **Broken `/our-work` link.** [netlify.toml](netlify.toml) redirects `/gallery` to `/our-work` and [CallToAction.vue](app/components/heroSections/call-to-action/CallToAction.vue) links to it, but the page is disabled ([app/pages/-our-work.vue](app/pages/-our-work.vue)), so it 404s.
4. **Sitemap image URLs are malformed.** The home page entry has `&amp;amp;` in the `_ipx` URL, and some entries contain an empty `<image:loc>`. Point it at the plain `/images/hero-parking-lot-striping.jpg`.
5. **`og:locale` is `en`**, while `<html lang>` is `en-US`. Use `en_US`.
6. **Social profiles are not in `sameAs`.** Only the Google Business Profile is. Adding Facebook, Instagram and LinkedIn strengthens the entity link.
7. **No Twitter/X handle set**, so `twitter:site` is not output.
8. **Sitemap `lastmod` is the build time for every URL**, not the real change date. Blog posts could use their publish dates.
9. **`/blog` and `/franchise` have no keywords** (Google ignores them; low priority).
