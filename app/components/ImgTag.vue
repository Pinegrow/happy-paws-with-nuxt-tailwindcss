<script setup lang="ts">
  import { baseImageProps } from './_nuxtImage.mjs'
  const props = defineProps(baseImageProps)

  const { optimizeImage } = useOptimizeImage()
  const { src, bgStyles } = props
  // modifiers
  const { width, height, fit, format, quality, background } = props
  // options
  const { provider, preset, densities, sizes, preload, placeholder } = props

  const modifiers = {
    ...props.modifiers,
    width,
    height,
    fit,
    format,
    quality,
    background,
  }

  const options = {
    provider,
    preset,
    densities,
    modifiers,
    sizes,
    preload,
    placeholder,
  } as any

  const { alt, cover } = props

  const imgOptions = {
    alt,
    cover,
    ...optimizeImage(src, options, bgStyles),
  }
</script>

<template>
  <img v-if="src" v-bind="imgOptions" />
</template>

<style scoped></style>
