<script setup lang="ts">
import HeroSection from "@/components/heroSections/hero/HeroSection.vue";
import TrustBar from "@/components/heroSections/trust/TrustBar.vue";
import ServiceListLite from "@/components/heroSections/services/ServiceListLite.vue";
import OurMission from "@/components/heroSections/our-mission/OurMission.vue";
import ProcessSection from "@/components/heroSections/process/ProcessSection.vue";
import WhatSetsUsApart from "@/components/heroSections/about/WhatSetsUsApart.vue";
import StatsSection from "@/components/heroSections/stats/StatsSection.vue";
import TestimonialsSection from "@/components/heroSections/testimonials/TestimonialsSection.vue";
import FaqSection from "@/components/heroSections/faq/FaqSection.vue";

definePageMeta({
  title: "Premium Parking Lot Maintenance in Western Arkansas",
  description:
    "Professional parking lot line striping, sealcoating, ADA-compliant marking, and pavement maintenance for commercial properties in Fort Smith and surrounding areas.",
  navOrder: 1,
  type: "primary",
  icon: "i-mdi-home",
  tags: [
    "parking lot striping",
    "line striping contractor",
    "sealcoating",
    "ADA compliant parking lot marking",
    "pavement maintenance",
  ],
});
</script>
<template>
  <div>
    <HeroSection />
    <TrustBar />
    <OurMission />
    <ServiceListLite />
    <ProcessSection />
    <StatsSection />
    <TestimonialsSection />
    <FaqSection />
  </div>
</template>
<style scoped></style>
