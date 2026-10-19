<script setup lang="ts">
import ServiceDetailPage from "@/components/heroSections/services/ServiceDetailPage.vue";
import type { ServicePage } from "~~/types/services";

const service: ServicePage = {
  slug: "signage-installation",
  name: "Signage Installation",
  icon: "i-mdi-sign-caution",
  image: "/images/services/signage-installation.jpg",
  seoTitle: "Parking Lot Sign Installation in Arkansas",
  metaDescription:
    "Parking lot sign installation in Fort Smith, Fayetteville and western Arkansas. ADA, reserved, fire lane and wayfinding signs installed. Free quotes.",
  keywords:
    "parking lot signs, sign installation, ADA parking signs, reserved parking signs, stop signs, fire lane signs, wayfinding signage, Fort Smith sign installation",
  eyebrow: "Parking & Traffic Signage",
  heading: "Commercial Parking Lot Sign Installation in Arkansas",
  intro: [
    "Signage directs traffic, communicates parking rules, and supports regulatory compliance. Missing, damaged, or incorrectly placed signs create confusion for drivers and make parking policies difficult to enforce.",
    "Lot Standard Co supplies and installs accessible and reserved parking signs, stop and fire lane signs, and custom wayfinding. Each sign is set at the correct height and position to meet ADA and local requirements, and installations include posts and mounting hardware.",
    "Signage is coordinated with the striping layout so the lot reads clearly from every approach. Work is scheduled around operating hours, including overnight and weekends, to minimize disruption to customers and tenants.",
  ],
  benefits: [
    {
      title: "Direction",
      text: "Entrance, directional, and wayfinding signs help visitors reach their destination quickly.",
    },
    {
      title: "Compliance",
      text: "Accessible and fire lane signs are installed at the required height and location.",
    },
    {
      title: "Enforcement",
      text: "Reserved, tow-away, and no-parking signs make parking rules clear and enforceable.",
    },
    {
      title: "Durability",
      text: "Reflective, weather-resistant signs on sturdy posts are built for Arkansas weather.",
    },
  ],
  process: [
    {
      title: "Site Walk & Free Quote",
      text: "We review the lot and identify which signs are needed and where they should be placed. A clear written estimate follows. The approved price is the final price.",
    },
    {
      title: "Sign Planning",
      text: "Standard regulatory signs or custom signs with specific wording and branding are selected, and each location is planned before installation.",
    },
    {
      title: "Install - Set - Secure",
      text: "Posts are set securely and signs are mounted at the correct height and orientation, coordinated with the striping layout.",
    },
    {
      title: "Documentation & Final Review",
      text: "Each installed sign is documented and checked for visibility and alignment.",
    },
  ],
  features: [
    "ADA accessible & van-accessible signs",
    "Reserved & tenant parking signs",
    "Stop, yield & directional signs",
    "Fire lane & tow-away signs",
    "Custom wayfinding signage",
    "Posts & mounting hardware included",
  ],
  faqs: [
    {
      question: "Are ADA accessible parking signs installed?",
      answer:
        "Yes. Accessible and van-accessible parking signs are installed at the required height in front of each accessible space, and can be paired with ADA-compliant striping.",
    },
    {
      question: "Can custom signs be made with a business name?",
      answer:
        "Yes. Custom reserved parking, customer-only, and wayfinding signs can be supplied with specific wording and branding.",
    },
    {
      question: "Are damaged or faded signs replaced?",
      answer:
        "Yes. Knocked-down, bent, and faded signs are replaced, and leaning or damaged posts can be reset.",
    },
    {
      question: "Are posts and hardware included?",
      answer:
        "Yes. Every installation includes the post and mounting hardware, and signs can be mounted to existing walls or light poles where appropriate.",
    },
  ],
  related: [
    { name: "ADA Compliance Marking", slug: "ada-compliance-marking" },
    { name: "Line Striping", slug: "line-striping" },
    { name: "Safety Markings", slug: "safety-markings" },
  ],
};
</script>

<template>
  <ServiceDetailPage :service="service" />
</template>
