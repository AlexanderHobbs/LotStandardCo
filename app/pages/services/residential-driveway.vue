<script setup lang="ts">
import ServiceDetailPage from "@/components/heroSections/services/ServiceDetailPage.vue";
import type { ServicePage } from "~~/types/services";

const service: ServicePage = {
  slug: "residential-driveway",
  name: "Residential Driveway",
  icon: "i-mdi-home-outline",
  image: "/images/services/driveway-sealcoat.jpg",
  seoTitle: "Driveway Sealcoating & Repair in Arkansas",
  metaDescription:
    "Asphalt driveway sealcoating and crack repair in the River Valley & Northwest Arkansas. Protect your driveway and refresh its look. Free written quote.",
  keywords:
    "driveway sealcoating, residential driveway sealing, asphalt driveway repair, driveway crack filling, driveway sealer, Fort Smith driveway sealcoating, Northwest Arkansas driveway sealing",
  eyebrow: "Residential Driveway",
  heading: "Residential Driveway Sealcoating & Repair in Arkansas",
  intro: [
    "Your driveway is the first thing people see when they pull up to your home, and it takes a beating from sun, rain, and winter weather. Left alone, asphalt fades from black to gray, cracks, and eventually breaks apart.",
    "Lot Standard Co brings the same care we give commercial lots to residential driveways. We repair cracks and seal the surface to protect it from the elements and restore a clean, fresh look.",
    "We'll walk your driveway, tell you honestly what it needs, and give you a clear written quote before any work begins.",
  ],
  benefits: [
    {
      title: "Protection",
      text: "Sealer shields the asphalt from the sun, water, and oil that break down the surface.",
    },
    {
      title: "Longevity",
      text: "Repairing cracks and resealing on a regular schedule helps a driveway last years longer.",
    },
    {
      title: "Value",
      text: "Maintaining a driveway costs a fraction of replacing it.",
    },
    {
      title: "Curb Appeal",
      text: "A fresh, uniform black driveway improves how your whole home looks from the street.",
    },
  ],
  process: [
    {
      title: "Walk & Free Quote",
      text: "We look at the condition of your driveway and send a clear written estimate. The approved price is the final price.",
    },
    {
      title: "Clean & Repair",
      text: "The surface is cleaned and cracks are filled so water can't get beneath the new coat.",
    },
    {
      title: "Seal & Cure",
      text: "Sealer is applied and left to cure. We'll tell you how long to stay off it before the work begins.",
    },
    {
      title: "Final Review",
      text: "We walk the finished driveway with you to make sure you're happy with the result.",
    },
  ],
  features: [
    "Crack filling & minor repairs",
    "Driveway sealcoating",
    "Protects against sun, water & weather",
    "Clean, fresh finish",
  ],
  faqs: [
    {
      question: "How often should a driveway be sealcoated?",
      answer:
        "Most asphalt driveways benefit from sealcoating every 2 to 3 years, depending on sun exposure, weather, and how much the driveway is used. We'll look at yours and tell you whether it's due.",
    },
    {
      question: "How long before I can drive on a freshly sealed driveway?",
      answer:
        "Traffic usually needs to stay off a new sealcoat for about 24 hours, depending on temperature and humidity. We'll give you the exact timing before we start.",
    },
    {
      question: "Do you fill cracks before sealing?",
      answer:
        "Yes. Cracks are filled first so water can't reach the base beneath the sealer.",
    },
    {
      question: "What weather is needed for sealcoating?",
      answer:
        "Sealcoating needs dry pavement, no rain in the forecast for at least a day, and temperatures of roughly 50°F and rising. In Arkansas, the main season runs from spring through fall.",
    },
  ],
  related: [
    { name: "Sealcoating", slug: "sealcoating" },
    { name: "Crack Filling", slug: "crack-filling" },
    { name: "Patching & Potholes", slug: "patching-potholes" },
  ],
};
</script>

<template>
  <ServiceDetailPage :service="service" />
</template>
