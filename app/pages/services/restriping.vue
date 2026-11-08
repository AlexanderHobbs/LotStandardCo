<script setup lang="ts">
import ServiceDetailPage from "@/components/heroSections/services/ServiceDetailPage.vue";
import type { ServicePage } from "~~/types/services";

const service: ServicePage = {
  slug: "restriping",
  name: "Restriping",
  icon: "i-mdi-format-line-style",
  image: "/images/services/restripe.jpg",
  seoTitle: "Parking Lot Restriping in Arkansas",
  metaDescription:
    "Parking lot restriping in the River Valley & Northwest Arkansas. Crisp stalls, fire lanes and arrows in fast-drying paint, on your schedule. Free quote.",
  keywords:
    "parking lot restriping, parking lot striping, line striping, pavement marking, fire lane striping, Fort Smith restriping, Northwest Arkansas line striping",
  eyebrow: "Parking Lot Restriping",
  heading: "Commercial Parking Lot Restriping in Arkansas",
  intro: [
    "A parking lot is the first element of a property a visitor evaluates, and precision is what they evaluate it on. Clean, consistent striping communicates that a property is actively managed and that standards are being maintained. Worn or uneven lines communicate the opposite, and that impression is formed well before anyone reaches the entrance.",
    "Professional restriping by Lot Standard Co restores that impression. We repaint high-visibility parking stalls, fire lanes, crosswalks, and directional arrows that make a property read as cared for from the moment someone pulls in.",
    "Whether your lines have faded with traffic or you've just had the lot sealcoated, our crews use fast-drying traffic paint and work around your business hours, often overnight or on weekends, so customers and tenants barely notice we were there.",
  ],
  benefits: [
    {
      title: "Precision",
      text: "Every line is measured before a drop of paint hits the ground. Straight, square, and spaced precisely — not eyeballed from the last faded layout.",
    },
    {
      title: "Visibility",
      text: "Fire lanes, no-parking zones, and crosswalks that drivers can actually see, day or night.",
    },
    {
      title: "Usability",
      text: "We read a lot before we stripe it. A smarter layout often finds stalls you already had and never knew about.",
    },
    {
      title: "Appeal",
      text: "Pull in the next morning and the property looks like a different address. Your customers will notice.",
    },
  ],
  process: [
    {
      title: "Digital Walk & Free Quote",
      text: "We measure your lot with digital survey software, review the existing layout, and send a clear written estimate. The approved price is the final price.",
    },
    {
      title: "Layout Check",
      text: "Before any paint goes down, we confirm stall dimensions, accessible spaces, fire lanes, and traffic flow against the existing layout.",
    },
    {
      title: "Prep - Striping - Cure",
      text: "Lines are blown clean of dust and debris. We paint with commercial striping equipment and fast-drying paint, then reopen your lot quickly.",
    },
    {
      title: "Document and Appeal",
      text: "We document the finished product, make sure you're happy with the result, and hand you a lot you can be proud of.",
    },
  ],
  features: [
    "Parking stall restriping",
    "Fire lanes & no-parking curbs",
    "Directional arrows & stop bars",
    "Crosswalks & pedestrian paths",
    "Stall numbering & reserved stencils",
    "Restriping after sealcoating",
  ],
  faqs: [
    {
      question: "How often should a parking lot be restriped?",
      answer:
        "Most commercial lots need restriping every 1 to 2 years depending on traffic, weather, and snow plowing. High-traffic retail lots may need it more often. Restriping right after sealcoating is also a must, since the sealer covers the old lines.",
    },
    {
      question: "How long does the paint take to dry?",
      answer:
        "Our fast-drying traffic paint is typically dry to the touch in 15 to 30 minutes, and most lots can reopen to traffic within an hour, depending on temperature and humidity.",
    },
    {
      question: "Can you restripe my lot without closing my business?",
      answer:
        "Yes. We can work in sections, after hours, or on weekends so your customers always have somewhere to park.",
    },
    {
      question: "Can you change the layout while you restripe?",
      answer:
        "Yes. If you want to add stalls, improve traffic flow, or bring accessible parking up to current ADA requirements, see our New Layout & ADA Striping service, and we can do it in the same visit.",
    },
  ],
  related: [
    { name: "New Layout & ADA Striping", slug: "new-layout-ada-striping" },
    { name: "Sealcoating", slug: "sealcoating" },
    { name: "Full Package", slug: "full-package" },
  ],
  guides: [
    { title: "5 Signs Your Parking Lot Needs Re-Striping", slug: "signs-your-lot-needs-restriping" },
    { title: "Best Time of Year for Line Striping", slug: "best-time-of-year-for-striping" },
  ],
};
</script>

<template>
  <ServiceDetailPage :service="service" />
</template>
