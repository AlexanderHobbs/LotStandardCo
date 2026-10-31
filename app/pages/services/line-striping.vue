<script setup lang="ts">
import ServiceDetailPage from "@/components/heroSections/services/ServiceDetailPage.vue";
import type { ServicePage } from "~~/types/services";

const service: ServicePage = {
  slug: "line-striping",
  name: "Line Striping",
  icon: "i-mdi-road-variant",
  image: "/images/services/line-striping.jpg",
  seoTitle: "Parking Lot Line Striping in Arkansas",
  metaDescription:
    "Parking lot line striping in Fort Smith, Fayetteville and western Arkansas. Crisp stalls, fire lanes and arrows with fast-drying paint. Free quotes.",
  keywords:
    "parking lot striping, line striping, parking lot restriping, pavement marking, fire lane striping, Fort Smith striping, Northwest Arkansas line striping",
  eyebrow: "Parking Lot Line Striping",
  heading: "Commercial Parking Lot Line Striping in Arkansas",
  intro: [
    "A parking lot is the first element of a property a visitor evaluates, and precision is what they evaluate it on. Clean, consistent striping communicates that a property is actively managed and that standards are being maintained. Worn or uneven lines communicate the opposite, and that impression is formed well before anyone reaches the entrance.",
    "Professional striping by Lot Standard Co restores that impression. We lay out and paint high-visibility parking stalls, fire lanes, crosswalks, and directional arrows that make a property read as cared for from the moment someone pulls in.",
    "Whether you need a faded lot re-striped or a brand-new layout on fresh asphalt, our crews use fast-drying traffic paint and work around your business hours, often overnight or on weekends, so customers and tenants barely notice we were there.",
  ],
  benefits: [
    {
      title: "Precision",
      text: "Every line is laid out before a drop of paint hits the ground. Straight, square, and spaced precisely — not eyeballed from the last faded layout.",
    },
    {
      title: "Visibility",
      text: "Fire lanes, no-parking zones, and ADA markings done right the first time. Inspectors have never had a reason to come back.",
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
      title: "Laser Layout Planning",
      text: "Using a laser-guided system, we plan stall dimensions, ADA spaces, fire lanes, and traffic flow before any paint goes down.",
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
    "Parking stall striping & re-striping",
    "Fire lanes & no-parking curbs",
    "Directional arrows & stop bars",
    "Crosswalks & pedestrian paths",
    "Stall numbering & reserved stencils",
    "New-construction layouts",
  ],
  faqs: [
    {
      question: "How often should a parking lot be re-striped?",
      answer:
        "Most commercial lots need re-striping every 1 to 2 years depending on traffic, weather, and snow plowing. High-traffic retail lots may need it more often. Re-striping right after sealcoating is also a must, since the sealer covers the old lines.",
    },
    {
      question: "How long does the paint take to dry?",
      answer:
        "Our fast-drying traffic paint is typically dry to the touch in 15 to 30 minutes, and most lots can reopen to traffic within an hour, depending on temperature and humidity.",
    },
    {
      question: "Can you stripe my lot without closing my business?",
      answer:
        "Yes. We can work in sections, after hours, or on weekends so your customers always have somewhere to park.",
    },
    {
      question: "Do you change or improve an existing layout?",
      answer:
        "Yes. We can redesign a layout to improve traffic flow, add stalls, or bring accessible parking up to current ADA requirements.",
    },
  ],
  related: [
    { name: "Sealcoating", slug: "sealcoating" },
    { name: "ADA Compliance Marking", slug: "ada-compliance-marking" },
    { name: "Signage Installation", slug: "signage-installation" },
  ],
};
</script>

<template>
  <ServiceDetailPage :service="service" />
</template>
