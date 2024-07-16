<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'

  const props = defineProps({
    imageUrl: {
      type: String,
      default: heroImageUrl,
    },
    alt: {
      type: String,
      default: 'hero',
    },
    cover: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: [Boolean, String],
      default: false,
    },
  })

  const { optimizeImage } = useOptimizeImage()
  const imageOptimized = {
    alt: props.alt,
    cover: props.cover,
    ...optimizeImage(
      props.imageUrl,
      /* options */
      {
        /* If using local images instead of unsplash url, enable netlify provider */
        // provider:
        //     process.env.NODE_ENV === 'production'
        //       ? 'netlify'
        //       : null /* defaults to ipx or ipxStatic */,
        placeholder: props.placeholder, // placeholder image before the actual image is fully loaded.
      },
      true /* return bgStyles */,
    ),
  }

  // const heroImage = imageOptimized.src
  const bgStyles = imageOptimized.bgStyles
</script>
<template>
  <div class="bg-center bg-cover bg-no-repeat blur-none z-0" :style="bgStyles">
    <!-- <div
      class="bg-center bg-cover bg-no-repeat blur-none z-0 bg-design-image lg:bg-design-image-large"
    > -->
    <slot />
  </div>
</template>
<style scoped></style>
