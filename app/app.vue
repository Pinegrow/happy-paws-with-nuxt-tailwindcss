<script setup lang="ts">
  import site from '~~/site'
  import { heroImageUrl } from '@/utils/hero'
  import { primary, secondary } from '@/utils/colors'
  // import { useSiteConfig } from '#imports'
  // const siteConfig = useSiteConfig()

  const { name, logo, description, author, twitter } = site
  const fromBg = secondary
  const toBg = primary

  const ogImageOptions = {
    component: 'ThePage',
    title: name,
    // description: '', // use page description instead
    summary: description,
    fromBg,
    toBg,
    // image: '~/assets/images/hero1.jpg',
    logo,
    author,
    twitter,
  }

  // https://nuxtseo.com/schema-org/guides/quick-setup
  useSchemaOrg([
    defineWebSite({
      name: site.name,
    }),
    defineWebPage(),
  ])

  const route = useRoute()
  const ogImage = computed(() => (route.meta.ogImage || heroImageUrl) as string)

  const { optimizeImage } = useOptimizeImage()
  const theOgImageOptimized = {
    alt: `hero`,
    cover: true,
    ...optimizeImage(
      ogImage.value,
      /* options */
      {
        modifiers: {
          width: 1200,
          height: 600,
          fit: 'fill', // can be cover, contain, fill, inside, outside
        },
        // placeholder: false, // placeholder image before the actual image is fully loaded.
      },
    ),
  }

  const theOgImage = theOgImageOptimized.src
</script>
<template>
  <div>
    <HeadAndMeta />
    <!-- We pass image separately so that alias can be transformed by vue plugin, see vite.vue.template.transformAssetUrls in nuxt.config.ts -->
    <!-- OG images and nuxtseo features can be previewed with nuxt-devtools during development. OG images can also be viewed using URL in this form - `/__og-image__/image/<path>/og.<extension>. For eg, https://happy-paws-with-nuxt-tailwindcss.netlify.app/__og-image__/image/og.png -->
    <OgImage :image="theOgImage" v-bind="ogImageOptions" />
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style></style>
