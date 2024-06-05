import type { ImageSizes, ResolvedImage, ImageSizesOptions } from '@nuxt/image'

// https://dev.to/vborodulin/ts-how-to-override-properties-with-type-intersection-554l
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
} & ImageSizes
