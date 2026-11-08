<script setup lang="ts">
import ServiceDetailPage from "@/components/heroSections/services/ServiceDetailPage.vue";
import type { ServicePage } from "~~/types/services";

const service: ServicePage = {
  slug: "new-layout-ada-striping",
  name: "New Layout & ADA Striping",
  icon: "i-mdi-wheelchair-accessibility",
  image: "/images/services/new-layout-ada-striping.jpg",
  seoTitle: "New Layout & ADA Striping in Arkansas",
  metaDescription:
    "New parking lot layouts and ADA-compliant striping in the River Valley & Northwest Arkansas. Accessible stalls and aisles to code. Free quotes.",
  keywords:
    "new parking lot layout, parking lot layout design, ADA parking lot striping, ADA compliance marking, handicap parking striping, accessible parking spaces, van accessible parking, ADA parking requirements Arkansas",
  eyebrow: "New Layout & ADA Striping",
  heading: "New Parking Lot Layouts & ADA-Compliant Striping in Arkansas",
  intro: [
    "A new or reworked parking lot is only as good as its layout. Stall size, drive-aisle width, traffic flow, and accessible parking all have to work together, and the accessible parts are subject to specific federal requirements. Stalls that are too narrow, missing access aisles, and faded symbols are common findings in compliance reviews, and they expose property owners to complaints, fines, and litigation.",
    "Lot Standard Co lays out and paints new parking lots from scratch, and reworks existing ones. We plan the stalls, aisles, and flow, then paint accessible stalls, hatched access aisles, and the International Symbol of Accessibility to current federal ADA standards, positioned on the shortest accessible route to the building entrance.",
    "The required number of accessible and van-accessible spaces is calculated from the total stall count of each lot. Work is scheduled around operating hours, including overnight and weekends, to minimize disruption to customers and tenants.",
  ],
  benefits: [
    {
      title: "Compliance",
      text: "Stalls, access aisles, and symbols are laid out to the dimensions specified in the ADA Standards.",
    },
    {
      title: "Risk Reduction",
      text: "Correctly marked accessible parking reduces exposure to ADA complaints, fines, and legal action.",
    },
    {
      title: "Smart Layouts",
      text: "A planned layout makes the most of your space and keeps traffic moving, whether the asphalt is brand new or years old.",
    },
    {
      title: "Accessibility",
      text: "Clear, well-placed accessible parking improves access for every visitor.",
    },
  ],
  process: [
    {
      title: "Digital Walk & Free Quote",
      text: "We use custom software to measure the lot, count stalls, and review any existing accessible spaces. A clear written estimate follows. The approved price is the final price.",
    },
    {
      title: "Layout & Compliance Planning",
      text: "We plan stall dimensions, drive aisles, and traffic flow, determine the required accessible and van-accessible space counts, and place them on the route closest to the accessible entrance.",
    },
    {
      title: "Mark - Stencil - Cure",
      text: "Stalls, hatched access aisles, and the International Symbol of Accessibility are applied with commercial equipment and fast-drying paint, then your lot reopens quickly.",
    },
    {
      title: "Documentation & Final Review",
      text: "The finished layout is documented and reviewed against the approved scope.",
    },
  ],
  features: [
    "New-construction & redesigned layouts",
    "Accessible stall & access aisle layout",
    "Van-accessible space marking",
    "International Symbol of Accessibility",
    "Hatched access aisle striping",
    "Required space count calculation",
  ],
  faqs: [
    {
      question: "How many accessible parking spaces does a lot need?",
      answer:
        "Under the 2010 ADA Standards, a lot with 1 to 25 total spaces needs at least 1 accessible space, 26 to 50 needs 2, and 51 to 75 needs 3, with the requirement increasing as lots get larger. The exact number is calculated during the site visit.",
    },
    {
      question: "What is a van-accessible parking space?",
      answer:
        "A van-accessible space has a wider space or access aisle so a wheelchair lift or ramp can deploy. At least 1 of every 6 accessible spaces must be van-accessible, and every lot with accessible parking needs at least one.",
    },
    {
      question: "Can you lay out a brand-new parking lot?",
      answer:
        "Yes. We lay out stalls, drive aisles, and accessible spaces on fresh asphalt, and we can plan the layout with you before the paving is finished so the dimensions work.",
    },
    {
      question: "Can an older lot be brought up to current ADA standards?",
      answer:
        "Yes. Older lots can be re-laid to add missing accessible spaces, widen access aisles, and relocate spaces closer to accessible entrances.",
    },
  ],
  related: [
    { name: "Restriping", slug: "restriping" },
    { name: "Sealcoating", slug: "sealcoating" },
    { name: "Full Package", slug: "full-package" },
  ],
  guides: [
    { title: "A Property Manager's Guide to ADA-Compliant Parking Lot Markings", slug: "ada-compliant-parking-guide" },
  ],
};
</script>

<template>
  <ServiceDetailPage :service="service" />
</template>
