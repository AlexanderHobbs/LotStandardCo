<script setup lang="ts">
import ServiceDetailPage from "@/components/heroSections/services/ServiceDetailPage.vue";
import type { ServicePage } from "~~/types/services";

const service: ServicePage = {
  slug: "safety-markings",
  name: "Safety Markings",
  icon: "i-mdi-shield-alert-outline",
  image: "/images/services/safety-markings.jpg",
  seoTitle: "Parking Lot Safety Markings in Arkansas",
  metaDescription:
    "Parking lot safety markings in Fort Smith, Fayetteville and western Arkansas. Crosswalks, fire lanes, stop bars and hazard zones. Free quotes.",
  keywords:
    "safety markings, crosswalk striping, fire lane marking, stop bar striping, hazard zone marking, pedestrian safety markings, Fort Smith safety markings, Northwest Arkansas pavement markings",
  eyebrow: "Safety & Traffic Markings",
  heading: "Commercial Parking Lot Safety Markings in Arkansas",
  intro: [
    "Pavement markings are a primary tool for managing traffic and protecting pedestrians. Faded crosswalks, missing stop bars, and unmarked fire lanes increase the risk of collisions and expose property owners to liability.",
    "Lot Standard Co provides professional safety marking for commercial properties. We lay out and apply high-visibility crosswalks, stop bars, fire lanes, directional arrows, and hazard zones that guide traffic predictably and support compliance with local fire and safety codes.",
    "Markings are applied with fast-drying traffic paint so lots reopen quickly. Work is scheduled around operating hours, including overnight and weekends, to minimize disruption to customers and tenants.",
  ],
  benefits: [
    {
      title: "Safety",
      text: "Marked crosswalks, stop bars, and hazard zones reduce the risk of collisions and injuries.",
    },
    {
      title: "Compliance",
      text: "Fire lanes and required markings are laid out to meet local fire and safety requirements.",
    },
    {
      title: "Visibility",
      text: "Durable, high-visibility paint remains bright through heavy traffic and weather.",
    },
    {
      title: "Risk Reduction",
      text: "A well-marked property demonstrates reasonable care and reduces exposure to claims.",
    },
  ],
  process: [
    {
      title: "Digital Walk & Free Quote",
      text: "We review traffic flow, pedestrian paths, and hazard areas across the property. A clear written estimate follows. The approved price is the final price.",
    },
    {
      title: "Layout Planning",
      text: "Each crosswalk, stop bar, fire lane, and zone is laid out to plan before any paint is applied.",
    },
    {
      title: "Prep - Mark - Cure",
      text: "The surface is cleaned, and markings are applied with commercial equipment and fast-drying traffic paint so the lot reopens quickly.",
    },
    {
      title: "Documentation & Final Review",
      text: "The finished markings are documented and reviewed against the approved scope.",
    },
  ],
  features: [
    "Crosswalks & pedestrian paths",
    "Fire lane marking",
    "Stop bars & directional arrows",
    "Hazard & no-parking zones",
    "Speed bump & curb marking",
    "Off-hours scheduling available",
  ],
  faqs: [
    {
      question: "Which safety markings does a property need?",
      answer:
        "It depends on the layout and local codes, but most commercial properties need crosswalks, stop bars, fire lanes, and directional arrows. A site walkthrough identifies what is required.",
    },
    {
      question: "How long do safety markings last?",
      answer:
        "High-traffic markings like crosswalks and stop bars typically last 1 to 3 years, depending on traffic and weather. An annual inspection helps keep them bright.",
    },
    {
      question: "Can work be done without closing the whole lot?",
      answer:
        "Yes. Work is done in sections and can be scheduled for nights or weekends to keep the business open.",
    },
    {
      question: "Are fire lanes marked to local code?",
      answer:
        "Yes. Local fire marshal requirements for fire lane width, color, and lettering are followed and adjusted to the jurisdiction.",
    },
  ],
  related: [
    { name: "Line Striping", slug: "line-striping" },
    { name: "ADA Compliance Marking", slug: "ada-compliance-marking" },
    { name: "Signage Installation", slug: "signage-installation" },
  ],
};
</script>

<template>
  <ServiceDetailPage :service="service" />
</template>
