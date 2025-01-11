import siteMeta from '@/site'
// import image from '@/screenshots/image.jpg'
import { fontUrls } from '@/utils/font'

import checkDarkTheme from '@/composables/dark-color-scheme-check?raw'
import type { Script } from '@unhead/schema'
type TurboScript = Script & { once: true }

export const useHeadAndMeta = () => {
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

  const {
    title: siteTitle,
    description: siteDescription,
    author,
    twitter,
    titleSeparator,
  } = siteMeta

  const route = useRoute()

  const pageMeta = computed(() => {
    return {
      title: route.meta.title as string,
      description: route.meta.description as string,
    }
  })

  const title = computed(() =>
    pageMeta.value.title
      ? `${pageMeta.value.title} ${titleSeparator} ${siteTitle}`
      : siteTitle,
  )

  useHead({
    title, // title is defined statically using definePageMeta in pages and resolved here. For dynamic routes, this resolved title is further overriden within in the dynamic route itself (for eg, [slug]) using a second useHead.

    // Other unused params - titleTemplate, templateParams
    titleTemplate: null,

    // Instead of setting meta via useHead, useServerSeoMeta or @nuxtjs/seo is used.
    // meta: [],

    // useScript can also be used to load scripts
    script: [{ innerHTML: checkDarkTheme, once: true } as TurboScript],
    link,
    noscript,
    htmlAttrs: { lang: 'en-US' },
    bodyAttrs: {},
    style: [],
  })

  const description = computed(
    () => pageMeta.value.description || siteDescription,
  )

  useServerSeoMeta({
    title,
    description,
    author,
    // charset: 'utf-8', // defaulted by nuxt
    // viewport: 'width=device-width, initial-scale=1', // defaulted by nuxt
    // keywords: route.meta.tags?.toString(), // can be ignored, not used anywhere

    // ogTitle: theTitle, // set by @nuxtjs/seo's nuxt-seo-utils
    // ogDescription: description, // set by @nuxtjs/seo's nuxt-seo-utils
    // ogType: 'website', // set by @nuxtjs/seo's nuxt-seo-utils
    // ogImage: image, // set by @nuxtjs/seo's nuxt-og-image
    ogImageAlt: title, // set by @nuxtjs/seo's nuxt-og-image
    // // Other values - og:image:width, og:image:height, og:image:alt, og:image:type, og:image:secure_url
    // ogUrl: url, // set by @nuxtjs/seo
    // ogSiteName: theTitle, // set by @nuxtjs/seo
    // // Other values - og: locale, og: type

    twitterTitle: title,
    twitterDescription: description,
    // twitterImage: image, // set by @nuxtjs/seo & nuxt-og-image
    twitterImageAlt: title,
    twitterSite: twitter,
    twitterCreator: '@techakayy',
    // twitterCard: 'summary_large_image', // set by @nuxtjs/seo & nuxt-og-image
  })

  // https://unhead.unjs.io/schema-org/getting-started/setup#_3-add-site-schemaorg
  // https://nuxtseo.com/schema-org/guides/quick-setup
  useSchemaOrg([
    defineWebSite({
      name: title,
    }),
    defineWebPage(),
  ])
}
