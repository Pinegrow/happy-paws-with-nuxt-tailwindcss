<script setup lang="ts">
  import checkDarkTheme from '@/composables/dark-color-scheme-check?raw'
  import type { Script } from '@unhead/schema'
  type TurboScript = Script & { once: true }

  import site from '@/site'
  // import image from '@/screenshots/image.jpg'
  import { fontUrls } from '@/utils/font'

  const link: any = [
    // ...[
    //   '/fonts/barlow-7cHpv4kjgoGqM7E_Ass52Hs.woff2',
    //   '/fonts/firacode-uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_D1sJVD7Ng.woff2',
    //   '/fonts/barlow-7cHpv4kjgoGqM7E_DMs5.woff2',
    // ].map(
    //   (href) =>
    //     ({
    //       rel: 'preload',
    //       as: 'font',
    //       type: 'font/woff2',
    //       crossorigin: '',
    //       href,
    //     } as const),
    // ),
  ]
  const noscript: any = []

  if (fontUrls.length) {
    const googleapis = 'https://fonts.googleapis.com'
    const gstatic = 'https://fonts.gstatic.com'
    link.push(
      { rel: 'dns-prefetch', href: googleapis },
      { rel: 'dns-prefetch', href: gstatic },
      { rel: 'preconnect', crossorigin: 'anonymous', href: googleapis },
      { rel: 'preconnect', crossorigin: 'anonymous', href: gstatic },
      {
        rel: 'preload',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'",
        href: fontUrls.toString(),
      },
    )
    noscript.push(
      `<link rel="stylesheet" crossorigin="anonymous" href="${fontUrls.toString()}" />`,
    )
  }

  const { name, description, author } = site

  const route = useRoute()
  const theDescription = computed(
    () => (route.meta.description || description) as string,
  )
  const title = computed(() => route.meta.title)
  const theTitle = computed(() =>
    title.value ? `${title.value} - ${name}` : name,
  )

  useHead({
    title, // title was set using definePageMeta in pages. For dynamic routes, it's dynamically set in the [page] itself using useHead
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - ${name}` : name
    },
    htmlAttrs: { lang: 'en-US' },
    // Instead of setting meta via useHead, useServerSeoMeta or @nuxtseo/module is used.
    // meta: [
    //   { name: 'charset', content: 'utf-8' },
    //   {
    //     name: 'viewport',
    //     content: 'width=device-width, initial-scale=1',
    //   },
    //   { name: 'author', content: author },
    //   { name: 'keywords', content: route.meta.tags?.toString() },
    // ],
    script: [{ innerHTML: checkDarkTheme, once: true } as TurboScript],
    link,
    noscript,
  })

  useServerSeoMeta({
    // charset: 'utf-8', // defaulted by nuxt
    author,
    // viewport: 'width=device-width, initial-scale=1', // defaulted by nuxt
    // title, // can be ignored - https://stackoverflow.com/a/21076311/9185953
    // keywords: route.meta.tags?.toString(), // can be ignored, not used anywhere
    description: theDescription,
    // ogTitle: theTitle, // set by @nuxtseo/module's nuxt-seo-experiments
    // ogDescription: description, // set by @nuxtseo/module's nuxt-seo-experiments
    // ogType: 'website', // set by @nuxtseo/module's nuxt-seo-experiments
    // ogImage: image, // set by @nuxtseo/module's nuxt-og-image
    ogImageAlt: theTitle, // set by @nuxtseo/module's nuxt-og-image
    // // Other values - og:image:width, og:image:height, og:image:alt, og:image:type, og:image:secure_url
    // ogUrl: url, // set by @nuxtseo/module
    // ogSiteName: theTitle, // set by @nuxtseo/module
    // // Other values - og: locale, og: type
    twitterTitle: theTitle.value,
    twitterDescription: theDescription,
    // twitterImage: image, // set by @nuxtseo/module & nuxt-og-image
    twitterImageAlt: theTitle.value,
    twitterSite: '@vuedesigner',
    twitterCreator: '@techakayy',
    // twitterCard: 'summary_large_image', // set by @nuxtseo/module & nuxt-og-image
  })
</script>

<template>
  <div>
    <Head>
      <!-- <Meta property="og:title" :content="theTitle" />
      <Meta property="og:description" :content="description" />
      <Meta property="og:type" content="website" />
      <Meta property="og:image" :content="image" />
      <Meta property="og:image:alt" :content="theTitle" />
      <Meta property="og:url" :content="url" />
      <Meta property="og:site-name" :content="theTitle" />
      <Meta name="twitter:title" :content="theTitle" />
      <Meta name="twitter:description" :content="description" />
      <Meta property="twitter:image" content="image" />
      <Meta name="twitter:image:alt" :content="theTitle" />
      <Meta name="twitter:site" content="@vuedesigner" />
      <Meta name="twitter:creator" content="@techakayy" />
      <Meta name="twitter:card" content="summary_large_image" /> -->
    </Head>
  </div>
</template>
