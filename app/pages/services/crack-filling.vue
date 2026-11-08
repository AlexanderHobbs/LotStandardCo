<script setup lang="ts">
import ServiceDetailPage from "@/components/heroSections/services/ServiceDetailPage.vue";
import type { ServicePage } from "~~/types/services";

const service: ServicePage = {
  slug: "crack-filling",
  name: "Crack Filling",
  icon: "i-mdi-road-variant",
  image: "/images/services/crack-filling.jpg",
  seoTitle: "Parking Lot Crack Filling in Arkansas",
  metaDescription:
    "Parking lot crack filling in the River Valley & Northwest Arkansas. Seal out water and stop small cracks from becoming potholes. Free quotes.",
  keywords:
    "crack filling, crack sealing, asphalt crack repair, parking lot crack filling, parking lot crack sealing, pavement crack repair, Fort Smith crack filling, Northwest Arkansas crack sealing",
  eyebrow: "Parking Lot Crack Filling",
  heading: "Commercial Parking Lot Crack Filling in Arkansas",
  intro: [
    "Cracks are how pavement damage starts. Water seeps in through a hairline crack, softens the base beneath the asphalt, and freezes and thaws until the surface breaks apart. A crack that costs little to fill today can become a pothole, and then a structural repair, within a season or two.",
    "Lot Standard Co fills and seals cracks in commercial parking lots before they spread. We clean each crack and fill it with commercial-grade sealant, which keeps water out of the base and slows the deterioration of the surrounding pavement.",
    "Crack filling is also the right first step before sealcoating, since sealer alone won't bridge an open crack. Work is scheduled around operating hours, including overnight and weekends, to minimize disruption to customers and tenants.",
  ],
  benefits: [
    {
      title: "Prevention",
      text: "Sealing a crack early keeps water out of the base, where the real damage happens.",
    },
    {
      title: "Savings",
      text: "Filling cracks costs far less than patching potholes or repaving a failed section.",
    },
    {
      title: "Longevity",
      text: "Pavement with sealed cracks holds up longer, and a seal coat lasts longer over it.",
    },
    {
      title: "Safety",
      text: "Smoother, intact pavement means fewer trip hazards and less vehicle damage.",
    },
  ],
  process: [
    {
      title: "Digital Walk & Free Quote",
      text: "We walk the lot, measure the cracking, and note any areas that need more than crack filling. A clear written estimate follows. The approved price is the final price.",
    },
    {
      title: "Clean & Prepare",
      text: "Each crack is cleared of dirt, debris, and loose material so the sealant can bond to the pavement.",
    },
    {
      title: "Fill & Seal",
      text: "Cracks are filled with commercial-grade sealant to block water, then left to set before the lot is reopened.",
    },
    {
      title: "Documentation & Final Review",
      text: "The finished work is documented and reviewed against the approved scope, and we flag any areas that will need patching or sealcoating next.",
    },
  ],
  features: [
    "Commercial-grade crack sealant",
    "Cracks cleaned before filling",
    "Stops water reaching the base",
    "Slows potholes & pavement breakup",
    "Ideal prep before sealcoating",
    "Phased work to keep lots open",
  ],
  faqs: [
    {
      question: "Why do asphalt cracks need to be filled?",
      answer:
        "Open cracks let water into the base beneath the asphalt. That water weakens the base and expands when it freezes, which turns small cracks into larger ones and eventually potholes. Filling the crack keeps the water out.",
    },
    {
      question: "Do you fill cracks before sealcoating?",
      answer:
        "Yes. Cracks should be filled before a seal coat goes on, because sealer protects the surface but does not repair open cracks. We can do both in the same project.",
    },
    {
      question: "Can every crack be filled?",
      answer:
        "Most cracks can. Widespread alligator-style cracking or sunken areas usually mean the base has failed, and those areas need patching or more extensive repair instead. We'll tell you which is which during the walkthrough.",
    },
    {
      question: "How long before I can drive on filled cracks?",
      answer:
        "It depends on the temperature and the material, and we'll tell you before the work begins. We schedule in phases so part of the lot stays open.",
    },
  ],
  related: [
    { name: "Patching & Potholes", slug: "patching-potholes" },
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
