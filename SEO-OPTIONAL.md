# SEO Optional Extras

Nice-to-haves for the site. Leaving any of these out does **not** hurt search rankings: Google treats them as optional, and nothing is broken or misleading without them. They can add a small boost, richer link previews or better tracking once the information is available. Required and blocking work lives in `SEO-TODO.md`.

Legend: **[Info]** needs details from the owner · **[Asset]** needs real photos/content · **[Tech]** code or config change we can make

---

## Business details (structured data)

These would go in the `business` block of `app/site.ts` (next to `openingHours`) and be added to the LocalBusiness markup in `app/composables/head-and-meta.ts` (which already appears on every page, including the town pages).

- [ ] **[Info] Price range** (`priceRange`). Not shown to visitors, only to search engines. Either `$` to `$$$$` or a real range such as `"$500–$10,000"`. Leave it out if you'd rather not signal pricing.
- [ ] **[Info] Founding date** (`foundingDate`). Year or full date the business started, e.g. `"2025"` or `"2025-03-01"`. Use the same date as the Google Business Profile's **Opening date** (Edit profile → About).
- [ ] **[Info] Payment methods accepted** (`paymentAccepted`), e.g. `"Cash, Check, Credit Card, Invoice"`.
- [ ] **[Info] Google Maps link for the Business Profile.** `sameAs` currently uses `https://share.google/BHiVMEgkuF6DXLslt`, which redirects to a Google search. A Maps place link (Business Profile → Share → Google Maps, `maps.app.goo.gl/...`) points straight at the listing. Swap it into `sameAs` in `app/site.ts` if available.

## Images and previews

- [ ] **[Tech] Per-page Open Graph images.** Link previews are currently generated from one default design. Custom images for services and areas would make shared links look better.
- [ ] **[Asset] Descriptive image filenames.** e.g. `fort-smith-parking-lot-striping.jpg` rather than generic names, when real photos arrive. Alt text already covers the SEO basics.
- [ ] **[Asset] Transparent logo file.** A true vector/transparent logo would give a sharper navbar logo and favicon than the PNG-derived versions.
- [ ] **[Asset] Mission photo is a landscape image cropped to portrait.** A portrait-shaped photo would fit the layout better. Visual only.
- [ ] **[Tech] Hero image is a CSS background.** A real `<img>` with `fetchpriority="high"` and `srcset` could load slightly faster and be picked up by image search. It is already preloaded, so this is a small gain.

## Site structure and content

- [ ] **[Tech] Breadcrumbs on the remaining pages.** Service, town and blog pages already have `BreadcrumbList` markup. The Services, Areas, Blog index, About and Contact pages are one click from home, so breadcrumbs add little there. Visible breadcrumbs could still help users.
- [ ] **[Tech] A few relevant outbound links to authoritative sources** where they help the reader: the ADA standards on the ADA guide blog post, OSHA floor-marking guidance on the Warehouse Floor Marking page, local fire-code requirements on the Safety Markings page. Keep them few and relevant, and use `rel="noopener"` (and `rel="nofollow sponsored"` for any paid or affiliate links).

## Tracking and housekeeping

- [ ] **[Tech] Google Analytics / Search Console conversion tracking** for contact-form submissions and phone-number clicks. Doesn't affect rankings, but shows which pages bring in leads.
- [ ] **[Tech] Rename the GitHub repo** (`AlexanderHobbs/prostripe-parking-lot-services`) to the new brand and update `repository.url` in `package.json`.
