<script setup lang="ts">
import ServiceDetailPage from "@/components/heroSections/services/ServiceDetailPage.vue";
import type { ServicePage } from "~~/types/services";

const service: ServicePage = {
  slug: "patching-potholes",
  name: "Patching & Potholes",
  icon: "i-mdi-hammer-wrench",
  image: "/images/services/pothole-repair.jpg",
  seoTitle: "Pothole Repair & Patching in Arkansas",
  metaDescription:
    "Pothole repair and asphalt patching for parking lots in the River Valley & Northwest Arkansas. Safer, smoother pavement and less liability. Free quote.",
  keywords:
    "pothole repair, parking lot patching, asphalt patching, parking lot pothole repair, pavement repair, commercial asphalt repair, Fort Smith pothole repair, Northwest Arkansas asphalt patching",
  eyebrow: "Parking Lot Patching & Pothole Repair",
  heading: "Commercial Parking Lot Patching & Pothole Repair in Arkansas",
  intro: [
    "Potholes are more than an eyesore. They damage vehicles, create trip hazards for pedestrians, and give a property a neglected look. For the owner, a pothole someone can point to is also a liability.",
    "Lot Standard Co repairs potholes and patches damaged pavement in commercial parking lots. We prepare the damaged area and fill it so the surface is smooth and safe to use again, which also keeps the damage from spreading into the pavement around it.",
    "Patching works best as part of a plan. We can pair it with crack filling, sealcoating, and restriping so the whole lot is brought back to standard in one visit. Work is scheduled around operating hours, including overnight and weekends, to minimize disruption to customers and tenants.",
  ],
  benefits: [
    {
      title: "Safety",
      text: "Repaired pavement removes trip hazards and the risk of vehicle damage.",
    },
    {
      title: "Liability",
      text: "Fixing damage promptly reduces the chance of an injury claim on your property.",
    },
    {
      title: "Containment",
      text: "Repairs stop damage from spreading, which keeps small problems from becoming large ones.",
    },
    {
      title: "Appearance",
      text: "A smooth, repaired surface shows the property is looked after.",
    },
  ],
  process: [
    {
      title: "Digital Walk & Free Quote",
      text: "We walk the lot, mark the areas that need repair, and send a clear written estimate. The approved price is the final price.",
    },
    {
      title: "Prepare the Damage",
      text: "Each damaged area is cleared of loose material and prepared so the patch bonds to the pavement around it.",
    },
    {
      title: "Patch & Finish",
      text: "Repairs are filled and finished level with the surrounding surface, then the area is reopened to traffic.",
    },
    {
      title: "Documentation & Final Review",
      text: "The finished repairs are documented and reviewed against the approved scope, and we recommend sealcoating or restriping where it makes sense.",
    },
  ],
  features: [
    "Pothole repair",
    "Damaged pavement patching",
    "Safer, smoother surface",
    "Stops damage from spreading",
    "Combine with crack filling & sealcoating",
    "Phased work to keep lots open",
  ],
  faqs: [
    {
      question: "What causes potholes in a parking lot?",
      answer:
        "Water gets into cracks in the asphalt, softens the base underneath, and traffic then breaks up the weakened surface. Freeze-thaw cycles and heavy vehicles speed it up. Filling cracks early is the best way to prevent potholes.",
    },
    {
      question: "Should potholes be repaired before sealcoating?",
      answer:
        "Yes. Sealer protects the surface but does not fix damage, so potholes and failed areas should be repaired first and the lot sealed afterward.",
    },
    {
      question: "Can you patch part of a lot without closing the whole thing?",
      answer:
        "Yes. We can work in sections, after hours, or on weekends so customers always have somewhere to park.",
    },
    {
      question: "What if the damage is widespread?",
      answer:
        "If large areas have failed, patching may only be a short-term fix. We'll tell you honestly what the lot needs during the walkthrough and give you a clear scope and price.",
    },
  ],
  related: [
    { name: "Crack Filling", slug: "crack-filling" },
    { name: "Sealcoating", slug: "sealcoating" },
    { name: "Full Package", slug: "full-package" },
  ],
  guides: [
    { title: "How Often Should You Sealcoat Your Parking Lot?", slug: "how-often-should-you-sealcoat" },
  ],
};
</script>

<template>
  <ServiceDetailPage :service="service" />
</template>
