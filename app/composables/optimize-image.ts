import type { ImageOptions, ImageOptimized } from '~~/types/image'

export const useOptimizeImage = () => {
  const img = useImage()

  const optimizeImage = (
    src: string,
    optionsWithSizes: ImageOptions = {},
    bgStyles = false,
  ): ImageOptimized => {
    const {
      sizes = 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw',
      ...optionsWithPlaceholder
    } = optionsWithSizes

    const {
      placeholder = {
        width: 10,
        height: 10,
        quality: 50,
        blur: 3,
      },
      ...options
    } = optionsWithPlaceholder

    const resolvedImage = img.getImage(src, {
      ...options,
    })

    const placeholderImage =
      placeholder &&
      img.getImage(src, {
        ...options,

        placeholder,
      })

    const imageSizes = img.getSizes(src, {
      ...options,

      sizes,
    })

    const imageOptimized: ImageOptimized = Object.assign(
      {},
      {
        src: resolvedImage.url,
        lazySrc: placeholderImage?.url,
        ...imageSizes,
      },
    )

    if (bgStyles) {
      try {
        const fallbackSrc = imageOptimized.src || '/images/placeholder-dark.svg'
        const parsedSrcset = String(imageOptimized.srcset || '')
          .split(',')
          .map((candidate) => candidate.trim())
          .filter(Boolean)
          .map((candidate) => candidate.split(' ')[0])
          .filter(Boolean)

        const responsiveImages = parsedSrcset.filter(
          (imgUrl) => imgUrl && (imgUrl.endsWith('768w') || imgUrl.endsWith('2560w')),
        )

        const primaryImage = responsiveImages[0] || fallbackSrc
        const secondaryImage = responsiveImages[1] || primaryImage

        const responsiveImageSrc = `url("${primaryImage}")`
        const responsiveImageSrcImageSet =
          primaryImage === secondaryImage
            ? `image-set(url("${primaryImage}") 1x)`
            : `image-set(url("${primaryImage}") 1x,url("${secondaryImage}") 2x)`
        const responsiveImageSrcImageSetFallback =
          primaryImage === secondaryImage
            ? `-webkit-image-set(url("${primaryImage}") 1x)`
            : `-webkit-image-set(url("${primaryImage}") 1x,url("${secondaryImage}") 2x)`

        imageOptimized.bgStyles = [
          responsiveImageSrc,
          responsiveImageSrcImageSet,
          responsiveImageSrcImageSetFallback,
        ].reduce((acc, bgStyle) => {
          return `${acc}background-image:${bgStyle};`
        }, '')
      } catch (err) {
        imageOptimized.bgStyles = `background-image:url("${imageOptimized.src || '/images/placeholder-dark.svg'}");`
      }
    }

    return imageOptimized
  }

  return {
    optimizeImage,
  }
}
