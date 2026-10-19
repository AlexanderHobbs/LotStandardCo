import type { ImageOptimized } from '~~/types/image'

export type Service = {
  id: number
  slug: string
  name: string
  shortDescription: string
  description: string
  image: string
  imageAlt?: string
  imageOptimized?: ImageOptimized
  icon: string
  features: string[]
  priceNote?: string
}

export type Services = Service[]

// Content for an individual /services/<slug> page. Each page defines its own
// copy so titles, descriptions, and FAQs are unique for search engines.
export type ServicePage = {
  slug: string
  name: string
  icon: string
  image: string
  seoTitle: string
  metaDescription: string
  keywords: string
  eyebrow: string
  heading: string
  intro: string[]
  benefits: { title: string; text: string }[]
  process: { title: string; text: string }[]
  features: string[]
  priceNote?: string
  faqs: { question: string; answer: string }[]
  related: { name: string; slug: string }[]
}
