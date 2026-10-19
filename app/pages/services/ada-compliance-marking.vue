<script setup lang="ts">
import ServiceDetailPage from "@/components/heroSections/services/ServiceDetailPage.vue";
import type { ServicePage } from "~~/types/services";

const service: ServicePage = {
  slug: "ada-compliance-marking",
  name: "ADA Compliance Marking",
  icon: "i-mdi-wheelchair-accessibility",
  image: "/images/services/ada-compliance-marking.jpg",
  seoTitle: "ADA Parking Lot Striping in Arkansas",
  metaDescription:
    "ADA-compliant parking lot striping in Fort Smith, Fayetteville and western Arkansas. Accessible stalls, aisles and symbols done to code. Free quotes.",
  keywords:
    "ADA parking lot striping, ADA compliance marking, handicap parking striping, accessible parking spaces, van accessible parking, ADA parking requirements Arkansas",
  eyebrow: "ADA Parking Compliance",
  heading: "ADA-Compliant Parking Lot Striping in Arkansas",
  intro: [
    "Accessible parking is subject to specific federal requirements. Stalls that are too narrow, missing access aisles, and faded symbols are common findings in compliance reviews, and they expose property owners to complaints, fines, and litigation.",
    "Lot Standard Co provides professional ADA marking for commercial properties. We lay out and paint accessible stalls, hatched access aisles, and the International Symbol of Accessibility to current federal ADA standards, positioned on the shortest accessible route to the building entrance.",
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
      title: "Accuracy",
      text: "Required accessible and van-accessible space counts are calculated from the total stall count.",
    },
    {
      title: "Accessibility",
      text: "Clear, well-placed accessible parking improves access for every visitor.",
    },
  ],
  process: [
    {
      title: "Digital Walk & Free Quote",
      text: "We use custom software to count stalls, measure existing accessible spaces, and review the layout. A clear written estimate follows. The approved price is the final price.",
    },
    {
      title: "Compliance Layout",
      text: "Required accessible and van-accessible space counts are determined, and spaces and access aisles are placed on the route closest to the accessible entrance.",
    },
    {
      title: "Mark - Sign - Cure",
      text: "Stalls, hatched access aisles, and the International Symbol of Accessibility are applied with commercial equipment and fast-drying paint. Sign locations are marked, and signs can be installed as part of the project.",
    },
    {
      title: "Documentation & Final Review",
      text: "The finished layout is documented and reviewed against the approved scope.",
    },
  ],
  features: [
    "Accessible stall & access aisle layout",
    "Van-accessible space marking",
    "International Symbol of Accessibility",
    "Hatched access aisle striping",
    "Required space count calculation",
    "Sign placement & installation",
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
      question: "Do accessible spaces need signs as well as paint?",
      answer:
        "Yes. Accessible spaces need a sign with the International Symbol of Accessibility mounted in front of the space, and van-accessible spaces also need a \"Van Accessible\" designation. Signs can be installed along with the striping.",
    },
    {
      question: "Can an older lot be brought up to current ADA standards?",
      answer:
        "Yes. Older lots can be re-laid to add missing accessible spaces, widen access aisles, and relocate spaces closer to accessible entrances.",
    },
  ],
  related: [
    { name: "Line Striping", slug: "line-striping" },
    { name: "Signage Installation", slug: "signage-installation" },
    { name: "Sealcoating", slug: "sealcoating" },
  ],
};
</script>

<template>
  <ServiceDetailPage :service="service" />
</template>
