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
        // https://dev.to/ingosteinke/responsive-background-images-with-image-set-the-srcset-for-background-image-259a
        const responsiveImages = computed(() => {
          return imageOptimized.srcset
            .split(', ')
            .filter(
              (imgUrl) => imgUrl.endsWith('768w') || imgUrl.endsWith('2560w'),
            )
        })

        const responsiveImageSrc = `url("${responsiveImages.value[0]}")`

        const responsiveImageSrcImageSet = `image-set(url("${responsiveImages.value[0]}") 1x,url("${responsiveImages.value[1]}") 2x)`

        const responsiveImageSrcImageSetFallback = `-webkit-image-set(url("${responsiveImages.value[0]}") 1x,url("${responsiveImages.value[1]}") 2x)`

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
