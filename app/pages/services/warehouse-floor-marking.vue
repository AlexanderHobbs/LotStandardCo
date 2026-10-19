<script setup lang="ts">
import ServiceDetailPage from "@/components/heroSections/services/ServiceDetailPage.vue";
import type { ServicePage } from "~~/types/services";

const service: ServicePage = {
  slug: "warehouse-floor-marking",
  name: "Warehouse Floor Marking",
  icon: "i-mdi-warehouse",
  image: "/images/services/warehouse-floor-marking.jpg",
  seoTitle: "Warehouse Floor Marking in Arkansas",
  metaDescription:
    "Warehouse and industrial floor marking in Fort Smith, Fayetteville and western Arkansas. Aisles, walkways and safety zones, applied to last. Free quotes.",
  keywords:
    "warehouse floor marking, industrial floor striping, aisle marking, safety zone marking, OSHA floor marking, Fort Smith warehouse striping, Northwest Arkansas floor marking",
  eyebrow: "Warehouse & Industrial Floors",
  heading: "Commercial Warehouse Floor Marking in Arkansas",
  intro: [
    "Floor markings define how people and equipment move through a facility. Clear aisles, walkways, and hazard zones separate forklift and pedestrian traffic, while worn or missing markings contribute to accidents, delays, and failed safety inspections.",
    "Lot Standard Co provides professional floor marking for warehouses and industrial facilities. We lay out and apply aisle lines, pedestrian walkways, forklift lanes, dock and staging areas, and safety symbols on concrete and sealed floors, using durable coatings and tape suited to the traffic.",
    "Work is completed in sections and during off-hours so operations continue without interruption.",
  ],
  benefits: [
    {
      title: "Safety",
      text: "Marked walkways, forklift lanes, and hazard zones reduce the risk of collisions and injuries.",
    },
    {
      title: "Efficiency",
      text: "Clearly labeled aisles, racking, and staging areas support faster, more organized material handling.",
    },
    {
      title: "Durability",
      text: "Industrial-grade coatings and tape withstand forklifts, pallet jacks, and heavy daily traffic.",
    },
    {
      title: "Organization",
      text: "A clearly marked floor presents a well-managed facility to staff, visitors, and auditors.",
    },
  ],
  process: [
    {
      title: "Site Walk & Free Quote",
      text: "We walk the facility and review the floor plan, traffic flow, and safety requirements. A clear written estimate follows. The approved price is the final price.",
    },
    {
      title: "Layout Planning",
      text: "Aisles, lanes, zones, and symbols are mapped against the floor plan before any coating or tape is applied.",
    },
    {
      title: "Prep - Mark - Cure",
      text: "The floor is cleaned and prepared so markings bond properly. Lines, symbols, and zones are then applied and cured, and most areas reopen quickly.",
    },
    {
      title: "Documentation & Final Review",
      text: "The finished layout is documented and reviewed against the approved plan.",
    },
  ],
  features: [
    "Aisle & lane striping",
    "Pedestrian walkway marking",
    "Forklift & hazard zones",
    "Dock & staging area layouts",
    "Safety symbols, arrows & labels",
    "Off-hours & phased scheduling",
  ],
  faqs: [
    {
      question: "What surfaces can be marked?",
      answer:
        "Bare or sealed concrete and most epoxy-coated warehouse and industrial floors can be marked. Paint or tape is recommended based on the surface and traffic.",
    },
    {
      question: "How long before the floor can be used?",
      answer:
        "Fast-curing coatings and floor tape allow most areas to reopen to foot traffic within hours and to equipment shortly after, depending on the product.",
    },
    {
      question: "Can work be scheduled around operations?",
      answer:
        "Yes. Work can be done nights, weekends, or in phased sections so the facility stays productive.",
    },
    {
      question: "Can worn or changed layouts be re-marked?",
      answer:
        "Yes. Worn lines can be refreshed, and aisles, racking, and safety zones can be re-laid whenever the floor plan changes.",
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
