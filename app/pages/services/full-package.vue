<script setup lang="ts">
import ServiceDetailPage from "@/components/heroSections/services/ServiceDetailPage.vue";
import type { ServicePage } from "~~/types/services";

const service: ServicePage = {
  slug: "full-package",
  name: "Full Package",
  icon: "i-mdi-package-variant-closed",
  image: "/images/services/full-package.jpg",
  seoTitle: "Repair, Seal & Stripe Package in Arkansas",
  metaDescription:
    "Parking lot package in the River Valley & Northwest Arkansas: crack filling, sealcoating and restriping in one project. Free quotes.",
  keywords:
    "parking lot maintenance package, parking lot repair sealcoat and stripe, asphalt maintenance, sealcoating and striping, crack filling and sealcoating, commercial parking lot maintenance, Fort Smith parking lot maintenance, Northwest Arkansas parking lot maintenance",
  eyebrow: "Full Parking Lot Package",
  heading: "Parking Lot Repair, Seal & Stripe in One Project",
  intro: [
    "A lot that needs work usually needs more than one thing. Cracks and potholes should be repaired first, the surface sealed to protect the repairs, and the lines repainted last, because sealer covers the old stripes. Done by separate contractors, that means three schedules, three closures, and three invoices.",
    "The Lot Standard Co Full Package puts it all in one project. We repair cracks and damaged areas, sealcoat the pavement, and restripe the finished surface, in the right order, with one crew and one clear price.",
    "The lot closes once, in phases where possible, and work is scheduled around operating hours, including overnight and weekends, to minimize disruption to customers and tenants. You end up with a property that looks brand new and a pavement that lasts longer.",
  ],
  benefits: [
    {
      title: "One Project",
      text: "Repair, seal, and stripe happen in the right order, with no gaps between contractors.",
    },
    {
      title: "Less Disruption",
      text: "Your lot is closed once instead of three separate times.",
    },
    {
      title: "Longevity",
      text: "Repairs and sealer protect each other, and fresh lines finish the job.",
    },
    {
      title: "Appeal",
      text: "A repaired, uniformly black lot with crisp new lines changes how the whole property looks.",
    },
  ],
  process: [
    {
      title: "Digital Walk & Free Quote",
      text: "We measure the lot, assess pavement condition, cracking, and drainage, and send one clear written estimate for the whole project. The approved price is the final price.",
    },
    {
      title: "Repair",
      text: "Cracks are cleaned and filled, and potholes and damaged areas are patched so water can't reach the base beneath the new coat.",
    },
    {
      title: "Seal",
      text: "The surface is swept and cleaned, and commercial-grade sealer is applied and allowed to cure.",
    },
    {
      title: "Stripe & Final Review",
      text: "Once the sealer has cured, the layout is restriped. The finished lot is documented and reviewed against the approved scope.",
    },
  ],
  features: [
    "Crack filling",
    "Pothole & damaged-area patching",
    "Commercial-grade sealcoating",
    "Restriping after the sealer cures",
    "One crew, one schedule, one quote",
    "Phased work to keep lots open",
  ],
  faqs: [
    {
      question: "What's included in the Full Package?",
      answer:
        "Crack filling and pavement repair, sealcoating, and restriping. The exact scope depends on what your lot needs, and you'll get a written quote that spells it out before any work starts.",
    },
    {
      question: "Why is the work done in that order?",
      answer:
        "Repairs come first so the sealer has a sound surface to protect, and striping comes last because sealer covers the old lines. Doing it in this order also means the lot only has to close once.",
    },
    {
      question: "Is the Full Package cheaper than booking each service?",
      answer:
        "Bundling saves you from coordinating multiple contractors and closing the lot more than once. Your quote itemizes each part of the work, so you can see exactly what you're paying for.",
    },
    {
      question: "Can I just do part of it?",
      answer:
        "Yes. Each service is also available on its own: sealcoating, crack filling, patching, and restriping. We'll recommend only what the lot actually needs.",
    },
  ],
  related: [
    { name: "Sealcoating", slug: "sealcoating" },
    { name: "Restriping", slug: "restriping" },
    { name: "Crack Filling", slug: "crack-filling" },
  ],
  guides: [
    { title: "Best Time of Year for Line Striping", slug: "best-time-of-year-for-striping" },
    { title: "How Often Should You Sealcoat Your Parking Lot?", slug: "how-often-should-you-sealcoat" },
  ],
};
</script>

<template>
  <ServiceDetailPage :service="service" />
</template>
