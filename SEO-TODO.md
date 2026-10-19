# SEO To-Do & Improvement Log

Changes that will improve how visible the site is in Google, ordered by impact. New items get added here as they come up. Nice-to-haves that don't hurt rankings when missing live in `SEO-OPTIONAL.md`.

Each item ends with **→** links to the file and line to change (click to jump there in the editor). Line numbers are as of 2026-10-18 and shift as files are edited.

Legend: **[Info]** needs details from the owner · **[Asset]** needs real photos/content · **[Tech]** code or config change we can make · **[Verify]** needs checking on the live site

Last full site scan: 2026-10-18 (static build of all 31 pages, plus the live domain `https://lotstandard.com`).

---

## 1. Blocking: nothing ranks until these are fixed

- [ ] **[Verify] The live site is behind a login.** On 2026-10-18 every URL on `https://lotstandard.com` (home page, `/about`, `robots.txt`) returned **401 Unauthorized** with a "Login Redirect" page. Google can't crawl or index anything while this is on. Turn off Netlify password protection (Netlify dashboard → Site configuration → Access & security) at launch, then re-check that pages return 200.
  → No code change; Netlify dashboard.
- [ ] **[Tech] Mock Google rating is live in the page content.** The trust bar shows a Google icon with five stars and "5.0" on the home page and all 12 town pages. The rating is a placeholder, not taken from the Business Profile. Google's guidelines treat made-up ratings as deceptive, and they can get the Business Profile penalized. Replace it with the real rating or hide the rating block until there are reviews (see "Real reviews" in section 4).
  → [TrustBar.vue:7](app/components/heroSections/trust/TrustBar.vue#L7) (the rating) · [TrustBar.vue:29-48](app/components/heroSections/trust/TrustBar.vue#L29-L48) (the rating block to hide)

## 2. High impact

### Local targeting (the biggest ranking lever for a service business)

- [ ] **[Tech] Home page title and description are too long, and the H1 has no location.** The title was changed to "The #1 Parking Lot Striping Company in Western Arkansas" (73 chars with the site name), which now names the region but gets cut off in results (~60 max) and still makes the unsupported "#1" claim. The description is 176 chars (cut off at ~155) and misspells "Fayetville". Suggested title: "Parking Lot Striping in Fort Smith, AR" (56 chars with the site name). Target: title 30–60 chars including " | Lot Standard Co", description 120–155. The H1 ("Professional Parking Lot Striping & Pavement Maintenance") still has no location.
  → [index.vue:16](app/pages/index.vue#L16) (title) · [index.vue:17-18](app/pages/index.vue#L17-L18) (description) · [HeroSection.vue:34](app/components/heroSections/hero/HeroSection.vue#L34) (H1)
- [ ] **[Info] Make the 12 town pages genuinely different.** Each page now has a paragraph on the kinds of properties we serve in that town and where (corridors, districts, nearby highways), added 2026-10-18, bringing each to ~755–785 words. The rest of the page (service list, process, CTA, footer) is still identical across all 12, so Google could still see them as near-duplicates. What only you can add: a recent job in that town, a photo from it, and a short testimonial from a local customer.
  → The new paragraph sits just before "Every … project starts" on each page, e.g. [fort-smith.vue:77-79](app/pages/areas/fort-smith.vue#L77-L79); same place in every file in [app/pages/areas/](app/pages/areas/)

### Structured data

- [ ] **[Tech] Blog posts need an image and a proper author in their `BlogPosting` data.** No post has an `image` in its front matter, so posts aren't eligible for article rich results and all share the default social preview. The author is "Lot Standard Co Team" as an `Organization` with no URL. Point `author` at `#identity` (or a real person with a name and URL) and give every post a cover image.
  → [[slug].vue:52-61](app/pages/blog/[slug].vue#L52-L61) (schema) · front matter (lines 1–7) of each post in [app/content/blog/](app/content/blog/)
- [ ] **[Tech] Delete the unused town-page template.** Nothing uses it; each town page has its own copy of the template and schema. Keeping it makes it easy to edit the wrong file.
  → [LocalTownPage.vue](app/components/heroSections/areas/LocalTownPage.vue) (delete the whole file)

### Internal linking

- [ ] **[Tech] Service and town pages don't link to any blog post, and blog posts only reach services through the nav menu.** Add links in the body text: ADA service ↔ ADA guide, Sealcoating ↔ "How often should you sealcoat", Line Striping ↔ "5 Signs" and "Best time of year", Warehouse Floor Marking ↔ "Paint or tape?". "5 Signs Your Parking Lot Needs Re-Striping" is linked from only one page (the blog index).
  → Service pages: [ServiceDetailPage.vue:192](app/components/heroSections/services/ServiceDetailPage.vue#L192) ("Related Services", add a "Related guides" list next to it) · Blog posts: the body text of each post in [app/content/blog/](app/content/blog/)
- [ ] **[Tech] Link service pages to town pages.** Town pages already link to the services in their body text. Service pages list the counties as plain text; turn them into links to the town pages (e.g. "we stripe lots across Fort Smith, Van Buren and Greenwood").
  → [ServiceDetailPage.vue:183-186](app/components/heroSections/services/ServiceDetailPage.vue#L183-L186)

## 3. Medium impact

- [ ] **[Tech] Re-enable `@nuxt/image` optimization** so images get responsive sizes and WebP automatically (paused by a TODO). Still large: `ada-compliance-marking.jpg` (603 KB), `warehouse-floor-marking.jpg` (584 KB), `equipment.jpg` (582 KB). Compressing those three by hand also works.
  → [nuxt.config.ts:168](nuxt.config.ts#L168) (`provider: "none"`) · files in [public/images/services/](public/images/services/) and [public/images/equipment.jpg](public/images/equipment.jpg)
- [ ] **[Tech] Broken redirect: `/gallery` → `/our-work`.** That page is switched off, so the redirect ends in a 404. Point it at `/services` until Our Work comes back. After launch, also check that the generated `_redirects` catch-all (`/* /404.html 404`) doesn't stop the `netlify.toml` redirects from running.
  → [netlify.toml:17-20](netlify.toml#L17-L20)
- [ ] **[Tech] Redirects for removed pages.** `/services/pothole-repair`, `/services/parking-lot-cleaning` and `/blog/pothole-patch-or-repave` were removed. Add 301s (to `/services` and `/blog`) in case they were indexed or linked.
  → [netlify.toml:20](netlify.toml#L20) (add after the `/gallery` rule)
- [ ] **[Tech] Old brand handle in blog front matter.** Every post has `twitter: prostripepls`, which renders a link to `twitter.com/prostripepls`. Remove it or replace it with the real handle.
  → Line 6 of each post: [ada-compliant-parking-guide.md:6](app/content/blog/ada-compliant-parking-guide.md#L6) · [best-time-of-year-for-striping.md:6](app/content/blog/best-time-of-year-for-striping.md#L6) · [how-often-should-you-sealcoat.md:6](app/content/blog/how-often-should-you-sealcoat.md#L6) · [signs-your-lot-needs-restriping.md:6](app/content/blog/signs-your-lot-needs-restriping.md#L6) · [warehouse-floor-marking-guide.md:6](app/content/blog/warehouse-floor-marking-guide.md#L6) · [what-to-expect-hiring-a-contractor.md:6](app/content/blog/what-to-expect-hiring-a-contractor.md#L6)
- [ ] **[Info] Social profiles are placeholders that are live on the site** (`instagram.com/lotstandardco`, `twitter.com/lotstandardco`, `facebook.com/lotstandardco`, `linkedin.com/company/lotstandardco`). If those accounts don't exist or belong to someone else, visitors land on the wrong page. Replace them with the real profiles (or remove them), then add them to `sameAs`.
  → [site.ts:59](app/site.ts#L59) (`socials`) · [site.ts:48](app/site.ts#L48) (`sameAs`)

## 4. Needs information or real content from the owner

- [ ] **[Asset] Real reviews and rating.** Once real reviews exist (ideally on the Google Business Profile), show them in place of the mock trust-bar rating and testimonials. Google doesn't show review stars for reviews a business publishes about itself, so `AggregateRating` markup won't produce stars; the visible reviews and the Google profile reviews are what count.
  → [TrustBar.vue:7](app/components/heroSections/trust/TrustBar.vue#L7)
- [ ] **[Asset] Real testimonials** with first name + town or company (also helps local relevance).
  → Testimonials section on the home page, [index.vue](app/pages/index.vue)
- [ ] **[Info] "1 lot completed" on every town card is sample data.** The Areas page shows "1 lot completed" under all 12 towns, from a hard-coded list. Replace it with real job counts, or remove the line until there are some.
  → [areas/index.vue:147-160](app/pages/areas/index.vue#L147-L160) (the counts) · [areas/index.vue:211-218](app/pages/areas/index.vue#L211-L218) (where it's shown)
- [ ] **[Info] Confirm the promises in the trust bar and stats section.** Each is marked `CONFIRM:` in the code. "100% Licensed & Insured" is confirmed.
  → [StatsSection.vue:36](app/components/heroSections/stats/StatsSection.vue#L36) ("1 Point Of Contact") · [StatsSection.vue:42](app/components/heroSections/stats/StatsSection.vue#L42) ("24hr Quote Turnaround") · [StatsSection.vue:56](app/components/heroSections/stats/StatsSection.vue#L56) ("Guaranteed Satisfaction") · [TrustBar.vue:12-17](app/components/heroSections/trust/TrustBar.vue#L12-L17) (the four offers)
- [ ] **[Info] Verify service claims written without owner input.** The Warehouse Floor Marking and Safety Markings pages, their FAQs and the "Starting at $0.18 per sq ft" price on the Sealcoating cards were drafted from general knowledge. Confirm materials, durations, pricing, code references (OSHA / fire marshal) and what the business actually offers.
  → [warehouse-floor-marking.vue](app/pages/services/warehouse-floor-marking.vue) · [safety-markings.vue](app/pages/services/safety-markings.vue) · [services.json:35](app/data/services.json#L35) (price)
- [ ] **[Info] Confirm the "What Sets Us Apart" claims on the About page** (extreme ownership, discipline, pledge; annual lot care plans, single invoice across properties, reminders and scheduling, digital surveys, laser-guided layout, photo documentation). Adjust to match your real contract terms and equipment.
  → [WhatSetsUsApart.vue](app/components/heroSections/about/WhatSetsUsApart.vue)
- [ ] **[Info] "Meet Your Owners" on the About page is mock content.** Replace the copy with the owners' real names, roles and story (real names help trust and local search), and update the photo alt text to name them. A photo of the owners at work would suit the page better than the current formal-event shot.
  → [about.vue:122](app/pages/about.vue#L122) (section copy) · [about.vue:112](app/pages/about.vue#L112) (alt text) · [about.vue:20](app/pages/about.vue#L20) (photo)
- [ ] **[Asset] Real service photos.** Warehouse Floor Marking and Safety Markings especially need their own photos. Update the `imageAlt` text to match each new photo.
  → [services.json:60](app/data/services.json#L60) (warehouse) · [services.json:76](app/data/services.json#L76) (safety) · other services at lines 10, 27, 44, 92
- [ ] **[Asset] Before/after images on the service-area map still show the old "ProStripe" brand.** Every sample lot uses `placeholder-red.svg` (which says "PROSTRIPE"), and the fallback image `placeholder-dark.svg` says it too. Replace with real before/after photos, or at least update the artwork.
  → [ServiceAreaMap.vue:29](app/components/ServiceAreaMap.vue#L29) (first of the `before`/`after` pairs, repeated through line ~142) · [optimize-image.ts:55](app/composables/optimize-image.ts#L55) · [public/images/placeholder-red.svg](public/images/placeholder-red.svg)
- [ ] **[Asset] Our Work gallery.** Switched off (the leading dash in the filename hides it). Turn it back on by renaming it to `our-work.vue` once there are real job photos; local project photos help trust and image search.
  → [-our-work.vue](app/pages/-our-work.vue)
- [ ] **[Asset] Blog content plan.** Existing posts are generic. Add posts aimed at local searches, e.g. "Parking lot striping cost in Fort Smith", "ADA parking requirements in Arkansas", "When to sealcoat in Northwest Arkansas".
  → New `.md` files in [app/content/blog/](app/content/blog/)
- [ ] **[Info] Build backlinks and listings.** Claim consistent listings (Bing Places, Apple Business Connect, Yelp, BBB, Angi/HomeAdvisor, Fort Smith and NWA Chambers of Commerce, industry associations) with exactly the same name, phone, hours and service area as the site. Ask suppliers, property-management partners and happy customers to link to the site.
  → No code change; copy the details from [site.ts:21-57](app/site.ts#L21-L57)

## 5. After launch

- [ ] **[Verify] Domain redirects.** As of 2026-10-18, `www.lotstandard.com` and `http://lotstandard.com` correctly 301 to `https://lotstandard.com`. `prostripe-parking-lot-services.netlify.app/about` returns 404 instead of redirecting; confirm whether that subdomain still belongs to this site and, if so, that the redirect works.
  → [netlify.toml:10-14](netlify.toml#L10-L14)
- [ ] **[Verify] Confirm the live site does not send `noindex`** and that `https://lotstandard.com/robots.txt` matches the build (allows crawling, points to the sitemap).
- [ ] **[Verify] Submit the sitemap** (`https://lotstandard.com/sitemap.xml`, 31 URLs) in Google Search Console and Bing Webmaster Tools, and verify the domain (a DNS "Domain property" in Search Console covers www and non-www).
- [ ] **[Verify] Validate structured data** with Google's Rich Results Test and the Schema.org validator (LocalBusiness, Service, BreadcrumbList, BlogPosting), especially after merging the business nodes.
- [ ] **[Verify] Run Lighthouse / PageSpeed** (`npm run lighthouse`) and check Core Web Vitals, especially LCP and CLS on the home page.
- [ ] **[Verify] Contact-form notifications go to alex@lotstandard.com.** The recipient is set in the Netlify dashboard (Forms → Form notifications), not in the code. Add the notification for the `contact` form, send a test submission and confirm it arrives (check spam).
- [ ] **[Verify] Keep the Google Business Profile in sync.** Name, phone, website, hours (Mon–Fri 5am–7pm) and service areas must match the site exactly.
  → [site.ts:21-57](app/site.ts#L21-L57)

---

## Done

- Service data consolidated (2026-10-18). The six services (names, descriptions, images, alt text, prices) now live only in [services.json](app/data/services.json), read through `useServices()`. [ServiceList.vue](app/components/ServiceList.vue) (services page) and [ServiceListLite.vue](app/components/heroSections/services/ServiceListLite.vue) (home and town pages) each had their own full copy, about 190 lines of duplicated data removed. The services page copy was missing the image alt text, so its six cards now get the same descriptive alt text as the rest of the site. Prices ("$0.12 per linear foot", "$0.18 per sq ft") are now in one place. Verified in the build: same six cards with identical text on the home, services and town pages.
- Unused files removed from `public/` (2026-10-18), about 14 MB: `service1.png`, `service2.png`, `Logo Icon.png`, `images/hero-parking-lot-striping.png`, `images/mission.png`, `images/mission.webp` (`Lot Standard Co.png` was already gone). Each was checked against the source, content, config and the built site first; none were referenced. They weren't in git, so they were moved to the macOS Trash (`~/.Trash/LotStandardCo-unused-public-2026-10-18/`) rather than permanently deleted. `public/` is now 3 MB. After rebuilding, all 21 image paths the site references still exist. `lot-standard-co-navbar.png` (48 KB) is also unused but was left in place.
- Image sizes and loading fixed on every displayed image (2026-10-18). All 106 visible `<img>` tags in the build now have `width`/`height`, so the browser reserves space before each image loads (no layout shift). 100 below-the-fold images are `loading="lazy"`; the photo at the top of each of the six service pages is `loading="eager"` + `fetchpriority="high"` because it's the main image people see first (the LCP image). Before: 14 of 106 had sizes or lazy loading. Changed: [ServiceCard.vue](app/components/ServiceCard.vue) (service cards on home, services and town pages), [StatsSection.vue](app/components/heroSections/stats/StatsSection.vue) (trust photo), [ServiceDetailPage.vue](app/components/heroSections/services/ServiceDetailPage.vue) (service page photo), [about.vue](app/pages/about.vue) (equipment and owners photos), [ServiceAreaMap.vue](app/components/ServiceAreaMap.vue) (before/after map photos, currently switched off with `SHOW_COMPLETED_LOTS = false`), [TheAuthor.vue](app/components/TheAuthor.vue) (author avatars, only shown if a post has one).
- Heading structure fixed on every page (2026-10-18): eyebrow labels and subtitles changed from `<h6>`/`<h2>` to `<p>`, skipped levels re-levelled, a section heading added to the "5 Signs" post, the Blog and Franchise H1s rewritten to describe the page, and the footer apostrophe fixed. The build went from 18 heading-order problems on 14 pages to 0. Full catalog with links to every change: [SEO-HEADINGS.md](SEO-HEADINGS.md).
- Titles and descriptions brought within target on 21 pages (2026-10-18). Titles (30–60 chars with the site name): About, Blog, Contact, Franchise and Services rewritten from one-word titles; four blog posts get a shorter `seoTitle` in front matter for search results while the full title stays as the on-page headline (`app/pages/blog/[slug].vue`). Descriptions (120–155 chars): Blog index, Contact and Franchise rewritten; 10 town pages shortened so they no longer get cut off with "…"; all six blog posts have their own `description` in front matter instead of the article intro. Verified in the build: no duplicates, no truncated descriptions, og/twitter titles match.
- One business entity in the structured data (2026-10-18). The 12 town pages each output their own `LocalBusiness` (town URL, no address, no hours); these are now `Service` nodes ("Parking Lot Striping in <Town>, AR", `areaServed` = the city within its county) with `provider` pointing at the site-wide business `#identity`. Every page now has exactly one business. The small `#organization` node that remains is added on purpose by the schema library to carry the logo: it has the same name, URL, address and `sameAs` as `#identity` and nothing links to it as a separate business, so it is left as is. Verified in the build: no dangling `@id` references on any of the 31 pages.
- Logo set to `public/logo.png` (2026-10-18): `logo` in `app/site.ts` is now `/logo.png` (it was a path on the local computer), and the LocalBusiness structured data uses it for `logo` and `image`. Site-wide description rewritten with the services and location (typo "Fayetville" fixed).
- About page description rewritten (2026-10-18): removed the unverified "15+ years of experience" claim and added the location (148 chars). Licensed and insured confirmed by the owner, so that wording stays here and in `QuoteBanner.vue`, `StatsSection.vue` and `OurMission.vue`.
- Service-area business location (2026-10-18): structured data address is Fort Smith, AR (no street), footer shows "Fort Smith and surrounding areas". Confirmed in the build that the site-wide node is now `LocalBusiness`.
- Google Business Profile linked as `sameAs`, and hours (Mon–Fri 5am–7pm) added to the structured data and footer (2026-10-18).
- Phone number fixed from `+4792767122` (read as Norway) to `+14792767122` in structured data and tap-to-call links (2026-10-18).
- Business email `alex@lotstandard.com` in the footer, contact page, blog contact box and LocalBusiness data (2026-10-17).
- Live domain set to `https://lotstandard.com` everywhere (canonical URLs, sitemap, robots.txt, Open Graph, structured data, `package.json`).
- Every page has a unique title and description, a canonical URL, an og:image and no `noindex` (re-checked 2026-10-18).
- Every page has exactly one H1, all images have alt text, and there are no broken internal links in the build (re-checked 2026-10-18).
- Sitemap contains only current pages (31 URLs; no pothole or cleaning URLs).
- `BreadcrumbList` structured data on service, town and blog pages; Service data images use absolute URLs.
- Service page titles (52–59 chars) and descriptions (139–153 chars) rewritten to fit search results; all six service pages follow the Line Striping structure.
- Home page images compressed (hero 4.1 MB → 242 KB, mission 3.7 MB → 98 KB); hero preloaded.
- Home page headings restructured (one H1, H2 sections, H3 items).
- Old "ProStripe" brand replaced with "Lot Standard Co" on the pages and in `package.json`.
