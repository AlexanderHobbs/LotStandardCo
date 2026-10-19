<script setup lang="ts">
import ServiceDetailPage from "@/components/heroSections/services/ServiceDetailPage.vue";
import type { ServicePage } from "~~/types/services";

const service: ServicePage = {
  slug: "sealcoating",
  name: "Sealcoating",
  icon: "i-mdi-format-paint",
  image: "/images/services/sealcoating.jpg",
  seoTitle: "Parking Lot Sealcoating in Arkansas",
  metaDescription:
    "Commercial parking lot sealcoating in Fort Smith, Fayetteville and western Arkansas. Protect asphalt and extend pavement life. Free quotes.",
  keywords:
    "sealcoating, asphalt sealcoating, parking lot sealcoating, pavement protection, commercial sealcoating, Fort Smith sealcoating, Northwest Arkansas sealcoating",
  eyebrow: "Parking Lot Sealcoating",
  heading: "Commercial Parking Lot Sealcoating in Arkansas",
  intro: [
    "Asphalt begins to deteriorate as soon as it is laid. Sunlight oxidizes the binder, water penetrates small cracks, and oil and fuel leaks soften the surface. Left untreated, this leads to cracking, raveling, and costly structural repairs.",
    "Lot Standard Co provides professional sealcoating for commercial properties. A protective layer of commercial-grade sealer shields the pavement from these elements, slows cracking and raveling, and restores a uniform black finish at a fraction of the cost of repaving.",
    "Work is completed in phases so part of the lot remains open, and the layout is re-striped once the sealer has cured. Work is scheduled around operating hours, including overnight and weekends, to minimize disruption to customers and tenants.",
  ],
  benefits: [
    {
      title: "Protection",
      text: "Sealer blocks the water, UV exposure, oil, and fuel that break down the asphalt binder.",
    },
    {
      title: "Longevity",
      text: "Resealing on a 2 to 3 year cycle can extend the service life of a parking lot by years.",
    },
    {
      title: "Value",
      text: "Sealcoating costs a fraction of repaving and helps avoid expensive structural repairs.",
    },
    {
      title: "Appearance",
      text: "A uniform black finish improves curb appeal and the impression a property makes on visitors.",
    },
  ],
  process: [
    {
      title: "Digital Walk & Free Quote",
      text: "We measure your lot with digital survey software and assess pavement condition, cracking, and drainage. A clear written estimate follows. The approved price is the final price.",
    },
    {
      title: "Clean & Crack Fill",
      text: "The surface is swept and blown clean, oil spots are treated, and cracks are filled so water cannot reach the base beneath the new coat.",
    },
    {
      title: "Seal - Cure - Re-Stripe",
      text: "Commercial-grade sealer is applied and allowed to cure, and the parking layout is then re-striped.",
    },
    {
      title: "Documentation & Final Review",
      text: "The finished lot is documented and reviewed against the approved scope, and a reseal schedule is recommended.",
    },
  ],
  features: [
    "Commercial-grade asphalt sealer",
    "Sweeping & oil spot treatment",
    "Crack filling before sealing",
    "Uniform, freshly paved finish",
    "Phased work to keep lots open",
    "Re-striping after sealcoat",
  ],
  faqs: [
    {
      question: "How often should a parking lot be sealcoated?",
      answer:
        "Most commercial asphalt lots should be sealcoated every 2 to 3 years. Lots with heavy traffic or significant sun exposure may benefit from a shorter cycle.",
    },
    {
      question: "How long before vehicles can drive on a new sealcoat?",
      answer:
        "Traffic usually needs to stay off the surface for 24 hours, depending on temperature and humidity. Work is scheduled in phases so part of the lot can stay open.",
    },
    {
      question: "What weather is needed for sealcoating?",
      answer:
        "Sealcoating needs dry pavement, no rain in the forecast for at least a day, and temperatures of roughly 50°F and rising. In Arkansas, the main season runs from spring through fall.",
    },
    {
      question: "Does striping need to be repainted?",
      answer:
        "Yes. Sealer covers existing striping, so the lot is re-striped after the sealcoat cures, and the layout can be updated at the same time.",
    },
  ],
  related: [
    { name: "Line Striping", slug: "line-striping" },
    { name: "Warehouse Floor Marking", slug: "warehouse-floor-marking" },
    { name: "Safety Markings", slug: "safety-markings" },
  ],
};
</script>

<template>
  <ServiceDetailPage :service="service" />
</template>
