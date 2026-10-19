import type { ImageSizes, ResolvedImage, ImageSizesOptions } from '@nuxt/image'

type Override<T1, T2> = Omit<T1, keyof T2> & T2

export type ImageOptions = Override<
  ImageSizesOptions,
  {
    sizes?: ImageSizesOptions['sizes']
  }
>

export type ImageOptimized = {
  src: ResolvedImage['url']
  lazySrc?: ResolvedImage['url']
  bgStyles?: string
} & Partial<ImageSizes> // only present when `sizes` was requested
