# SEO to-do

Details and context in [SEO-REFERENCE.md](SEO-REFERENCE.md#8-issues-spotted).

- [x] Shorten home title (61 chars) and description (157 chars)
- [x] Align site.ts description with home meta (Fort Smith)
- [x] Removed the `/our-work` button and the `/gallery` redirect
- [x] Fix malformed sitemap image URLs (`&amp;amp;`, empty `<image:loc>`)
- [x] Set `og:locale` to `en_US`
- [x] Instagram added to `sameAs` (Facebook/LinkedIn don't exist yet; add them to `site.ts` socials and `sameAs` when they do)
- [x] Twitter/X profile link dropped (no account); `twitter` in `site.ts` is blank
- [x] Blog posts use their publish date as sitemap lastmod (other pages keep build time)
- [x] Canonicals, og:url, sitemap and schema URLs now use trailing slash (Netlify 301s no-slash to slash); needs deploy + Search Console re-index
- [x] Removed the `twitter: prostripepls` template leftover from blog front matter
- [x] Each town page has its own photo in the About section (`public/area-photos/<town>.png`) with descriptive alt text; still worth adding unique local copy per town
- [x] Service detail pages use the per-service `imageAlt` from `app/data/services.json`
- [x] `/franchise` is `noindex, follow` and out of the sitemap (still in the nav); remove the `useRobotsRule` in `franchise.vue` when it has real content
- [ ] Testimonials are first-name + initial only; add full names/links or a Google review count so `Review`/`AggregateRating` schema can be added
- [x] Blog posts have an `updated:` front-matter date, used for `dateModified`, `article:modified_time` and sitemap `lastmod`
- [ ] Map's "completed lots" pins are switched off (sample data in `ServiceAreaMap.vue`); fill with real lots + photos, or remove the sample data
