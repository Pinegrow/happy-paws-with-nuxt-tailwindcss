// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  title: 'Happy Paws',
  description: 'Adopt Your Fur Mate',
  logo: 'i-noto:cat-face',
  author: 'Pinegrow',
  url: 'https://happy-paws-with-nuxt-tailwindcss.netlify.app',
  github: 'https://github.com/pinegrow/happy-paws-with-nuxt-tailwindcss',
  ogImageUrl: 'og-image.jpg', // absolute url (or) from public folder
  generator: 'https://vuedesigner.com',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default

  navs: {
    primary: [
      {
        title: 'Home',
        icon: 'i-mdi-home',
        to: '/',
      },
      {
        title: 'Adopt Now',
        icon: 'i-mdi-home',
        to: '/adopt',
      },
    ],
    secondary: [
      {
        title: 'Donate',
        icon: 'i-mdi-home',
        to: '/quick-start',
      },
      {
        title: 'Articles',
        icon: 'i-mdi-home',
        to: '/articles',
      },
      {
        title: 'Blog',
        icon: 'i-mdi-home',
        to: '/blog',
      },
      {
        title: 'Volunteer',
        icon: 'i-mdi-home',
        to: '/volunteer',
      },
    ],
  },
}
