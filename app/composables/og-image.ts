import siteMeta from '@/site'
import { heroImageUrl } from '@/utils/hero'
import { primary, secondary } from '@/utils/colors'

export const useOgImage = () => {
  const { title, logo, description, author, twitter } = siteMeta
  const fromBg = secondary
  const toBg = primary

  const ogImageOptions = {
    component: 'OgCard',
    title,
    summary: description,
    fromBg,
    toBg,
    logo,
    author,
    twitter,
  }

  const route = useRoute()
  const ogImage = computed(() => (route.meta.ogImage || heroImageUrl) as string)

  const { optimizeImage } = useOptimizeImage()
  const theOgImageOptimized = {
    alt: `hero`,
    cover: true,
    ...optimizeImage(
      ogImage.value,
      {
        modifiers: {
          width: 1200,
          height: 600,
          fit: 'fill', // can be cover, contain, fill, inside, outside
        },
      },
    ),
  }

  const theOgImage = theOgImageOptimized.src

  defineOgImageComponent('OgCard', {
    image: theOgImage,
    ...ogImageOptions,
  })

  return {
    theOgImage,
    ogImageOptions,
  }
}
