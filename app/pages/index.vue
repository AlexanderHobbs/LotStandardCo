<script setup lang="ts">
import HeroSection from "@/components/heroSections/hero/HeroSection.vue";
import TrustBar from "@/components/heroSections/trust/TrustBar.vue";
import ServiceSection from "@/components/heroSections/services/ServiceSection.vue";
import AboutSection from "@/components/heroSections/about/AboutSection.vue";
import OurMission from "@/components/heroSections/our-mission/OurMission.vue";
import ProcessSection from "@/components/heroSections/process/ProcessSection.vue";
import PhasedWorkSection from "@/components/heroSections/process/PhasedWorkSection.vue";
import StatsSection from "@/components/heroSections/stats/StatsSection.vue";
import TestimonialsSection from "@/components/heroSections/testimonials/TestimonialsSection.vue";
import FaqSection from "@/components/heroSections/faq/FaqSection.vue";

definePageMeta({
  title: "Parking Lot Striping & Maintenance",
  description:
    "Parking lot striping, sealcoating, crack filling and ADA markings in the River Valley & Northwest Arkansas. Licensed and insured. Free quote.",
  navOrder: 1,
  type: "primary",
  icon: "i-mdi-home",
  tags: [
    "parking lot striping",
    "parking lot sealcoating",
    "crack filling",
    "pothole repair",
    "parking lot restriping",
    "ADA compliant parking lot striping",
    "pavement maintenance",
  ],
});
</script>
<template>
  <div>
    <HeroSection />
    <TrustBar />
    <AboutSection />
    <ServiceSection />
    <OurMission />
    <ProcessSection />
    <PhasedWorkSection />
    <StatsSection />
    <TestimonialsSection />
    <FaqSection />
  </div>
</template>
<style scoped></style>
