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

    // const resolvedImage = img.getImage(src, {
    //   ...options,
    //   provider: 'ipx',
    // })

    // const placeholderImage =
    //   placeholder &&
    //   img.getImage(src, {
    //     ...options,
    //     provider: 'ipx',
    //     placeholder,
    //   })

    // const imageSizes = img.getSizes(src, {
    //   ...options,
    //   provider: 'ipx',
    //   sizes,
    // })

    const imageOptimized: ImageOptimized = Object.assign(
      {},
      {
        src,
        lazySrc: src,
        srcset: src,
        sizes: 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw',
      },
    )

    if (bgStyles) {
      try {
        // https://dev.to/ingosteinke/responsive-background-images-with-image-set-the-srcset-for-background-image-259a
        // const responsiveImages = computed(() => {
        //   return imageOptimized.srcset
        //     .split(', ')
        //     .filter(
        //       (imgUrl) => imgUrl.endsWith('768w') || imgUrl.endsWith('2560w'),
        //     )
        // })

        const responsiveImageSrc = `url("${src}")`

        const responsiveImageSrcImageSet = `image-set(url("${src}") 1x,url("${src}") 2x)`

        const responsiveImageSrcImageSetFallback = `-webkit-image-set(url("${src}") 1x,url("${src}") 2x)`

        imageOptimized.bgStyles = [
          responsiveImageSrc,
          responsiveImageSrcImageSet,
          responsiveImageSrcImageSetFallback,
        ].reduce((acc, bgStyle) => {
          return `${acc}background-image:${bgStyle};`
        }, '')
      } catch (err) {
        console.log(err)
      }
    }

    return imageOptimized
  }

  return {
    optimizeImage,
  }
}
